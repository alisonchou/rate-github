import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
    mutation signIn($username: String!, $password: String!) {
        authorize(credentials: { username: $username, password: $password }) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
        createReview(review: {
            ownerName: $ownerName,
            repositoryName: $repositoryName,
            rating: $rating,
            text: $text
        }) {
            repositoryId
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            username
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation deleteReview($id: ID!) {
        deleteReview(id: $id)
    }
`;
