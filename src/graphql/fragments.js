import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
    fragment RepositoryDetails on Repository {
        id
        fullName
        description
        language
        ownerAvatarUrl
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
    }
`;

const REVIEW_DETAILS = gql`
    fragment ReviewDetails on Review {
        id
        text
        rating
        createdAt
    }
`;

export const REPOSITORY_SINGLE = gql`
    fragment RepositorySingle on Repository {
        url
        reviews(first: $first, after: $after) {
            edges {
                node {
                    ...ReviewDetails
                    user {
                        username
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
    ${REVIEW_DETAILS}
`;

export const USER_DETAILS = gql`
    fragment UserDetails on User {
        id
        username
        reviews @include(if: $includeReviews) {
            edges {
                node {
                    ...ReviewDetails
                    repository {
                        fullName
                        url
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
    ${REVIEW_DETAILS}
`;
