"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-8 shadow-lg">
      <div className="w-[90%] mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          {/* Left-side: Links Section */}
          <div className="flex justify-center md:justify-start space-x-8">
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

          {/* Center: Logo */}
          <div className="text-center col-span-1">
            <h1 className="text-4xl font-extrabold tracking-wide">
              <span className="text-pink-500">P</span>
              <span className="text-purple-500">r</span>
              <span className="text-blue-500">u</span>
              <span className="text-green-500">s</span>
              <span className="text-yellow-500">s</span>
              <span className="text-orange-500">i</span>
              <span className="text-red-500">a</span>
              <span className="text-pink-500">n</span>
            </h1>
            <p className="mt-2 text-gray-500 text-sm">Discover Elegance in Every Detail</p>
          </div>

          {/* Right-side: Social Media Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="https://www.facebook.com/prussianC" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-black" size={24} />
            </Link>
            <Link href="https://www.instagram.com/prussianC" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black" size={24} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-gray-200 border-[0.5px] my-8" />

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
