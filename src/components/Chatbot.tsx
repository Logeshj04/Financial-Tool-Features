import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! How can I assist you with FinReveal insights today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const userMessage = { sender: "user", text: userInput };

    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsBotTyping(true);

    // Fake bot response after a small delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "🔍 Here's a summary based on your request! (FinReveal Magic ✨)",
        },
      ]);
      setIsBotTyping(false);
    }, 1200);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-80 h-[30rem] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-400 to-teal-400 text-white px-4 py-3 rounded-t-2xl flex justify-between items-center">
            <span className="font-semibold text-lg">FinRevBot</span>
            <button onClick={toggleChat}>
              <X />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm">
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`p-3 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-teal-100 text-right ml-auto"
                      : "bg-gray-100 text-left mr-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isBotTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-gray-100 text-left mr-auto p-3 rounded-xl max-w-[75%] text-sm italic text-gray-500"
                >
                  Typing...
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t flex items-center space-x-2">
            <input
              className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              type="text"
              placeholder="Ask about sales, trends, variances..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-sky-400 to-teal-500 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300"
            >
              Send
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={toggleChat}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-sky-500 to-teal-600 p-3 rounded-full shadow-xl text-white transition"
        >
          <MessageSquare />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
