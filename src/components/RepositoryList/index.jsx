import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import RepositoryListContainer from './RepositoryListContainer';
import DropDownSort from './RepositoryListHeader/DropDownSort';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
    const [sort, setSort] = useState('date');
    const [filter, setFilter] = useState('');
    const [filterValue] = useDebounce(filter, 500);
    const history = useHistory();
    const { repos, fetchMore } = useRepositories(sort, filterValue, 4);
    const onEndReach = () => fetchMore();
    return (
        <>
            <DropDownSort setSort={setSort} />
            <RepositoryListContainer onEndReach={onEndReach} history={history} repos={repos} filter={filter} setFilter={setFilter} />
        </>
    );
};

export default RepositoryList;
