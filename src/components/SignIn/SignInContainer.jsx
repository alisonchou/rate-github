import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import { object, string } from 'yup';

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

const SignInContainer = ({ onSubmit }) => (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
);

export default SignInContainer;
