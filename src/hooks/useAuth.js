import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useAuth = () => useContext(AuthStorageContext);

export default useAuth;
