import React from 'react';
import { 
  User, 
  Building2, 
  CreditCard, 
  ShoppingBag, 
  Package, 
  PlusCircle, 
  Warehouse, 
  Wallet, 
  History, 
  Bell, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Edit2
} from 'lucide-react';
import MenuItem from '../../components/vendor/MenuItem';

const VendorProfile = () => {
  return (
    <div className="bg-[#eaeded] min-h-screen pb-24">
      {/* Top Profile Header */}
      <div className="bg-white p-6 mb-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-slate-900 font-bold text-3xl shadow-md border-4 border-white">
            H
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-800">Harsh Pandey</h1>
            <p className="text-slate-500 text-sm">harsh.vendor@shophub.com</p>
            <button className="mt-2 flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
              <Edit2 size={12} /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl">
        {/* ACCOUNT Section */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Account</h3>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden px-2">
            <MenuItem icon={User} title="Profile" path="/vendor/profile" />
            <MenuItem icon={Building2} title="Business Details" path="/vendor/profile" />
            <MenuItem icon={CreditCard} title="Bank Details" path="/vendor/profile" />
          </div>
        </div>

        {/* ORDERS & PRODUCTS Section */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Orders & Products</h3>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden px-2">
            <MenuItem icon={ShoppingBag} title="My Orders" path="/vendor/profile" color="text-blue-500" />
            <MenuItem icon={Package} title="Manage Products" path="/vendor/products" color="text-orange-500" />
            <MenuItem icon={PlusCircle} title="Add Product" path="/admin/products" color="text-green-500" />
            <MenuItem icon={Warehouse} title="Inventory" path="/vendor/profile" color="text-indigo-500" />
          </div>
        </div>

        {/* EARNINGS Section */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Earnings</h3>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden px-2">
            <MenuItem icon={Wallet} title="Wallet" path="/vendor/wallet" color="text-purple-500" />
            <MenuItem icon={CreditCard} title="Payments" path="/vendor/wallet" color="text-emerald-500" />
            <MenuItem icon={History} title="Transactions" path="/vendor/wallet" color="text-amber-500" />
          </div>
        </div>

        {/* SETTINGS Section */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Settings</h3>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden px-2">
            <MenuItem icon={Bell} title="Notifications" path="/vendor/profile" />
            <MenuItem icon={Settings} title="Settings" path="/vendor/profile" />
          </div>
        </div>

        {/* SUPPORT Section */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Support</h3>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden px-2">
            <MenuItem icon={HelpCircle} title="Help Center" path="/vendor/profile" />
            <MenuItem icon={User} title="Customer Support" path="/vendor/profile" />
          </div>
        </div>

        {/* LOGOUT Section */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden px-2">
            <MenuItem 
              icon={LogOut} 
              title="Sign Out" 
              path="/vendor/login" 
              color="text-red-500" 
              textColor="text-red-600 font-bold" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
