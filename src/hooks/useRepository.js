import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first) => {
    const [repository, setRepo] = useState({});
    const variables = { id, first };

    try {
        const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
            variables, fetchPolicy: 'cache-and-network',
        });

        useEffect(() => {
            if (data)
                setRepo({
                    ...data.repository,
                    reviews: data.repository.reviews.edges.map(edge => edge.node),
                });
        }, [data]);

        const handleFetchMore = () => {
            if (loading || !data?.repository.reviews.pageInfo.hasNextPage) return;

            fetchMore({
                query: GET_REPOSITORY,
                variables: {
                    after: data.repository.reviews.pageInfo.endCursor,
                    ...variables,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    return {
                        repository: {
                            ...previousResult.repository,
                            reviews: {
                                ...fetchMoreResult.repository.reviews,
                                edges: [
                                    ...previousResult.repository.reviews.edges,
                                    ...fetchMoreResult.repository.reviews.edges,
                                ],
                            }
                        },
                    };
                },
            });
        };

        return { repository, fetchMore: handleFetchMore };
    } catch(e) {
        console.log('error getting repository', e);
    }
};

export default useRepository;
