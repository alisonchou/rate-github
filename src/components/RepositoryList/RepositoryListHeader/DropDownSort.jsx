import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
    select: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    item: {
        justifyContent: 'flex-start',
    },
    container: {
        height: 40,
    },
    dropdown: {
        backgroundColor: theme.colors.dropdown,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    label: {
        color: theme.colors.textPrimary,
    },
});

const DropDownSort = ({ setSort }) => (
    <DropDownPicker
        items={[
            {label: 'Latest repositories', value: 'date'},
            {label: 'Highest rated repositories', value: 'highest'},
            {label: 'Lowest rated repositories', value: 'lowest'},
        ]}
        defaultValue='date'
        style={styles.select}
        itemStyle={styles.item}
        containerStyle={styles.container}
        dropDownStyle={styles.dropdown}
        labelStyle={styles.label}
        onChangeItem={item => setSort(item.value)}
    />
);

export default DropDownSort;
