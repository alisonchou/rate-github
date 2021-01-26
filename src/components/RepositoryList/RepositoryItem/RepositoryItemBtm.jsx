import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryItemStat from './RepositoryItemStat';

const styles = StyleSheet.create({
    btmContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

const RepositoryItemBtm = ({ stars, forks, reviews, rate, id }) => (
    <View style={styles.btmContainer}>
        <RepositoryItemStat count={stars} label='Stars' id={id} />
        <RepositoryItemStat count={forks} label='Forks' id={id} />
        <RepositoryItemStat count={reviews} label='Reviews' id={id} />
        <RepositoryItemStat count={rate} label='Rating' id={id} />
    </View>
);

export default RepositoryItemBtm;
