import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
    field: {
        borderRadius: 4,
        borderColor: theme.colors.fieldBorder,
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    error: {
        borderColor: theme.colors.error,
    },
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, styles.field, error && styles.error];
    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
