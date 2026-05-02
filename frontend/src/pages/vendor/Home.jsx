import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Heart,
  Grid,
  Frown,
  Meh,
  Smile,
  Laugh
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
import FanBlack from '../../assets/products/fan_black.png';
import FanPedestal from '../../assets/products/fan_pedestal.png';
import CoolerWhite from '../../assets/products/cooler_white.png';
import FlipFlops from '../../assets/products/flip_flops.png';
import Tshirt from '../../assets/products/tshirt.png';
import Suitcase from '../../assets/products/suitcase.png';
import Balloons from '../../assets/products/balloons.png';
import SplitAC from '../../assets/products/split_ac.png';
import TowerFan from '../../assets/products/tower_fan.png';
import StationeryImg from '../../assets/products/stationery.png';
import GiftingImg from '../../assets/products/gifting.png';
import PrintingImg from '../../assets/products/printing.png';
import JewelleryImg from '../../assets/products/jewellery.png';
import ElectricalImg from '../../assets/products/electrical.png';
import ToysImg from '../../assets/products/toys.png';
import CookwareHero from '../../assets/Cards/cookware_hero.png';
import FashionHero from '../../assets/Cards/fashion_hero.png';
import ElectronicsHero from '../../assets/Cards/electronics_deal.png';
import MakeupHero from '../../assets/Cards/makeup_picks.png';
import CategoryProductsSection from '../../components/vendor/CategoryProductsSection';

import useVendorStore from '../../store/useVendorStore';
import SaleBanner from '../../components/vendor/SaleBanner';
import BannerCarousel from '../../components/vendor/BannerCarousel';

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
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useVendorStore();

  const categoryBanners = {
    'Home': [
      { id: 1, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000', title: 'Summer Sale' },
      { id: 2, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000', title: 'New Arrivals' },
      { id: 3, image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1000', title: 'Electronics Deal' },
      { id: 4, image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000', title: 'Grocery Offers' }
    ],
    'Toys': [
      { id: 1, image: 'https://images.unsplash.com/photo-1532330384785-f72436894000?auto=format&fit=crop&q=80&w=1000', title: 'Toy World' },
      { id: 2, image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1000', title: 'LEGO Sale' },
      { id: 3, image: 'https://images.unsplash.com/photo-1566576661366-747895316999?auto=format&fit=crop&q=80&w=1000', title: 'Action Figures' }
    ],
    'Beauty': [
      { id: 1, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1000', title: 'Skin Care' },
      { id: 2, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000', title: 'Makeup Kits' },
      { id: 3, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000', title: 'Perfume' }
    ],
    'Art. Jewellery': [
      { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000', title: 'Designer Sets' },
      { id: 2, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=1000', title: 'Modern Jewellery' }
    ],
    '1g Gold': [
      { id: 1, image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=1000', title: '1g Gold Coins' },
      { id: 2, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000', title: 'Gold Chains' }
    ],
    'Cosmetics': [
      { id: 1, image: 'https://images.unsplash.com/photo-1527799822394-4d1005f9630c?auto=format&fit=crop&q=80&w=1000', title: 'Premium Cosmetics' },
      { id: 2, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1000', title: 'Glow Up Sale' }
    ],
    'Fashion': [
      { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000', title: 'Premium Fashion' },
      { id: 2, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000', title: 'Summer Collection' },
      { id: 3, image: 'https://images.unsplash.com/photo-1539109132381-31a193636533?auto=format&fit=crop&q=80&w=1000', title: 'Kids Wear' }
    ]
  };

  const quickActions = React.useMemo(() => [
    { label: 'Pay', icon: <CreditCard className="text-blue-600" />, color: 'bg-blue-50' },
    { label: 'Bazaar', icon: <ShoppingBag className="text-orange-600" />, color: 'bg-orange-50' },
    { label: 'MX Player', icon: <PlayCircle className="text-red-600" />, color: 'bg-red-50' },
    { label: 'Pharmacy', icon: <Pill className="text-green-600" />, color: 'bg-green-50' },
    { label: 'Fresh', icon: <Sparkles className="text-teal-600" />, color: 'bg-teal-50' },
  ], []);

  const categories = React.useMemo(() => [
    { label: 'Beauty', img: Mascara, bg: 'bg-pink-100/50' },
    { label: 'Stationery', img: StationeryImg, bg: 'bg-blue-100/50' },
    { label: 'Gifting', img: GiftingImg, bg: 'bg-orange-100/50' },
    { label: 'Printing', img: PrintingImg, bg: 'bg-gray-100/50' },
    { label: 'Electronics', img: ElectronicsImg, bg: 'bg-purple-100/50' },
    { label: 'Fashion', img: ClothesImg, bg: 'bg-red-100/50' },
    { label: 'Jewellery', img: JewelleryImg, bg: 'bg-yellow-100/50' },
    { label: 'Electrical', img: ElectricalImg, bg: 'bg-cyan-100/50' },
    { label: 'Toys', img: ToysImg, bg: 'bg-green-100/50' },
  ], []);

  const forYouCards = React.useMemo(() => [
    { title: 'For you', sub: 'Sponsored', img: PlumShampoo, type: 'info' },
    { title: 'Keep shopping for', img: LorealShampoo },
    { title: 'MATRIX Mega Smooth...', sub: 'Sponsored', img: MatrixShampoo, type: 'info' },
    { title: 'Deal for you', img: AsusLaptop, discount: '19% off' },
    { title: 'Inspired by your Lists', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300' }
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[var(--card-bg)] min-h-screen pb-4">
      {/* 🔴 REDESIGNED PROMOTIONAL AREA */}
      <div className="flex flex-col bg-[#2874f0]">
        {/* Sale Strip (Only on Home Category) */}
        {selectedCategory === 'Home' && <SaleBanner />}
      </div>

      {/* Banner Carousel (Dynamic based on Category) */}
      <div className="bg-gray-50 mt-3">
        <BannerCarousel banners={categoryBanners[selectedCategory] || categoryBanners['Home']} />
      </div>

      {/* Conditionally hide rest of homepage if a specific category is selected, or show specialized view */}
      {selectedCategory !== 'Home' && (
        <div className="py-4">
          <div className="flex justify-between items-center px-4 mb-4">
            <h2 className="text-xl font-black text-[var(--card-text)]">{selectedCategory} Specials</h2>
            <div className="h-1 flex-1 bg-gray-100 mx-4 rounded-full" />
          </div>
          <CategoryProductsSection selectedCategory={selectedCategory} />
        </div>
      )}

      {selectedCategory === 'Home' && (
        <>
          {/* Section 1: Personalized "Still looking for these?" */}
          <div className="px-3 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 shadow-sm border border-white">
              <h2 className="text-[17px] font-black text-slate-800 mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Vini, still looking for these?
              </h2>
              <div className="flex overflow-x-auto gap-3 no-scrollbar pb-1">
                {[
                  { label: 'Co-ords', img: FashionHero },
                  { label: 'Necklaces', img: JewelleryImg },
                  { label: "Women's Tops", img: ClothesImg },
                  { label: 'Lipsticks', img: LipstickDeal }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-2.5 min-w-[110px] shadow-sm flex flex-col gap-1.5 active:scale-95 transition-transform">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                      <img src={item.img} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="mt-1">
                      <p className="text-[11px] font-bold text-gray-500 leading-tight">{item.label}</p>
                      <p className="text-[11px] font-black text-[#2874f0] uppercase tracking-tight">View Store</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: 3-Card Promo Grid */}
          <div className="grid grid-cols-3 gap-3 px-3 mt-5">
            {[
              { title: 'Under ₹1,999', sub: 'Safari & more', img: Suitcase },
              { title: 'From ₹20/D', sub: 'Apple AirPods', img: EarbudsDeal },
              { title: 'Up to 80% Off', sub: 'Vega, 70mai...', img: ElectronicsHero }
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col gap-2 cursor-pointer group active:scale-95 transition-transform">
                <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="text-center">
                  <h3 className="text-[12px] font-black text-slate-800 leading-none">{card.title}</h3>
                  <p className="text-[10px] font-bold text-gray-400 mt-1">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3: Top Selection */}
          <div className="px-3 mt-6">
            <div className="bg-[#d9ebf9] rounded-3xl p-5 shadow-sm border border-white/50">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[19px] font-black text-slate-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Top Selection
                </h2>
                <button className="bg-black text-white p-2 rounded-full shadow-lg active:scale-90 transition-all">
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'BIOTIQUE Face Wash', tag: 'Best Picks', img: PlumShampoo },
                  { name: 'Lakmé Moisturizer', tag: 'New Collection', img: MakeupHero },
                  { name: 'Havintha Hair Treatment', tag: 'Top Picks', img: LorealShampoo },
                  { name: 'MARS Lipstick', tag: 'In Focus Now', img: LipGloss }
                ].map((product, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-2.5 shadow-sm flex flex-col gap-2 group cursor-pointer active:scale-98 transition-all">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 leading-tight truncate">{product.name}</p>
                      <p className="text-[13px] font-black text-slate-900 mt-0.5">{product.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 4: Brands in Spotlight */}
          <div className="px-3 mt-8">
            <h2 className="text-[19px] font-black text-slate-900 mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Brands in Spotlight
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'Just ₹899', sub: 'Hot deal alert', img: EarbudsDeal },
                { title: 'Flat 70% off', sub: 'Deal of the day', img: SamsungS24 },
                { title: 'Coming to India', sub: 'CMF Watch 3 Pro', img: ElectronicsHero },
                { title: 'Min. 75% Off', sub: 'Be unstoppable', img: FlipFlops },
                { title: 'From ₹129', sub: 'Best of Audio', img: EarbudsDeal },
                { title: 'Min. 70% off', sub: 'Turn heads on arrival', img: Suitcase }
              ].map((card, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 group active:scale-95 transition-transform">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-[11px] font-black text-slate-800 leading-tight">{card.title}</h3>
                    <p className="text-[9px] font-bold text-gray-400 mt-0.5 line-clamp-1">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Best Quality */}
          <div className="px-3 mt-8 mb-6">
            <div className="bg-[#e9e4f9] rounded-3xl p-5 shadow-sm border border-white/50">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[19px] font-black text-slate-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Best quality
                </h2>
                <button className="bg-black text-white p-2 rounded-full shadow-lg active:scale-90 transition-all">
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "GUTI Women's Jeans", tag: 'Grab Or Gone', img: FashionHero },
                  { name: "Mandarin Women's Shirts", tag: 'Popular', img: ClothesImg },
                  { name: 'Royatto Necklaces', tag: 'Popular', img: JewelleryImg },
                  { name: "Sqew Women's Trousers", tag: 'In Focus Now', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=300&h=400' }
                ].map((product, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-2.5 shadow-sm flex flex-col gap-2 group cursor-pointer active:scale-98 transition-all">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 leading-tight truncate">{product.name}</p>
                      <p className="text-[13px] font-black text-slate-900 mt-0.5">{product.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 6: Repeated Personalized Section (Variation) */}
          <div className="px-3 mt-8">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-4 shadow-sm border border-white">
              <h2 className="text-[17px] font-black text-slate-800 mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Keep shopping for these
              </h2>
              <div className="flex overflow-x-auto gap-3 no-scrollbar pb-1">
                {[
                  { label: 'Suitcases', img: Suitcase },
                  { label: 'Smartphones', img: SamsungS24 },
                  { label: 'Electronics', img: ElectronicsHero },
                  { label: 'Beauty', img: MakeupHero }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-2.5 min-w-[110px] shadow-sm flex flex-col gap-1.5 active:scale-95 transition-transform">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                      <img src={item.img} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="mt-1">
                      <p className="text-[11px] font-bold text-gray-500 leading-tight">{item.label}</p>
                      <p className="text-[11px] font-black text-[#2874f0] uppercase tracking-tight">View More</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7: Help India make good choices (Rating Section) */}
          <div className="px-3 mt-8 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[19px] font-black text-slate-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Help India make good choices
              </h2>
              <button className="bg-black text-white p-2 rounded-full shadow-lg active:scale-90 transition-all">
                <ChevronRight size={20} strokeWidth={3} />
              </button>
            </div>
            
            <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2">
              {[
                { name: 'SONATA...', date: 'Delivered on Apr 13, 2026', img: JewelleryImg },
                { name: 'LAKME...', date: 'Delivered on Apr 10, 2026', img: MakeupHero }
              ].map((item, idx) => {
                const [selectedRating, setSelectedRating] = React.useState(0);
                return (
                  <div key={idx} className="min-w-[240px] bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 p-1">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[12px] font-black text-slate-900 leading-tight">{item.name}</h3>
                        <p className="text-[10px] font-bold text-gray-400 mt-0.5">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50/50">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-slate-900 leading-tight">Rate this</span>
                        <span className="text-[11px] font-black text-slate-900 leading-tight">product</span>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={20} 
                            strokeWidth={2.5}
                            className={`cursor-pointer transition-all active:scale-125 ${selectedRating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-900'}`}
                            onClick={() => setSelectedRating(star)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 8: Bottom Category Tabs */}
          <div className="mt-8 border-t border-gray-100 pt-6 pb-24">
            <div className="flex overflow-x-auto gap-6 px-4 no-scrollbar">
              {[
                { label: 'For You', img: 'https://cdn-icons-png.flaticon.com/512/3081/3081840.png', active: true, bg: 'bg-blue-600' },
                { label: '#Trendy', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-blue-100/60' },
                { label: 'Fashion', img: 'https://images.unsplash.com/photo-1529139513055-11979288ba9b?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-blue-100/60' },
                { label: 'Home & Kit...', img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-blue-100/60' },
                { label: 'Beauty', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=200&h=200', bg: 'bg-blue-100/60' }
              ].map((tab, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group relative">
                  <div className={`relative w-[75px] h-[45px] rounded-2xl ${tab.bg} flex items-center justify-center transition-all`}>
                    <div className="absolute -top-3 w-full h-full flex items-center justify-center">
                      <img 
                        src={tab.img} 
                        alt={tab.label} 
                        className={`w-[60px] h-[60px] object-contain drop-shadow-md transform transition-transform group-hover:scale-110 ${tab.label === 'For You' ? 'p-1' : 'rounded-full border-2 border-white'}`} 
                      />
                    </div>
                    {tab.active && <div className="absolute -bottom-1 left-1 right-1 h-1 bg-blue-600 rounded-full" />}
                  </div>
                  <span className={`text-[11px] font-black mt-1 ${tab.active ? 'text-slate-900' : 'text-gray-400'}`}>{tab.label}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
