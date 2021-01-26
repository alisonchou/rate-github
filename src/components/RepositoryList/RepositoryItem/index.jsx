import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryItemTop from './RepositoryItemTop';
import RepositoryItemBtm from './RepositoryItemBtm';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: theme.colors.light,
    },
});

const RepositoryItem = ({ item }) => (
    <View style={styles.container}>
        <RepositoryItemTop uri={item.ownerAvatarUrl} name={item.fullName} id={item.id}
            desc={item.description} lang={item.language} />
        <RepositoryItemBtm stars={item.stargazersCount} forks={item.forksCount} id={item.id}
            reviews={item.reviewCount} rate={item.ratingAverage} />
    </View>
);

export default RepositoryItem;
