import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Plus, Trash2 } from 'lucide-react'

const initialPaymentMethods = [
  { id: 1, type: 'Visa', last4: '4242', expiry: '12/24' },
  { id: 2, type: 'Mastercard', last4: '5555', expiry: '10/23' },
]

const PaymentMethodCard = ({ method, onDelete }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
  >
    <div className="flex items-center">
      <CreditCard className="h-8 w-8 text-indigo-600 mr-3" />
      <div>
        <p className="font-semibold">{method.type} ending in {method.last4}</p>
        <p className="text-sm text-gray-600">Expires {method.expiry}</p>
      </div>
    </div>
    <button
      onClick={() => onDelete(method.id)}
      className="text-red-500 hover:text-red-700 transition-colors duration-200"
      aria-label="Delete payment method"
    >
      <Trash2 size={20} />
    </button>
  </motion.div>
)

const AddPaymentMethodForm = ({ onAdd }) => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically validate the input and send it to your payment processor
    onAdd({
      id: Date.now(),
      type: 'New Card',
      last4: cardNumber.slice(-4),
      expiry,
    })
    setCardNumber('')
    setExpiry('')
    setCvv('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Add New Payment Method</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="123"
              required
            />
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Plus className="h-5 w-5 mr-2" aria-hidden="true" />
        Add Payment Method
      </motion.button>
    </form>
  )
}

const PaymentMethodsPage = () => {
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)

  const handleAddPaymentMethod = (newMethod) => {
    setPaymentMethods([...paymentMethods, newMethod])
  }

  const handleDeletePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <CreditCard className="mr-2" size={32} />
          Payment Methods
        </h1>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              onDelete={handleDeletePaymentMethod}
            />
          ))}
        </div>
        <AddPaymentMethodForm onAdd={handleAddPaymentMethod} />
      </div>
    </div>
  )
}

export default PaymentMethodsPage