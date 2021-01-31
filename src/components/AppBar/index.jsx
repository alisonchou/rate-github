import React  from 'react';
import { View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Link, useLocation, useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import theme from '../../utils/theme';
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
    const history = useHistory();
    const { user } = useUser();
    const apolloClient = useApolloClient();
    const authStorage = useAuth();
    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        history.push('/');
    };
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/'>
                    <AppBarTab name='Repositories' active={pathname === '/'} />
                </Link>
                {user ?
                    <>
                        <Link to='/create-review'>
                            <AppBarTab name='Create a review' active={pathname === '/create-review'} />
                        </Link>
                        <Link to='/my-reviews'>
                            <AppBarTab name='My reviews' active={pathname === '/my-reviews'} />
                        </Link>
                        <TouchableHighlight onPress={signOut}>
                            <AppBarTab name='Sign out' />
                        </TouchableHighlight>
                    </>
                    :
                    <>
                        <Link to='/sign-in'>
                            <AppBarTab name='Sign in' active={pathname === '/sign-in'} />
                        </Link>
                        <Link to='/sign-up'>
                            <AppBarTab name='Sign up' active={pathname === '/sign-up'} />
                        </Link>
                    </>
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;
