import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 16,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        paddingLeft: 13,
        paddingRight: 13,
        flexDirection: 'row',
    },
});

const AppBar = () => {
    const { pathname } = useLocation();
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/'>
                    <AppBarTab name='Repositories' active={pathname === '/'} />
                </Link>
                <Link to='/sign-in'>
                    <AppBarTab name='Sign in' active={pathname === '/sign-in'} />
                </Link>
            </ScrollView>
        </View>
    );
}

export default AppBar;
