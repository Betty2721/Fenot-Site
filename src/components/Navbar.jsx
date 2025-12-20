// import { useState } from "react";
import logo from "../assets/logo-white.png"; // adjust if it's .svg or .jpg

export default function Navbar() {
  return (
    <header className="top-0 left-0 w-full bg-blue-950 sticky opacity-80 z-50">
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Church Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Our Church</li>
          <li className="hover:text-gray-500 cursor-pointer">Ministries</li>
          <li className="hover:text-gray-500 cursor-pointer">Events</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>

        {/* Contact Us Button */}
        <button
          className="hidden md:block px-5 py-2 rounded-full font-medium text-white"
          style={{ backgroundColor: "#1732A7" }} // Primary blue
        >
          Contact Us
        </button>

        {/* Mobile View - Only Button */}
        <button
          className="md:hidden px-4 py-2 rounded-full font-medium text-white"
          style={{ backgroundColor: "#1732A7" }}
        >
          Contact Us
        </button>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>

      </nav>
    </header>
  );
}