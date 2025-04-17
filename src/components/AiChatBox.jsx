import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { RefreshCcw, SendHorizontal, X } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, AnimatePresence } from 'framer-motion';

function AiChatBox() {
  const [AiMessage, setAiMessage] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gradientClass, setGradientClass] = useState(getRandomGradient());

  const chatEndRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientClass(getRandomGradient());
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  function getRandomGradient() {
    const gradients = [
      'from-blue-500 to-purple-500',
      'from-green-400 to-blue-500',
      'from-pink-500 to-cyan-500',
      'from-blue-500 to-orange-500',
      'from-indigo-500 to-teal-500'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }
  // Toggle chat visibility
  const toggleChatBox = () => setIsOpen((prev) => !prev);

  // Scroll to latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [AiMessage]);

  // Handle AI response
  const handleAi = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setAiMessage((prev) => [...prev, { role: 'user', content: inputText }]);
    setInputText('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_Url}/api/ai`, { Text: inputText });
      const aiResponse = response.data.response;
      setAiMessage((prev) => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error('AI API Error:', error);
      setAiMessage((prev) => [...prev, { role: 'ai', content: "Sorry, I couldn't process your request." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div onClick={toggleChatBox} className="fixed bottom-5  right-5 cursor-pointer group z-[500]">
         
        <div className="relative w-16 ">
            <Player          
            src="https://lottie.host/27382917-f47a-4331-92aa-9dbd194d0c75/hYtHP7bmvF.json"          
            className="player group-hover:scale-110 transition-all rounded-full "
            loop
            autoplay
          />
          
          
          {/* <p className="absolute inset-0 flex items-center justify-center text-black font-semibold text-xl z-10 group-hover:scale-110 transition-all">
            AI
          </p> */}
        
        </div>

      </div>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 md:bottom-5 right-0 md:right-5 w-80 p-3 border rounded-lg shadow-lg bg-white z-[9999]"
          >
            {/* Close Button */}
            <button
              onClick={toggleChatBox}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-rose-500 hover:bg-red-200 hover:text-rose-700 z-[9999]"
            >
              <X size={24} />
            </button>

            {/* Chat Header */}
            <motion.h2
      className={`text-xl font-semibold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r transition-all duration-1000 ${gradientClass}`}
      animate={{ opacity: [0.7, 1], scale: [1, 1.05, 1] }} // Smooth fade & slight scaling
      transition={{ duration: 5, ease: 'easeInOut' }}
    >
      Your AI Agent
    </motion.h2>
            {/* <h2 className="text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500 mb-2">
              Your AI Agent
            </h2> */}

            {/* Chat Messages */}
            <div className="h-60 overflow-y-auto space-y-2 p-2">
              {AiMessage.length === 0 ? (
                <p className="text-gray-400 text-center">Share your thoughts with me...</p>
              ) : (
                AiMessage.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`break-words whitespace-pre-wrap p-2 rounded-lg mt-2 max-w-[75%] ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white self-end'
                          : 'bg-gray-200 text-black self-start'
                      }`}
                    >
                      <div className="font-medium">{message.role === 'user' ? 'You' : 'AI'}</div>
                      <div>{message.content}</div>
                    </div>
                  </motion.div>
                ))
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleAi} className="flex items-center space-x-2">
              <input
                disabled={isLoading}
                type="text"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {isLoading ? <RefreshCcw className="animate-spin" size={24} /> : <SendHorizontal size={24} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AiChatBox;
