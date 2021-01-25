import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/components/Main';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import createApolloClient from './src/utils/apolloClient';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => (
    <NativeRouter>
        <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={authStorage}>
                <Main />
            </AuthStorageContext.Provider>
        </ApolloProvider>
    </NativeRouter>
);

export default App;
