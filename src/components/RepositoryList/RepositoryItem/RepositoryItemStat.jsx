import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../utils/Text';
import formatInThousands from '../../../utils/formatInThousands';

const styles = StyleSheet.create({
    statItem: {
        textAlign: 'center',
    },
});

const RepositoryItemStat = ({ count, label, id }) => (
    <View>
        <Text style={styles.statItem} fontWeight='bold' fontSize='subheading' testID={`${id}/${label}`}>
            { formatInThousands(count) }
        </Text>
        <Text style={styles.statItem} fontSize='subheading'>{label}</Text>
    </View>
);

export default RepositoryItemStat;
