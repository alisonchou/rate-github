import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryItemAvi from './RepositoryItemAvi';
import RepositoryItemDetails from './RepositoryItemDetails';

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
});

const RepositoryItemTop = ({ uri, name, desc, lang }) => (
    <View style={styles.topContainer}>
        <RepositoryItemAvi uri={uri} />
        <RepositoryItemDetails name={name} desc={desc} lang={lang} />
    </View>
);

export default RepositoryItemTop;