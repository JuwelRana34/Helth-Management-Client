import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import useFetchData from '../../utils/fetchGetFunction';

const RequestedToBeDoctor = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()

    //   const { data: users = [], isLoading, isError, error,refetch } = useQuery({
    //     queryKey: ['requested'],
    //     queryFn: async () => {
    //       const { data } = await axiosSecure.get(`/api/users`);
    //       return data;
    //     },
    //   });
    const { data: users = [], refetch, isLoading, isError } = useFetchData('getUser', 'users');
    console.log(users)

    const pendingDoctors = users.filter(user => user.status === 'pending');

    // Handle Make Doctor
    const handleMakeDoctor = async (userId, email) => {
        try {
            const res = await axiosSecure.patch(`/api/users/role/${userId}`, { role: 'doctor' });
            toast.success('Doctor role assigned!');

            if (res.data) {
                const removeStatusRes = await axiosSecure.patch(`/api/users/remove-status/${email}`);

            }



        } catch (err) {
            console.error(err);
            toast.error('Not changed');
        }
        finally {
            pendingDoctors.filter(item => item.email !== email)
           

        }
    };


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Requested Doctors</h2>

            {pendingDoctors.length === 0 ? (
                <p>No data</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingDoctors.map((user, index) => (
                                <tr key={user._id || index}>
                                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border">{user.name}</td>
                                    <td className="px-4 py-2 border">{user.email}</td>
                                    <td className="px-4 py-2 border capitalize">{user.status}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <button
                                            onClick={() => handleMakeDoctor(user._id, user.email)}
                                            className="bg-[#2F7A55] hover:bg-green-600 text-white px-3 py-1 rounded"
                                        >
                                            Make Doctor
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RequestedToBeDoctor;
