import React from 'react';
import { FaShoppingCart, FaHeart, FaSearch, FaStar } from 'react-icons/fa';

interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    colors: string[];
    image: string;
  }
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <span className="ml-1">{product.rating} ({product.reviews})</span>
        </div>
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color, index) => (
            <span key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-gray-200">
            <FaShoppingCart />
          </button>
          <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-gray-200">
            <FaHeart />
          </button>
          <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
