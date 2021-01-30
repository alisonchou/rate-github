import React from 'react';
import { View } from 'react-native';
import Text from '../../utils/Text';
import formatInThousands from '../../../utils/formatInThousands';

const RepositoryItemStat = ({ count, label, id }) => (
    <View>
        <Text centered fontWeight='bold' fontSize='subheading' testID={`${id}/${label}`}>
            { formatInThousands(count) }
        </Text>
        <Text centered color='textSecondary' fontSize='subheading'>{label}</Text>
    </View>
);

export default RepositoryItemStat;
