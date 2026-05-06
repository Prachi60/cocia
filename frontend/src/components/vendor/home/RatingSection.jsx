import React, { useState } from 'react';
import { Star, ChevronRight, Frown, Meh, Smile } from 'lucide-react';

const RatingCard = React.memo(({ item }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const expressions = [Frown, Frown, Meh, Smile, Smile];
  
  return (
    <div className="min-w-[280px] bg-white rounded-none p-3 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex gap-3 items-center px-0.5">
        <div className="w-12 h-12 rounded-none overflow-hidden bg-white border border-gray-100 p-0.5 flex-shrink-0 shadow-sm">
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-full h-full object-contain" 
            loading="lazy"
            width="48"
            height="48"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-bold text-slate-900 leading-tight truncate uppercase tracking-tight">
            {item.fullName || item.name}
          </h3>
          <p className="text-[11px] font-medium text-gray-400 mt-0.5">{item.date}</p>
        </div>
      </div>
      
      <div className="bg-gray-50/50 border border-gray-100/50 rounded-none p-2.5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[12px] font-bold text-slate-800 leading-tight">Rate this</span>
          <span className="text-[12px] font-bold text-slate-800 leading-tight">product</span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const ExpressionIcon = expressions[star-1];
            const isFilled = selectedRating >= star;
            return (
              <div 
                key={star}
                onClick={() => setSelectedRating(star)}
                className="relative cursor-pointer transition-all active:scale-125 group"
              >
                <Star 
                  size={30} 
                  strokeWidth={1}
                  className={`transition-colors ${isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-all ${isFilled ? 'scale-100 opacity-100' : 'scale-90 opacity-30 group-hover:opacity-100'}`}>
                  <ExpressionIcon 
                    size={14} 
                    strokeWidth={1.5} 
                    className={`${isFilled ? 'text-yellow-700' : 'text-gray-500'}`} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

const RatingSection = ({ items }) => {
  return (
    <div className="px-3 mt-6 mb-2">
      <div className="flex justify-between items-center mb-3 px-1">
        <h2 className="text-[18px] font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
          Help India make good choices
        </h2>
        <button className="bg-black text-white p-2 rounded-full shadow-lg active:scale-90 transition-all">
          <ChevronRight size={16} strokeWidth={3} />
        </button>
      </div>
      
      <div className="flex overflow-x-auto gap-4 no-scrollbar pb-1 px-1" style={{ WebkitOverflowScrolling: 'touch' }}>
        {items.map((item, idx) => (
          <RatingCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(RatingSection);
