import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import VendorRoutes from './routes/VendorRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Panel Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Vendor Panel Routes */}
        <Route path="/vendor/*" element={<VendorRoutes />} />

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/vendor/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
