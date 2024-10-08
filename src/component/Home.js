import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Star, Heart } from 'lucide-react'

const categories = [
  { id: 1, name: 'Silk Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk.jpg' },
  { id: 2, name: 'Cotton Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/cotton.jpg' },
  { id: 3, name: 'Georgette Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/georgette.jpg' },
  { id: 4, name: 'Chiffon Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/chiffon.jpg' },
  { id: 5, name: 'Banarasi Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/banarasi.jpg' },
  { id: 6, name: 'Kanjivaram Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/kanjivaram.jpg' },
  { id: 15, name: 'Tussar Silk Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/tussar.jpg' },
  { id: 16, name: 'Paithani Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/paithani.jpg' },
  { id: 17, name: 'Mysore Silk Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/mysore.jpg' },
  { id: 18, name: 'Satin Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/satin.jpg' },
  { id: 19, name: 'Kota Silk Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/kota.jpg' },
  { id: 20, name: 'Jute Sarees', image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/jute.jpg' }
]

const silkSarees = [
  { id: 1, name: 'Royal Blue Silk Saree', price: 5999, originalPrice: 6999, discount: 14, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk1.jpg' },
  { id: 2, name: 'Golden Zari Silk Saree', price: 7999, originalPrice: 8999, discount: 11, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk2.jpg' },
  { id: 3, name: 'Maroon Bridal Silk Saree', price: 9999, originalPrice: 12999, discount: 23, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk3.jpg' },
  { id: 4, name: 'Green Patola Silk Saree', price: 6999, originalPrice: 7599, discount: 8, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk4.jpg' },
  { id: 5, name: 'Pink Banarasi Silk Saree', price: 8999, originalPrice: 9999, discount: 10, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk5.jpg' },
  { id: 15, name: 'Purple Mysore Silk Saree', price: 5999, originalPrice: 7999, discount: 25, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk6.jpg' },
  { id: 16, name: 'Orange Pure Silk Saree', price: 7599, originalPrice: 9999, discount: 24, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk7.jpg' },
  { id: 17, name: 'Silver Zari Border Silk Saree', price: 6999, originalPrice: 8499, discount: 18, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk8.jpg' },
  { id: 18, name: 'Magenta Bridal Silk Saree', price: 11999, originalPrice: 14999, discount: 20, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk9.jpg' },
  { id: 19, name: 'Traditional Yellow Silk Saree', price: 5999, originalPrice: 7999, discount: 25, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk10.jpg' },
  { id: 20, name: 'Navy Blue Party Silk Saree', price: 6499, originalPrice: 8499, discount: 23, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk11.jpg' }
]

const bestSellers = [
  { id: 1, name: 'Classic Red Banarasi', price: 7999, originalPrice: 9999, discount: 20, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/bestseller1.jpg' },
  { id: 2, name: 'Elegant Black Kanjivaram', price: 8999, originalPrice: 10999, discount: 18, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/bestseller2.jpg' },
  { id: 3, name: 'Vibrant Blue Patola', price: 6999, originalPrice: 7999, discount: 13, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/bestseller3.jpg' },
  { id: 15, name: 'Traditional Yellow Paithani', price: 8499, originalPrice: 10999, discount: 22, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/bestseller4.jpg' },
  { id: 16, name: 'Regal Purple Kanjivaram', price: 9999, originalPrice: 12999, discount: 23, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/bestseller5.jpg' },
  { id: 17, name: 'Grand Orange Banarasi', price: 8999, originalPrice: 11999, discount: 25, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/bestseller6.jpg' }
]

const todaySales = [
  { id: 1, name: 'Festive Yellow Chanderi', price: 4999, originalPrice: 6999, discount: 29, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/sale1.jpg' },
  { id: 2, name: 'Pastel Green Organza', price: 3999, originalPrice: 5999, discount: 33, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/sale2.jpg' },
  { id: 3, name: 'Lavender Linen Blend', price: 2999, originalPrice: 4599, discount: 35, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/sale3.jpg' },
  { id: 15, name: 'Turquoise Net Party Wear', price: 3499, originalPrice: 5999, discount: 41, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/sale4.jpg' },
  { id: 16, name: 'Peach Georgette Saree', price: 4499, originalPrice: 7499, discount: 40, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/sale5.jpg' }
]

const latestArrivals = [
  { id: 1, name: 'Grey Jacquard Silk', price: 5999, originalPrice: 7499, discount: 20, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/arrival1.jpg' },
  { id: 2, name: 'Violet Silk Blend', price: 6999, originalPrice: 8999, discount: 22, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/arrival2.jpg' },
  { id: 3, name: 'Gold Embroidered Silk', price: 7999, originalPrice: 9999, discount: 20, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/arrival3.jpg' },
  { id: 15, name: 'Cream Self Weave Silk', price: 7499, originalPrice: 9499, discount: 21, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/arrival4.jpg' },
  { id: 16, name: 'Pink Pure Silk Saree', price: 6999, originalPrice: 8999, discount: 22, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/arrival5.jpg' }
]

const SareeCard = ({ saree }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img src={saree.image} alt={saree.name} width={400} height={300} className="w-full h-64 object-cover" />
      <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
        {saree.discount}% OFF
      </div>
      <button className="absolute top-0 right-0 bg-white p-2 m-2 rounded-full text-pink-500 hover:text-pink-600 transition-colors duration-300">
        <Heart size={20} />
      </button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 truncate">{saree.name}</h3>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-bold text-pink-600">₹{saree.price}</span>
          <span className="text-sm text-gray-500 line-through ml-2">₹{saree.originalPrice}</span>
        </div>
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span className="text-gray-600">4.5</span>
        </div>
      </div>
      <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center">
        <ShoppingCart className="mr-2" size={20} /> Add to Cart
      </button>
    </div>
  </motion.div>
)

export default function Component() {
  const [activeCategory, setActiveCategory] = useState('Silk Sarees')

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Elegance Woven in Tradition</h1>
          <p className="text-xl mb-8">Discover our exquisite collection of handcrafted sarees</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center mx-auto">
            Explore Collection <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </motion.section>

      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Our Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category.name
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-pink-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {silkSarees.map((saree) => (
              <SareeCard key={saree.id} saree={saree} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((saree) => (
              <SareeCard key={saree.id} saree={saree} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Today's Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {todaySales.map((saree) => (
              <SareeCard key={saree.id} saree={saree} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Latest Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArrivals.map((saree) => (
              <SareeCard key={saree.id} saree={saree} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with our latest collections and exclusive offers</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-900 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
            <button type="submit" className="bg-white text-pink-500 hover:bg-gray-100 font-bold py-2 px-6 rounded-md transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </motion.section>
      </main>
    </div>
  )
}