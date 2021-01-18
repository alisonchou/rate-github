import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryItemStat from './RepositoryItemStat';

const styles = StyleSheet.create({
    btmContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

const RepositoryItemBtm = ({ stars, forks, reviews, rate }) => (
    <View style={styles.btmContainer}>
        <RepositoryItemStat count={stars} label='Stars' />
        <RepositoryItemStat count={forks} label='Forks' />
        <RepositoryItemStat count={reviews} label='Reviews' />
        <RepositoryItemStat count={rate} label='Rating' />
    </View>
);

export default RepositoryItemBtm;
