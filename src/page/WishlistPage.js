import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Trash2, ChevronDown, ChevronUp } from 'lucide-react'

const wishlistItems = [
  { id: 1, name: 'Elegant Blue Silk Saree', price: 5999, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk1.jpg', inStock: true },
  { id: 2, name: 'Golden Zari Banarasi Saree', price: 7999, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk2.jpg', inStock: true },
  { id: 3, name: 'Maroon Bridal Kanjivaram Saree', price: 9999, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk3.jpg', inStock: false },
  { id: 4, name: 'Green Patola Silk Saree', price: 6999, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk4.jpg', inStock: true },
]

const WishlistItem = ({ item, onRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
    >
      <div className="flex items-center p-4">
        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
        <div className="ml-4 flex-grow">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">₹{item.price.toLocaleString()}</p>
          <p className={`text-sm ${item.inStock ? 'text-green-500' : 'text-red-500'}`}>
            {item.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 pb-4"
        >
          <p className="text-gray-700 mb-2">
            This beautiful saree is perfect for special occasions. Made with high-quality fabric and intricate designs,
            it's sure to make you stand out.
          </p>
          <div className="flex justify-between items-center">
            <button
              className={`flex items-center px-4 py-2 rounded-full ${
                item.inStock
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors`}
              disabled={!item.inStock}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-600 transition-colors"
              aria-label="Remove from wishlist"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Heart size={32} className="text-red-500 mr-2" />
        Your Wishlist
      </h1>
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-600 mb-4">Your wishlist is empty</p>
          <a
            href="/shop"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Start Shopping
          </a>
        </div>
      ) : (
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <WishlistItem key={item.id} item={item} onRemove={removeItem} />
          ))}
        </motion.div>
      )}
    </div>
  )
}