"use client";

import React, { useState } from 'react';

// Define the type for Product and CartItem
interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  image: string;
}

interface OrderPageProps {
  products: Product[];
}

const OrderPage: React.FC<OrderPageProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<Product[]>(products);
  const [selectedLocation, setSelectedLocation] = useState("inside");
  const [totalPrice, setTotalPrice] = useState(calculateTotal(cartItems));

  // Calculate the total price
  function calculateTotal(items: Product[]) {
    const price = items.reduce((acc, item) => acc + item.price, 0);
    const deliveryCharge = selectedLocation === "inside" ? 80 : 140;
    return price + deliveryCharge;
  }

  // Remove item from cart
  const handleRemoveItem = (productId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    setTotalPrice(calculateTotal(updatedCart));
  };

  // Submit Order (For demonstration, just show a success message)
  const handleOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Left: Cart Items */}
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
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
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Right: Order Info */}
      <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Order Information</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md" />
          <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded-md" />
          <textarea placeholder="Address" className="w-full p-2 border rounded-md"></textarea>
          <select
            value={selectedLocation}
            onChange={e => {
              setSelectedLocation(e.target.value);
              setTotalPrice(calculateTotal(cartItems));
            }}
            className="w-full p-2 border rounded-md"
          >
            <option value="inside">Inside Dhaka (80 TK)</option>
            <option value="outside">Outside Dhaka (140 TK)</option>
          </select>
        </form>

        {/* Total Price */}
        <div className="mt-6 border-t pt-4">
          <p className="text-lg">Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
          <button onClick={handleOrder} className="w-full bg-black text-white py-2 rounded-md hover:bg-purple-600 mt-4">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
