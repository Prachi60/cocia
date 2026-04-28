import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, ShoppingBag, Trash2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('userWishlist') || '[]');
    setWishlist(stored);
  }, []);

  const removeFromWishlist = (id, e) => {
    e.stopPropagation();
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('userWishlist', JSON.stringify(updated));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)]"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="hover:text-[var(--color-gold)] transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-black uppercase tracking-widest">My Wishlist</h1>
        <div className="ml-auto bg-[var(--color-gold)] text-black text-[10px] font-black px-2 py-1 rounded-full">
          {wishlist.length}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-black/20 border border-[var(--card-border)] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => navigate('/vendor/product-detail', { state: { product: item } })}>
              <div className="aspect-square bg-white relative p-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                <button 
                  onClick={(e) => removeFromWishlist(item.id, e)}
                  className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-md rounded-full text-red-500 shadow-md hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="p-3 space-y-1">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-[var(--card-sub)] truncate">{item.brand || 'PREMIUM'}</h3>
                <h4 className="text-xs font-black text-[var(--card-text)] truncate leading-tight group-hover:text-[var(--color-gold)] transition-colors">{item.name}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-black text-[var(--color-gold)]">₹{item.price}</span>
                  <button className="bg-[var(--color-gold)]/10 text-[var(--color-gold)] p-1.5 rounded-lg border border-[var(--color-gold)]/20 hover:bg-[var(--color-gold)] hover:text-black transition-all">
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {wishlist.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
             <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                <Heart size={40} fill="currentColor" />
             </div>
             <h3 className="text-lg font-black uppercase tracking-widest">Empty Wishlist</h3>
             <p className="text-sm text-[var(--card-sub)] font-bold max-w-xs">Your wishlist is lonely. Add some products you love to see them here!</p>
             <button onClick={() => navigate('/vendor/home')} className="mt-4 bg-[var(--color-gold)] text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg">Browse Shop</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;
