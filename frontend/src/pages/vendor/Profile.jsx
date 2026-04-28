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
  Edit2,
  ArrowLeft,
  Mail,
  Zap,
  MessageSquare,
  Languages,
  Store,
  Star,
  ChevronRight,
  HandCoins,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAccountStore from '../../store/useAccountStore';
import MenuItem from '../../components/vendor/MenuItem';

const VendorProfile = () => {
  const navigate = useNavigate();
  const { userProfile } = useAccountStore();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--card-bg)] min-h-screen pb-10"
    >
      {/* Top Profile Header */}
      <div className="bg-[var(--card-bg)] p-6 mb-2 border-b border-[var(--card-border)] relative">
        <div className="absolute top-6 left-4">
           <button onClick={() => navigate(-1)} className="text-[var(--card-text)] hover:text-[var(--color-gold)] transition-colors">
              <ArrowLeft size={24} />
           </button>
        </div>
        
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="w-24 h-24 bg-[var(--color-gold)] rounded-full flex items-center justify-center text-black font-black text-4xl shadow-[0_0_30px_rgba(226,167,80,0.3)] border-4 border-black overflow-hidden">
            {userProfile.avatar ? (
              <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              userProfile.name.charAt(0)
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-black text-[var(--card-text)] tracking-tight">{userProfile.name}</h1>
            <p className="text-[var(--card-sub)] text-sm font-medium">{userProfile.email}</p>
            <button 
              onClick={() => navigate('/vendor/profile/edit')}
              className="mt-3 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[2px] text-[var(--color-gold)] hover:opacity-80 transition-opacity bg-[var(--color-gold)]/10 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30"
            >
              <Edit2 size={12} /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl mt-4 space-y-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div 
            onClick={() => navigate('/vendor/profile/orders')}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 flex items-center gap-3 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer"
          >
             <div className="p-2 bg-blue-500/10 rounded-lg"><ShoppingBag size={18} className="text-blue-500" /></div>
             <span className="text-xs font-black text-[var(--card-text)]">Orders</span>
          </div>
          <div 
            onClick={() => navigate('/vendor/profile/wishlist')}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 flex items-center gap-3 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer"
          >
             <div className="p-2 bg-red-500/10 rounded-lg"><Star size={18} className="text-red-500" /></div>
             <span className="text-xs font-black text-[var(--card-text)]">Wishlist</span>
          </div>
          <div 
            onClick={() => navigate('/vendor/profile/coupons')}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 flex items-center gap-3 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer"
          >
             <div className="p-2 bg-green-500/10 rounded-lg"><Zap size={18} className="text-green-500" /></div>
             <span className="text-xs font-black text-[var(--card-text)]">Coupons</span>
          </div>
          <div 
            onClick={() => navigate('/vendor/profile/help-center')}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 flex items-center gap-3 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer"
          >
             <div className="p-2 bg-purple-500/10 rounded-lg"><HelpCircle size={18} className="text-purple-500" /></div>
             <span className="text-xs font-black text-[var(--card-text)]">Help Center</span>
          </div>
        </div>

        {/* ACCOUNT Section */}
        <div className="pt-4">
          <h3 className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] mb-3 px-2">Account Settings</h3>
          <div className="bg-[var(--card-bg)] rounded-2xl shadow-sm border border-[var(--card-border)] overflow-hidden px-2">
            <MenuItem icon={User} title="Edit Profile" path="/vendor/profile/edit" />
            <MenuItem icon={Building2} title="Saved Addresses" path="/vendor/profile/addresses" />
            <MenuItem icon={CreditCard} title="Saved Cards" path="/vendor/profile/cards" />
            <MenuItem icon={Bell} title="Notification Settings" path="/vendor/profile/notifications" />
          </div>
        </div>

        {/* My Activity Section */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] px-2">My Activity</h3>
          <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] overflow-hidden px-2">
             <MenuItem icon={MessageSquare} title="Reviews" path="/vendor/profile/reviews" />
             <MenuItem icon={MessageSquare} title="Questions & Answers" path="/vendor/profile/questions" />
          </div>
        </div>

        {/* LOGOUT Section */}
        <div className="mb-10 pt-4">
          <div className="bg-[var(--card-bg)] rounded-2xl shadow-sm border border-[var(--card-border)] overflow-hidden px-2">
            <MenuItem 
              icon={LogOut} 
              title="Sign Out" 
              path="/vendor/login" 
              color="text-red-500" 
              textColor="text-red-500 font-black" 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VendorProfile;
