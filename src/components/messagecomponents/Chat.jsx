import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const socket = io(`${import.meta.env.VITE_Sms_URL}`);

const Chat = () => {
  const auth = getAuth(app);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [user, setUser] = useState(null);
  const ADMIN_EMAIL = "admin@gmail.com";

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAdmin(currentUser.email === ADMIN_EMAIL);
        socket.emit("userJoined", {
          email: currentUser.email,
          name: currentUser.displayName,
          photo: currentUser.photoURL,
        });
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });
  }, [auth]);

  useEffect(() => {
    if (!user) return;

    if (isAdmin) {
      socket.on("newUser", (newUser) => {
        setActiveUsers((prevUsers) => {
          if (!prevUsers.find((u) => u.email === newUser.email)) {
            return [...prevUsers, newUser];
          }
          return prevUsers;
        });
      });

      socket.on("allConversations", (conversations) => {
        console.log("All Conversations:", conversations);
      });

      socket.on(
        "newMessageFromUser",
        ({ userEmail, messages: newMessages }) => {
          if (selectedUser?.email === userEmail) {
            setMessages(newMessages);
          }
          setActiveUsers((prevUsers) => {
            const userExists = prevUsers.find((u) => u.email === userEmail);
            if (userExists) {
              return prevUsers.map((u) =>
                u.email === userEmail ? { ...u, hasNewMessage: true } : u
              );
            }
            return prevUsers;
          });
        }
      );

      socket.on(
        "loadConversation",
        ({ userEmail, messages: loadedMessages }) => {
          if (selectedUser?.email === userEmail) {
            setMessages(loadedMessages);
            scrollToBottom();
          }
        }
      );
    } else {
      socket.on("receiveMessage", ({ sender, message }) => {
        setMessages((prevMessages) => [...prevMessages, { sender, message }]);
        scrollToBottom();
      });
    }

    return () => {
      socket.off("newUser");
      socket.off("allConversations");
      socket.off("newMessageFromUser");
      socket.off("loadConversation");
      socket.off("receiveMessage");
    };
  }, [isAdmin, selectedUser, user]);

  useEffect(() => {
    if (isAdmin && selectedUser) {
      socket.emit("adminSelectUser", selectedUser.email);
    }
  }, [isAdmin, selectedUser]);

  const sendMessage = () => {
    if (message.trim() !== "" && user) {
      if (isAdmin && selectedUser) {
        socket.emit("sendMessageToUser", {
          receiver: selectedUser.email,
          message,
        });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "You", message },
        ]);
      } else if (!isAdmin) {
        socket.emit("sendMessageToAdmin", { sender: user.email, message });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "You", message },
        ]);
      }
      setMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUserSelection = (user) => {
    setSelectedUser(user);
    setActiveUsers((prevUsers) =>
      prevUsers.map((u) => ({ ...u, hasNewMessage: false }))
    );
  };

  if (!user) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className=" mx-w-3xl my-5 mx-auto p-4 dark:text-darkText dark:bg-dark  bg-gray-50 shadow-lg rounded-lg md:flex h-fit md:h-[600px] ">
      {isAdmin && (
        <div className=" md:w-1/3  bg-gray-100 dark:text-darkText dark:bg-slate-700  p-3 rounded-lg overflow-auto">
          <h3 className="font-semibold dark:text-darkText text-gray-700 mb-2">
            Active Users
          </h3>
          <ul className="space-y-2">
            {activeUsers.map((u) => (
              <li
                key={u.email}
                className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg text-sm font-medium ${
                  selectedUser?.email === u.email
                    ? "bg-blue-500 bg-dark text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => handleUserSelection(u)}
              >
                <img
                  src={u.photo}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span>{u.name}</span>
                {u.hasNewMessage && (
                  <span className="ml-2 text-xs text-red-500 font-bold">
                    New!
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex-grow flex  flex-col dark:text-darkText dark:bg-dark  bg-white p-3 rounded-lg">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4 dark:text-darkText">
          {isAdmin
            ? selectedUser
              ? `Chat with ${selectedUser.name}`
              : "Select a user"
            : "Chat with Admin"}
        </h2>

        <div className=" min-h-52 flex-grow overflow-y-auto bg-gray-50 dark:text-darkText dark:bg-slate-500  p-3 rounded-lg">
          {messages.map((msg, index) => {
            const isYou = msg.sender === "You" || msg.sender === user.email; // Determine if the message is from the current user
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isYou ? "items-end" : "items-start"
                } mb-2`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
                    isYou
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="mt-4 w-1/2 mx-auto flex justify-center gap-2">
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
