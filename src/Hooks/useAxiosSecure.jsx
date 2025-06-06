import axios from 'axios';


import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_Url,
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
    //interseptors
    axiosSecure.interceptors.response.use(
        res => {

            return res;
        },
        async error => {
        
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure; // Return the customized axios instance
};

export default useAxiosSecure;