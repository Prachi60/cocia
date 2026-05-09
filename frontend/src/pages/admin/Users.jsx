import React, { useState } from 'react';
import { 
  Users as UsersIcon, Search, Filter, Mail, 
  Phone, MapPin, Calendar, MoreVertical,
  CheckCircle2, XCircle, Clock, ShieldCheck,
  Download, UserPlus, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_USERS = [
  { id: 'USR001', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', joined: '2026-05-01', totalSpent: '₹45,200', orders: 12, status: 'Active' },
  { id: 'USR002', name: 'Priyanka Das', email: 'priyanka@example.com', phone: '+91 98765 43211', joined: '2026-04-28', totalSpent: '₹12,500', orders: 4, status: 'Active' },
  { id: 'USR003', name: 'Amit Verma', email: 'amit@example.com', phone: '+91 98765 43212', joined: '2026-04-20', totalSpent: '₹89,400', orders: 28, status: 'VIP' },
  { id: 'USR004', name: 'Sneha Kapur', email: 'sneha@example.com', phone: '+91 98765 43213', joined: '2026-04-15', totalSpent: '₹0', orders: 0, status: 'Inactive' },
  { id: 'USR005', name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 98765 43214', joined: '2026-04-10', totalSpent: '₹1,56,000', orders: 45, status: 'VIP' },
];

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6 pb-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight font-montserrat uppercase">Customer Database</h1>
          <p className="text-slate-500 font-medium mt-1 font-raleway">Manage platform buyers, review their spending history and account status.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            <Download size={16} />
            Export List
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-100 hover:scale-105 active:scale-95 transition-all">
            <UserPlus size={16} />
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Buyers', value: '4,250', icon: UsersIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Active Now', value: '182', icon: Clock, color: 'text-green-500', bg: 'bg-green-50' },
          { label: 'Avg LTV', value: '₹12,400', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'New This Week', value: '+45', icon: UserPlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-11 h-11 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center shadow-inner`}>
              <stat.icon size={22} />
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
              <p className="text-xl font-black text-slate-900 font-roboto leading-none">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <div className="flex gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search by Name, Email or Phone..."
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-12 pr-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="px-6 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Customer Details</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Member Since</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {MOCK_USERS.map((user, i) => (
                <tr key={user.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 border border-slate-100">
                          {user.name.charAt(0)}
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 font-montserrat leading-tight">{user.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold mt-1">{user.email}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-black text-slate-900 font-roboto">{user.totalSpent}</td>
                  <td className="px-6 py-5">
                     <span className="px-2 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-black border border-slate-100">
                        {user.orders} Orders
                     </span>
                  </td>
                  <td className="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">{user.joined}</td>
                  <td className="px-6 py-5">
                     <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                       user.status === 'VIP' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 
                       user.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-slate-100 text-slate-400'
                     }`}>
                        {user.status}
                     </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-all">
                       <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
