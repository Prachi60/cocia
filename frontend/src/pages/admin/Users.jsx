import React from 'react';

const Users = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Users Management</h1>
        <p className="text-slate-500 text-sm mt-1">Manage registered customers and their accounts.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">👥</span>
        </div>
        <h3 className="text-lg font-medium text-slate-800">No users found</h3>
        <p className="text-slate-500 text-sm mt-1 max-w-xs">New user registrations will be listed here.</p>
      </div>
    </div>
  );
};

export default Users;
