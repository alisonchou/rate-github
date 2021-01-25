import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState([]);
    const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        if (data) {
            setRepositories(data.repositories.edges.map(edge => edge.node));
        }
    }, [data])

    return { repositories, loading, refetch };
};

export default useRepositories;
