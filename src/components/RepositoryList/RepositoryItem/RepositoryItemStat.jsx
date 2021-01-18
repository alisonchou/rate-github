import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../Text';

const styles = StyleSheet.create({
    statItem: {
        textAlign: 'center',
    },
});

const RepositoryItemStat = ({ count, label }) => {
    return (
        <View>
            <Text style={styles.statItem} fontWeight='bold' fontSize='subheading'>
                { count > 1000 ? `${(count / 1000).toFixed(1)}k` : count }
            </Text>
            <Text style={styles.statItem} fontSize='subheading'>{label}</Text>
        </View>
    );
};

export default RepositoryItemStat;
