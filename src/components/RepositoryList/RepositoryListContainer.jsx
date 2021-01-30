import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItemWrapper from './RepositoryItem/RepositoryItemWrapper';
import ItemSeparator from '../utils/ItemSeparator';
import { useHistory } from 'react-router-native';

const RepositoryListContainer = ({ repositories }) => {
    const history = useHistory();
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItemWrapper item={item} history={history} />}
        />
    );
};

export default RepositoryListContainer;
