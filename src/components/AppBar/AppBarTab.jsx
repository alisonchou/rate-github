import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../utils/Text';

const styles = StyleSheet.create({
    tab: {
        marginLeft: 5,
        marginRight: 5,
    },
});

const AppBarTab = ({ name, active }) => (
    <View style={styles.tab}>
        <Text fontSize='subheading' color={active ? 'light' : 'inactiveTab'}>
            {name}
        </Text>
    </View>
);

export default AppBarTab;
