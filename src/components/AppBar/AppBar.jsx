import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 15,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        paddingLeft: 13,
        paddingRight: 13,
        flexDirection: 'row',
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/'>
                    <AppBarTab name='Repositories'/>
                </Link>
                <Link to='/sign-in'>
                    <AppBarTab name='Sign in'/>
                </Link>
            </ScrollView>
        </View>
    );
}

export default AppBar;
