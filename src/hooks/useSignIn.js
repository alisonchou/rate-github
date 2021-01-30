import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { SIGN_IN } from '../graphql/mutations';
import useAuth from '../hooks/useAuth';

const useSignIn = () => {
    const history = useHistory();
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useAuth();
    const apolloClient = useApolloClient();

    const signIn = async (credentials) => {
        const { data } = await mutate({ variables: credentials});
        if (data?.authorize) {
            await authStorage.setAccessToken(data.authorize.accessToken);
            await apolloClient.resetStore();
            history.push('/');
        }
        return data;
    };

    return [signIn, result];
};

export default useSignIn;
