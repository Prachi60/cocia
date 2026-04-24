import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  ShoppingBag,
  PlayCircle,
  Pill,
  Zap,
  ChevronRight,
  Star,
  Clock,
  LayoutGrid,
  Sparkles,
  Smartphone,
  Trophy,
  Shirt,
  Tv,
  Percent,
  Home as HomeIcon,
  Plane,
  Heart
} from 'lucide-react';

// Import Assets
import SamsungS24 from '../../assets/Cards/samsung_s24.png';
import EarbudsDeal from '../../assets/Cards/earbuds_deal.png';
import Mascara from '../../assets/Cards/mascara.png';
import LipstickDeal from '../../assets/Cards/lipstick_deal.png';
import KitchenImg from '../../assets/Carousel/kitchen-removebg-preview.png';
import ClothesImg from '../../assets/Carousel/clths-removebg-preview.png';
import MakeupImg from '../../assets/Carousel/mkup-removebg-preview.png';
import ElectronicsImg from '../../assets/Carousel/elctrncs-removebg-preview.png';
import LipGloss from '../../assets/Cards/lip_gloss.png';
import LipLiner from '../../assets/Cards/lip_liner.png';
import MatrixShampoo from '../../assets/Cards/matrix_shampoo.png';
import LorealShampoo from '../../assets/Cards/loreal_shampoo.png';
import PlumShampoo from '../../assets/Cards/plum_shampoo.png';
import AsusLaptop from '../../assets/Cards/asus_laptop.png';

const Shimmer = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const quickActions = [
    { label: 'Pay', icon: <CreditCard className="text-blue-600" />, color: 'bg-blue-50' },
    { label: 'Bazaar', icon: <ShoppingBag className="text-orange-600" />, color: 'bg-orange-50' },
    { label: 'MX Player', icon: <PlayCircle className="text-red-600" />, color: 'bg-red-50' },
    { label: 'Pharmacy', icon: <Pill className="text-green-600" />, color: 'bg-green-50' },
    { label: 'Fresh', icon: <Sparkles className="text-teal-600" />, color: 'bg-teal-50' },
  ];

  const categories = [
    { label: 'Beauty', img: Mascara, bg: 'bg-pink-100/50' },
    { label: 'Mobiles', img: SamsungS24, bg: 'bg-gray-100/50' },
    { label: 'Fashion', img: ClothesImg, bg: 'bg-orange-100/50' },
    { label: 'Electronics', img: ElectronicsImg, bg: 'bg-purple-100/50' },
    { label: 'Deals', img: LipstickDeal, bg: 'bg-red-100/50' },
    { label: 'Home', img: KitchenImg, bg: 'bg-yellow-100/50' },
    { label: 'Travel', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-cyan-100/50' },
    { label: 'Grocery', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-green-100/50' },
    { label: 'Toys', img: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-yellow-100/50' },
    { label: 'Books', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-blue-100/50' },
    { label: 'Rewards', img: LipGloss, bg: 'bg-yellow-100/50' },
  ];

  const forYouCards = [
    { title: 'For you', sub: 'Sponsored', img: PlumShampoo, type: 'info' },
    { title: 'Keep shopping for', img: LorealShampoo },
    { title: 'MATRIX Mega Smooth...', sub: 'Sponsored', img: MatrixShampoo, type: 'info' },
    { title: 'Deal for you', img: AsusLaptop, discount: '19% off' },
    { title: 'Inspired by your Lists', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300' }
  ];

  return (
    <div className="bg-white min-h-screen pb-4">
      {/* 🔶 VERTICAL HERO CARDS (HORIZONTAL SCROLL) */}
      <div className="py-4">
        <div className="flex overflow-x-auto gap-3 px-4 no-scrollbar pb-2">
          {/* Hero Card 1 */}
          <div className="w-[300px] h-[450px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600&h=900"
                alt="Cookware"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-black/60"></div>
            </div>

            <div className="relative p-5 h-full flex flex-col">
              <h2 className="text-2xl font-black text-slate-900 leading-tight">Starting ₹299</h2>
              <p className="text-slate-700 font-medium">Cookware</p>

              <div className="flex gap-3 mt-4">
                <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded border border-gray-200 text-[10px] font-black text-red-600">BERGNER</div>
                <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded border border-gray-200 text-[10px] font-black text-red-700">Prestige</div>
              </div>

              <div className="mt-auto">
                <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-100 mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Axis_Bank_logo.svg" alt="Axis" className="h-3" />
                    <div className="w-[1px] h-3 bg-gray-300"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/HSBC_logo_%282018%29.svg" alt="HSBC" className="h-3" />
                  </div>
                  <div className="text-[11px] font-black text-slate-900 uppercase">Up to 10% Instant Discount*</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center">
                    <PlayCircle size={18} className="text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Card 2 */}
          <div className="w-[300px] h-[450px] flex-shrink-0 bg-[#007185] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h2 className="text-2xl font-black text-white leading-tight mb-4">Whatever you need It's on Prime</h2>
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl rotate-3">
                  <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="Box" className="w-full h-auto" />
                  <PlayCircle size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#007185]" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap size={18} className="text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Hero Card 3 */}
          <div className="w-[300px] h-[450px] flex-shrink-0 bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] transition-all duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600&h=900"
              alt="Fashion"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative p-6 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-2xl font-black text-white leading-tight">Mega Fashion Festival</h2>
              <p className="text-white/80 font-medium mb-4">Min 60% Off | Top Brands</p>
              <button className="bg-white text-black font-black py-2.5 rounded-full text-sm w-full">Shop the collection</button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔶 "FOR YOU" & "KEEP SHOPPING" SECTION (HORIZONTAL SCROLL) */}
      <div className="py-2">
        <div className="flex overflow-x-auto gap-3 px-4 no-scrollbar pb-4">
          {forYouCards.map((card, i) => (
            <div key={i} className="w-[180px] h-[240px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow cursor-pointer active:scale-95">
              <h3 className="text-base font-black text-gray-900 leading-tight line-clamp-2">{card.title}</h3>
              {card.sub && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-gray-400 font-medium">{card.sub}</span>
                  {card.type === 'info' && <InfoIcon />}
                </div>
              )}

              <div className="flex-1 flex items-center justify-center p-2">
                <img src={card.img} alt={card.title} className="max-h-full w-auto object-contain" />
              </div>

              {card.discount && (
                <div className="mt-2">
                  <span className="bg-[#cc0c39] text-white text-[10px] font-black px-2 py-1 rounded-sm">
                    {card.discount}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🔶 CATEGORY SHORTCUTS (2-ROW HORIZONTAL SCROLL) */}
      <div className="py-6 shadow-sm mb-4">
        <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-6 px-4 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <Link to="/vendor/products" key={i} className="flex flex-col items-center gap-1 w-[85px] active:scale-95 transition-transform">
              <div className={`w-[85px] h-[85px] ${cat.bg} rounded-2xl overflow-hidden shadow-sm flex items-center justify-center border border-gray-100/50`}>
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              </div>
              <span className="text-[12px] font-black text-gray-800 tracking-tight text-center">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔶 RECOMMENDED DEALS SECTION */}
      <div className="py-4">
        <div className="flex justify-between items-center px-4 mb-3">
          <h2 className="text-lg font-black text-gray-900">Recommended deals for you</h2>
          <Link to="/vendor/products" className="text-[13px] font-bold text-[#007185] hover:underline">See all</Link>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 no-scrollbar pb-4">
          
          {/* Big Card 1: Deals for you */}
          <div className="w-[300px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[15px] font-black text-gray-900 leading-tight">Deals for you</h3>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: EarbudsDeal, off: '79% off' },
                { img: Mascara, off: '85% off' },
                { img: SamsungS24, off: '52% off' },
                { img: LipstickDeal, off: '60% off' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="rounded-xl h-[100px] flex items-center justify-center overflow-hidden">
                    <img src={item.img} alt="product" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-[#cc0c39] text-white text-[9px] font-black px-1 py-0.5 rounded-sm">{item.off}</span>
                  </div>
                  <span className="text-[9px] font-black text-[#cc0c39]">Limited time deal</span>
                </div>
              ))}
            </div>
          </div>

          {/* Big Card 2: Shoes & Handbags */}
          <div className="w-[300px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[15px] font-black text-gray-900 leading-tight">Shoes & Handbags</h3>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300', off: '51% off' },
                { img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300&h=300', off: '70% off' },
                { img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=300&h=300', off: '51% off' },
                { img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300&h=300', off: '70% off' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="rounded-xl h-[100px] flex items-center justify-center overflow-hidden">
                    <img src={item.img} alt="product" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-[#cc0c39] text-white text-[9px] font-black px-1 py-0.5 rounded-sm">{item.off}</span>
                  </div>
                  <span className="text-[9px] font-black text-[#cc0c39]">Limited time deal</span>
                </div>
              ))}
            </div>
          </div>

          {/* Big Card 3: Tech Deals */}
          <div className="w-[300px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[15px] font-black text-gray-900 leading-tight">Related to your searches</h3>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: 'https://images.unsplash.com/photo-1546868889-4e0c68197577?auto=format&fit=crop&q=80&w=300&h=300', off: '25% off' },
                { img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300&h=300', off: '40% off' },
                { img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300', off: '15% off' },
                { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=300', off: '30% off' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="rounded-xl h-[100px] flex items-center justify-center overflow-hidden">
                    <img src={item.img} alt="product" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-[#cc0c39] text-white text-[9px] font-black px-1 py-0.5 rounded-sm">{item.off}</span>
                  </div>
                  <span className="text-[9px] font-black text-[#cc0c39]">Limited time deal</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔶 CHILL YOUR SPACE SECTION (3x3 GRID) */}
      <div className="py-4 bg-white border-t border-gray-100">
        <h2 className="text-lg font-black px-4 mb-4 text-gray-900 leading-tight">Up to 50% off | Chill your space instantly</h2>
        <div className="grid grid-cols-3 gap-2 px-4 mb-4">
          {[
            'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=300&h=300', // Black Fan
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300&h=300', // White Tech (Cooler look)
            'https://images.unsplash.com/photo-1626244439121-689369e06180?auto=format&fit=crop&q=80&w=300&h=300', // Pedestal Fan
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=300&h=300', // Ceiling Fan
            'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=300&h=300', // Industrial Fan
            'https://images.unsplash.com/photo-1626244439121-689369e06180?auto=format&fit=crop&q=80&w=300&h=300', // Wall Fan
            'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=300&h=300', // Brown Fan
            'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=300&h=300', // Cooler
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=300&h=300', // Tower Fan
          ].map((img, i) => (
            <div key={i} className="aspect-square bg-white border border-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-1.5 hover:shadow-sm transition-shadow cursor-pointer">
              <img src={img} alt="Cooling appliance" className="max-h-full w-auto object-contain" />
            </div>
          ))}
        </div>
        <div className="px-4">
          <Link to="/vendor/products" className="text-[13px] font-bold text-[#007185] hover:underline">See all offers</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
