import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [mutate] = useMutation(DELETE_REVIEW);

    return async id => {
        try {
            await mutate({ variables: { id }});
        } catch (e) {
            console.log('error deleting review', e);
        }
    };
};

export default useDeleteReview;
