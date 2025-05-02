import { motion } from "framer-motion";
// Importing SVG as a React component
import ChatbotIllustration from "../assets/chatfeature.svg?react";
import { Link } from "react-router-dom";

// Lucide Icons
import { MessageCircle, PieChart, Search, Repeat, Bot } from "lucide-react";

const ChatbotSection = () => {
  return (
    <section id="chatbot" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-6 leading-tight">
            Interactive Financial Chatbot
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Dive deep into your financial data through natural conversations.
            FinReveal’s AI-driven chatbot understands your queries and delivers
            instant visual analytics, KPI breakdowns, and strategic summaries.
          </p>

          {/* Features List */}
          <ul className="space-y-6 text-gray-600 font-medium mt-8">
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <MessageCircle size={28} />
              </motion.div>
              <span>Ask Financial Questions Naturally</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <PieChart size={28} />
              </motion.div>
              <span>Instant Visual + Narrative Responses</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Search size={28} />
              </motion.div>
              <span>Deep-Dive into KPIs and Variances</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Repeat size={28} />
              </motion.div>
              <span>Context-Aware Follow-up Support</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Bot size={28} />
              </motion.div>
              <span>AI-Enhanced Intelligent Conversations</span>
            </li>
          </ul>

          {/* Call To Action */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-300"
            >
              Start Exploring Your Data
            </a>
          </div>
        </motion.div>

        {/* Right SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <ChatbotIllustration className="w-full max-w-lg rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
      {/* Final CTA with 3D perspective hover effect */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-5xl mx-auto bg-gradient-to-r from-sky-500 to-teal-500 rounded-3xl overflow-hidden relative"
          whileHover={{
            scale: 1.02,
            rotateX: 2,
            rotateY: 2,
            boxShadow: "0 30px 60px rgba(45, 212, 191, 0.3)",
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
                "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
                "linear-gradient(225deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
                "linear-gradient(315deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Animated circles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: 100 + i * 50,
                height: 100 + i * 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="py-16 px-8 md:px-16 relative z-10 text-center">
            <motion.h2
              className="text-white text-3xl md:text-5xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start Transforming Your Financial Data Today
            </motion.h2>

            <motion.p
              className="text-white/90 text-lg mb-10 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of companies who have revolutionized their approach
              to financial analysis with FinReveal.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(90deg, rgba(255,255,255,0) 100%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 0%)",
                    ],
                    backgroundSize: ["200% 100%", "200% 100%"],
                    backgroundPosition: ["100% 0%", "-100% 0%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                Get Started for Free
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 inline-block"
                >
                  Schedule a Demo
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default ChatbotSection;
