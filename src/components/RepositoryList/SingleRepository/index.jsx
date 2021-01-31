import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import ReviewItem from '../../utils/ReviewItem';
import useRepository from '../../../hooks/useRepository';
import ItemSeparator from '../../utils/ItemSeparator';

const SingleRepository = () => {
    const id = useParams().id;
    const { repository, fetchMore } = useRepository(id, 3);

    if (repository == null) return;

    return (
        <FlatList
            data={repository.reviews}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <ReviewItem review={item} />}
            ListHeaderComponent={() => <><RepositoryItem item={repository} single /><ItemSeparator/></>}
            onEndReached={() => fetchMore()}
        />
    );
};

export default SingleRepository;
