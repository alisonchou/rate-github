import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, USER_DETAILS,
    REPOSITORY_SINGLE_DETAILS, REPOSITORY_SINGLE } from './fragments';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    ...RepositoryDetails
                }
            }
        }
    }
    ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
    query repository($id: ID!) {
        repository(id: $id)  {
            ...RepositoryDetails
            ...RepositorySingle
        }
    }
    ${REPOSITORY_DETAILS}
    ${REPOSITORY_SINGLE}
`;

export const GET_USER = gql`
    query {
        authorizedUser {
            ...UserDetails
        }
    }
    ${USER_DETAILS}
`;
