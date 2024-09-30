"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Footer Content - One Line for Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold">
              <span className="text-pink-500">P</span>
              <span className="text-purple-500">r</span>
              <span className="text-blue-500">u</span>
              <span className="text-green-500">s</span>
              <span className="text-yellow-500">s</span>
              <span className="text-orange-500">i</span>
              <span className="text-red-500">a</span>
              <span className="text-pink-500">n</span>
            </h1>
            <p className="mt-2 text-gray-400 text-sm">Discover Elegance in Every Detail</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 justify-center">
            <Link href="https://www.facebook.com/prussianC" className="text-gray-400 hover:text-pink-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-black" size={24} />
            </Link>
            <Link href="https://www.instagram.com/prussianC" className="text-gray-400 hover:text-pink-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black" size={24} />
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex space-x-8 justify-center md:justify-start">
            <Link href="/" className="text-black hover:text-pink-500 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/" className="text-black hover:text-pink-500 transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-black hover:text-pink-500 transition-colors duration-300">
              About
            </Link>
          </div>
        </div>

        {/* Divider (HR) */}
        <hr className="bg-black border-[0.5px] border-slate-300 my-8" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Prussian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
