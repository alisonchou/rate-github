import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../utils/Text';
import theme from '../../../utils/theme';

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
});

const RepositoryItemDetails = ({ name, desc, lang, id }) => (
    <View style={styles.details}>
        <Text fontWeight='bold' fontSize='subheading' style={styles.title} testID={`${id}/Name`}>
            {name}
        </Text>
        <Text color='textSecondary' style={styles.description} testID={`${id}/Desc`}>{desc}</Text>
        <View style={styles.languageTag}>
            <Text color='light' testID={`${id}/Lang`}>{lang}</Text>
        </View>
    </View>
);

export default RepositoryItemDetails;
