import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';

const useUser = () => {
    const [user, setUser] = useState();
    const { data } = useQuery(GET_USER);

    useEffect(() => {
        if (data) {
            console.log('data', data);
            setUser(data.authorizedUser);
        }
    }, [data]);

    return user;
};

export default useUser;
