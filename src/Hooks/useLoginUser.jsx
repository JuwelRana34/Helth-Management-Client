import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const useLoginUser = () => {
    const {user} = useAuth()
    const { data } = useQuery({
        queryKey: ['loginUser'],
        queryFn: async () => { 
            const res = await axios.get("http://localhost:5000/api/users")
            return res.data;  // Return the fetched data
        }
    })
    const loginUser = data.find(item => item?.email === user?.email)
    return {loginUser}
};

export default useLoginUser;