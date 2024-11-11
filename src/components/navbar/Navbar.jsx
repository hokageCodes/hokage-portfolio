import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import NowPlaying from '../NowPlaying';  // Import the NowPlaying component

export default function Navbar() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track mouse movement for the follower circle
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-2 flex items-center justify-between z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-gray-900 text-white'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/assets/logo-img.webp" alt="Logo" className="w-15 h-10" />
        <span className="font-semibold text-lg">hokageCodes</span>
      </div>

      {/* Mouse-follow circle */}
      <div
        className="fixed bg-textAccent rounded-full pointer-events-none z-40 opacity-20"
        style={{
          width: "20px",
          height: "20px",
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: "translate(-50%, -50%)",
          transition: "top 0.05s ease, left 0.05s ease",
        }}
      ></div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-lg">
        {["projects", "about", "company", "contact"].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`relative hover:text-textAccent transition-all duration-200 ${
              item === "projects" ? "isActive text-textAccent" : ""
            }`}
          >
            {item}
            {item === "projects" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-textAccent skew-x-12"></span>
            )}
          </a>
        ))}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className={`${isScrolled ? "text-gray-900" : "text-white"}`}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu with Framer Motion */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-between"
          style={{ height: "auto", maxHeight: "100vh", padding: "10px" }}
        >
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-white z-60">
            <FaTimes size={30} />
          </button>

          {/* 70% Height for Image */}
          <div className="flex justify-center items-center w-full" style={{ height: "70%", paddingBottom: "15px" }}>
            <img
              src={isMenuOpen ? "/assets/da.gif" : "/assets/dance.jpg"}
              alt="Dancing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Now Playing Section (30%) */}
          <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <motion.div
              className="text-xl text-white mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Now Playing
            </motion.div>
            <NowPlaying />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
