import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import Text from '../Text';
import ReviewItemButtons from './ReviewItemButtons';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.light,
        paddingTop: 15,
        paddingBottom: 15,
    },
    reviewContainer: {
        flexDirection: 'row',
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

const ReviewItem = ({ review, myReviews, setRefetch }) => (
    <View style={styles.container}>
        <View style={styles.reviewContainer}>
            <Text fontWeight='bold' fontSize='subheading' style={styles.rating}>{review.rating}</Text>
            <View style={styles.review}>
                <Text fontSize='subheading' fontWeight='bold'>
                    {myReviews ? review.repository.fullName : review.user.username}
                </Text>
                <Text color='textSecondary'>
                    {format(new Date(review.createdAt), 'MM.dd.yyyy')}
                </Text>
                {review.text?.length > 0 && <Text>{review.text}</Text>}
            </View>
        </View>
        <View>
            {myReviews && <ReviewItemButtons url={review.repository.url} id={review.id} setRefetch={setRefetch} />}
        </View>
    </View>
);

export default ReviewItem;
