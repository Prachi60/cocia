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
    <div id="category-products-section" className="py-6 px-4 bg-[var(--card-bg)] mt-2 transition-all duration-500 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-black border border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 rounded-full shadow-[0_0_20px_rgba(226,167,80,0.3)] flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <CheckCircle size={20} className="text-green-400" />
          <span className="font-bold text-sm tracking-wide whitespace-nowrap">{toastMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-[var(--color-gold)] rounded-full"></div>
          <h2 className="text-xl font-black text-[var(--card-text)]">Explore {selectedCategory}</h2>
        </div>
        <button className="text-[12px] font-bold text-[var(--color-gold)] flex items-center hover:underline">
          View All <ChevronRight size={14} />
        </button>
      </div>

      {products.length === 0 ? (
        <div className="py-10 text-center text-gray-500 font-medium">
          No products found for {selectedCategory}.
        </div>
      ) : (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {products.map((product) => (
            <div key={product.id} className="bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] overflow-hidden shadow-sm hover:shadow-lg hover:border-[var(--color-gold)]/50 transition-all duration-300 group flex flex-col cursor-pointer" onClick={() => handleProductClick(product)}>
              <div className="relative h-40 bg-white flex items-center justify-center p-2 overflow-hidden">
                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm z-10">
                  <Heart size={16} />
                </button>
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-[#cc0c39] text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm z-10">
                    {product.discount}
                  </span>
                )}
              </div>
              
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-[12px] font-bold text-[var(--card-text)] line-clamp-1 mb-1">{product.name}</h3>
                <p className="text-[10px] text-gray-400 mb-2 line-clamp-1">{product.shortDescription}</p>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-[var(--color-gold)]">
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" className="opacity-50" />
                  </div>
                  <span className="text-[9px] font-medium text-gray-400">({product.rating})</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-end gap-1.5 mb-2">
                    <span className="text-[14px] font-black text-[var(--card-text)]">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-[10px] text-gray-500 line-through mb-0.5">₹{product.oldPrice}</span>
                    )}
                  </div>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full bg-[var(--color-gold)] text-black text-[11px] font-black py-2 rounded-lg hover:bg-[#c99547] transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
                  >
                    <ShoppingCart size={14} /> Add to Cart
                  </button>
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
