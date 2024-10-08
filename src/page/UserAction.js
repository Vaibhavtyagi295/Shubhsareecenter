import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Package, CreditCard, Heart, Settings, LogOut, ChevronRight, Edit2 } from 'lucide-react'

const userInfo = {
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  avatar: 'https://uxqjqmjvxvhbqbhxjjqe.supabase.co/storage/v1/object/public/images/avatar.jpg',
  memberSince: 'September 2022',
}

const menuItems = [
  { icon: Package, label: 'My Orders', count: 5 },
  { icon: CreditCard, label: 'Payment Methods', count: 2 },
  { icon: Heart, label: 'Wishlist', count: 8 },
  { icon: Settings, label: 'Account Settings' },
]

const recentOrders = [
  { id: 'ORD001', date: '2023-05-15', status: 'Delivered', total: 12999 },
  { id: 'ORD002', date: '2023-06-02', status: 'Processing', total: 7599 },
  { id: 'ORD003', date: '2023-06-10', status: 'Shipped', total: 9999 },
]

const UserAccountPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* User Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <img src={userInfo.avatar} alt={userInfo.name} className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <h2 className="text-2xl font-semibold">{userInfo.name}</h2>
                  <p className="text-gray-600">{userInfo.email}</p>
                  <p className="text-sm text-gray-500">Member since {userInfo.memberSince}</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Edit2 size={18} className="mr-2" />
                Edit Profile
              </button>
            </div>

            {/* Menu Items */}
            <nav className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  whileHover={{ backgroundColor: '#f3f4f6' }}
                  className="w-full text-left px-6 py-4 border-b border-gray-200 last:border-b-0 flex items-center justify-between"
                  onClick={() => setActiveTab(item.label.toLowerCase())}
                >
                  <div className="flex items-center">
                    <item.icon size={20} className="text-blue-500 mr-3" />
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center">
                    {item.count && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                        {item.count}
                      </span>
                    )}
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>
                </motion.button>
              ))}
            </nav>

            <button className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center">
              <LogOut size={18} className="mr-2" />
              Log Out
            </button>
          </motion.div>

          {/* Main Content Area */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white rounded-lg shadow-md p-6"
              >
                {activeTab === 'dashboard' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-blue-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Recent Orders</h4>
                        <p className="text-3xl font-bold text-blue-600">{recentOrders.length}</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Wishlist Items</h4>
                        <p className="text-3xl font-bold text-green-600">8</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-6 mb-3">Recent Orders</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th className="px-6 py-3">Order ID</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                              <td className="px-6 py-4">{order.date}</td>
                              <td className="px-6 py-4">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    order.status === 'Delivered'
                                      ? 'bg-green-100 text-green-800'
                                      : order.status === 'Processing'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-blue-100 text-blue-800'
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">₹{order.total.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTab !== 'dashboard' && (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-semibold mb-4">{activeTab}</h3>
                    <p className="text-gray-600">This section is under construction. Check back soon!</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAccountPage