import React from 'react';
import { 
  User, 
  Building2, 
  CreditCard, 
  ShoppingBag, 
  Star, 
  Zap, 
  HelpCircle, 
  LogOut, 
  Edit2,
  ArrowLeft,
  Bell,
  MessageSquare,
  ChevronRight,
  Settings,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAccountStore from '../../store/useAccountStore';

const VendorProfile = () => {
  const navigate = useNavigate();
  const { userProfile } = useAccountStore();

  const menuSections = [
    {
      title: 'Account Settings',
      items: [
        { icon: User, title: 'Edit Profile', path: '/vendor/profile/edit', color: 'text-blue-500' },
        { icon: Building2, title: 'Saved Addresses', path: '/vendor/profile/addresses', color: 'text-emerald-500' },
        { icon: CreditCard, title: 'Payment Methods', path: '/vendor/profile/cards', color: 'text-purple-500' },
        { icon: Bell, title: 'Notifications', path: '/vendor/profile/notifications', color: 'text-orange-500' }
      ]
    },
    {
      title: 'My Activity',
      items: [
        { icon: ShoppingBag, title: 'Order History', path: '/vendor/profile/orders', color: 'text-indigo-500' },
        { icon: Star, title: 'Wishlist', path: '/vendor/profile/wishlist', color: 'text-red-500' },
        { icon: MessageSquare, title: 'My Reviews', path: '/vendor/profile/reviews', color: 'text-cyan-500' },
        { icon: MessageSquare, title: 'Q&A', path: '/vendor/profile/questions', color: 'text-amber-500' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, title: 'Help Center', path: '/vendor/profile/help-center', color: 'text-slate-500' },
        { icon: ShieldCheck, title: 'Privacy Policy', path: '/vendor/profile/privacy', color: 'text-slate-500' }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen pb-32 font-sans"
    >
      {/* Premium Profile Header */}
      <div className="bg-[#2874f0] pt-6 pb-20 rounded-b-[40px] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="px-6 flex items-center justify-between mb-8">
           <button onClick={() => navigate(-1)} className="text-white active:scale-90 transition-transform">
              <ArrowLeft size={28} />
           </button>
           <h1 className="text-white text-[20px] font-black uppercase tracking-widest">Profile</h1>
           <button onClick={() => navigate('/vendor/settings')} className="text-white">
              <Settings size={24} />
           </button>
        </div>

        <div className="flex flex-col items-center px-6">
           <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full p-1 shadow-2xl">
                 <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-50">
                    {userProfile.avatar ? (
                      <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl font-black text-[#2874f0]">{userProfile.name.charAt(0)}</span>
                    )}
                 </div>
              </div>
              <button 
                onClick={() => navigate('/vendor/profile/edit')}
                className="absolute bottom-0 right-0 w-8 h-8 bg-[#f39c12] text-white rounded-full flex items-center justify-center border-4 border-[#2874f0] shadow-lg active:scale-90 transition-transform"
              >
                 <Edit2 size={12} />
              </button>
           </div>
           <h2 className="text-white text-[24px] font-black mt-4 tracking-tight">{userProfile.name}</h2>
           <p className="text-white/80 text-[13px] font-medium flex items-center gap-1.5 mt-1">
              <Mail size={12} /> {userProfile.email}
           </p>
        </div>
      </div>

      {/* Profile Menu Items */}
      <div className="px-5 -mt-10 space-y-8">
        {menuSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-4">
             <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[3px] px-2">{section.title}</h3>
             <div className="bg-[#cccccc]/10 rounded-[32px] overflow-hidden border border-gray-100 shadow-sm p-2">
                {section.items.map((item, iIdx) => (
                  <div 
                    key={iIdx}
                    onClick={() => navigate(item.path)}
                    className="flex items-center gap-4 px-4 py-4 active:bg-gray-50 transition-all cursor-pointer group"
                  >
                    <div className={`p-2.5 rounded-2xl bg-white shadow-sm transition-transform group-active:scale-90`}>
                       <item.icon size={20} className={item.color} />
                    </div>
                    <span className="text-[15px] font-black text-[#1c2331] flex-1">{item.title}</span>
                    <ChevronRight size={18} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
             </div>
          </div>
        ))}

        {/* Sign Out Card */}
        <div className="pt-4">
           <div 
             onClick={() => navigate('/vendor/login')}
             className="bg-red-50 rounded-[32px] p-2 border border-red-100 active:scale-95 transition-transform cursor-pointer"
           >
              <div className="flex items-center gap-4 px-4 py-4">
                 <div className="p-2.5 rounded-2xl bg-white shadow-sm text-red-500">
                    <LogOut size={20} />
                 </div>
                 <span className="text-[15px] font-black text-red-600 flex-1">Sign Out</span>
                 <ChevronRight size={18} className="text-red-200" />
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VendorProfile;
