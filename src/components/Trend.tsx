import { motion } from "framer-motion";
import trendImage from "../assets/trendImg1.png"; // Your trend analysis visual

// Lucide Icons
import { Calendar, Sun, LineChart, Package, BarChartBig } from "lucide-react";

const TrendAnalysis = () => {
  return (
    <section id="trend-analysis" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-6 leading-tight">
            Trend Analysis
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Visualize how your key financial metrics change over time. FinReveal highlights
            month-wise trends, seasonal patterns, and future forecasting opportunities — all from your uploaded data.
          </p>

          {/* Features List */}
          <ul className="space-y-6 text-gray-600 font-medium mt-8">
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Calendar size={28} />
              </motion.div>
              <span>Track Month-by-Month Financial Trends</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Sun size={28} />
              </motion.div>
              <span>Identify Seasonal and Promotional Patterns</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <LineChart size={28} />
              </motion.div>
              <span>Analyze Gross Profit and Sales Fluctuations</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <Package size={28} />
              </motion.div>
              <span>Visualize Inventory Turnover Trends</span>
            </li>
            <li className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="text-sky-500">
                <BarChartBig size={28} />
              </motion.div>
              <span>Forecast Future Financial Performance</span>
            </li>
          </ul>

          {/* Call To Action */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-300"
            >
              Explore Trend Insights
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
            src={trendImage}
            alt="Trend Analysis Illustration"
            className="w-full max-w-lg rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrendAnalysis;
