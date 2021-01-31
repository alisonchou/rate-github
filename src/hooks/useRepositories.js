import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sort, filter, first) => {
    const [repos, setRepos] = useState([]);
    const sortVars = sort === 'highest' ? {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
    } : sort === 'lowest' ? {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
    } : {};

    const variables = { ...sortVars, filter, first };

    try {
        const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
            variables, fetchPolicy: 'cache-and-network',
        });

        useEffect(() => {
            if (data) setRepos(data.repositories.edges.map(edge => edge.node));
        }, [data]);

        const handleFetchMore = () => {
            if (loading || !data?.repositories.pageInfo.hasNextPage) return;

            fetchMore({
                query: GET_REPOSITORIES,
                variables: {
                    after: data.repositories.pageInfo.endCursor,
                    ...variables,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    return {
                        repositories: {
                            ...fetchMoreResult.repositories,
                            edges: [
                                ...previousResult.repositories.edges,
                                ...fetchMoreResult.repositories.edges,
                            ],
                        },
                    };
                },
            });
        };

        return { repos, fetchMore: handleFetchMore };
    } catch(e) {
        console.log('error getting repos', e);
    }
};

export default useRepositories;
