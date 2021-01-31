import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import Text from '../utils/Text';
import theme from '../../utils/theme';

const SignUpForm = ({ onSubmit }) => (
    <View style={theme.formContainer}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
        <FormikTextInput name='confirmPassword' placeholder='Password confirmation' secureTextEntry />
        <TouchableHighlight onPress={onSubmit} style={theme.button}>
            <Text btnText>Sign up</Text>
        </TouchableHighlight>
    </View>
);

export default SignUpForm;
