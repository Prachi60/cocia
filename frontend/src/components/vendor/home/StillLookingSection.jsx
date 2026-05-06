import React from 'react';

const StillLookingSection = ({ items }) => {
  return (
    <div className="px-3 mt-4">
      <div className="bg-[#2874f0] rounded-2xl p-4 shadow-sm border border-white/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', 
          backgroundSize: '40px 40px' 
        }}></div>
        <h2 className="relative z-10 text-[17px] font-black text-white mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Vini, still looking for these?
        </h2>
        <div className="flex overflow-x-scroll w-full gap-3 pb-3 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 bg-white rounded-xl p-2.5 w-[130px] shadow-sm flex flex-col gap-1.5 snap-start">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                  width="130"
                  height="130"
                />
              </div>
              <div className="mt-1">
                <p className="text-[11px] font-bold text-gray-500 leading-tight truncate">{item.label}</p>
                <p className="text-[11px] font-black text-[#2874f0] uppercase tracking-tight">View Store</p>
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
