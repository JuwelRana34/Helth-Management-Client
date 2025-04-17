import { Trash2 } from 'lucide-react';
import useFetchData from '../../utils/fetchGetFunction';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


function Users() {
    const axiosSecure = useAxiosSecure()
  const { data: users = [], refetch } = useFetchData("All-users", "users");

  const handleDelete = async (userId) => {
    Swal.fire({
        title: "Do you want to delete user?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
           try {
      await axiosSecure.delete(`${import.meta.env.VITE_Url}/api/users/${userId}`);
      refetch();
      Swal.fire("User deleted successfully!", "", "success");
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete user');
    }
        } 
      });
   
  };

  const handleRoleChange = async (userId, newRole) => {
    Swal.fire({
      title: "Do you want to update the role?",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(
            `${import.meta.env.VITE_Url}/api/users/role/${userId}`,
            { role: newRole }
          );
          refetch();
          Swal.fire(`Updated role to ${newRole}!`, "", "success");
        } catch (error) {
          console.error("Role update failed:", error);
          toast.error("Failed to update role");
        }
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">No users found.</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <select
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                      value={user.role}
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    >
                      <option value="patient">patient</option>
                      <option value="admin">admin</option>
                      <option value="doctor">doctor</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                      title="Delete user"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
