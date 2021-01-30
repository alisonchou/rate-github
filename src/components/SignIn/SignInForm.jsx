import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import FormBtnText from '../utils/FormBtnText';
import theme from '../../utils/theme';

const SignInForm = ({ onSubmit }) => (
    <View style={theme.formContainer}>
        <FormikTextInput name='username' placeholder='Username' testID='usernameField' />
        <FormikTextInput name='password' placeholder='Password' testID='passwordField' secureTextEntry />
        <TouchableHighlight onPress={onSubmit} testID='submitButton'>
            <FormBtnText content='Sign in' />
        </TouchableHighlight>
    </View>
);

export default SignInForm;
