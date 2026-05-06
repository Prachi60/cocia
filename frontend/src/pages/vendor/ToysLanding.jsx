import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Search, Camera, ShoppingCart, 
  MapPin, ChevronDown, Bell, Star, LayoutGrid,
  Zap, Heart, Share2, Scan
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local assets
import ToysBanner from '../../assets/products/toys_banner.png';
import ElectricRideon from '../../assets/products/electric_rideon.png';
import BabyBlanket from '../../assets/products/baby_blanket.png';
import LearningTablet from '../../assets/products/learning_tablet.png';
import ToysTab from '../../assets/products/toys_tab.png';

const ToysLanding = () => {
  const navigate = useNavigate();
  const [activeSubTab, setActiveSubTab] = useState('Toys, baby..');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('userCart') || '[]');
      setCartCount(cart.reduce((acc, item) => acc + (item.qty || 1), 0));
    };
    updateCart();
    window.addEventListener('cartUpdated', updateCart);
    return () => window.removeEventListener('cartUpdated', updateCart);
  }, []);

  const subNav = [
    { label: 'Home', icon: <LayoutGrid size={18} /> },
    { label: 'Appliances', icon: <Zap size={18} /> },
    { label: 'Toys, baby..', icon: <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center"><img src={ToysTab} className="w-4 h-4 object-contain" /></div> },
    { label: 'Food & He..', icon: <Bell size={18} /> },
    { label: 'Auto Acce..', icon: <Scan size={18} /> }
  ];

  const savingsCards = [
    { title: 'Electric ride-ons...', badge: 'Min. 50% Off', img: ElectricRideon },
    { title: 'Baby blankets', badge: 'Under ₹499', img: BabyBlanket },
    { title: 'Body washes', badge: 'From ₹99', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200' },
    { title: 'Learning toys', badge: 'From ₹119', img: LearningTablet }
  ];

  const irresistibleDeals = [
    { title: 'Diapers', badge: 'Up to 60% Off', img: 'https://images.unsplash.com/photo-1544126592-807daa2b5650?w=200' },
    { title: 'Tricycles', badge: 'Extra 10% Off', img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=200' }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-900">
      {/* Dynamic App-Like Header */}
      <div className="bg-[#2874f0] text-white pt-2">
        {/* Location / Supercoin Bar */}
        <div className="px-4 py-2 flex items-center justify-between">
           <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-sm flex-1 mr-4">
              <MapPin size={14} className="text-white" />
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold uppercase tracking-tight leading-none">Home</span>
                 <span className="text-[10px] opacity-80 truncate max-w-[150px]">83 kishan pura mataji mandir, sector no. 5...</span>
              </div>
              <ChevronDown size={14} className="ml-auto" />
           </div>
           <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-sm">
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-black text-[10px]">P</div>
              <span className="text-[12px] font-black">0</span>
           </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4 flex items-center gap-4">
           <div className="flex-1 bg-white rounded-md p-2.5 flex items-center gap-3 shadow-inner">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for toys, baby..." 
                className="bg-transparent border-none outline-none text-[14px] text-slate-800 placeholder:text-gray-400 font-medium w-full"
              />
              <Camera size={20} className="text-gray-400" />
           </div>
           <Scan size={24} className="text-white" />
        </div>

        {/* Category Sub-Nav */}
        <div className="flex overflow-x-auto no-scrollbar bg-[#2874f0] border-t border-white/10">
           {subNav.map((item, idx) => (
             <div 
              key={idx}
              onClick={() => setActiveSubTab(item.label)}
              className={`flex-shrink-0 px-4 py-3 flex flex-col items-center gap-1.5 relative ${
                activeSubTab === item.label ? 'opacity-100' : 'opacity-60'
              }`}
             >
                <div className={`p-1 rounded-md transition-all ${activeSubTab === item.label ? 'bg-white/20 scale-110' : ''}`}>
                   {item.icon}
                </div>
                <span className="text-[10px] font-bold whitespace-nowrap">{item.label}</span>
                {activeSubTab === item.label && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full" />
                )}
             </div>
           ))}
        </div>
      </div>

      {/* Main Promo Banner */}
      <div className="relative w-full aspect-[16/8] bg-blue-50 overflow-hidden">
         <img src={ToysBanner} className="w-full h-full object-cover" alt="toys sale" />
         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent flex flex-col justify-center px-6">
            <h2 className="text-white text-[22px] font-black leading-tight drop-shadow-md">
               Turn up your savings<br/>
               <span className="text-yellow-400 text-[28px]">Up to 80% Off</span>
            </h2>
            <p className="text-white/90 text-[12px] font-bold mt-2 tracking-wide uppercase">Wishlist now</p>
         </div>
      </div>

      {/* Section: Great Savings Start Here */}
      <div className="px-4 py-6">
         <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-1 bg-gray-100" />
            <h2 className="text-[18px] font-black text-slate-800 tracking-tight">Great savings start here</h2>
            <div className="h-[1px] flex-1 bg-gray-100" />
         </div>

         <div className="grid grid-cols-2 gap-4">
            {savingsCards.map((card, idx) => (
               <div key={idx} className="flex flex-col gap-3 group">
                  <div className="aspect-square bg-[#fff0f5] rounded-[32px] overflow-hidden relative flex items-center justify-center p-4 transition-transform group-active:scale-95">
                     {/* Circular Glow Effect */}
                     <div className="absolute inset-4 rounded-full bg-white/40 blur-xl" />
                     <img src={card.img} className="w-full h-full object-contain relative z-10 mix-blend-multiply" alt={card.title} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="text-[14px] font-black text-slate-800 line-clamp-1">{card.title}</p>
                     <div className="bg-black text-white px-3 py-2.5 rounded-2xl w-fit">
                        <span className="text-[11px] font-black uppercase tracking-wider">{card.badge}</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Irresistible Deals */}
      <div className="bg-gray-50 px-4 py-8">
         <h2 className="text-[20px] font-black text-slate-900 mb-6 tracking-tight">Irresistible deals</h2>
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {irresistibleDeals.map((deal, idx) => (
               <div key={idx} className="flex-shrink-0 w-[200px] bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#fff0f5] p-4">
                     <img src={deal.img} className="w-full h-full object-contain mix-blend-multiply" alt={deal.title} />
                  </div>
                  <p className="text-[14px] font-black text-slate-800">{deal.title}</p>
                  <p className="text-[12px] font-bold text-green-600 mt-0.5">{deal.badge}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Sticky Bottom CTA for Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex items-center justify-between z-50">
         <div className="flex flex-col">
            <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">Selected Items</span>
            <span className="text-[18px] font-black text-slate-900">{cartCount} Products</span>
         </div>
         <button 
           onClick={() => navigate('/vendor/cart')}
           className="bg-[#2874f0] text-white px-8 py-3.5 rounded-xl font-black text-[13px] uppercase tracking-wider shadow-lg shadow-blue-200 active:scale-95 transition-transform"
         >
            Go to Cart
         </button>
      </div>
    </div>
  );
};

export default ToysLanding;
