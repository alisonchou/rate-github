import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { SIGN_IN } from '../graphql/mutations';
import useAuth from '../hooks/useAuth';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const history = useHistory();
    const authStorage = useAuth();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        if (data?.authorize) {
            await authStorage.setAccessToken(data.authorize.accessToken);
            apolloClient.resetStore();
            history.push('/');
        }
        return data;
    };

    return [signIn, result];
};

export default useSignIn;
