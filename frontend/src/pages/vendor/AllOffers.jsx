import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Camera, ShoppingCart, Home, PlayCircle, Grid as GridIcon, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Assets
import FlipFlops from '../../assets/products/flip_flops.png';
import Tshirt from '../../assets/products/tshirt.png';
import Suitcase from '../../assets/products/suitcase.png';
import Balloons from '../../assets/products/balloons.png';
import SplitAC from '../../assets/products/split_ac.png';
import TowerFan from '../../assets/products/tower_fan.png';
import CookwareHero from '../../assets/Cards/cookware_hero.png';
import FashionHero from '../../assets/Cards/fashion_hero.png';

const AllOffers = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('userCart') || '[]');
      const totalCount = cart.reduce((acc, item) => acc + (item.quantity || item.qty || 1), 0);
      setCartCount(totalCount);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const offers = [
    { img: FlipFlops, title: 'Women Casual Shoes', desc: 'New Collection', isBestSelling: false },
    { img: Tshirt, title: 'Men Shirts', desc: 'Special offer', isBestSelling: false },
    { img: Suitcase, title: 'Travel Suitcase', desc: 'New Collection', isBestSelling: false },
    { img: Balloons, title: 'Party Supplies', desc: 'New Collection', isBestSelling: false },
    { img: FashionHero, title: 'Designer Dresses', desc: 'Best Selling Products', isBestSelling: true },
    { img: CookwareHero, title: 'Cookware Sets', desc: 'Best Selling Products', isBestSelling: true },
    { img: SplitAC, title: 'Split AC', desc: 'Best Picks', isBestSelling: true },
    { img: TowerFan, title: 'Tower Fan', desc: 'Best Picks', isBestSelling: true }
  ];

  return (
    <div className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)] transition-colors duration-300 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--color-gold)] text-black px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-black tracking-widest uppercase">All Offers</h1>
        </div>
        <div className="flex items-center gap-4">
          <Search size={20} className="cursor-pointer hover:opacity-70 transition-opacity" />
          <Camera size={20} className="cursor-pointer hover:opacity-70 transition-opacity" />
          <Link to="/vendor/cart" className="relative cursor-pointer hover:opacity-70 transition-opacity">
            <ShoppingCart size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-black text-[var(--color-gold)] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Top Selection */}
      <div className="p-4 border-b border-[var(--card-border)] bg-[var(--card-bg)]">
        <h2 className="text-lg font-black text-[var(--card-text)]">Top Selection <span className="text-[var(--card-sub)] font-medium text-sm">({offers.length} Results)</span></h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-[1px] bg-[var(--card-border)]">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-[var(--card-bg)] p-4 flex flex-col items-center justify-center group cursor-pointer hover:bg-[var(--card-border)]/10 transition-colors">
            <div className="h-[120px] mb-4 flex items-center justify-center w-full">
              <img src={offer.img} alt={offer.title} className="max-h-full max-w-full object-contain product-img-blend group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-black text-[var(--card-text)] text-center line-clamp-1 w-full">{offer.title}</h3>
            <span className={`text-[10px] font-black uppercase tracking-widest mt-1 text-center ${offer.isBestSelling ? 'text-[var(--color-gold)]' : 'text-green-500'}`}>
              {offer.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[var(--card-bg)] border-t border-[var(--card-border)] flex items-center justify-around py-3 z-50 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/vendor/home" className="flex flex-col items-center gap-1 group">
          <Home size={22} className="text-[var(--color-gold)]" />
          <span className="text-[10px] font-black text-[var(--color-gold)] uppercase">Home</span>
        </Link>
        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <PlayCircle size={22} className="text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors" />
          <span className="text-[10px] font-black text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors uppercase">Play</span>
        </div>
        <Link to="/vendor/category-products?category=Jewellery" className="flex flex-col items-center gap-1 group">
          <GridIcon size={22} className="text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors" />
          <span className="text-[10px] font-black text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors uppercase">Categories</span>
        </Link>
        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <User size={22} className="text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors" />
          <span className="text-[10px] font-black text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors uppercase">Account</span>
        </div>
        <Link to="/vendor/cart" className="flex flex-col items-center gap-1 group relative">
          <div className="relative">
             <ShoppingCart size={22} className="text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors" />
             <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-gold)] text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
               {cartCount}
             </span>
          </div>
          <span className="text-[10px] font-black text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors uppercase">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default AllOffers;
