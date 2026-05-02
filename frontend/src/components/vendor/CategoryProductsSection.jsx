import React, { useEffect, useState } from 'react';
import { Star, Heart, ShoppingCart, ChevronRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allCategoryProducts } from '../../data/categoryData';

const CategoryProductsSection = ({ selectedCategory }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();
  const products = allCategoryProducts[selectedCategory] || [];

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem('userCart') || '[]');
    const existing = cart.find(item => item.id === product.id || item.name === product.name);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1, image: product.image, price: product.price });
    }
    localStorage.setItem('userCart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    setToastMessage('Item added to cart');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleProductClick = (product) => {
    navigate('/vendor/product-detail', { 
      state: { 
        product: { 
          ...product, 
          off: product.discount,
          label: 'Limited time deal',
          brand: 'Brand', 
          reviews: '1,200', 
          delivery: 'Tomorrow' 
        } 
      } 
    });
  };

  useEffect(() => {
    setIsVisible(false);
    if (selectedCategory) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [selectedCategory]);

  if (!selectedCategory) return null;

  return (
    <div id="category-products-section" className="py-2 px-3 bg-white mt-4 transition-all duration-500 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-black text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <CheckCircle size={20} className="text-green-400" />
          <span className="font-bold text-sm tracking-wide whitespace-nowrap">{toastMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-center mb-5 px-1">
        <h2 className="text-xl font-black text-slate-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {selectedCategory}
        </h2>
        <button className="text-[12px] font-black text-[#2874f0] uppercase tracking-tight hover:underline">
          View All
        </button>
      </div>

      {products.length === 0 ? (
        <div className="py-10 text-center text-gray-400 font-bold italic">
          More products coming soon...
        </div>
      ) : (
        <div className={`grid grid-cols-2 gap-x-3 gap-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col cursor-pointer group" 
              onClick={() => handleProductClick(product)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Image Overlay Tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-orange-500/90 backdrop-blur-sm text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">
                    #{product.tag || 'Trending'}
                  </span>
                </div>

                <button 
                  onClick={(e) => { e.stopPropagation(); /* Wishlist logic */ }}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-all shadow-md z-10 active:scale-90"
                >
                  <Heart size={16} strokeWidth={2.5} />
                </button>
              </div>
              
              <div className="pt-3 px-1">
                <h3 className="text-[13px] font-bold text-slate-800 line-clamp-1 leading-tight">
                  <span className="font-black">{product.brand || 'COCIA'}</span> {product.name}
                </h3>
                
                <div className="mt-1 flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-400 line-through font-bold">{product.oldPrice || '₹999'}</span>
                    <span className="text-[15px] font-black text-slate-900">₹{product.price}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#2874f0]">₹{Math.round(product.price * 0.95)} with UPI offer + more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProductsSection;
