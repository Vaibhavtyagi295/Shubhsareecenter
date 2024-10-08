import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';

const initialCartItems = [
  { id: 1, name: 'Royal Blue Silk Saree', price: 5999, quantity: 1, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk1.jpg' },
  { id: 2, name: 'Golden Zari Silk Saree', price: 7999, quantity: 2, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk2.jpg' },
  { id: 3, name: 'Maroon Bridal Silk Saree', price: 9999, quantity: 1, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk3.jpg' },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id,change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 150;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-600 transition-colors"
                  aria-label="Remove item"
                >
                  <FaTrashAlt className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString()}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white rounded-md py-2 mt-6 hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <h2 className="text-xl font-semibold mb-4">Have a coupon?</h2>
            <form className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}