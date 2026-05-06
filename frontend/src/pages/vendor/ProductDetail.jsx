import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  ArrowLeft, Search, ShoppingCart, Star, Heart, Share2, 
  ChevronRight, Truck, ShieldCheck, MapPin, Check, 
  RotateCcw, IndianRupee, Info, Plus, Home as HomeIcon, X, Edit2, Trash2
} from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

// Import Assets
import SamsungS24 from '../../assets/Cards/samsung_s24.png';
import EarbudsDeal from '../../assets/Cards/earbuds_deal.png';
import LorealShampoo from '../../assets/Cards/loreal_shampoo.png';
import PlumShampoo from '../../assets/Cards/plum_shampoo.png';
import LipGloss from '../../assets/products/jewellery.png';
import FashionHero from '../../assets/Cards/fashion_hero.png';
import MakeupHero from '../../assets/Cards/makeup_picks.png';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Lounge Dreams');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const product = location.state?.product || {
    id: '1',
    brand: 'Lounge Dreams',
    name: 'Women Boxy Fit Checked Casual Shirt',
    price: 1559,
    oldPrice: 2999,
    discount: '48% off',
    rating: 4.1,
    ratingCount: 237,
    image: PlumShampoo,
    label: 'Recently Viewed'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const similarProducts = useMemo(() => [
    { id: 'sim1', brand: 'Lounge Dreams', name: 'Women Boxy Fit Casual Shirt', price: 1759, oldPrice: 3999, discount: '56% off', rating: 4.2, image: PlumShampoo },
    { id: 'sim2', brand: 'Lounge Dreams', name: 'Women Boxy Fit Solid Shirt', price: 957, oldPrice: 1899, discount: '49% off', rating: 4.5, image: FashionHero },
    { id: 'sim3', brand: 'Lounge Dreams', name: 'Women Boxy Fit Blue Shirt', price: 1459, oldPrice: 2899, discount: '50% off', rating: 4.0, image: LorealShampoo },
  ], []);

  const recentlyViewed = useMemo(() => [
    { id: 'rv1', brand: 'Lounge Dreams', name: 'Women Boxy Fit Checked Casual Shirt', price: 1559, oldPrice: 2999, discount: '48% off', rating: 4.1, image: PlumShampoo },
    { id: 'rv2', brand: 'Adam Phillip', name: 'Women Regular Fit Checked Shirt', price: 859, oldPrice: 1999, discount: '57% off', rating: 4.3, image: LorealShampoo },
  ], []);

  const boughtTogether = useMemo(() => [
    { id: 'bt1', brand: 'hitarth fashion', name: 'Casual Sleeveless Solid Top', price: 159, oldPrice: 699, discount: '77% off', rating: 4.4, ratingCount: 92, image: LipGloss },
    { id: 'bt2', brand: 'Chimpaaanzee', name: 'Women Typography Regular Tee', price: 209, oldPrice: 799, discount: '73% off', rating: 4.6, ratingCount: 17, image: EarbudsDeal },
  ], []);

  const handleAddToCart = useCallback(() => {
    const cart = JSON.parse(localStorage.getItem('userCart') || '[]');
    cart.push({ ...product, cartId: Date.now() });
    localStorage.setItem('userCart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    setToastMessage('Added to cart');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, [product]);

  const handleProductClick = (item) => {
    navigate('/vendor/product-detail', { state: { product: item } });
  };

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-900">
      {/* Premium Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-slate-800">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[17px] font-medium text-slate-700">Continue Your Shopping</h1>
        </div>
        <div className="flex items-center gap-5">
          <Search size={22} className="text-slate-700" />
          <div className="relative">
            <ShoppingCart size={22} className="text-slate-700" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
              9
            </span>
          </div>
        </div>
      </div>

      {/* Main Product View (Mimicking recently viewed/selected item) */}
      <div className="px-4 py-6">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 mb-6">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm text-slate-400">
              <Share2 size={20} />
            </button>
            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm ${isWishlisted ? 'text-red-500' : 'text-slate-400'}`}
            >
              <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="text-[15px] font-bold text-slate-900">{product.brand}</h2>
            <p className="text-[15px] text-slate-600 line-clamp-1">{product.name}</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-black text-slate-900">₹{product.price}</span>
            <span className="text-sm text-gray-400 line-through">₹{product.oldPrice}</span>
            <span className="text-sm font-bold text-green-600">{product.discount}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-green-700">
              {[1,2,3,4].map(i => <Star key={i} size={12} fill="currentColor" />)}
              <Star size={12} />
            </div>
            <span className="text-[12px] font-medium text-slate-400">({product.ratingCount || 237})</span>
          </div>
          <p className="text-[11px] font-bold text-[#2874f0] mt-2">
            Or Pay ₹{Math.round(product.price * 0.9)} + 48 coins
          </p>
        </div>
      </div>

      <div className="h-2 bg-gray-100" />

      {/* Recently Viewed */}
      <div className="py-6">
        <h3 className="px-4 text-[17px] font-bold text-slate-900 mb-4">Recently Viewed</h3>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
          {recentlyViewed.map(item => (
            <div 
              key={item.id} 
              onClick={() => handleProductClick(item)}
              className="flex-shrink-0 w-[180px] border border-gray-100 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] bg-gray-50">
                <img src={item.image} alt="recent" className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <h4 className="text-[13px] font-bold text-slate-800 leading-tight line-clamp-1">{item.brand}</h4>
                <p className="text-[12px] text-slate-500 line-clamp-1 mb-1">{item.name}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] text-gray-400 line-through">₹{item.oldPrice}</span>
                  <span className="text-[13px] font-bold">₹{item.price}</span>
                  <span className="text-[11px] font-bold text-green-600">{item.discount}</span>
                </div>
                <div className="flex items-center gap-0.5 mt-1 text-green-600">
                  {[1,2,3,4].map(i => <Star key={i} size={10} fill="currentColor" />)}
                  <span className="text-[10px] ml-1 text-slate-400">(4)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-2 bg-gray-100" />

      {/* Similar Products */}
      <div className="py-6">
        <h3 className="px-4 text-[17px] font-bold text-slate-900 mb-4">Similar Products</h3>
        
        {/* Filter Chips */}
        <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar mb-6">
          {['Lounge Dreams', 'Pink', 'High rated', 'Oversized', 'Summer'].map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                activeFilter === filter 
                ? 'bg-blue-50 text-blue-600 border-blue-600 shadow-sm' 
                : 'bg-white text-slate-600 border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 px-4">
          {similarProducts.map(item => (
            <div 
              key={item.id} 
              onClick={() => handleProductClick(item)}
              className="flex flex-col cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 mb-2 border border-gray-50">
                <img src={item.image} alt="similar" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-[13px] font-bold text-slate-800 leading-tight line-clamp-1">{item.brand}</h4>
              <p className="text-[12px] text-slate-500 line-clamp-1 mb-1">{item.name}</p>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] text-gray-400 line-through">₹{item.oldPrice}</span>
                <span className="text-[13px] font-bold">₹{item.price}</span>
                <span className="text-[11px] font-bold text-green-600">{item.discount}</span>
              </div>
              <p className="text-[10px] font-bold text-[#2874f0] mt-1">Or Pay ₹{Math.round(item.price * 0.9)} + 40</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-2 bg-gray-100" />

      {/* Bought Together */}
      <div className="py-6">
        <div className="flex justify-between items-center px-4 mb-4">
          <h3 className="text-[17px] font-bold text-slate-900">Bought Together</h3>
          <button className="text-[14px] font-bold text-[#2874f0] border border-gray-200 px-4 py-1.5 rounded shadow-sm">View all</button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
          {boughtTogether.map(item => (
            <div 
              key={item.id} 
              onClick={() => handleProductClick(item)}
              className="flex-shrink-0 w-[180px] border border-gray-100 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] bg-gray-50">
                <img src={item.image} alt="bought" className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <h4 className="text-[13px] font-bold text-slate-800 leading-tight line-clamp-1">{item.brand}</h4>
                <p className="text-[12px] text-slate-500 line-clamp-1 mb-1">{item.name}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] text-gray-400 line-through">₹{item.oldPrice}</span>
                  <span className="text-[13px] font-bold">₹{item.price}</span>
                  <span className="text-[11px] font-bold text-green-600">{item.discount}</span>
                </div>
                <div className="flex items-center gap-0.5 mt-1 text-green-600">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                  <span className="text-[10px] ml-1 text-slate-400">({item.ratingCount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-100 px-4 py-3 grid grid-cols-2 gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={handleAddToCart}
          className="py-3.5 rounded-lg border border-gray-200 text-[14px] font-black text-slate-700 uppercase tracking-tight"
        >
          Add to Cart
        </button>
        <button 
          className="py-3.5 rounded-lg bg-[#2874f0] text-[14px] font-black text-white uppercase tracking-tight shadow-md"
        >
          Buy Now
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
