import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    avi: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15
    }
});

const RepositoryItemAvi = ({ uri }) => {
    return (
        <Image
            style={styles.avi}
            source={{uri: uri}}
        />
    );
};

export default RepositoryItemAvi;
