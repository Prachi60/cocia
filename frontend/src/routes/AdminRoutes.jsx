import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Auth from '../pages/admin/Auth';
import Dashboard from '../pages/admin/Dashboard';
import Products from '../pages/admin/Products';
import Orders from '../pages/admin/Orders';
import Users from '../pages/admin/Users';
import SubAdmins from '../pages/admin/SubAdmins';
import Rules from '../pages/admin/Rules';
import AllVendors from '../pages/admin/vendors/AllVendors';
import AddVendor from '../pages/admin/vendors/AddVendor';
import AllDeliveries from '../pages/admin/delivery/AllDeliveries';
import AddDelivery from '../pages/admin/delivery/AddDelivery';
import Permissions from '../pages/admin/Permissions';
import Settings from '../pages/admin/Settings';

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Auth route without layout */}
      <Route path="auth" element={<Auth />} />

      {/* Admin pages with sidebar layout */}
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="sub-admins" element={<SubAdmins />} />
        <Route path="rules" element={<Rules />} />
        
        {/* Vendor Routes */}
        <Route path="vendors/all" element={<AllVendors />} />
        <Route path="vendors/add" element={<AddVendor />} />

        {/* Delivery Routes */}
        <Route path="delivery/all" element={<AllDeliveries />} />
        <Route path="delivery/add" element={<AddDelivery />} />

        <Route path="permissions" element={<Permissions />} />
        <Route path="settings" element={<Settings />} />
        
        {/* Default admin redirect */}
        <Route path="" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
