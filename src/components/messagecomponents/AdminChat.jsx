import { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../../Providers/AuthProvider";
const socket = io("http://localhost:5000");

function AdminChat() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
    const {user} = useContext(AuthContext)

  useEffect(() => {
    socket.emit("setActive", "admin"); // Admin sets active status

    socket.on("activeUsers", (users) => {
      setUserList(users.filter((user) => user !== "admin")); // Exclude admin from active users
    });

    socket.on("receiveMessage", ({ userId, message }) => {
      if (userId === selectedUser) {
        setMessages((prev) => [...prev, { userId, message }]);
      }
    });
  }, [selectedUser]);

  const sendReply = () => {
    socket.emit("sendMessage", { userId: selectedUser, message: reply });
    setMessages((prev) => [...prev, { userId: "admin", message: reply }]);
    setReply("");
  };

  return (
    <div>
      <h4>Admin Dashboard</h4>
      <div>
        <h5>Active Users</h5>
        <ul>
          {userList.map((user) => (
            <li key={user} onClick={() => setSelectedUser(user)}>
              {user}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div>
          <h5>Chat with {selectedUser}</h5>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{`${msg.userId}: ${msg.message}`}</li>
            ))}
          </ul>
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button onClick={sendReply}>Send Reply</button>
        </div>
      )}
    </div>
  );
}

export default AdminChat;
