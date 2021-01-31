import React from 'react';
import { Formik } from 'formik';
import { object, number, string } from 'yup';
import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewForm from './CreateReviewForm';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
};

const validationSchema = object().shape({
    ownerName: string().required('Repository owner name is required'),
    repositoryName: string().required('Repository name is required'),
    rating: number()
        .min(0, 'Rating must be 0 or above')
        .max(100, 'Rating must be 100 or below')
        .required('Rating is required'),
    text: string(),
});

const CreateReview = () => {
    const createRepo = useCreateReview();
    const onSubmit = values => createRepo(values);
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default CreateReview;
