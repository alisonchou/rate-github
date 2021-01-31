import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
    const [mutate] = useMutation(CREATE_USER);

    return async credentials => {
        try {
            const { data } = await mutate({ variables: credentials });
            return data;
        } catch (e) {
            console.log('error signing in', e);
        }
    };
};

export default useSignUp;
