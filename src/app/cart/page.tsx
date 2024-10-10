import React from 'react';
import CartItem from './CartItem';

const CartPage = () => {
  const product = {
    id: 1,
    name: "Stylish Jacket",
    price: 49.99,
    rating: 4.5,
    reviews: 20,
    colors: ['#000000', '#FF5733', '#FFFFFF'],
    images: [
      'https://via.placeholder.com/400x400?text=Product+Image+1',
      'https://via.placeholder.com/400x400?text=Product+Image+2',
      'https://via.placeholder.com/400x400?text=Product+Image+3',
    ],
  };

  return (
    <div>
      <CartItem product={product} /> {/* Pass the product data as a prop */}
    </div>
  );
};

export default CartPage;
