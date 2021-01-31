import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../../utils/theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorLight: {
        color: theme.colors.light,
    },
    inactiveTab: {
        color: theme.colors.inactiveTab,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    centered: {
        textAlign: 'center',
    },
    btnText: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.light,
        textAlign: 'center',
    },
});

const Text = ({ color, fontSize, fontWeight, style, centered, btnText, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'light' && styles.colorLight,
        color === 'inactiveTab' && styles.inactiveTab,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        centered && styles.centered,
        btnText && styles.btnText,
        style,
    ];
    return <NativeText style={textStyle} {...props} />;
};

export default Text;
