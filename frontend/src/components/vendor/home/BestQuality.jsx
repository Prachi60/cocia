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
    <div className="px-3 mt-8 mb-6">
      <div className="bg-[#2874f0] rounded-[28px] p-5 shadow-sm border border-white/10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[19px] font-black text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Best quality
          </h2>
          <button 
            onClick={() => navigate('/vendor/all-offers')}
            className="bg-white text-black p-2 rounded-none shadow-lg active:scale-90 transition-all"
          >
            <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((product, idx) => (
            <div 
              key={idx} 
              onClick={() => handleProductClick(product)}
              className="bg-white rounded-none p-2.5 shadow-sm flex flex-col gap-2 group cursor-pointer active:scale-95 transition-all"
            >
              <div className="aspect-[3/4] rounded-none overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                  width="140"
                  height="186"
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
