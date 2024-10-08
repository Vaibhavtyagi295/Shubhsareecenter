import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'
import { MdLocalShipping, MdSecurity, MdSupport, MdPayment } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
              SareeShop is your destination for exquisite, handcrafted sarees from across India. We bring tradition and elegance to your wardrobe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <MdLocalShipping size={40} className="text-pink-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Free Shipping</h4>
              <p className="text-gray-600">On orders over ₹5000</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdSecurity size={40} className="text-pink-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Secure Payments</h4>
              <p className="text-gray-600">100% secure payment</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdSupport size={40} className="text-pink-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600">Dedicated support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdPayment size={40} className="text-pink-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Easy Returns</h4>
              <p className="text-gray-600">Hassle free returns</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} SareeShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer