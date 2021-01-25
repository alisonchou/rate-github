import React  from 'react';
import { View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { useApolloClient } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';

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
    const user = useUser();
    const apolloClient = useApolloClient();
    const authStorage = useAuth();
    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    };
    console.log('user', user)
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/'>
                    <AppBarTab name='Repositories' active={pathname === '/'} />
                </Link>
                {user ?
                    <TouchableHighlight onPress={signOut}>
                        <AppBarTab name='Sign out' />
                    </TouchableHighlight>
                    :
                    <Link to='/sign-in'>
                        <AppBarTab name='Sign in' active={pathname === '/sign-in'} />
                    </Link>
                }
            </ScrollView>
        </View>
    );
}

export default AppBar;
