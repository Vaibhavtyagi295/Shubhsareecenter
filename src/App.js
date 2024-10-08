import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './component/Home';
import ProductDetail from './page/productDetails';
import Cart from './page/cart';
import WishlistPage from './page/WishlistPage';
import UserAction from './page/UserAction';
import AccountSettingsPage from './page/AccountSettingsPage';
import PaymentMethodsPage from './page/PaymentMethodsPage';
import MyOrdersPage from './page/MyOrdersPage';
import Collection from './component/sareeCollection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar Component */}
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/product" element={<ProductDetail />} /> {/* Product Detail Page */}
            <Route path="/Cart" element={<Cart />} /> {/* Cart Page */}
            <Route path="/WishlistPage" element={<WishlistPage />} /> {/* Wishlist Page */}
            <Route path="/UserAction" element={<UserAction />} /> {/* User Action Page */}
            <Route path="/account-settings" element={<AccountSettingsPage />} /> {/* Account Settings Page */}
            <Route path="/payment-methods" element={<PaymentMethodsPage />} /> {/* Payment Methods Page */}
            <Route path="/my-orders" element={<MyOrdersPage />} /> {/* My Orders Page */}
            <Route path="/collection" element={<Collection />} /> {/* My Orders Page */}
          </Routes>
        </div>

        <Footer /> {/* Footer Component */}
      </div>
    </Router>
  );
}

export default App;
 