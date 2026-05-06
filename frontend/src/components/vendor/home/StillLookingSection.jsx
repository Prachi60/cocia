import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const StillLookingSection = ({ items }) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback((item) => {
    navigate('/vendor/product-detail', { 
      state: { 
        product: { 
          id: Math.random().toString(36).substr(2, 9),
          name: item.label,
          brand: 'Trending',
          price: 599,
          oldPrice: 1299,
          discount: '54% off',
          rating: 4.5,
          image: item.img,
          label: 'Limited time deal'
        } 
      } 
    });
  }, [navigate]);

  return (
    <div className="px-3 mt-4">
      <div className="bg-[#2874f0] rounded-[24px] p-5 shadow-sm relative overflow-hidden">
        {/* Diagonal Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(135deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', 
          backgroundSize: '20px 20px' 
        }}></div>

        <h2 className="relative z-10 text-[20px] font-black text-white mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Vini, still looking for these?
        </h2>

        <div className="flex overflow-x-auto w-full gap-4 pb-2 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handleCardClick(item)}
              className="flex-shrink-0 bg-white rounded-[20px] p-3 w-[145px] shadow-md flex flex-col gap-2 snap-start cursor-pointer active:scale-95 transition-transform"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                  width="145"
                  height="145"
                />
              </div>
              <div className="mt-1">
                <p className="text-[13px] font-bold text-gray-500 leading-tight truncate">{item.label}</p>
                <p className="text-[12px] font-black text-[#2874f0] uppercase tracking-tighter mt-1">VIEW STORE</p>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-1" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(StillLookingSection);
