import React from 'react';
import { StyleSheet, View, TouchableHighlight, Alert } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';
import Text from '../Text';
import useDeleteReview from '../../../hooks/useDeleteReview';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 3,
    },
    button: {
        ...theme.button,
        width: 160,
    },
});

const deleteButton = StyleSheet.create({
    style: {
        ...styles.button,
        backgroundColor: theme.colors.deleteBtn,
    },
});

const ReviewItemButtons = ({ url, id, setRefetch }) => {
    const deleteReview = useDeleteReview();

    const onDelete = () => {
        Alert.alert(
            'Delete review', 'Are you sure you want to delete this review?',
            [
                { text: 'Cancel', },
                {
                    text: 'Delete',
                    onPress: async () => {
                        await deleteReview(id);
                        setRefetch(true);
                    },
                }
            ],
        );
    };

    return (
        <View style={styles.buttons}>
            <TouchableHighlight style={styles.button} onPress={() => openBrowserAsync(url)}>
                <Text btnText>View repository</Text>
            </TouchableHighlight>
            <TouchableHighlight style={deleteButton.style} onPress={onDelete}>
                <Text btnText>Delete review</Text>
            </TouchableHighlight>
        </View>
    );
};

export default ReviewItemButtons;
