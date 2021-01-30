import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
