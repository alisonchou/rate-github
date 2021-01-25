import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, USER_DETAILS } from './fragments';

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

export const GET_USER = gql`
    query {
        authorizedUser {
            ...UserDetails
        }
    }
    ${USER_DETAILS}
`;
