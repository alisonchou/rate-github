import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => (
    <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
    />
);

export default RepositoryListContainer;
