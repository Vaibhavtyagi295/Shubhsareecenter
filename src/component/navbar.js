import React from 'react'
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react'

const navItems = [
  { name: 'Women', href: '/women' },
  { name: 'Men', href: '/men' },
  { name: 'Kids', href: '/kids' },
  { name: 'Home & Living', href: '/home-living' },
  { name: 'Beauty', href: '/beauty' },
  { name: 'Studio', href: '/studio', isNew: true },
]

export default function MobileNavbar() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2">
          <button className="text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
          <a href="/" className="text-2xl font-bold text-pink-600">
            SareeShop
          </a>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
              <Search className="h-6 w-6" />
            </button>
            <a href="/wishlist" className="text-gray-600">
              <Heart className="h-6 w-6" />
            </a>
            <a href="/cart" className="text-gray-600 relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto py-2 hide-scrollbar">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 relative whitespace-nowrap"
            >
              {item.name}
              {item.isNew && (
                <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs px-1 rounded">
                  NEW
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-gray-600">
            <Menu className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="/categories" className="flex flex-col items-center text-gray-600">
            <Menu className="h-6 w-6" />
            <span className="text-xs mt-1">Categories</span>
          </a>
          <a href="/deals" className="flex flex-col items-center text-gray-600">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs mt-1">Deals</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-gray-600">
            <Heart className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </div>
    </nav>
  )
}