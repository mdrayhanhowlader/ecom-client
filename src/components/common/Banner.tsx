"use client";

import React from "react";
import { motion } from "framer-motion"; // For animations
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-pink-50 to-gray-50 h-screen overflow-hidden flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <motion.div
          className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 opacity-50 absolute -top-16 -left-16"
          animate={{ x: 150, y: 150 }}
          transition={{ duration: 6, yoyo: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 opacity-50 absolute -bottom-16 -right-16"
          animate={{ x: -150, y: -150 }}
          transition={{ duration: 6, yoyo: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Elegant & Modern Lingerie
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        >
          Discover luxurious lingerie and nightwear crafted with care and
          precision, designed for comfort and style.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="mt-8"
        >
          <Link className="inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold rounded-lg transition-colors duration-300" href="/">
              Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
