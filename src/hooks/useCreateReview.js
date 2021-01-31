import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const history = useHistory();
    const [mutate] = useMutation(CREATE_REVIEW);

    return async newReview => {
        try {
            const { data } = await mutate({ variables: { ...newReview, rating: Number(newReview.rating) }});
            history.push(`repository/${data.createReview.repositoryId}`);
            return data;
        } catch (e) {
            console.log('error creating review', e);
        }
    };
};

export default useCreateReview;
