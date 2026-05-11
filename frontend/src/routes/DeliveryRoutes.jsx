import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DeliveryLayout from '../layouts/DeliveryLayout';
import DeliveryAuth from '../pages/delivery/Auth';
import DeliveryDashboard from '../pages/delivery/Dashboard';
import DeliveryOrders from '../pages/delivery/Orders';
import DeliveryOrderDetail from '../pages/delivery/OrderDetail';
import DeliveryEarnings from '../pages/delivery/Earnings';
import DeliveryProfile from '../pages/delivery/Profile';

const DeliveryRoutes = () => {
  return (
    <Routes>
      <Route path="auth" element={<DeliveryAuth />} />
      <Route element={<DeliveryLayout />}>
        <Route path="dashboard" element={<DeliveryDashboard />} />
        <Route path="orders" element={<DeliveryOrders />} />
        <Route path="orders/:orderId" element={<DeliveryOrderDetail />} />
        <Route path="earnings" element={<DeliveryEarnings />} />
        <Route path="profile" element={<DeliveryProfile />} />
        <Route path="" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default DeliveryRoutes;
