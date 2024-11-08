import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className={`${isScrolled ? "text-gray-900" : "text-white"}`}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex items-center space-x-8 text-lg">
        {["projects", "about", "about", "company", "Contact"].map((item, index) => (
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

      {/* CTA Button for Desktop */}
      <div className="hidden md:flex">
        <a
          href="#"
          className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200"
          data-cursor="-opaque"
        >
          <div className={`${
            isScrolled ? "w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-full" : "w-12 h-12 bg-white text-black flex items-center justify-center rounded-full"
          }`}>→</div>
          <span className={`${
            isScrolled ? 'text-black text-lg' : 'bg-gray-900 text-white'
          }`}>See Resume</span>
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-800 p-4 shadow-lg">
          <div className="flex flex-col space-y-12 text-xl">
            {["projects", "about", "about", "company", "Contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-textAccent transition-all duration-200"
              >
                {item}
                <hr className="w-full mt-4 opacity-[50%]" />
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center w-full py-3 bg-textAccent text-white transition-all duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
