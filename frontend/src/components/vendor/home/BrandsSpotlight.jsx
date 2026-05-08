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
    <div className="px-3 mt-4">
      <h2 className="text-slate-900 mb-3 px-1" style={{ fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, fontSize: '26px', lineHeight: 1.2, letterSpacing: '-0.3px' }}>
        Brands in Spotlight
      </h2>
      <div className="grid grid-cols-3 gap-x-2 gap-y-3">
        {items.map((card, idx) => (
          <div
            key={idx}
            onClick={() => handleBrandClick(card)}
            className="flex flex-col gap-1 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F5F5F5] border border-gray-100 shadow-sm">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-1 right-1 bg-black/10 backdrop-blur-sm text-white text-[7px] px-1 py-0.5 rounded-sm font-bold border border-white/20">AD</div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#ff0000] text-white text-center py-0.5 text-[9.5px] font-black leading-tight">
                {card.title}
              </div>
            </div>
            <div className="text-center px-0.5">
              <p className="text-[10.5px] font-bold text-slate-800 leading-tight line-clamp-1">{card.sub}</p>
              <p className="text-[9px] font-medium text-gray-400 line-clamp-1">Sponsored</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BrandsSpotlight);
