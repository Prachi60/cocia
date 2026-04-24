import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  ShoppingCart,
  User,
  Search,
  MapPin,
  Menu,
  Home as HomeIcon,
  ChevronRight,
  ChevronDown,
  Wallet,
  Mic,
  Scan,
  Grid
} from 'lucide-react';

import MainSidebar from '../components/common/MainSidebar';

const VendorLayout = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7]">
      {/* Drawer Sidebar */}
      <MainSidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Mobile-First Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#90f2ff] to-[#bdfeff] shadow-sm px-3 pt-2 pb-2">
        {/* Top Row: Logo & Cart */}
        <div className="flex justify-between items-center mb-2">
          <Link to="/vendor/home" className="flex items-center">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
              className="h-6 object-contain"
            />
            <span className="text-[10px] font-bold mt-2 ml-0.5 text-slate-800">.in</span>
          </Link>
          <Link to="/vendor/cart" className="relative p-1">
            <ShoppingCart size={24} className="text-slate-800" />
            <span className="absolute -top-1 -right-1 bg-white text-[#cc0c39] text-[9px] font-black px-1 rounded-full border border-gray-200">0</span>
          </Link>
        </div>

        {/* Search Row */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 flex items-center bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-gray-200">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
            />
            <div className="flex items-center gap-3 ml-2 text-gray-400">
              <Scan size={20} className="cursor-pointer" />
              <Mic size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Location Bar & Prime Button */}
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#a2f7ff] px-3 py-2 flex items-center gap-2 rounded-xl border border-cyan-300/50 shadow-sm">
            <MapPin size={16} className="text-slate-800" />
            <span className="text-xs text-slate-800 font-bold truncate">Deliver to 452012</span>
            <ChevronDown size={14} className="text-slate-800 shrink-0" />
          </div>
          <button className="bg-[#007185] text-white text-[10px] font-black px-4 py-2.5 rounded-xl shadow-sm whitespace-nowrap active:scale-95 transition-transform">
            Join Prime
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          <div className="container mx-auto flex h-full">
            <main className="flex-1 min-w-0 overflow-y-auto pb-16">
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      {/* Mobile-First Bottom Navbar (Fixed) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-1.5 flex justify-between items-center z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <Link to="/vendor/home" className={`flex flex-col items-center ${location.pathname === '/vendor/home' ? 'text-slate-900' : 'text-slate-500'}`}>
          <HomeIcon size={22} strokeWidth={location.pathname === '/vendor/home' ? 2.5 : 2} className="text-slate-900" />
          <span className={`text-[9px] ${location.pathname === '/vendor/home' ? 'font-black' : 'font-medium'} text-slate-900`}>Home</span>
          {location.pathname === '/vendor/home' && <div className="w-1 h-1 bg-slate-900 rounded-full mt-0.5" />}
        </Link>
        <Link to="/vendor/profile" className={`flex flex-col items-center ${location.pathname === '/vendor/profile' ? 'text-slate-900' : 'text-slate-500'}`}>
          <User size={22} strokeWidth={location.pathname === '/vendor/profile' ? 2.5 : 2} className="text-slate-900" />
          <span className={`text-[9px] ${location.pathname === '/vendor/profile' ? 'font-black' : 'font-medium'} text-slate-900`}>You</span>
        </Link>
        <Link to="/vendor/cart" className={`flex flex-col items-center ${location.pathname === '/vendor/cart' ? 'text-slate-900' : 'text-slate-500'}`}>
          <div className="relative">
            <ShoppingCart size={22} strokeWidth={location.pathname === '/vendor/cart' ? 2.5 : 2} className="text-slate-900" />
            <span className="absolute -top-1 -right-1.5 bg-[#cc0c39] text-white text-[8px] font-black px-1 rounded-full border border-white shadow-sm">0</span>
          </div>
          <span className={`text-[9px] ${location.pathname === '/vendor/cart' ? 'font-black' : 'font-medium'} text-slate-900`}>Cart</span>
        </Link>
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex flex-col items-center text-slate-900"
        >
          <Menu size={22} strokeWidth={2} className="text-slate-900" />
          <span className="text-[9px] font-medium text-slate-900">Menu</span>
        </button>
      </nav>
    </div>
  );
};

export default VendorLayout;
