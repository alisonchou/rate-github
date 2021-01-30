import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import theme from '../../../utils/theme';
import Text from '../../utils/Text';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.light,
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'space-evenly',
    },
    rating: {
        color: theme.colors.primary,
        borderColor: theme.colors.primary,
        padding: 6.925,
        borderWidth: 1.5,
        width: 36,
        height: 36,
        textAlign: 'center',
        borderRadius: 18,
    },
    review: {
        width: 288,
    },
});

const ReviewItem = ({ review }) => (
    <View style={styles.container}>
        <Text fontWeight='bold' fontSize='subheading' style={styles.rating}>{review.rating}</Text>
        <View style={styles.review}>
            <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
            <Text color='textSecondary'>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
            {review.text ? <Text>{review.text}</Text> : null}
        </View>
    </View>
);

export default ReviewItem;
