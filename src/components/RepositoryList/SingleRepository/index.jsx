import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from '../RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../../../hooks/useRepository';
import ItemSeparator from '../../utils/ItemSeparator';

const SingleRepository = () => {
    const id = useParams().id;
    const repository = useRepository(id);
    if (repository == null) return null;
    return (
        <FlatList
            data={repository.reviews?.edges}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ node }) => node.id}
            renderItem={({ item }) => <ReviewItem review={item.node} />}
            ListHeaderComponent={() => <><RepositoryItem item={repository} single /><ItemSeparator/></>}
        />
    );
};

export default SingleRepository;
