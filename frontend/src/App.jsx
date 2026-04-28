import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import VendorRoutes from './routes/VendorRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" toastOptions={{
        style: {
          background: '#121212',
          color: '#e2a750',
          border: '1px solid rgba(226, 167, 80, 0.2)',
          fontSize: '12px',
          fontWeight: 'black',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }
      }} />
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
