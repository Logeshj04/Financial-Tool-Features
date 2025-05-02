import Navbar from "./components/Navbar";
import HowItsWorks from "./components/HowItsWorks";
import "./index.css";
import CFOLevel from "./components/CFOLevel";
import Comparative from "./components/Comparative";
import Trend from "./components/Trend";
import ChatFeatures from "./components/ChatFeatures";
import Chatbot from "./components/Chatbot";
import ContactCTA from "./components/ContactCTA";

// ✅ Add Route import here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<ContactCTA />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HowItsWorks />
              <CFOLevel />
              <Comparative />
              <Trend />
              <ChatFeatures />
              <Chatbot />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
