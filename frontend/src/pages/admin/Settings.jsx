import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Globe, Shield, Bell, 
  Mail, Phone, CreditCard, Truck, Layout,
  Save, CheckCircle2, ChevronRight, X,
  AlertCircle, Smartphone, Lock, Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('General');
  const [saved, setSaved] = useState(false);

  const sections = [
    { id: 'General', icon: Globe, label: 'General Info' },
    { id: 'Business', icon: Shield, label: 'Business & Tax' },
    { id: 'Communication', icon: Bell, label: 'Notifications' },
    { id: 'Payments', icon: CreditCard, label: 'Payout Settings' },
    { id: 'Shipping', icon: Truck, label: 'Logistics Policy' },
    { id: 'Security', icon: Lock, label: 'Access Control' },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight font-montserrat uppercase">Platform Settings</h1>
          <p className="text-slate-500 font-medium mt-1 font-raleway">Global configuration hub for platform behavior, compliance, and policies.</p>
        </div>
        <button 
          onClick={handleSave}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white shadow-blue-100 hover:scale-105'}`}
        >
          {saved ? <CheckCircle2 size={16} /> : <Save size={16} />}
          {saved ? 'Settings Updated!' : 'Save Changes'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:w-72 flex-shrink-0 space-y-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                activeSection === section.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                : 'bg-white text-slate-400 hover:bg-slate-50 border border-transparent hover:border-slate-100'
              }`}
            >
              <section.icon size={18} />
              {section.label}
              {activeSection === section.id && <ChevronRight size={14} className="ml-auto opacity-50" />}
            </button>
          ))}
          
          <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
             <Terminal size={60} className="absolute -right-4 -bottom-4 opacity-10" />
             <p className="text-[10px] font-black uppercase tracking-widest opacity-60">System Health</p>
             <h4 className="text-lg font-black mt-1 font-montserrat">v2.4.0-Stable</h4>
             <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80">All Systems Go</span>
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 space-y-8"
            >
               <div className="flex items-center gap-3 border-b border-slate-50 pb-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                     {React.createElement(sections.find(s => s.id === activeSection).icon, { size: 24 })}
                  </div>
                  <div>
                     <h2 className="text-xl font-black text-slate-900 font-montserrat uppercase tracking-tight">{activeSection} Configuration</h2>
                     <p className="text-xs text-slate-400 font-medium mt-0.5">Manage your platform's {activeSection.toLowerCase()} settings.</p>
                  </div>
               </div>

               {activeSection === 'General' && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Platform Name</label>
                       <input type="text" defaultValue="Cocia B2B" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Support Email</label>
                       <input type="email" defaultValue="support@cocia.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Helpline Number</label>
                       <input type="text" defaultValue="+91 1800 123 4567" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Default Currency</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none appearance-none">
                          <option>INR (₹)</option>
                          <option>USD ($)</option>
                       </select>
                    </div>
                 </div>
               )}

               {activeSection === 'Business' && (
                 <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Platform Commission (%)</label>
                          <input type="number" defaultValue="10" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-black focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Tax Registration (GST)</label>
                          <input type="text" defaultValue="07AAAAA0000A1Z5" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                       </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                       <AlertCircle size={20} className="text-amber-500 mt-1" />
                       <div>
                          <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Commission Logic</p>
                          <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                            Changes here apply globally unless a category-specific rule is defined in the Finance section.
                          </p>
                       </div>
                    </div>
                 </div>
               )}

               {activeSection !== 'General' && activeSection !== 'Business' && (
                 <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                       <Terminal size={40} />
                    </div>
                    <h3 className="text-lg font-black text-slate-400 uppercase tracking-widest font-montserrat">{activeSection} Module Coming Soon</h3>
                    <p className="text-xs text-slate-400 font-medium max-w-xs">Our engineers are working hard to bring this configuration module to life.</p>
                 </div>
               )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Settings;
