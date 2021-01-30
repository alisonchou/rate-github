import React from 'react';
import { TouchableOpacity } from 'react-native';
import RepositoryItem from './index';

const RepositoryItemWrapper = ({ item, history }) => (
    <TouchableOpacity onPress={() => history.push(`repository/${item.id}`)}>
        <RepositoryItem item={item} />
    </TouchableOpacity>
);

export default RepositoryItemWrapper;
