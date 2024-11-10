import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <>
    <FooterTop />
      <footer className="bg-gray-900 text-white py-10 px-8 md:px-16">
        <div className="container mx-auto">
          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 space-y-4 md:space-y-0 md:space-x-4">
            {/* Copyright */}
            <p className="text-sm order-1">© {new Date().getFullYear()} hokageCodes. All rights reserved.</p>

            {/* Navigation Links in the Center */}
            <nav className="flex space-x-4 order-2">
              <a href="#" className="text-gray-400 hover:text-orange-500">Home</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">About</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">Contact</a>
            </nav>

            {/* Social Links on the Right */}
            <div className="flex space-x-4 order-3">
              <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Brand Message with Large Responsive Text */}
          <div className="text-center mt-8 text-white font-bold">
            <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[100px]">
              LET&#39;S WORK TOGETHER
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}
