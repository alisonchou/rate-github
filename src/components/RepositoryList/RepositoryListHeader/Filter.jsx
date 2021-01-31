import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
    filter: {
        borderColor: '#cdcdcd', margin: 5,
        backgroundColor: theme.colors.light,
        paddingTop: 5, paddingBottom: 5,
        paddingRight: 10, paddingLeft: 10,
        borderRadius: 3, borderWidth: 1,
    },
});

const Filter = ({ setFilter, filter }) => (
    <TextInput
        style={styles.filter}
        placeholder='Filter repositories...'
        onChangeText={text => setFilter(text)}
        value={filter}
    />
);

export default Filter;
