import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItemWrapper from './RepositoryItem/RepositoryItemWrapper';
import ItemSeparator from '../utils/ItemSeparator';
import Filter from './RepositoryListHeader/Filter';

// class component to prevent ListHeaderComponent from unmounting while typing
class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const props = this.props;
        return <Filter setFilter={props.setFilter} filter={props.filter} />;
    };
    render() {
        const props = this.props;
        return (
            <FlatList
                data={props.repos}
                onEndReached={props.onEndReach}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <RepositoryItemWrapper item={item} history={props.history} />}
                ListHeaderComponent={this.renderHeader}
            />
        );
    }
}

export default RepositoryListContainer;
