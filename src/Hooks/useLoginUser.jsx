import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const useLoginUser = () => {
    const {user} = useAuth()
    const { data } = useQuery({
        queryKey: ['loginUser'],
        queryFn: async () => { 
            const res = await axios.get(`${import.meta.env.VITE_Url}/api/users`)
            return res.data;  // Return the fetched data
        }
    })
    const loginUser = data.find(item => item?.email === user?.email)
    return {loginUser}
};

export default useLoginUser;