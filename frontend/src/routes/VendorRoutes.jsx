import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import VendorLayout from '../layouts/VendorLayout';
import Home from '../pages/vendor/Home';
import Login from '../pages/vendor/Login';
import Signup from '../pages/vendor/Signup';
import Products from '../pages/vendor/Products';
import ProductDetail from '../pages/vendor/ProductDetail';
import Cart from '../pages/vendor/Cart';
import Bag from '../pages/vendor/Bag';
import Profile from '../pages/vendor/Profile';
import Wallet from '../pages/vendor/Wallet';
import Menu from '../pages/vendor/Menu';

const VendorRoutes = () => {
  return (
    <Routes>
      {/* Auth routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Pages with layout */}
      <Route element={<VendorLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/menu" element={<Menu />} />
      </Route>

      {/* Redirects */}
      <Route path="/" element={<Navigate to="home" replace />} />
    </Routes>
  );
};

export default VendorRoutes;
