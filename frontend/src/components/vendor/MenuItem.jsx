import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ icon: Icon, title, path, color = "text-slate-600", textColor = "text-slate-800" }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(path)}
      className="w-full flex items-center justify-between py-4 px-2 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 group"
    >
      <div className="flex items-center gap-4">
        <div className={`${color} group-hover:scale-110 transition-transform`}>
          <Icon size={22} strokeWidth={2} />
        </div>
        <span className={`text-sm font-medium ${textColor}`}>{title}</span>
      </div>
      <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
    </button>
  );
};

export default MenuItem;
