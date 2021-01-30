import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import FormBtnText from '../utils/FormBtnText';
import FormikTextInput from '../utils/FormikTextInput';
import theme from '../../utils/theme';

const CreateReviewForm = ({ handleSubmit }) => (
    <View style={theme.formContainer}>
        <FormikTextInput name='ownerName' placeholder='Repository owner name' />
        <FormikTextInput name='repositoryName' placeholder='Repository name' />
        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
        <FormikTextInput name='text' placeholder='Review' />
        <TouchableHighlight onPress={handleSubmit} testID='submitButton'>
            <FormBtnText content='Create review' />
        </TouchableHighlight>
    </View>
);

export default CreateReviewForm;
