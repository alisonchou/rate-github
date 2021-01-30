import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = id => {
    const [getRepo, result] = useLazyQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        if (id) getRepo({ variables: {id} });
    }, [id, getRepo]);

    return result.data && result.data.repository;
};

export default useRepository;
