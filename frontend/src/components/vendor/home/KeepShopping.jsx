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
        <h2 className="text-[20px] font-black text-slate-800 mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Keep shopping for these
        </h2>
        <div className="flex overflow-x-auto gap-3 no-scrollbar pb-1 touch-pan-y" style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handleItemClick(item)}
              className="bg-white rounded-[20px] overflow-hidden min-w-[125px] shadow-sm flex flex-col active:scale-95 cursor-pointer transition-transform"
            >
              <div className="aspect-square bg-gray-50">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  width="125"
                  height="125"
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
