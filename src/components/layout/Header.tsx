"use client";

import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaFacebookMessenger,
  FaStore,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { createPortal } from "react-dom";
import Link from "next/link";

const Header = () => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showFavoriteDropdown, setShowFavoriteDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleCartDropdown = () => setShowCartDropdown(!showCartDropdown);
  const toggleFavoriteDropdown = () => setShowFavoriteDropdown(!showFavoriteDropdown);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearchModal = () => setIsSearchModalOpen(!isSearchModalOpen);

  const cartItems = [
    { id: 1, name: "Product 1", price: 20.0, image: "https://via.placeholder.com/50" },
    { id: 2, name: "Product 2", price: 30.0, image: "https://via.placeholder.com/50" },
  ];

  const favoriteItems = [
    { id: 1, name: "Favorite 1", price: 25.0, image: "https://via.placeholder.com/50" },
    { id: 2, name: "Favorite 2", price: 35.0, image: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left-side: Navigation Menu */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-600" onClick={toggleMobileMenu}>
            <FaBars className="text-lg" />
          </button>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200 text-base">
              Lingerie
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200 text-base">
              Cosplay
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200 text-base">
              Bikini
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200 text-base">
              Stockings
            </Link>
          </nav>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
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
        </div>

        {/* Right-side: Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-pink-500" onClick={toggleSearchModal}>
            <FaSearch className="text-lg" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-pink-500 relative" onClick={toggleFavoriteDropdown}>
            <FaHeart className="text-lg" />
            {showFavoriteDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
                {favoriteItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-2">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                    <button className="text-red-500 hover:text-red-700">X</button>
                  </div>
                ))}
              </div>
            )}
          </Link>
          <Link href="#" className="text-gray-600 hover:text-pink-500 relative" onClick={toggleCartDropdown}>
            <FaShoppingCart className="text-lg" />
            {showCartDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-2">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                    <button className="text-red-500 hover:text-red-700">X</button>
                  </div>
                ))}
              </div>
            )}
          </Link>
          <Link href="https://m.me/prussianC" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
            <FaFacebookMessenger className="text-lg" />
          </Link>
          <Link href="https://www.facebook.com/prussianC" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
            <FaStore className="text-lg" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-500 hover:text-pink-500 text-base">Lingerie</Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 text-base">Cosplay</Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 text-base">Bikini</Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 text-base">Stockings</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchModalOpen &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-4/5 md:w-1/3">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-bold">Search Products</h2>
                <button className="text-gray-600 hover:text-gray-800" onClick={toggleSearchModal}>
                  X
                </button>
              </div>
              <div className="flex items-center border rounded p-2 w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="outline-none flex-grow text-gray-600"
                />
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                  Search
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Header;
