import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
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
  Camera,
  Scan,
  Grid,
  Moon,
  Sun,
  Palette,
  X,
  Bell,
  Heart,
  ShoppingBag,
  Smartphone,
  Gamepad2,
  Sparkles,
  Gem,
  Coins,
  Pencil,
  Shirt
} from 'lucide-react';

import MainSidebar from '../components/common/MainSidebar';
import useAccountStore from '../store/useAccountStore';
import useVendorStore from '../store/useVendorStore';

const VendorLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const { userProfile, savedAddresses, selectedAddressId, isDarkMode, toggleDarkMode } = useAccountStore();
  const { selectedCategory, setSelectedCategory } = useVendorStore();
  const selectedAddress = savedAddresses.find(a => a.id === selectedAddressId) || savedAddresses[0];

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('userCart') || '[]');
        const totalCount = cart.reduce((acc, item) => acc + (item.quantity || item.qty || 1), 0);
        setCartCount(totalCount);
      } catch (e) {
        console.error("Cart count error:", e);
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const isImmersivePage = location.pathname.includes('category-products') || location.pathname.includes('product-detail') || location.pathname.includes('all-offers') || location.pathname.includes('cart') || location.pathname.includes('/vendor/profile') || location.pathname.includes('/vendor/deals') || location.pathname.includes('/vendor/search');

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 text-slate-900">
      {/* Drawer Sidebar */}
      <MainSidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Flipkart-Style Sticky Header */}
      {!isImmersivePage && (
        <header className="sticky top-0 z-50 bg-[#2874f0] shadow-md px-3 pt-2 pb-0" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {/* Row 1: Logo & Icons */}
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center">
              <Link to="/vendor/home" onClick={() => setSelectedCategory('Home')} className="flex items-center">
                <img
                  src="/Logo (4).png"
                  alt="Cocia"
                  className="h-14 w-32 object-contain scale-[1.5] origin-left -ml-4"
                />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/vendor/notifications" className="p-1">
                <Bell size={20} strokeWidth={1.5} className="text-white" />
              </Link>
              <Link to="/vendor/wishlist" className="p-1">
                <Heart size={20} strokeWidth={1.5} className="text-white" />
              </Link>
              <Link to="/vendor/cart" className="relative p-1">
                <ShoppingCart size={20} strokeWidth={1.5} className="text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-1 text-[8px] font-black px-1.5 py-0.5 rounded-full bg-red-500 text-white border border-[#2874f0] leading-none shadow-sm">{cartCount}</span>
                )}
              </Link>
            </div>
          </div>

          {/* Row 2: Delivery Section (Matching Reference Image) */}
          <div className="flex justify-between items-center gap-2 mb-2.5">
            <Link 
              to="/vendor/profile/addresses" 
              className="flex-1 flex items-center gap-2 bg-[#1c5cbd] px-2 py-1.5 rounded-xl border border-white/10 overflow-hidden"
            >
              <div className="bg-white p-1 rounded-lg">
                <HomeIcon size={12} strokeWidth={2.5} className="text-[#2874f0]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-black text-white tracking-wide uppercase">Home</span>
                  <ChevronDown size={10} strokeWidth={3} className="text-white" />
                </div>
                <span className="text-[9px] font-medium text-white/80 truncate">
                  {selectedAddress?.address || '83 kishan pura mataji mandir, sector no...'}
                </span>
              </div>
            </Link>

            <div className="flex items-center bg-[#1c5cbd] px-2.5 py-1.5 rounded-xl border border-white/10 gap-1.5">
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-[9px] font-black text-blue-800">⚡</span>
              </div>
              <span className="text-[12px] font-black text-white">0</span>
            </div>
          </div>

          {/* Row 3: Search Bar & Scan Icon */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="flex-1 flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-transparent focus-within:border-white/50 transition-all">
              <Search size={18} strokeWidth={1.5} className="text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search items, brands, categories..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchTerm.trim()) {
                    navigate(`/vendor/search?q=${searchTerm}`);
                  }
                }}
                className="flex-1 bg-transparent outline-none text-[14px] px-2.5 placeholder:text-gray-400 text-gray-800 font-medium"
              />
              <Camera size={18} strokeWidth={1.5} className="text-gray-400 cursor-pointer" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg border border-white/20 cursor-pointer active:scale-95 transition-transform">
              <Scan size={18} strokeWidth={1.5} className="text-white" />
            </div>
          </div>

          {/* Row 4: Horizontal Categories */}
          <div className="flex items-center gap-7 overflow-x-auto no-scrollbar pb-1.5 pt-1 px-1">
            {[
              { id: 'home', label: 'Home', icon: <HomeIcon size={26} strokeWidth={1.5} /> },
              { id: 'toys', label: 'Toys', icon: <Gamepad2 size={26} strokeWidth={1.5} /> },
              { id: 'beauty', label: 'Beauty', icon: <Sparkles size={26} strokeWidth={1.5} /> },
              { id: 'art-jewellery', label: 'Art. Jewellery', icon: <Gem size={26} strokeWidth={1.5} /> },
              { id: 'gold-jewellery', label: '1g Gold', icon: <Coins size={26} strokeWidth={1.5} /> },
              { id: 'cosmetics', label: 'Cosmetics', icon: <Palette size={26} strokeWidth={1.5} /> },
              { id: 'dryfruits', label: 'Dryfruits', icon: <ShoppingBag size={26} strokeWidth={1.5} /> },
              { id: 'stationary', label: 'Stationary', icon: <Pencil size={26} strokeWidth={1.5} /> },
              { id: 'fashion', label: 'Fashion', icon: <Shirt size={26} strokeWidth={1.5} /> }
            ].map((cat) => (
              <div 
                key={cat.id}
                className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer group relative"
                onClick={() => {
                  setSelectedCategory(cat.label);
                  if (!location.pathname.includes('/vendor/home')) {
                    navigate('/vendor/home');
                  }
                }}
              >
                <div className={`transition-all group-active:scale-90 ${selectedCategory === cat.label ? 'text-white' : 'text-white/60'}`}>
                  {cat.icon}
                </div>
                <span className={`text-[13px] font-bold tracking-tight mt-1 transition-colors ${selectedCategory === cat.label ? 'text-white' : 'text-white/70'}`}>
                  {cat.label}
                </span>
                {selectedCategory === cat.label && <div className="absolute -bottom-[6px] left-0 right-0 h-1 bg-white rounded-t-full"></div>}
              </div>
            ))}
          </div>

        </header>
      )}

      {/* SaleBanner is now rendered inside Home.jsx or specifically based on visibility store */}

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
      {!isImmersivePage && (
        <nav className={`md:hidden fixed bottom-0 left-0 right-0 border-t px-6 py-2 flex justify-between items-center z-50 transition-colors duration-300 ${isDarkMode ? 'bg-black border-[var(--color-gold)]/20 text-[var(--color-gold)] shadow-[0_-2px_20px_rgba(212,175,55,0.1)]' : 'bg-white border-gray-200 text-slate-900 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'}`}>
        <Link to="/vendor/home" className={`flex flex-col items-center transition-transform active:scale-90`}>
          <HomeIcon size={22} strokeWidth={1.5} />
          <span className={`text-[10px] ${location.pathname === '/vendor/home' ? 'font-black' : 'font-medium'}`}>Home</span>
          {location.pathname === '/vendor/home' && <div className="w-1 h-1 bg-current rounded-full mt-0.5 animate-pulse" />}
        </Link>
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex flex-col items-center transition-transform active:scale-90"
        >
          <Menu size={22} strokeWidth={1.5} />
          <span className="text-[10px] font-medium">Menu</span>
        </button>
        <Link to="/vendor/cart" className={`flex flex-col items-center transition-transform active:scale-90`}>
          <div className="relative">
            <ShoppingCart size={22} strokeWidth={1.5} />
            <span className={`absolute -top-1 -right-1.5 text-[8px] font-black px-1 rounded-full border shadow-sm ${isDarkMode ? 'bg-[var(--color-gold)] text-black border-black' : 'bg-[#cc0c39] text-white border-white'}`}>{cartCount}</span>
          </div>
          <span className={`text-[10px] ${location.pathname === '/vendor/cart' ? 'font-black' : 'font-medium'}`}>Cart</span>
        </Link>
        <Link to="/vendor/profile" className={`flex flex-col items-center transition-transform active:scale-90`}>
          <User size={22} strokeWidth={1.5} />
          <span className={`text-[10px] ${location.pathname === '/vendor/profile' ? 'font-black' : 'font-medium'}`}>You</span>
        </Link>
      </nav>
      )}
    </div>
  );
};

export default VendorLayout;
