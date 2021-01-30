import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import Text from './Text';

const styles = StyleSheet.create({
    btn: {
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        padding: 12.5,
        marginTop: 9,
    },
});

const FormBtnText = ({ content }) => (
    <Text style={styles.btn} fontWeight='bold' color='light' centered>
        {content}
    </Text>
);

export default FormBtnText;
