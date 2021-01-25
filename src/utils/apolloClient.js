import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = (authStorage) => (
    new ApolloClient({
        request: async (operation) => {
            try {
                const accessToken = await authStorage.getAccessToken();
                operation.setContext({
                    headers: {
                        authorization: accessToken ? `Bearer ${accessToken}` : '',
                    },
                });
            } catch (e) {
                console.log(e);
            }
        },
        uri: Constants.manifest.extra.apolloUrl,
    })
);

export default createApolloClient;
