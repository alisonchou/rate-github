import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text'
import theme from '../../theme';

const styles = StyleSheet.create({
    tab: {
        marginLeft: 5,
        marginRight: 5,
    },
    text: {
        color: theme.colors.light,
    },
});

const AppBarTab = ({ name }) => {
    return (
        <View style={styles.tab}>
            <Text fontSize='subheading' style={styles.text}>{name}</Text>
        </View>
    );
};

export default AppBarTab;
