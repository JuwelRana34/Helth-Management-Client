import React, { useContext, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Chat from '../../components/messagecomponents/Chat';
import useFetchData from '../../utils/fetchGetFunction';
import toast from 'react-hot-toast';





function Messages() {
  const {isAdmin} = useContext(AuthContext)
  const queryClient = useQueryClient();
  const [notificationText, setNotificationText] = useState('');


  const { data: Contacts, refetch, isLoading} = useFetchData('getContact', 'contact');
 
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

 
  return (
    <div className="">
    {isAdmin &&   <form
        onSubmit={handleNotification}
        className="space-y-4 p-4 border rounded-lg shadow-md"
      >
        <label
          htmlFor="notification"
          className="block text-sm font-medium text-gray-700"
        >
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
          {notificationMutation.isLoading ? "Saving..." : "Save"}
        </button>
      </form>
}
      

     
      <Chat />

      {/* contact messages  */}

    {isAdmin&& <div className="space-y-4">
        {Contacts?.map((contact) => (
          <div
            key={contact._id}
            className="p-4 border rounded-md shadow-sm bg-gradient-to-r from-blue-200 via-violet-100 to-pink-50 "
          >
            <h2 className="text-lg font-semibold">Name: {contact.name}</h2>
            <p className="text-sm text-gray-700">Email: {contact.email}</p>
            <p className="text-sm text-gray-700">Message: {contact.message}</p>
          </div>
        ))}
      </div> 
      } 
    </div>
  );
}

export default Messages;
