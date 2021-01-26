import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../utils/Text';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
    tab: {
        marginLeft: 5,
        marginRight: 5,
    },
    inactive: {
        color: theme.colors.inactiveTab,
    },
    active: {
        color: theme.colors.light,
    },
});

const AppBarTab = ({ name, active }) => (
    <View style={styles.tab}>
        <Text fontSize='subheading' style={active ? styles.active : styles.inactive}>
            {name}
        </Text>
    </View>
);

export default AppBarTab;
