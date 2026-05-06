import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const BrandsSpotlight = ({ items }) => {
  const navigate = useNavigate();

  const handleBrandClick = useCallback((card) => {
    navigate('/vendor/product-detail', { 
      state: { 
        product: { 
          id: Math.random().toString(36).substr(2, 9),
          name: card.sub,
          brand: card.title,
          price: 1499,
          oldPrice: 2999,
          discount: '50% off',
          rating: 4.9,
          image: card.img,
          label: 'Sponsored'
        } 
      } 
    });
  }, [navigate]);

  return (
    <div className="px-3 mt-8">
      <h2 className="text-[20px] font-black text-slate-900 mb-4 px-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
        Brands in Spotlight
      </h2>
      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
        {items.map((card, idx) => (
          <div 
            key={idx} 
            onClick={() => handleBrandClick(card)}
            className="flex flex-col gap-2 cursor-pointer group transition-transform active:scale-95"
          >
            <div className="relative aspect-square rounded-[18px] overflow-hidden bg-[#F5F5F5] border border-gray-100 shadow-sm">
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                loading="lazy"
                width="120"
                height="120"
              />
              <div className="absolute top-1.5 right-1.5 bg-black/10 backdrop-blur-sm text-white text-[8px] px-1 py-0.5 rounded-sm font-bold border border-white/20">AD</div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#ff0000] text-white text-center py-1 text-[11px] font-black leading-tight">
                {card.title}
              </div>
            </div>
            <div className="text-center px-0.5">
              <p className="text-[12px] font-bold text-slate-800 leading-tight line-clamp-1">{card.sub}</p>
              <p className="text-[10px] font-medium text-gray-500 mt-0.5 line-clamp-1">Sponsored</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BrandsSpotlight);
