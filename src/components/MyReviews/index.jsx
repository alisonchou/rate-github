import React, { useState } from 'react';
import { FlatList } from 'react-native';
import useUser from '../../hooks/useUser';
import ItemSeparator from '../utils/ItemSeparator';
import ReviewItem from '../utils/ReviewItem';

const MyReviews = () => {
    const { user, refetch } = useUser({ includeReviews: true });
    const [refetchVal, setRefetch] = useState(false);

    if (refetchVal) {
        setRefetch(false);
        refetch();
    }

    return (
        <FlatList
            data={user?.reviews.edges}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ node }) => node.id}
            renderItem={({ item }) => <ReviewItem review={item.node} myReviews setRefetch={setRefetch} />}
        />
    );
};

export default MyReviews;
