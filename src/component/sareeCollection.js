'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Heart, Search, ShoppingBag, Star, X } from 'lucide-react'

const sarees = [
  { id: 1, name: 'Elegant Silk Saree', price: 5999, originalPrice: 7999, discount: 25, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk1.jpg', brand: 'SALTY', rating: 4.5, ratingCount: 289 },
  { id: 2, name: 'Zari Work Saree', price: 7999, originalPrice: 9999, discount: 20, image: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/silk2.jpg', brand: 'LOUIS STITCH', rating: 4.2, ratingCount: 156 },
  // Add more sarees here...
]

const sortOptions = [
  { icon: '🔥', label: 'Popularity' },
  { icon: '🆕', label: 'Latest' },
  { icon: '💯', label: 'Discount' },
  { icon: '💸', label: 'Price: High to Low' },
  { icon: '💰', label: 'Price: Low to High' },
  { icon: '⭐', label: 'Customer Rating' },
]

const filterOptions = [
  'Gender',
  'Categories',
  'Size',
  'Price',
  'Brand',
  'Color',
  'Discount Range',
  'Bundles',
  'Country of Origin',
  'More Filters',
]

export default function SareeCollection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState('Popularity')
  const [priceRange, setPriceRange] = useState([0, 25000])

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)
  const toggleSort = () => setIsSortOpen(!isSortOpen)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
     

      {/* Sort and Filter Buttons */}
      <div className="flex border-t border-b">
        <button
          onClick={toggleSort}
          className="flex-1 py-3 text-center font-semibold text-gray-700 bg-white"
        >
          Sort
        </button>
        <button
          onClick={toggleFilter}
          className="flex-1 py-3 text-center font-semibold text-gray-700 bg-white"
        >
          Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {sarees.map((saree) => (
          <div key={saree.id} className="bg-white rounded-lg overflow-hidden shadow">
            <img src={saree.image} alt={saree.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{saree.brand}</h3>
              <p className="text-sm text-gray-500 truncate">{saree.name}</p>
              <div className="flex items-center mt-1">
                <span className="font-bold">₹{saree.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">₹{saree.originalPrice}</span>
                <span className="text-sm text-orange-500 ml-2">({saree.discount}% OFF)</span>
              </div>
              <div className="flex items-center mt-1">
                <div className="flex items-center bg-green-500 text-white text-xs px-1 rounded">
                  <span>{saree.rating}</span>
                  <Star size={12} className="ml-1" />
                </div>
                <span className="text-xs text-gray-500 ml-1">| {saree.ratingCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sort Panel */}
      <AnimatePresence>
        {isSortOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleSort}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Sort By</h2>
                <button onClick={toggleSort}>
                  <X size={24} />
                </button>
              </div>
              {sortOptions.map((option) => (
                <button
                  key={option.label}
                  className={`flex items-center w-full py-3 ${
                    selectedSort === option.label ? 'text-pink-500' : 'text-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedSort(option.label)
                    toggleSort()
                  }}
                >
                  <span className="mr-3">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-y-0 right-0 w-full bg-white z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={toggleFilter}>
                  <X size={24} />
                </button>
              </div>
              {filterOptions.map((option, index) => (
                <div key={option} className="py-4 border-b">
                  <h3 className="text-lg font-semibold">{option}</h3>
                  {option === 'Price' && (
                    <div className="mt-2">
                      <input
                        type="range"
                        min="0"
                        max="25000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex justify-between">
                <button className="px-6 py-2 border border-gray-300 rounded-full">
                  CLEAR ALL
                </button>
                <button className="px-6 py-2 bg-pink-500 text-white rounded-full">
                  APPLY
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}