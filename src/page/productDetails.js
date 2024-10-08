import React, { useState } from 'react'
import { FaStar, FaHeart, FaShoppingBag, FaTruck, FaArrowRight, FaChevronDown, FaChevronUp, FaInfoCircle, FaCamera, FaCommentAlt } from 'react-icons/fa'

const EnhancedProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('Onesize')
  const [selectedColor, setSelectedColor] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ]

  const colors = [
    { name: 'Orange', image: '/placeholder.svg' },
    { name: 'Pink', image: '/placeholder.svg' },
    { name: 'Green', image: '/placeholder.svg' },
    { name: 'Blue', image: '/placeholder.svg' },
    { name: 'Purple', image: '/placeholder.svg' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb and Sale Timer */}
      <div className="mb-6">
        <nav className="text-sm breadcrumbs">
          <ul className="flex flex-wrap items-center space-x-1 text-gray-500">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><FaArrowRight size={12} /></li>
            <li><a href="#" className="hover:text-primary">Clothing</a></li>
            <li><FaArrowRight size={12} /></li>
            <li><a href="#" className="hover:text-primary">Women</a></li>
            <li><FaArrowRight size={12} /></li>
            <li><a href="#" className="hover:text-primary">Sarees</a></li>
            <li><FaArrowRight size={12} /></li>
            <li className="text-primary">Mitera Orange Pure Chiffon Saree</li>
          </ul>
        </nav>
        <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mt-4 flex items-center justify-center space-x-2">
          <FaTruck size={20} />
          <span className="font-semibold">Sale Ends In:</span>
          <span className="countdown font-mono text-lg">
            <span style={{"--value":1}}></span>d
            <span style={{"--value":2}}></span>h
            <span style={{"--value":23}}></span>m
            <span style={{"--value":49}}></span>s
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <img 
              src={images[currentImage]} 
              alt="Saree" 
              className="w-full h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, index) => (
              <button 
                key={index} 
                className={`aspect-square rounded-lg overflow-hidden border-2 ${index === currentImage ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={img} alt={`Saree view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mitera</h1>
            <h2 className="text-xl text-gray-600">Orange Pure Chiffon Saree</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="font-bold text-lg">4.1</span>
              <FaStar size={16} />
            </div>
            <span className="text-gray-600">8.6k Ratings</span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">₹759</span>
            <span className="text-gray-500 line-through">MRP ₹3999</span>
            <span className="text-green-600 font-semibold">(81% OFF)</span>
          </div>

          <p className="text-green-600 font-medium">inclusive of all taxes</p>

          <div>
            <h3 className="font-semibold mb-3">SELECT COLOR</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map((color, index) => (
                <button
                  key={color.name}
                  className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-200 ${
                    selectedColor === index ? 'border-primary ring-2 ring-primary ring-opacity-50' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setSelectedColor(index)}
                >
                  <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">SELECT SIZE</h3>
            <div className="flex gap-3">
              <button
                className={`px-6 py-2 border rounded-full transition-all duration-200 ${
                  selectedSize === 'Onesize' ? 'bg-primary text-white' : 'border-gray-300 hover:border-primary'
                }`}
                onClick={() => setSelectedSize('Onesize')}
              >
                Onesize
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-grow bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-primary-dark flex items-center justify-center space-x-2">
              <FaShoppingBag size={20} />
              <span>ADD TO BAG</span>
            </button>
            <button className="border border-gray-300 p-3 rounded-full transition-all duration-200 hover:bg-gray-100">
              <FaHeart size={24} />
            </button>
          </div>

          <div className="border-t border-b py-4">
            <h3 className="font-semibold mb-3">DELIVERY OPTIONS</h3>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="Enter pincode" className="border p-2 rounded-l-md flex-grow" />
              <button className="bg-gray-100 p-2 rounded-r-md font-medium transition-all duration-200 hover:bg-gray-200">Check</button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Please enter PIN code to check delivery time & Pay on Delivery Availability
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              BEST OFFERS 
              <FaInfoCircle size={16} className="inline ml-2 text-gray-500" />
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Applicable on: Orders above Rs. 750 (only on first purchase)</li>
              <li>Coupon code: APPARELFIRST</li>
              <li>Coupon Discount: Rs. 305 off (check cart for final savings)</li>
            </ul>
            <button className="text-primary font-semibold mt-2 transition-all duration-200 hover:text-primary-dark">
              View Eligible Products
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              PRODUCT DETAILS
              <FaInfoCircle size={16} className="inline ml-2 text-gray-500" />
            </h3>
            <div className={`text-sm text-gray-600 space-y-2 ${isDescriptionExpanded ? '' : 'line-clamp-3'}`}>
              <p>Orange saree</p>
              <p>Abstract printed saree with no border</p>
              <p>The saree comes with an unstitched blouse piece</p>
              <p>The blouse worn by the model might be for modelling purpose only. Check the image of the blouse piece to understand how the actual blouse piece looks like.</p>
              <p>Blouse piece color might vary from the color of the saree.</p>
            </div>
            <button 
              className="text-primary font-semibold mt-2 flex items-center transition-all duration-200 hover:text-primary-dark"
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
              {isDescriptionExpanded ? 'Show Less' : 'See More'}
              {isDescriptionExpanded ? <FaChevronUp size={16} className="ml-1" /> : <FaChevronDown size={16} className="ml-1" />}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">RATINGS & REVIEWS</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center space-x-4">
            <div className="text-5xl font-bold">4.1</div>
            <div className="flex flex-col items-center">
              <div className="flex">
                {[1, 2, 3, 4].map(i => <FaStar key={i} size={24} color="gold" />)}
                <FaStar size={24} color="gray" />
              </div>
              <p className="text-sm text-gray-500">8.6k Verified Buyers</p>
            </div>
          </div>
          <div className="flex-grow">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center mb-1">
                <span className="w-4 text-sm text-gray-600">{rating}</span>
                <FaStar size={16} color="gold" />
                <div className="w-full h-2 bg-gray-200 rounded-full ml-2">
                  <div 
                    className="h-full bg-green-500 rounded-full" 
                    style={{width: `${Math.random() * 100}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-semibold mb-4">WHAT CUSTOMERS SAID</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-32 text-sm text-gray-600">Fabric Quality</span>
              <div className="w-48 h-2 bg-gray-200 rounded-full">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">Very Good (51%)</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 text-sm text-gray-600">Matches Photos</span>
              <div className="w-48 h-2 bg-gray-200 rounded-full">
                <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">Exactly (79%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Photos */}
      <div className="mt-12">
        <h3 className="font-semibold mb-4 flex items-center">
          <FaCamera size={20} className="mr-2" />
          Customer Photos (305)
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map(i => (
            <img 
              key={i} 
              src="/placeholder.svg" 
              alt={`Customer Photo ${i}`} 
              className="w-30 h-30 rounded-lg object-cover"
            />
          ))}
          <div className="w-30 h-30 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
            +300
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h3 className="font-semibold mb-4 flex items-center">
          <FaCommentAlt size={20} className="mr-2" />
          Customer Reviews (1183)
        </h3>
        <div className="space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center mr-2">
                  <span className="font-bold mr-1">5</span>
                  <FaStar size={12} />
                </div>
                <p className="font-semibold">Excellent product, highly recommended!</p>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                The saree is beautiful and exactly as shown in the pictures. The fabric quality is great, and it drapes wonderfully. I'm very satisfied with my purchase.
              </p>
              <div className="flex gap-2 mb-2">
                <img  src="/placeholder.svg" alt="Review Photo" className="w-15 h-15 rounded-md object-cover" />
                <img src="/placeholder.svg" alt="Review Photo" className="w-15 h-15 rounded-md object-cover" />
              </div>
              <p className="text-sm text-gray-500">Priya S. | 15 Mar 2024</p>
            </div>
          ))}
        </div>
        <button className="mt-4 text-primary font-semibold transition-all duration-200 hover:text-primary-dark">
          View All Reviews
        </button>
      </div>
    </div>
  )
}

export default EnhancedProductDetail