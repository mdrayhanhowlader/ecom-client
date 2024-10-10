"use client";

import Link from 'next/link';
import React, { useState } from 'react';

// Define the type for the product prop
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  colors: string[];
  images: string[];
}

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    console.log(`Added ${product.name} (Color: ${selectedColor}) x${quantity} to cart`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg shadow-lg p-6">
        
        {/* Product Images Section */}
        <div className="w-full md:w-1/2">
          <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover rounded-md" />
          {/* Thumbnails */}
          <div className="flex space-x-2 mt-4">
            {product.images.map((image: string, index: number) => (
              <img key={index} src={image} alt={`Product Image ${index + 1}`} className="w-16 h-16 rounded-md cursor-pointer hover:border-2 hover:border-gray-300" />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">${product.price.toFixed(2)}</p>

          {/* Color Selector */}
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800">Select Color:</p>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color: string, index: number) => (
                <span
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? 'border-4 border-purple-600' : 'border border-gray-300'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6 space-x-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart / Buy Now */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
              Buy Now
            </button>
          </div>

          {/* Delivery Information */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800">Delivery Information:</h3>
            <p className="text-sm mt-2 text-gray-600">Inside Dhaka: Delivery within 1-2 business days</p>
            <p className="text-sm text-gray-600">Outside Dhaka: Delivery within 3-4 business days</p>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-4 text-sm text-gray-600">
            By placing an order, you agree to our{' '}
            <Link href="/terms">
              <span className="underline hover:text-purple-600">Terms & Conditions</span>
            </Link>{' '}
            and{' '}
            <Link href="/privacy">
              <span className="underline hover:text-purple-600">Privacy Policy</span>
            </Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
