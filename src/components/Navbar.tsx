import { useLocation } from "react-router-dom";
import { navItems } from "../content";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 py-4 px-2 backdrop-blur-xl bg-white/30 border-b border-neutral-700/20 shadow-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-sky-100 to-teal-100 p-2 rounded-full shadow-lg transition-transform hover:scale-110 duration-300">
              <img className="h-6 w-6 sm:h-8 sm:w-8" src={logo} alt="logo" />
            </div>
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
              <span className="text-sky-500">Fin</span>
              <span className="text-teal-400">Reveal</span>
            </span>
          </div>

          <ul className="hidden lg:flex space-x-12 ml-16 text-sm">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={index} className="relative group">
                  <a
                    href={item.href}
                    className={`transition-all${
                      isActive
                        ? "text-teal-500"
                        : "text-gray-800 group-hover:text-teal-500"
                    }`}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/contact" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-sky-400 to-teal-400 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-teal-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={index} className="py-4">
                    <a
                      href={item.href}
                      className={`transition ${
                        isActive ? "text-teal-500 font-semibold" : "text-black"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-6 mt-6">
              <a href="/signin" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="/demo"
                className="bg-gradient-to-r from-sky-400 to-teal-400 py-2 px-3 rounded-md"
              >
                Explore the Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
