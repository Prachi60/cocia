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
  Scan,
  Grid,
  Moon,
  Sun,
  Palette,
  X
} from 'lucide-react';

import MainSidebar from '../components/common/MainSidebar';
import useAccountStore from '../store/useAccountStore';

const VendorLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const { userProfile, savedAddresses, selectedAddressId, isDarkMode, toggleDarkMode } = useAccountStore();
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
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'dark bg-black text-white' : 'bg-gray-50 text-slate-900'}`}>
      {/* Drawer Sidebar */}
      <MainSidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Mobile-First Sticky Header */}
      {!isImmersivePage && (
        <header className={`sticky top-0 z-50 shadow-md px-3 pt-1.5 pb-1.5 transition-colors duration-300 ${isDarkMode ? 'bg-black border-b border-[var(--color-gold)]/30' : 'bg-white border-b border-gray-200'}`}>
        {/* Top Row: Logo, Theme & Cart */}
        <div className="flex justify-between items-center mb-1.5">
          <div className="flex items-center gap-3">
            <Link to="/vendor/home" className="flex items-center">
              <img
                src="/Logo (4).png"
                alt="Cocia"
                className="h-16 w-36 object-contain scale-[2] origin-left -ml-6"
                style={isDarkMode ? { filter: 'brightness(0) saturate(100%) invert(73%) sepia(34%) saturate(1112%) hue-rotate(348deg) brightness(92%) contrast(90%)', dropShadow: '0 0 8px rgba(226,167,80,0.3)' } : {}}
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* High-Clarity Premium Theme Toggle */}
            <button 
              onClick={() => toggleDarkMode()}
              className={`relative w-12 h-6.5 rounded-full transition-all duration-500 border-2 overflow-hidden flex items-center ${isDarkMode ? 'bg-black border-[var(--color-gold)] shadow-[0_0_12px_rgba(226,167,80,0.3)]' : 'bg-gray-100 border-gray-300'}`}
            >
              <div className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${isDarkMode ? 'translate-x-6 bg-[var(--color-gold)] text-black' : 'translate-x-0.5 bg-white text-slate-600'}`}>
                {isDarkMode ? <Moon size={12} strokeWidth={3} fill="currentColor" /> : <Sun size={12} strokeWidth={3} />}
              </div>
              <div className={`absolute px-1.5 w-full flex justify-between items-center pointer-events-none transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-20'}`}>
                <Sun size={10} strokeWidth={2.5} className="text-gray-600" />
                <Moon size={10} strokeWidth={2.5} className="text-[var(--color-gold)]" />
              </div>
            </button>

            <Link to="/vendor/cart" className="relative p-1">
              <ShoppingCart size={22} strokeWidth={2.5} className={isDarkMode ? 'text-[var(--color-gold)]' : 'text-slate-800'} />
              <span className={`absolute -top-0.5 -right-1 text-[8px] font-black px-1.5 py-0.5 rounded-full border leading-none shadow-sm ${isDarkMode ? 'bg-[var(--color-gold)] text-black border-black' : 'bg-[#cc0c39] text-white border-white'}`}>{cartCount}</span>
            </Link>
          </div>
        </div>

        {/* Search Row */}
        <div className="flex items-center gap-3 mb-1.5">
          <div className={`flex-1 flex items-center rounded-lg px-3 py-1.5 shadow-inner border transition-all ${isDarkMode ? 'bg-[#121212] border-[var(--color-gold)]/20' : 'bg-white border-gray-200'}`}>
            <Search size={16} className={isDarkMode ? 'text-[var(--color-gold)]' : 'text-gray-400'} />
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
              className={`flex-1 bg-transparent outline-none text-[13px] px-2 placeholder:text-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            />
            <div className="flex items-center gap-2.5 text-gray-400">
              {searchTerm && (
                <X 
                  size={16} 
                  className="cursor-pointer hover:text-red-500 transition-colors" 
                  onClick={() => setSearchTerm('')} 
                />
              )}
              <Scan size={16} className="cursor-pointer hover:text-[var(--color-gold)] transition-colors" />
              <Mic size={16} className="cursor-pointer hover:text-[var(--color-gold)] transition-colors" />
            </div>
          </div>
        </div>

        {/* Location Bar */}
        <div className="flex items-center gap-2">
          <Link 
            to="/vendor/profile/addresses" 
            className={`flex-1 px-2.5 py-1 flex items-center gap-2 rounded-md border transition-all active:scale-[0.98] overflow-hidden ${isDarkMode ? 'bg-black border-[var(--color-gold)]/20' : 'bg-[#e2f9ff] border-cyan-200'}`}
          >
            <MapPin size={12} className={`flex-shrink-0 ${isDarkMode ? 'text-[var(--color-gold)]' : 'text-slate-800'}`} />
            <span className={`text-[10px] font-bold truncate flex-1 min-w-0 ${isDarkMode ? 'text-[var(--color-gold)]' : 'text-slate-800'}`}>
              Deliver to {selectedAddress?.name || userProfile.name} - {selectedAddress?.address || '452012'}
            </span>
            <ChevronDown size={10} className={`flex-shrink-0 ${isDarkMode ? 'text-[var(--color-gold)]' : 'text-slate-800'}`} />
          </Link>
        </div>
      </header>
      )}

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
          <HomeIcon size={22} strokeWidth={location.pathname === '/vendor/home' ? 2.5 : 2} />
          <span className={`text-[10px] ${location.pathname === '/vendor/home' ? 'font-black' : 'font-medium'}`}>Home</span>
          {location.pathname === '/vendor/home' && <div className="w-1 h-1 bg-current rounded-full mt-0.5 animate-pulse" />}
        </Link>
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex flex-col items-center transition-transform active:scale-90"
        >
          <Menu size={22} strokeWidth={2} />
          <span className="text-[10px] font-medium">Menu</span>
        </button>
        <Link to="/vendor/cart" className={`flex flex-col items-center transition-transform active:scale-90`}>
          <div className="relative">
            <ShoppingCart size={22} strokeWidth={location.pathname === '/vendor/cart' ? 2.5 : 2} />
            <span className={`absolute -top-1 -right-1.5 text-[8px] font-black px-1 rounded-full border shadow-sm ${isDarkMode ? 'bg-[var(--color-gold)] text-black border-black' : 'bg-[#cc0c39] text-white border-white'}`}>{cartCount}</span>
          </div>
          <span className={`text-[10px] ${location.pathname === '/vendor/cart' ? 'font-black' : 'font-medium'}`}>Cart</span>
        </Link>
        <Link to="/vendor/profile" className={`flex flex-col items-center transition-transform active:scale-90`}>
          <User size={22} strokeWidth={location.pathname === '/vendor/profile' ? 2.5 : 2} />
          <span className={`text-[10px] ${location.pathname === '/vendor/profile' ? 'font-black' : 'font-medium'}`}>You</span>
        </Link>
      </nav>
      )}
    </div>
  );
};

export default VendorLayout;
