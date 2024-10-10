"use client";

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  image: string;
}

interface FavoritePageProps {
  favorites: Product[];
}

const FavoritePage: React.FC<FavoritePageProps> = ({ favorites }) => {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>(favorites);

  // Remove item from favorites
  const handleRemoveItem = (productId: number) => {
    const updatedFavorites = favoriteItems.filter(item => item.id !== productId);
    setFavoriteItems(updatedFavorites);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      {favoriteItems.length > 0 ? (
        favoriteItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 mb-4 shadow-lg rounded-lg">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-600 hover:text-red-800">
              &times;
            </button>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritePage;
