import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../utils/Text';
import theme from '../../../theme';

const styles = StyleSheet.create({
    details: {
        flexShrink: 1,
    },
    title: {
        marginBottom: 3,
    },
    description: {
        marginBottom: 7,
    },
    languageTag: {
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 3.5,
        paddingTop: 2.5,
        paddingBottom: 4,
        paddingRight: 6,
        paddingLeft: 6,
    },
    languageTagText: {
        color: theme.colors.light,
    },
});

const RepositoryItemDetails = ({ name, desc, lang }) => (
    <View style={styles.details}>
        <Text fontWeight='bold' fontSize='subheading' style={styles.title}>{name}</Text>
        <Text style={styles.description}>{desc}</Text>
        <View style={styles.languageTag}>
            <Text style={styles.languageTagText}>{lang}</Text>
        </View>
    </View>
);

export default RepositoryItemDetails;
