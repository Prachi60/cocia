import React, { useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopSelection = ({ items }) => {
  const navigate = useNavigate();

  const handleProductClick = useCallback((product) => {
    navigate('/vendor/product-detail', { 
      state: { 
        product: { 
          id: Math.random().toString(36).substr(2, 9),
          name: product.name,
          brand: 'Top Selection',
          price: 999,
          oldPrice: 1999,
          discount: '50% off',
          rating: 4.8,
          image: product.img,
          label: 'Top Selection'
        } 
      } 
    });
  }, [navigate]);

  return (
    <div className="px-3 mt-6">
      <div className="bg-[#ff0000] rounded-[28px] p-3.5 shadow-lg border border-white/10">
        <div className="flex justify-between items-center mb-3 px-1">
          <h2 className="text-[18px] font-black text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Top Selection
          </h2>
          <button 
            onClick={() => navigate('/vendor/all-offers')}
            className="bg-white text-black p-1.5 rounded-none shadow-md active:scale-90 transition-all flex items-center justify-center"
          >
            <ChevronRight size={16} strokeWidth={4} />
          </button>
        </div>

        <div className="bg-white rounded-[20px] p-2.5">
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">
            {items.map((product, idx) => (
              <div 
                key={idx} 
                onClick={() => handleProductClick(product)}
                className="flex flex-col gap-1.5 group cursor-pointer transition-all active:scale-95"
              >
                <div className="aspect-square rounded-none overflow-hidden bg-[#F5F5F5] flex items-center justify-center p-1.5">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    width="150"
                    height="150"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-gray-600 leading-tight truncate">{product.name}</p>
                  <p className="text-[13px] font-black text-slate-900 mt-0.5">{product.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopSelection);
