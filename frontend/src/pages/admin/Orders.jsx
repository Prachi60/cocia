import React from 'react';

const Orders = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Orders Management</h1>
        <p className="text-slate-500 text-sm mt-1">Track and manage customer orders.</p>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">📦</span>
        </div>
        <h3 className="text-lg font-medium text-slate-800">No orders yet</h3>
        <p className="text-slate-500 text-sm mt-1 max-w-xs">When customers place orders, they will appear here for processing.</p>
      </div>
    </div>
  );
};

export default Orders;
