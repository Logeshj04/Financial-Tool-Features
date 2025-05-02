import { motion } from "framer-motion";
import comparisonImage from "../assets/comparisonImg.png"; // Your comparison visual

// Lucide Icons
import { Store, Calendar, BarChart, FileText, Shuffle } from "lucide-react";

const ComparisonEngine = () => {
  return (
    <section id="comparison-engine" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-6 leading-tight">
            Comparison Engine
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Instantly compare financial performance across stores, time periods,
            and KPIs. FinReveal visualizes critical differences and provides
            executive narratives to explain shifts clearly.
          </p>

          {/* Features List */}
          <ul className="space-y-6 text-gray-600 font-medium mt-8">
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Store size={28} />
              </motion.div>
              <span>Compare Store-to-Store Performance instantly</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Calendar size={28} />
              </motion.div>
              <span>Analyze Different Months within a Store</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <BarChart size={28} />
              </motion.div>
              <span>Visual KPI Comparison through Dynamic Charts</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <FileText size={28} />
              </motion.div>
              <span>Narrative Insights on Performance Differences</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Shuffle size={28} />
              </motion.div>
              <span>Cross-Period and Cross-Entity Benchmarking</span>
            </li>
          </ul>

          {/* Call To Action */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-300"
            >
              Explore Comparison Insights
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
            src={comparisonImage}
            alt="Comparison Engine Illustration"
            className="w-full max-w-lg rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonEngine;
