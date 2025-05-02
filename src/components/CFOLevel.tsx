import { motion } from "framer-motion";
import cfonarative from "../assets/cfo-narative.png";

// Lucide React Icons
import { LineChart, Store, Lightbulb, FileText, Shield } from "lucide-react";

const CfoLevel = () => {
  return (
    <section id="cfo-narratives" className="bg-white py-20 px-6 md:px-12">
      <h2 className="text-4xl max-w-6xl mx-auto md:text-6xl font-extrabold text-teal-600 mb-6 ">
        CFO-Level Narratives
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg mb-6">
            Turn raw financial spreadsheets into professional-grade executive
            summaries. FinReveal crafts strategic narratives, uncovering key
            performance drivers, trends, and growth opportunities — instantly.
          </p>

          {/* Features List with Animated Icons */}
          <ul className="space-y-6 text-gray-600 font-medium mt-8">
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <LineChart size={28} />
              </motion.div>
              <span>Analyze Gross Profit Trends across categories</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Store size={28} />
              </motion.div>
              <span>
                Deep-dive into Category and Department-level performance
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Lightbulb size={28} />
              </motion.div>
              <span>Actionable Recommendations for improving margins</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <FileText size={28} />
              </motion.div>
              <span>Ready-to-download Reports in PDF, PPT, and Excel</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Shield size={28} />
              </motion.div>
              <span>Executive-grade Narratives designed for boardrooms</span>
            </li>
          </ul>

          {/* Call To Action Button */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-300"
            >
              See Sample CFO Report
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={cfonarative}
            alt="CFO Narratives Illustration"
            className="w-full max-w-lg rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CfoLevel;
