import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const KeepShopping = ({ items }) => {
  const navigate = useNavigate();

  const handleItemClick = useCallback((item) => {
    navigate('/vendor/product-detail', { 
      state: { 
        product: { 
          id: Math.random().toString(36).substr(2, 9),
          name: item.label,
          brand: 'Recent Search',
          price: 1299,
          oldPrice: 2499,
          discount: '48% off',
          rating: 4.6,
          image: item.img,
          label: 'Continue Shopping'
        } 
      } 
    });
  }, [navigate]);

  return (
    <div className="px-3 mt-8">
      <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-[28px] p-5 shadow-sm border border-white">
        <h2 className="text-slate-800 mb-4" style={{ fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, fontSize: '26px', lineHeight: 1.2, letterSpacing: '-0.3px' }}>
          Keep shopping for these
        </h2>
        <div className="flex overflow-x-auto gap-3 no-scrollbar pb-1 touch-pan-y" style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handleItemClick(item)}
              className="bg-white rounded-[20px] overflow-hidden min-w-[125px] shadow-sm flex flex-col active:scale-95 cursor-pointer transition-transform"
            >
              <div className="aspect-square bg-white flex items-center justify-center p-3">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-contain mix-blend-multiply" 
                  loading="lazy"
                  width="125"
                  height="125"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125"%3E%3Crect fill="%23f3f4f6" width="125" height="125"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-2.5">
                <p className="text-[12px] font-bold text-gray-500 leading-tight truncate">{item.label}</p>
                <p className="text-[12px] font-black text-[#2874f0] uppercase tracking-tight mt-0.5">View More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(KeepShopping);
