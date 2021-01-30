import React from 'react';
import { useHistory } from 'react-router-native';
import SignUpForm from './SignUpForm';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import { Formik } from 'formik';
import { object, string, ref } from 'yup';

const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
};

const validationSchema = object().shape({
    username: string()
        .min(1, 'Username must be 1 characters or longer')
        .max(30, 'Username must be 30 characters or shorter')
        .required('Username is required'),
    password: string()
        .min(5, 'Password must be 5 characters or longer')
        .max(50, 'Password must be 50 characters or shorter')
        .required('Password is required'),
    confirmPassword: string()
        .oneOf([ref('password')], 'Passwords must match')
        .required('Password confirmation is required'),
});

const SignUp = () => {
    const signUp = useSignUp();
    const signIn = useSignIn();
    const history = useHistory();
    const onSubmit = async ({ username, password }) => {
        const credentials = { username, password };
        await signUp(credentials);
        await signIn(credentials);
        history.push('/');
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;
