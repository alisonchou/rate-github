import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import { object, string } from 'yup';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = object().shape({
    username: string()
        .min(4, 'Username must be 4 characters or longer')
        .max(15, 'Username must be 15 characters or shorter')
        .required('Username is required'),
    password: string()
        .min(6, 'Password must be 6 characters or longer')
        .max(20, 'Password must be 20 characters or shorter')
        .required('Password is required'),
});

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
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
