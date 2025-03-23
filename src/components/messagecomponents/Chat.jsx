import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const socket = io("http://localhost:5000");

const Chat = () => {
  const auth = getAuth(app);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [user, setUser] = useState(null);

  const ADMIN_EMAIL = "rk370613@gmail.com";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAdmin(user.email === ADMIN_EMAIL);
        socket.emit("userJoined", {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        });
      }
    });
  }, [auth]);

  useEffect(() => {
    socket.on("updateActiveUsers", (users) => {
      setActiveUsers(users.filter((u) => u.email !== ADMIN_EMAIL));
    });

    socket.on("receiveMessage", ({ sender, message }) => {
      let formattedSender = sender === ADMIN_EMAIL ? "Admin" : sender;
      setMessages((prev) => [...prev, { sender: formattedSender, message }]);
      scrollToBottom();
    });

    return () => {
      socket.off("updateActiveUsers");
      socket.off("receiveMessage");
    };
  }, []);

  useEffect(() => {
    if (isAdmin && selectedUser) {
      socket.emit("selectUser", selectedUser.email);
      socket.on("loadMessages", (msgs) => setMessages(msgs));
    }
  }, [selectedUser, isAdmin]);

  const sendMessage = () => {
    if (message.trim() !== "" && user) {
      let messageData;

      if (isAdmin && selectedUser) {
        messageData = { receiver: selectedUser.email, message };
        socket.emit("sendMessageToUser", messageData);
        setMessages((prev) => [...prev, { sender: "You", message }]);
      } else {
        messageData = { sender: user.email, message };
        socket.emit("sendMessageToAdmin", messageData);
        setMessages((prev) => [...prev, { sender: "You", message }]);
      }

      setMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 shadow-lg rounded-lg flex h-[600px]">
      {/* Left Side - User List */}
      {isAdmin && (
        <div className="w-1/3 bg-gray-100 p-3 rounded-lg overflow-auto">
          <h3 className="font-semibold text-gray-700 mb-2">Active Users</h3>
          <ul className="space-y-2">
            {activeUsers.map((user) => (
              <li
                key={user.email}
                className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg text-sm font-medium ${
                  selectedUser?.email === user.email ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <img src={user.photo} alt="User" className="w-8 h-8 rounded-full" />
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Right Side - Chat */}
      <div className="flex-grow flex flex-col bg-white p-3 rounded-lg">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
          {isAdmin ? (selectedUser ? `Chat with ${selectedUser.name}` : "Select a user") : "Chat with Admin"}
        </h2>

        <div className="flex-grow overflow-y-auto bg-gray-50 p-3 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.sender === "You" ? "items-end" : "items-start"
              } mb-2`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={isAdmin && !selectedUser}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
