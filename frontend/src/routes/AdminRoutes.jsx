import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Auth from '../pages/admin/Auth';
import Dashboard from '../pages/admin/Dashboard';
import ProductModeration from '../modules/admin/products/ProductModeration';
import VendorList from '../modules/admin/vendors/VendorList';
import VendorApproval from '../modules/admin/vendors/VendorApproval';
import SellerDashboard from '../modules/vendor/dashboard/Dashboard';
import InventoryList from '../modules/vendor/inventory/InventoryList';
import CategoryManager from '../modules/admin/catalog/CategoryManager';
import BannerManager from '../modules/admin/catalog/BannerManager';
import CategoryChipsManager from '../modules/admin/catalog/CategoryChipsManager';
import HomeSectionsManager from '../modules/admin/catalog/HomeSectionsManager';

// New Admin Pages
import Analytics from '../pages/admin/Analytics';
import Orders from '../pages/admin/Orders';
import AddProduct from '../pages/admin/AddProduct';
import PlatformEarnings from '../pages/admin/finance/PlatformEarnings';
import Payouts from '../pages/admin/Payouts';
import Rules from '../pages/admin/Rules';
import AllDeliveries from '../pages/admin/delivery/AllDeliveries';
import DeliveryApproval from '../pages/admin/delivery/DeliveryApproval';
import Settings from '../pages/admin/Settings';
import Users from '../pages/admin/Users';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="auth" element={<Auth />} />

      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<Users />} />
        
        {/* Storefront & Catalog */}
        <Route path="products/moderation" element={<ProductModeration />} />
        <Route path="categories" element={<CategoryManager />} />
        <Route path="storefront/banners" element={<BannerManager />} />
        <Route path="storefront/chips" element={<CategoryChipsManager />} />
        <Route path="storefront/sections/:section" element={<HomeSectionsManager />} />
        
        {/* Business Ops */}
        <Route path="inventory/all" element={<InventoryList />} />
        <Route path="inventory/add" element={<AddProduct />} />
        <Route path="orders" element={<Orders />} />
        
        {/* Partners */}
        <Route path="vendors/all" element={<VendorList />} />
        <Route path="vendors/approval" element={<VendorApproval />} />
        <Route path="delivery/all" element={<AllDeliveries />} />
        <Route path="delivery/approval" element={<DeliveryApproval />} />
        
        {/* Finance */}
        <Route path="finance/earnings" element={<PlatformEarnings />} />
        <Route path="payouts" element={<Payouts />} />
        <Route path="finance/rules" element={<Rules />} />
        
        {/* System */}
        <Route path="settings" element={<Settings />} />
        
        <Route path="" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
