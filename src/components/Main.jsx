import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './RepositoryList/SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';
import theme from '../utils/theme';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.background,
    },
});

const Main = () => (
    <View style={styles.container}>
        <AppBar />
        <Switch>
            <Route exact path='/' component={RepositoryList} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/create-review' component={CreateReview} />
            <Route exact path='/my-reviews' component={MyReviews} />
            <Route exact path='/repository/:id' component={SingleRepository} />
            <Redirect to='/' />
        </Switch>
    </View>
);

export default Main;
