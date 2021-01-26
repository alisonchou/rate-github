import React from 'react';
import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const res = await signIn({ username, password });
            console.log('res', res);
        } catch (e) {
            console.log('error signing in', e);
        }
    };
    return (
        <SignInContainer onSubmit={onSubmit} />
    );
};

export default SignIn;
