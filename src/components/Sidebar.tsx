"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showSpecialOffers, setShowSpecialOffers] = useState(true);

  const toggleCategories = () => setShowCategories(!showCategories);
  const toggleSpecialOffers = () => setShowSpecialOffers(!showSpecialOffers);

  return (
    <div className="bg-white shadow-md p-4 w-full md:w-1/5">
      <div className="flex justify-between items-center bg-purple-500 text-white p-2 rounded mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <button onClick={toggleCategories} className="focus:outline-none">
          {showCategories ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {showCategories && (
        <ul className="space-y-2">
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Lingerie</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Underwear</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Nightwear</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Swimwear</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Shapewear</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Bras</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-purple-500 p-2 rounded">Panties</a></li>
        </ul>
      )}
      <div className="flex justify-between items-center bg-amber-500 text-white p-2 rounded mt-8 mb-4">
        <h2 className="text-xl font-bold">Special Offers</h2>
        <button onClick={toggleSpecialOffers} className="focus:outline-none">
          {showSpecialOffers ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {showSpecialOffers && (
        <ul className="space-y-2">
          <li><a href="#" className="block hover:text-white hover:bg-amber-500 p-2 rounded">Value of the Day</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-amber-500 p-2 rounded">Top 100 Offers</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-amber-500 p-2 rounded">New Arrivals</a></li>
          <li><a href="#" className="block hover:text-white hover:bg-amber-500 p-2 rounded">Clearance</a></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
