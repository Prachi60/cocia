import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const StillLookingSection = ({ items }) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback((item) => {
    // Generate or use existing ID
    const productId = item.id || Math.random().toString(36).substr(2, 9);
    
    // Map categories based on labels for demo purposes
    let category = 'Fashion';
    if (item.label.toLowerCase().includes('neck')) category = 'Jewellery';
    if (item.label.toLowerCase().includes('lips')) category = 'Beauty';
    if (item.label.toLowerCase().includes('shamp')) category = 'Beauty';

    navigate(`/vendor/continue-shopping/${productId}`, { 
      state: { 
        product: { 
          id: productId,
          name: item.label,
          brand: 'Trending Now',
          price: 599,
          oldPrice: 1299,
          discount: '54% off',
          rating: 4.5,
          image: item.img,
          category: category,
          label: 'Limited time deal'
        } 
      } 
    });
  }, [navigate]);


  return (
    <div className="px-3 mt-3">
      <div className="bg-[#2874f0] rounded-2xl px-3 pt-3 pb-3 shadow-sm relative overflow-hidden">
        {/* Diagonal Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(135deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', 
          backgroundSize: '20px 20px' 
        }}></div>

        <h2 className="relative z-10 text-[14px] font-black text-white mb-2.5" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Still looking for these?
        </h2>

        <div className="flex overflow-x-auto w-full gap-2.5 pb-1 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handleCardClick(item)}
              className="flex-shrink-0 bg-white rounded-xl p-2 w-[100px] shadow-sm flex flex-col gap-1.5 snap-start cursor-pointer active:scale-95 transition-transform"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[10.5px] font-bold text-gray-600 leading-tight truncate">{item.label}</p>
                <p className="text-[9.5px] font-black text-[#2874f0] uppercase tracking-tight mt-0.5">VIEW STORE</p>
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
