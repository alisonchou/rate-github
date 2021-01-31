import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';

const useUser = variables => {
    try {
        const { data, refetch } = useQuery(GET_USER, { variables });
        return { user: data?.authorizedUser, refetch };
    } catch (e) {
        console.log('error getting user', e);
    }
};

export default useUser;
