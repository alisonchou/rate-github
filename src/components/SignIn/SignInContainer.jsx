import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import { object, string } from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = object().shape({
    username: string().required('Username is required'),
    password: string().required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
);

export default SignInContainer;
