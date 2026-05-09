import React, { useState } from 'react';
import { 
  Package, Upload, Plus, X, 
  Save, CheckCircle2, ChevronRight,
  Info, Image as ImageIcon, Layers,
  DollarSign, Tag, FileText, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [saved, setSaved] = useState(false);

  const categories = ['Fashion', 'Electronics', 'Beauty', 'Home Decor', 'Toys', 'Stationery', 'Jewellery'];

  const handleAddImage = () => {
    const url = prompt('Enter Image URL');
    if (url) setImages([...images, url]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-700 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight font-montserrat uppercase">Catalog Entry</h1>
          <p className="text-slate-500 font-medium mt-1 font-raleway">Add new inventory items directly to the platform catalog.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            Save as Draft
          </button>
          <button 
            onClick={handleSave}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg ${saved ? 'bg-green-500 text-white' : 'bg-blue-500 text-white shadow-blue-100 hover:scale-105'}`}
          >
            {saved ? <CheckCircle2 size={16} /> : <Save size={16} />}
            {saved ? 'Product Published!' : 'Publish to Catalog'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <div className="flex items-center gap-2 mb-2">
               <FileText size={18} className="text-blue-500" />
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest font-montserrat">Product Specification</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Product Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Premium Leather Satchel"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 placeholder:text-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Category *</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 appearance-none">
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Sub-Category</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bags & Backpacks"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Detailed Description</label>
                <textarea 
                  rows={6}
                  placeholder="Tell customers about the product features, materials, and unique selling points..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 placeholder:text-slate-300 resize-none"
                />
              </div>
            </div>
          </section>

          {/* Pricing & Inventory */}
          <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <div className="flex items-center gap-2 mb-2">
               <DollarSign size={18} className="text-green-500" />
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest font-montserrat">Pricing & Stocks</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Selling Price (₹)</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-black focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 placeholder:text-slate-300 font-roboto"
                  />
               </div>
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">MRP (Strike-off)</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-400 placeholder:text-slate-300 font-roboto"
                  />
               </div>
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Initial Stock</label>
                  <input 
                    type="number" 
                    placeholder="1"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-sm font-black focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 placeholder:text-slate-300 font-roboto"
                  />
               </div>
            </div>
          </section>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-8">
           {/* Image Gallery */}
           <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center mb-2">
                 <div className="flex items-center gap-2">
                    <ImageIcon size={18} className="text-indigo-500" />
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-montserrat">Visuals</h3>
                 </div>
                 <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{images.length}/5</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                 {images.map((img, i) => (
                    <div key={i} className="relative aspect-square bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden group">
                       <img src={img} alt="Product" className="w-full h-full object-cover" />
                       <button 
                         onClick={() => handleRemoveImage(i)}
                         className="absolute top-2 right-2 p-1.5 bg-white/90 text-red-500 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                       >
                          <X size={14} />
                       </button>
                    </div>
                 ))}
                 {images.length < 5 && (
                    <button 
                      onClick={handleAddImage}
                      className="aspect-square border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50/20 transition-all text-slate-300"
                    >
                       <Upload size={24} />
                       <span className="text-[8px] font-black uppercase tracking-widest">Add URL</span>
                    </button>
                 )}
              </div>
              <p className="text-[9px] text-slate-400 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                 Recommended size: <strong>1080x1080 px</strong>. High quality images increase conversion by up to <strong>40%</strong>.
              </p>
           </section>

           {/* Organization */}
           <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                 <Tag size={18} className="text-amber-500" />
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-montserrat">Organization</h3>
              </div>
              
              <div className="space-y-4">
                 <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">Brand Name</label>
                    <input 
                      type="text" 
                      placeholder="Generic"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-xs font-bold focus:ring-2 focus:ring-blue-50 transition-all outline-none text-slate-900"
                    />
                 </div>
                 <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">Tags (Comma Separated)</label>
                    <input 
                      type="text" 
                      placeholder="new, trending, summer"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-xs font-bold focus:ring-2 focus:ring-blue-50 transition-all outline-none text-slate-900"
                    />
                 </div>
              </div>
           </section>

           {/* Status Card */}
           <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                 <Package size={100} />
              </div>
              <div className="relative z-10">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Status</p>
                 <div className="mt-2 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <h4 className="text-lg font-black font-montserrat uppercase tracking-tight">Active Ready</h4>
                 </div>
                 <p className="text-[10px] opacity-60 mt-4 leading-relaxed font-medium italic">
                    "This product will be instantly visible across all platform storefronts upon publishing."
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
