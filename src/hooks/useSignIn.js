import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { SIGN_IN } from '../graphql/mutations';
import useAuth from '../hooks/useAuth';

const useSignIn = () => {
    const history = useHistory();
    const [mutate] = useMutation(SIGN_IN);
    const authStorage = useAuth();
    const apolloClient = useApolloClient();

    return async credentials => {
        try {
            const { data } = await mutate({ variables: credentials });
            await authStorage.setAccessToken(data.authorize.accessToken);
            await apolloClient.resetStore();
            history.push('/');
            return data;
        } catch (e) {
            console.log('error signing in', e);
        }
    };
};

export default useSignIn;
