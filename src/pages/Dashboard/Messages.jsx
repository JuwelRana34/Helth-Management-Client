import React, { useContext, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Chat from '../../components/messagecomponents/Chat';
import useFetchData from '../../utils/fetchGetFunction';
import toast from 'react-hot-toast';
import useFetchData from '../../utils/fetchGetFunction';
import toast from 'react-hot-toast';


function Messages() {
  const {setNotifi} = useContext(AuthContext)
  const queryClient = useQueryClient();
  const [notificationText, setNotificationText] = useState('');

  const { data: notifications, refetch, isLoading, isError } = useFetchData('getNotifications', 'notifications');
  
  useEffect(() => {
    setNotifi(notifications)
  
  }, [notifications, setNotifi])
  // Mutation for adding a new notification
  const notificationMutation = useMutation({
    mutationFn: async (notification) => {
      const response = await axios.post(`${import.meta.env.VITE_Url}/api/notification`, { notification });
      return response.data;
    },
    onSuccess: () => {
      toast.success('Notification saved successfully!');
      queryClient.invalidateQueries(['notifications']); 
      refetch();
      
    },
    onError: (error) => {
      console.error('Error saving notification:', error);
    }
  });

  // Handle form submission
  const handleNotification = (e) => {
    e.preventDefault();
    if (!notificationText.trim()) return;

    notificationMutation.mutate(notificationText);
    setNotificationText('');
  };

  const handelDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_Url}/api/notification/${id}`);
    toast.error('Notification deleted successfully!');
    toast.error('Notification deleted successfully!');
    queryClient.invalidateQueries(['notifications']); // Invalidate cache to trigger refetch
    refetch(); // Fetch latest notifications
  }

  return (

    <div className="p-4">
      <form onSubmit={handleNotification} className="space-y-4 p-4 border rounded-lg shadow-md">
        <label htmlFor="notification" className="block text-sm font-medium text-gray-700">
          Notification Message
        </label>
        <input
          type="text"
          name="notification"
          id="notification"
          value={notificationText}
          onChange={(e) => setNotificationText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter notification message..."
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={notificationMutation.isLoading}
        >
          {notificationMutation.isLoading ? 'Saving...' : 'Save'}
        </button>
      </form>

      {/* Show loading/error state for fetching notifications */}
      {isLoading && <p className="text-gray-500">Loading notifications...</p>}
      {isError && <p className="text-red-500">Failed to load notifications.</p>}

      {/* Display notifications */}
      {notifications && (
        <ul className="mt-4 space-y-2">
          {notifications.map((item) => (
            <li key={item._id} className="p-2 flex justify-between items-center bg-gray-100 border rounded-lg">
              {item.message}
              <button onClick={()=> handelDelete(item._id)} className=' rounded-md py-2 px-3 bg-red-300 text-rose-600'>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {/* <p className="font-semibold text-4xl capitalize text-red-500">
        Added later <span className="text-green-500">thank you. ⚠</span>
      </p> */}

      <Chat/>
      {/* <AdminChat/> */}
    </div>   
  );
}

export default Messages;
