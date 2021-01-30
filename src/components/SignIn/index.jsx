import React from 'react';
import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
    const signIn = useSignIn();
    const onSubmit = values => signIn(values);
    return (
        <SignInContainer onSubmit={onSubmit} />
    );
};

export default SignIn;
