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

const RepositoryItemTop = ({ uri, name, desc, lang, id }) => (
    <View style={styles.topContainer}>
        <RepositoryItemAvi uri={uri} />
        <RepositoryItemDetails name={name} desc={desc} lang={lang} id={id} />
    </View>
);

export default RepositoryItemTop;
