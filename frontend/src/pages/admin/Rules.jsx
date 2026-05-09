import React, { useState } from 'react';
import { 
  Key, Percent, Plus, Edit2, Trash2, 
  CheckCircle2, Info, Layers, Save, X,
  ShieldCheck, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_RULES = [
  { id: 1, category: 'Fashion', rate: 10, type: 'Percentage', status: 'Active', minSale: '₹0' },
  { id: 2, category: 'Electronics', rate: 8, type: 'Percentage', status: 'Active', minSale: '₹10,000' },
  { id: 3, category: 'Beauty', rate: 12, type: 'Percentage', status: 'Active', minSale: '₹0' },
  { id: 4, category: 'Home Decor', rate: 15, type: 'Percentage', status: 'Draft', minSale: '₹500' },
  { id: 5, category: 'Toys', rate: 5, type: 'Fixed Fee', status: 'Active', minSale: '₹0' },
];

const CommissionRules = () => {
  const [rules, setRules] = useState(INITIAL_RULES);
  const [isAdding, setIsAdding] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 pb-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight font-montserrat uppercase">Commission Policy</h1>
          <p className="text-slate-500 font-medium mt-1 font-raleway">Define and manage revenue sharing rules for various product categories.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-blue-100 hover:scale-105 active:scale-95 transition-all"
        >
          <Plus size={16} />
          Create Rule
        </button>
      </div>

      {/* Info Warning */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
           <AlertCircle size={20} />
        </div>
        <div>
           <p className="text-xs font-black text-amber-800 uppercase tracking-widest">Policy Impact Notice</p>
           <p className="text-xs text-amber-600 font-medium mt-1 leading-relaxed">
             Any changes to commission rates will take effect on **new orders only**. Active subscriptions or past transactions will not be retroactively updated.
           </p>
        </div>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {rules.map((rule, i) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center font-black shadow-inner">
                    <Layers size={24} />
                 </div>
                 <div className="flex gap-2">
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-blue-50 hover:text-blue-500 transition-all">
                       <Edit2 size={14} />
                    </button>
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-red-50 hover:text-red-500 transition-all">
                       <Trash2 size={14} />
                    </button>
                 </div>
              </div>

              <div>
                 <h3 className="text-lg font-black text-slate-900 font-montserrat uppercase tracking-tight">{rule.category}</h3>
                 <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-blue-600 font-roboto">{rule.rate}</span>
                    <span className="text-sm font-black text-slate-400 uppercase tracking-widest">
                       {rule.type === 'Percentage' ? '%' : 'FIXED'}
                    </span>
                 </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50 space-y-3">
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>Threshold</span>
                    <span className="text-slate-900">{rule.minSale}</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>Status</span>
                    <span className={`px-2 py-0.5 rounded-lg ${rule.status === 'Active' ? 'bg-green-50 text-green-500' : 'bg-slate-50 text-slate-400'}`}>
                       {rule.status}
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Global Rule Card */}
        <div className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={120} />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Global Policy</p>
              <h3 className="text-2xl font-black mt-2 font-montserrat">Base Rate: 10%</h3>
              <p className="text-xs opacity-60 mt-4 leading-relaxed font-medium">
                This rate applies to all categories that do not have a specific custom rule defined above.
              </p>
           </div>
           <button className="mt-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              Update Base Policy
           </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center pt-10">
         <button 
           onClick={handleSave}
           className={`flex items-center gap-2 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:scale-105 shadow-blue-200'}`}
         >
            {saved ? <CheckCircle2 size={18} /> : <Save size={18} />}
            {saved ? 'Policy Published!' : 'Apply Global Changes'}
         </button>
      </div>
    </div>
  );
};

export default CommissionRules;
