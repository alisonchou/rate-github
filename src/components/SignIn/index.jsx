import React from 'react';
import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        try {
            await signIn(values);
        } catch (e) {
            console.log('error signing in', e);
        }
    };
    return (
        <SignInContainer onSubmit={onSubmit} />
    );
};

export default SignIn;
