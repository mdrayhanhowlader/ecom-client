"use client";
import React from "react";

const RightSideComponent = () => {
  return (
    <div className="hidden md:block w-full md:w-1/5 p-4 space-y-4">
      <div className="relative shadow-lg rounded-md overflow-hidden transition-transform transform hover:-translate-y-2 duration-300">
        <img
          src="https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Right Side Image 1"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 flex items-end p-2">
          <p className="text-white text-center w-full">New Modern Stylist Crafts</p>
        </div>
        <div className="absolute inset-0 border-4 border-transparent rounded-md transition-transform transform hover:scale-105 duration-300"></div>
      </div>
      <div className="relative shadow-lg rounded-md overflow-hidden transition-transform transform hover:-translate-y-2 duration-300">
        <img
          src="https://images.pexels.com/photos/1700769/pexels-photo-1700769.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Right Side Image 2"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 flex items-end p-2">
          <p className="text-white text-center w-full">Energy with our newest collection</p>
        </div>
        <div className="absolute inset-0 border-4 border-transparent rounded-md transition-transform transform hover:scale-105 duration-300"></div>
      </div>
    </div>
  );
};

export default RightSideComponent;
