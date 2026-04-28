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
  Grid
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (label) => {
    setSelectedCategory(label === selectedCategory ? null : label);
    if (label !== selectedCategory) {
      setTimeout(() => {
        const section = document.getElementById('category-products-section');
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  };

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
    { label: 'Stationery', img: StationeryImg, bg: 'bg-blue-100/50' },
    { label: 'Gifting', img: GiftingImg, bg: 'bg-orange-100/50' },
    { label: 'Printing', img: PrintingImg, bg: 'bg-gray-100/50' },
    { label: 'Electronics', img: ElectronicsImg, bg: 'bg-purple-100/50' },
    { label: 'Fashion', img: ClothesImg, bg: 'bg-red-100/50' },
    { label: 'Jewellery', img: JewelleryImg, bg: 'bg-yellow-100/50' },
    { label: 'Electrical', img: ElectricalImg, bg: 'bg-cyan-100/50' },
    { label: 'Toys', img: ToysImg, bg: 'bg-green-100/50' },
  ];

  const forYouCards = [
    { title: 'For you', sub: 'Sponsored', img: PlumShampoo, type: 'info' },
    { title: 'Keep shopping for', img: LorealShampoo },
    { title: 'MATRIX Mega Smooth...', sub: 'Sponsored', img: MatrixShampoo, type: 'info' },
    { title: 'Deal for you', img: AsusLaptop, discount: '19% off' },
    { title: 'Inspired by your Lists', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300' }
  ];

  return (
    <div className="bg-[var(--card-bg)] min-h-screen pb-4">
      {/* 🔶 VERTICAL HERO CARDS (HORIZONTAL SCROLL) */}
      <div className="py-2">
        <div className="flex overflow-x-auto gap-3 px-4 no-scrollbar pb-2">
          {/* Hero Card 1: Jewellery */}
          <Link to="/vendor/category-products?category=Jewellery" className="w-[200px] h-[260px] flex-shrink-0 bg-black rounded-xl overflow-hidden shadow-md border border-[var(--color-gold)]/20 relative group hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0">
              <img
                src={JewelleryImg}
                alt="Jewellery"
                className="w-full h-full object-cover opacity-60 scale-110 group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
            </div>

            <div className="relative p-4 h-full flex flex-col">
              <h2 className="text-xl font-black text-[var(--color-gold)] leading-tight tracking-tight uppercase">Starting ₹999</h2>
              <p className="text-xs text-white/90 font-medium mb-2">Jewellery Collection</p>

              <div className="flex gap-2 mt-1">
                <span className="bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider">Premium</span>
                <span className="bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider">Luxury</span>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-[360deg] transition-transform duration-700">
                  <PlayCircle size={16} className="text-black fill-black" />
                </div>
                <div className="text-[11px] font-black text-[var(--color-gold)] uppercase border-b-2 border-[var(--color-gold)]/60 group-hover:border-[var(--color-gold)] transition-all">SHOP NOW</div>
              </div>
            </div>
          </Link>

          {/* Hero Card 2: Electronics */}
          <Link to="/vendor/category-products?category=Electronics" className="w-[200px] h-[260px] flex-shrink-0 bg-black rounded-xl overflow-hidden shadow-md border border-[var(--color-gold)]/20 relative group hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0">
              <img
                src={ElectronicsHero}
                alt="Electronics"
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
            </div>
            
            <div className="relative p-4 h-full flex flex-col">
              <h2 className="text-xl font-black text-[var(--color-gold)] leading-tight tracking-tight uppercase">Tech Fest</h2>
              <p className="text-xs text-white/90 font-medium mb-2">Up to 40% Off</p>

              <div className="mt-auto flex items-center justify-between">
                <div className="w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-[360deg] transition-transform duration-700">
                  <PlayCircle size={16} className="text-black fill-black" />
                </div>
                <div className="text-[11px] font-black text-[var(--color-gold)] uppercase border-b-2 border-[var(--color-gold)]/60 group-hover:border-[var(--color-gold)] transition-all">SHOP NOW</div>
              </div>
            </div>
          </Link>

          {/* Hero Card 3: Beauty */}
          <Link to="/vendor/category-products?category=Beauty" className="w-[200px] h-[260px] flex-shrink-0 bg-black rounded-xl overflow-hidden shadow-md border border-[var(--color-gold)]/20 relative group hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0">
              <img
                src={MakeupHero}
                alt="Beauty"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            
            <div className="relative p-4 h-full flex flex-col">
              <h2 className="text-xl font-black text-[var(--color-gold)] leading-tight tracking-tight uppercase">Luxury Picks</h2>
              <p className="text-xs text-white/90 font-medium mb-2">Beauty & Skincare</p>

              <div className="mt-auto flex items-center justify-between">
                <div className="w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-[360deg] transition-transform duration-700">
                  <PlayCircle size={16} className="text-black fill-black" />
                </div>
                <div className="text-[11px] font-black text-[var(--color-gold)] uppercase border-b-2 border-[var(--color-gold)]/60 group-hover:border-[var(--color-gold)] transition-all">SHOP NOW</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 🔶 "FOR YOU" & "KEEP SHOPPING" SECTION (HORIZONTAL SCROLL) */}
      <div className="py-1">
        <div className="flex overflow-x-auto gap-2 px-4 no-scrollbar pb-4">
          {forYouCards.map((card, i) => (
            <div key={i} className="w-[125px] h-[175px] flex-shrink-0 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] shadow-sm p-2.5 flex flex-col hover:shadow-md transition-all cursor-pointer active:scale-95">
              <h3 className="text-[11px] font-black text-[var(--card-text)] leading-[1.2] line-clamp-2 min-h-[26px]">{card.title}</h3>
              {card.sub && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[9px] text-[var(--card-sub)] font-medium">{card.sub}</span>
                  {card.type === 'info' && <InfoIcon size={12} className="text-[var(--card-sub)]" />}
                </div>
              )}

              <div className="flex-1 flex items-center justify-center p-1">
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
      <div className="py-4 shadow-sm mb-2">
        <div className="flex justify-between items-center px-4 mb-4">
          <h2 className="text-lg font-bold text-[var(--card-text)]">Shop by Category</h2>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-x-3 gap-y-4 px-4 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              onClick={() => handleCategoryClick(cat.label)}
              className="flex flex-col items-center gap-1 w-[70px] active:scale-95 transition-transform cursor-pointer group"
            >
              <div className={`w-[70px] h-[70px] ${cat.bg} rounded-2xl overflow-hidden flex items-center justify-center border-2 transition-all duration-300 ${selectedCategory === cat.label ? 'border-[var(--color-gold)] shadow-[0_0_15px_rgba(226,167,80,0.4)] scale-105' : 'border-gray-100/50 shadow-sm group-hover:border-[var(--color-gold)]/50'}`}>
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              </div>
              <span className={`text-[11px] font-black tracking-tight text-center transition-colors ${selectedCategory === cat.label ? 'text-[var(--color-gold)]' : 'text-[var(--card-text)]'}`}>{cat.label}</span>
            </div>
          ))}
        </div>
        
        {/* Dynamic Category Products Section */}
        <CategoryProductsSection selectedCategory={selectedCategory} />
      </div>

      {/* 🔶 BIG SAVINGS SECTION (2x2 GRID) */}
      <div className="py-4 bg-[var(--card-bg)]">
        <div className="flex justify-between items-center px-4 mb-3">
          <h2 className="text-xl font-bold text-[var(--card-text)] leading-tight">Big savings for you</h2>
          <Link to="/vendor/all-offers" className="w-8 h-8 rounded-full bg-[var(--card-border)]/30 flex items-center justify-center text-[var(--card-text)] hover:bg-[var(--color-gold)] hover:text-black transition-colors shadow-sm">
            <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 mb-3">
          {[
            { img: FlipFlops, off: '73% off', label: 'Limited time deal', name: 'Floral Casual Flip Flops', brand: 'WALKWAY', price: '299', oldPrice: '1,107' },
            { img: Tshirt, off: '67% off', label: 'Limited time deal', name: 'Graphic Printed T-Shirt', brand: 'CAMPUS', price: '499', oldPrice: '1,512' },
            { img: Suitcase, off: '58% off', label: 'Limited time deal', name: 'Premium Hard Trolley', brand: 'SAFARI', price: '3,499', oldPrice: '8,330' },
            { img: Balloons, off: '45% off', label: 'Limited time deal', name: 'Gold Star Foil Balloons', brand: 'PARTY PROPZ', price: '199', oldPrice: '361' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col cursor-pointer group"
              onClick={() => navigate('/vendor/product-detail', { state: { product: { ...item, image: item.img, rating: '4.5', reviews: '1,200', delivery: 'Tomorrow' } } })}
            >
              <div className="rounded-xl p-1 mb-2 border border-[var(--card-border)] overflow-hidden bg-[var(--card-bg)] shadow-sm">
                <img src={item.img} alt={item.label} className="w-full h-auto product-img-blend transition-transform group-hover:scale-105 duration-500" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="bg-[var(--color-gold)] text-black text-[10px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">{item.off}</span>
                </div>
                <span className="text-[var(--color-gold)] text-[10px] font-black uppercase tracking-tight">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-2">
        <div className="flex justify-between items-center px-4 mb-2">
          <h2 className="text-base font-black text-[var(--card-text)]">Recommended deals for you</h2>
          <Link to="/vendor/products" className="text-[12px] font-bold text-[var(--color-gold)] hover:underline">See all</Link>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 no-scrollbar pb-4">

          <div 
            onClick={() => navigate('/vendor/deals', { state: { title: 'Deals for you' } })}
            className="w-[280px] flex-shrink-0 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm overflow-hidden p-2.5 cursor-pointer hover:border-[var(--color-gold)]/40 transition-all active:scale-[0.98]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[14px] font-black text-[var(--card-text)] leading-tight">Deals for you</h3>
              <ChevronRight size={16} className="text-[var(--color-gold)]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: EarbudsDeal, off: '79% off' },
                { img: Mascara, off: '85% off' },
                { img: SamsungS24, off: '52% off' },
                { img: LipstickDeal, off: '60% off' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="rounded-xl h-[90px] flex items-center justify-center overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]/50">
                    <img src={item.img} alt="product" className="w-full h-full object-contain product-img-blend" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-[var(--color-gold)] text-black text-[9px] font-black px-1 py-0.5 rounded-sm">{item.off}</span>
                  </div>
                  <span className="text-[9px] font-black text-[var(--color-gold)] uppercase tracking-tight">Limited time deal</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            onClick={() => navigate('/vendor/deals', { state: { title: 'Shoes & Handbags' } })}
            className="w-[280px] flex-shrink-0 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm overflow-hidden p-2.5 cursor-pointer hover:border-[var(--color-gold)]/40 transition-all active:scale-[0.98]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[14px] font-black text-[var(--card-text)] leading-tight">Shoes & Handbags</h3>
              <ChevronRight size={16} className="text-[var(--color-gold)]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300', off: '51% off' },
                { img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300&h=300', off: '70% off' },
                { img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=300&h=300', off: '51% off' },
                { img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300&h=300', off: '70% off' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="rounded-xl h-[100px] flex items-center justify-center overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]/50">
                    <img src={item.img} alt="product" className="w-full h-full object-contain product-img-blend" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-[var(--color-gold)] text-black text-[9px] font-black px-1 py-0.5 rounded-sm">{item.off}</span>
                  </div>
                  <span className="text-[9px] font-black text-[var(--color-gold)] uppercase tracking-tight">Limited time deal</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            onClick={() => navigate('/vendor/deals', { state: { title: 'Recommended' } })}
            className="w-[280px] flex-shrink-0 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm overflow-hidden p-2.5 cursor-pointer hover:border-[var(--color-gold)]/40 transition-all active:scale-[0.98]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[14px] font-black text-[var(--card-text)] leading-tight">Related to your searches</h3>
              <ChevronRight size={16} className="text-[var(--color-gold)]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: 'https://images.unsplash.com/photo-1546868889-4e0c68197577?auto=format&fit=crop&q=80&w=300&h=300', off: '25% off' },
                { img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300&h=300', off: '40% off' },
                { img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300', off: '15% off' },
                { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=300', off: '30% off' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="rounded-xl h-[100px] flex items-center justify-center overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]/50">
                    <img src={item.img} alt="product" className="w-full h-full object-contain product-img-blend" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-[var(--color-gold)] text-black text-[9px] font-black px-1 py-0.5 rounded-sm">{item.off}</span>
                  </div>
                  <span className="text-[9px] font-black text-[var(--color-gold)] uppercase tracking-tight">Limited time deal</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔶 TOP PICKS SECTION (3x3 GRID) */}
      <div className="py-4 bg-[var(--card-bg)]">
        <div className="flex justify-between items-center px-4 mb-3">
          <h2 className="text-lg font-bold text-[var(--card-text)] leading-tight">Must-haves | Top picks for you</h2>
          <button 
            onClick={() => navigate('/vendor/deals', { state: { title: 'Must-haves' } })}
            className="text-[10px] font-black text-[var(--color-gold)] uppercase hover:underline active:scale-95 transition-all"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 mb-4">
          {[
            { id: 401, img: SamsungS24, label: 'Samsung S24', price: '69,999', brand: 'SAMSUNG', rating: '4.7' },
            { id: 402, img: AsusLaptop, label: 'Asus Laptop', price: '45,990', brand: 'ASUS', rating: '4.5' },
            { id: 403, img: Tshirt, label: 'Designer Tee', price: '1,299', brand: 'CAMPUS', rating: '4.4' },
            { id: 404, img: JewelleryImg, label: 'Gold Pendant', price: '3,499', brand: 'COCIA', rating: '4.9' },
            { id: 405, img: PlumShampoo, label: 'Plum Shampoo', price: '450', brand: 'PLUM', rating: '4.6' },
            { id: 406, img: LorealShampoo, label: 'Hair Oil', price: '320', brand: 'LOREAL', rating: '4.5' },
            { id: 407, img: EarbudsDeal, label: 'Noise Buds', price: '1,999', brand: 'NOISE', rating: '4.4' },
            { id: 408, img: Suitcase, label: 'Travel Case', price: '4,499', brand: 'SAFARI', rating: '4.7' },
            { id: 409, img: SplitAC, label: 'Samsung AC', price: '34,990', brand: 'SAMSUNG', rating: '4.6' }
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/vendor/product-detail', { 
                state: { 
                  product: { 
                    id: item.id,
                    name: item.label,
                    price: item.price,
                    brand: item.brand,
                    image: item.img,
                    rating: item.rating,
                    reviews: '1.2k',
                    delivery: 'Tomorrow'
                  } 
                } 
              })}
              className="flex flex-col gap-1 items-center group cursor-pointer active:scale-95 transition-transform"
            >
              <div className="aspect-square bg-[var(--card-bg)] rounded-lg overflow-hidden flex items-center justify-center p-1.5 border border-[var(--card-border)] w-full group-hover:border-[var(--color-gold)]/40 transition-colors">
                <img src={item.img} alt={item.label} className="w-full h-full object-contain product-img-blend group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-[9px] font-black text-[var(--card-text)] text-center line-clamp-1">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="px-4 pb-2">
          <Link to="/vendor/products" className="text-[13px] font-medium text-[var(--color-gold)] hover:underline">Explore all categories</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
