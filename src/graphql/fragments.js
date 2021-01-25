import { gql } from 'apollo-boost'

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
`
export const USER_DETAILS = gql`
    fragment UserDetails on User {
        id
        username
    }
`
