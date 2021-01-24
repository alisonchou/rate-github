import { StyleSheet, TouchableHighlight, View } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import Text from '../utils/Text';
import React from 'react';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: theme.colors.light,
    },
    btn: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.light,
        textAlign: 'center',
        borderRadius: 4,
        padding: 12.5,
        marginTop: 9,
    },
});

const SignInForm = ({ onSubmit }) => (
    <View style={styles.container}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password'
                         secureTextEntry style={{marginTop: 10}} />
        <TouchableHighlight onPress={onSubmit}>
            <Text
                style={styles.btn}
                backgroundColor='primary'
                fontWeight='bold'
            >Sign in</Text>
        </TouchableHighlight>
    </View>
);

export default SignInForm;
