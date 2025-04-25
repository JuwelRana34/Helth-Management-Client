
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from "@tanstack/react-query";

const useIsDoctor = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
  

    const { data: isPatient, isPending: isAmdinPending,refetch } = useQuery({
        queryKey: [user?.email, 'isPatient'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/api/user/${user.email}`)
            const boolian = data.user.role == 'patient'
            return boolian
        }
    })
    return { isPatient, isAmdinPending }            

   
};

export default useIsDoctor;