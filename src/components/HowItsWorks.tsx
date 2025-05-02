import { useState, useEffect } from "react"; // Removed 'React' import
import excelToInsightPng from "../assets/exceltoinsight.png";
import { howItWorksFeatures } from "../content"; // Assuming this provides the array of features
import { motion, useAnimation } from "framer-motion"; // Removed 'Variants' import
import {
  Upload,
  Database,
  BarChart2,
  PieChart,
  ChevronRight,
} from "lucide-react";
import { ReactElement } from "react";
import { featureOverview } from "../content";

// Define an interface for the icon mapping
interface IconMap {
  [key: string]: ReactElement;
}

const HowItsWorks = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(0);

  // Animation controls for the progress bar
  const controls = useAnimation();

  // Create a mapping of icon strings to Lucide icon components with proper typing
  const iconComponents: IconMap = {
    Upload: <Upload className="w-10 h-10 text-teal-500" />,
    Database: <Database className="w-10 h-10 text-teal-500" />,
    BarChart2: <BarChart2 className="w-10 h-10 text-teal-500" />,
    PieChart: <PieChart className="w-10 h-10 text-teal-500" />,
  };

  // Auto-advance through steps
  useEffect(() => {
    // Only auto-advance if there are features
    if (howItWorksFeatures && howItWorksFeatures.length > 0) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % howItWorksFeatures.length);
      }, 4000); // Auto-advance every 4 seconds
      return () => clearInterval(interval);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Animate progress bar when activeStep changes
  useEffect(() => {
    // Only animate if there are features
    if (howItWorksFeatures && howItWorksFeatures.length > 0) {
      controls.start({
        width: `${((activeStep + 1) / howItWorksFeatures.length) * 100}%`, // Calculate percentage width
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    } else {
      // Reset progress bar if no features
      controls.start({ width: "0%" });
    }
    // Removed howItWorksFeatures from dependency array
  }, [activeStep, controls]); // Dependency array includes activeStep and controls

  // Unused variants and processSteps variable removed as they were causing lint errors
  // Render only if howItWorksFeatures is available and not empty
  if (!howItWorksFeatures || howItWorksFeatures.length === 0) {
    return null; // Or a loading spinner, or an error message
  }

  return (
    <div
      id="how-it-works"
      className="scroll-mt-32 relative flex flex-col items-center mt-12 lg:mt-12 overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-teal-400 opacity-15"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1 + 0.5,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 400,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth - 200,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Heading */}
      <h1 className="mb-10 lg:mx-30 text-4xl lg:text-6xl text-center font-semibold tracking-wide ">
        FinReveal – Transform Spreadsheets into{" "}
        <span className="text-3xl lg:text-6xl bg-gradient-to-r from-sky-400 to-teal-400 text-transparent bg-clip-text mt-2">
          Strategic Insights
        </span>
      </h1>

      {/* Subtext */}
      <p className="lg:mt-2 lg:mx-40 mx-10 mt-0 lg:text-lg text-center text-neutral-800">
        Upload your financial data, and let FinReveal deliver powerful
        narratives, comparisons, trends, and more — all intelligently generated.
      </p>

      <div className="w-full max-w-3xl my-5 px-6 group transition-transform duration-500 ease-in-out">
        <div className="overflow-hidden rounded-2xl shadow-lg group-hover:shadow-1xl group-hover:shadow-teal-400 transition-all duration-500">
          <img
            src={excelToInsightPng}
            alt="Excel to FinReveal Insights Flow"
            className="w-full h-auto drop-shadow-lg transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center mb-12">
        <a
          href="/contact"
          className="bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold py-3 px-6 mx-3 rounded-md shadow hover:scale-105 transition duration-300"
        >
          Get Started
        </a>
        <a
          href="/contact"
          className="py-3 px-6 mx-3 rounded-md border border-teal-400 text-teal-600 font-medium hover:bg-teal-50 transition duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Feature Cards with Animation */}
      <div className="mb-16 mt-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How FinReveal Transforms Your Data
        </h2>

        {/* Process Path with Dots */}
        <div className="relative max-w-4xl mx-auto mb-12 px-4">
          {/* Progress bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full mb-2">
            <motion.div
              className="h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full"
              animate={controls}
              initial={{ width: "0%" }} // Start at 0% width
            />
          </div>

          {/* Step dots */}
          <div className="flex justify-between relative">
            {howItWorksFeatures.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    index <= activeStep
                      ? "bg-gradient-to-r from-sky-400 to-teal-400"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </motion.div>
                <span className="text-xs font-medium mt-1 text-gray-700 hidden md:block">
                  {howItWorksFeatures[index].title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Display */}
        {/* Use AnimatePresence if you need exit animations, but key change handles re-mount */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl"
          key={activeStep} // Key change triggers re-mount animation
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }} // Exit animation requires AnimatePresence parent
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <motion.div
              className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center shadow-lg"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Render icon only if it exists */}
              {howItWorksFeatures[activeStep]?.icon &&
                iconComponents[howItWorksFeatures[activeStep].icon]}
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-sky-400  to-teal-400 text-transparent bg-clip-text">
                {howItWorksFeatures[activeStep].title}
              </h3>
              <p className="text-lg text-gray-800 mb-4">
                {howItWorksFeatures[activeStep].description}
              </p>
              <a
                href={howItWorksFeatures[activeStep].href}
                className="inline-flex items-center text-sky-600 font-medium hover:text-teal-800 transition-colors"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 }, // Simple hide/show for the container
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {howItWorksFeatures.map((feature, index) => (
            <motion.a
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              className={`p-5 rounded-2xl border ${
                index === activeStep
                  ? "border-teal-500 bg-gradient-to-br from-sky-50 to-teal-50 shadow-lg"
                  : "border-gray-200 bg-white/60"
              } flex flex-col items-center text-center hover:shadow-md transition-all duration-300 cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setActiveStep(index);
              }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  index === activeStep
                    ? "bg-gradient-to-r from-sky-400  to-teal-400"
                    : "bg-gray-100"
                }`}
              >
                <span
                  className={`font-bold ${
                    index === activeStep ? "text-white" : "text-gray-500"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                {feature.title}
              </h4>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <section
        id="features-overview"
        className="bg-gray-50 py-20 px-6 text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-semibold mb-8 bg-gradient-to-r from-sky-400  to-teal-400 text-transparent bg-clip-text "
        >
          Revolutionizing Financial Analysis for Smarter Decisions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto mb-14"
        >
          Explore how FinReveal turns traditional spreadsheets into dynamic
          executive-level insights across narratives, comparisons, trends, and
          conversations.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {featureOverview.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.href}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold text-sky-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base">{feature.description}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItsWorks;
