import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Truck, Star, LogOut, ChevronRight, Edit3, ShieldCheck, BanknoteIcon } from 'lucide-react';

const AGENT = {
  name: 'Amit Kumar',
  phone: '+91 98765 43210',
  zone: 'South Delhi',
  vehicle: 'Electric Bike',
  vehicleNumber: 'DL 9C AB 1234',
  license: 'DL-0420110012345',
  rating: 4.8,
  totalDeliveries: 1245,
  joined: 'Jan 2025',
  bank: 'HDFC Bank • ****4321',
};

const DeliveryProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/delivery/auth');

  return (
    <div className="pt-5 px-4 pb-8 space-y-5">
      {/* Profile Header */}
      <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-2xl shadow-blue-100 flex items-center gap-5">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-black">
          {AGENT.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-black tracking-tight">{AGENT.name}</h1>
          <div className="flex items-center gap-1.5 mt-1">
            <Star size={13} className="text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-black">{AGENT.rating}</span>
            <span className="text-white/60 text-xs font-medium">• {AGENT.totalDeliveries} deliveries</span>
          </div>
          <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mt-1">Partner since {AGENT.joined}</p>
        </div>
        <button className="p-2 bg-white/20 rounded-xl">
          <Edit3 size={16} className="text-white" />
        </button>
      </div>

      {/* Info Sections */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-50">
        {[
          { icon: Phone, label: 'Phone', value: AGENT.phone },
          { icon: MapPin, label: 'Service Zone', value: AGENT.zone },
          { icon: Truck, label: 'Vehicle', value: `${AGENT.vehicle} • ${AGENT.vehicleNumber}` },
          { icon: ShieldCheck, label: 'License', value: AGENT.license },
          { icon: BanknoteIcon, label: 'Bank Account', value: AGENT.bank },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4">
            <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
              <item.icon size={17} className="text-slate-400" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
              <p className="text-sm font-bold text-slate-900 mt-0.5">{item.value}</p>
            </div>
            <ChevronRight size={16} className="text-slate-300" />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'This Month', value: '₹8,240', sub: 'earned' },
          { label: 'Completion', value: '97%', sub: 'rate' },
          { label: 'Avg Time', value: '22 min', sub: 'per delivery' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center">
            <p className="text-lg font-black text-slate-900">{s.value}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{s.label}</p>
            <p className="text-[10px] text-slate-300 font-medium">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Help & Logout */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-50">
        <button className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors">
          <ShieldCheck size={18} className="text-slate-400" />
          <span className="text-sm font-bold text-slate-700">Help & Support</span>
          <ChevronRight size={16} className="text-slate-300 ml-auto" />
        </button>
        <button onClick={handleLogout} className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-red-50 transition-colors">
          <LogOut size={18} className="text-red-500" />
          <span className="text-sm font-bold text-red-500">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default DeliveryProfile;
