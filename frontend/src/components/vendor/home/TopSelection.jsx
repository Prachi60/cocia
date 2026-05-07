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
    <div className="px-3 mt-3">
      <div className="bg-[#ff0000] rounded-2xl p-2.5 shadow-md border border-white/10">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 px-1">
          <h2 className="text-[14px] font-black text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Top Selection
          </h2>
          <button
            onClick={() => navigate('/vendor/all-offers')}
            className="bg-white text-black p-1 rounded shadow-sm active:scale-90 transition-all flex items-center justify-center"
          >
            <ChevronRight size={13} strokeWidth={3.5} />
          </button>
        </div>

        <div className="bg-white rounded-xl p-2">
          <div className="grid grid-cols-2 gap-2">
            {items.map((product, idx) => (
              <div
                key={idx}
                onClick={() => handleProductClick(product)}
                className="flex flex-col gap-1 group cursor-pointer active:scale-95 transition-transform"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-1">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-500 leading-tight truncate">{product.name}</p>
                  <p className="text-[11.5px] font-black text-slate-800 mt-0.5">{product.tag}</p>
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
