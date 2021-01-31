import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import Text from '../utils/Text';
import theme from '../../utils/theme';

const SignInForm = ({ onSubmit }) => (
    <View style={theme.formContainer}>
        <FormikTextInput name='username' placeholder='Username' testID='usernameField' />
        <FormikTextInput name='password' placeholder='Password' testID='passwordField' secureTextEntry />
        <TouchableHighlight onPress={onSubmit} style={theme.button} testID='submitButton'>
            <Text btnText>Sign in</Text>
        </TouchableHighlight>
    </View>
);

export default SignInForm;
