import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';

import Text from '../../utils/Text';
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
    button: {
        backgroundColor: theme.colors.primary,
        padding: 13,
        marginTop: 16,
        borderRadius: 4,
    },
});

const RepositoryItem = ({ item, single }) => (
    <View style={styles.container}>
        <RepositoryItemTop uri={item.ownerAvatarUrl} name={item.fullName} id={item.id}
            desc={item.description} lang={item.language} />
        <RepositoryItemBtm stars={item.stargazersCount} forks={item.forksCount} id={item.id}
            reviews={item.reviewCount} rate={item.ratingAverage} />
        {single &&
        <TouchableHighlight onPress={() => openBrowserAsync(item.url)} style={styles.button}>
            <Text fontWeight='bold' color='light' centered>Open in GitHub</Text>
        </TouchableHighlight>}
    </View>
);

export default RepositoryItem;
