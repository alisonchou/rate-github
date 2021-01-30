import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import FormBtnText from '../utils/FormBtnText';
import theme from '../../utils/theme';

const SignUpForm = ({ onSubmit }) => (
    <View style={theme.formContainer}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
        <FormikTextInput name='confirmPassword' placeholder='Password confirmation' secureTextEntry />
        <TouchableHighlight onPress={onSubmit}>
            <FormBtnText content='Sign up' />
        </TouchableHighlight>
    </View>
);

export default SignUpForm;
