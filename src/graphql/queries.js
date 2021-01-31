import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, REPOSITORY_SINGLE, USER_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
    query repositories(
        $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection,
        $filter: String, $first: Int!, $after: String
    ) {
        repositories(
            orderBy: $orderBy, orderDirection: $orderDirection,
            searchKeyword: $filter, first: $first, after: $after
        ) {
            edges {
                node {
                    ...RepositoryDetails
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
    ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
    query repository($id: ID!, $first: Int!, $after: String) {
        repository(id: $id) {
            ...RepositoryDetails
            ...RepositorySingle
        }
    }
    ${REPOSITORY_DETAILS}
    ${REPOSITORY_SINGLE}
`;

export const GET_USER = gql`
    query authorizedUser($includeReviews: Boolean = false) {
        authorizedUser {
            ...UserDetails
        }
    }
    ${USER_DETAILS}
`;
