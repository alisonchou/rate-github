import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateRepo = () => {
    const history = useHistory();
    const [mutate] = useMutation(CREATE_REVIEW);

    const createRepo = async (newReview) => {
        const { data } = await mutate({ variables: { ...newReview, rating: Number(newReview.rating) }});
        if (data?.createReview) {
            history.push(`repository/${data.createReview.repositoryId}`);
        }
        return data;
    };

    return createRepo;
};

export default useCreateRepo;
