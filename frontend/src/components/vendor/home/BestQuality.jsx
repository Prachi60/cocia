import React, { useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BestQuality = ({ items }) => {
  const navigate = useNavigate();

  const handleProductClick = useCallback((product) => {
    navigate('/vendor/product-detail', { 
      state: { 
        product: { 
          id: Math.random().toString(36).substr(2, 9),
          name: product.name,
          brand: 'Premium Quality',
          price: 2499,
          oldPrice: 4999,
          discount: '50% off',
          rating: 4.7,
          image: product.img,
          label: 'Assured'
        } 
      } 
    });
  }, [navigate]);

  return (
    <div className="px-3 mt-3 mb-2">
      <div className="bg-[#2874f0] rounded-[28px] p-4 shadow-sm border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white" style={{ fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, fontSize: '26px', lineHeight: 1.2, letterSpacing: '-0.3px' }}>
            Best quality
          </h2>
          <button 
            onClick={() => navigate('/vendor/all-offers')}
            className="bg-white text-black p-2 rounded-none shadow-lg active:scale-90 transition-all"
          >
            <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map((product, idx) => (
            <div 
              key={idx} 
              onClick={() => handleProductClick(product)}
              className="bg-white rounded-none p-2.5 shadow-sm flex flex-col gap-2 group cursor-pointer active:scale-95 transition-all"
            >
              <div className="aspect-[3/4] rounded-none overflow-hidden bg-white border border-gray-100 flex items-center justify-center p-3">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  width="140"
                  height="186"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="140" height="186" viewBox="0 0 140 186"%3E%3Crect fill="%23f3f4f6" width="140" height="186"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
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
  );
};

export default React.memo(BestQuality);
