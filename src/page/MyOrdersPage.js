import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Package } from 'lucide-react'

const orders = [
  {
    id: 'ORD001',
    date: '2023-06-15',
    status: 'Delivered',
    total: 12999,
    items: [
      { id: 1, name: 'Royal Blue Silk Saree', price: 5999, quantity: 1 },
      { id: 2, name: 'Golden Zari Silk Saree', price: 6999, quantity: 1 },
    ],
  },
  {
    id: 'ORD002',
    date: '2023-06-02',
    status: 'Processing',
    total: 7599,
    items: [
      { id: 3, name: 'Maroon Bridal Silk Saree', price: 7599, quantity: 1 },
    ],
  },
  {
    id: 'ORD003',
    date: '2023-05-20',
    status: 'Shipped',
    total: 9999,
    items: [
      { id: 4, name: 'Green Patola Silk Saree', price: 4999, quantity: 2 },
    ],
  },
]

const OrderCard = ({ order }) => {
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
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Order #{order.id}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {order.status}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">Ordered on {order.date}</p>
        <p className="text-lg font-semibold mt-2">Total: ₹{order.total.toLocaleString()}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center"
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
          {isExpanded ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />}
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <h4 className="font-semibold mb-2">Order Items:</h4>
            <ul className="space-y-2">
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const MyOrdersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <Package className="mr-2" size={32} />
          My Orders
        </h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyOrdersPage