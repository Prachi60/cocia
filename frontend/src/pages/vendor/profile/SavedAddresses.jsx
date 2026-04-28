import React, { useState } from 'react';
import { ArrowLeft, Plus, MapPin, Edit2, Trash2, Home, Building2, MoreVertical, X, Phone, User, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useAccountStore from '../../../store/useAccountStore';
import toast from 'react-hot-toast';

const SavedAddresses = () => {
  const navigate = useNavigate();
  const { savedAddresses, removeAddress, addAddress, updateAddress, selectedAddressId, setSelectedAddress } = useAccountStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: 'HOME'
  });

  const handleOpenModal = (addr = null) => {
    if (addr) {
      setEditingAddress(addr);
      setFormData({ ...addr });
    } else {
      setEditingAddress(null);
      setFormData({ name: '', phone: '', address: '', type: 'HOME' });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('All fields are required');
      return;
    }

    if (editingAddress) {
      updateAddress(formData);
      toast.success('Address updated');
    } else {
      const newAddr = { ...formData, id: Date.now() };
      addAddress(newAddr);
      setSelectedAddress(newAddr.id); // Automatically select newly added address
      toast.success('New address added & selected');
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    removeAddress(id);
    toast.success('Address removed');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)] relative pb-20"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="hover:text-[var(--color-gold)] transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-black uppercase tracking-widest">Saved Addresses</h1>
        </div>
        <button onClick={() => handleOpenModal()} className="text-[var(--color-gold)]">
          <Plus size={24} />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-6">
        <button 
          onClick={() => handleOpenModal()}
          className="w-full bg-[var(--color-gold)] text-black py-4 rounded-2xl font-black uppercase tracking-[3px] shadow-[0_10px_20px_rgba(226,167,80,0.2)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-all active:scale-95"
        >
          <Plus size={20} /> Add New Address
        </button>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
             <h2 className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px]">Your Addresses</h2>
             <span className="text-[8px] font-black text-[var(--card-sub)] uppercase tracking-widest italic">Tap to select primary</span>
          </div>
          
          <AnimatePresence>
            {savedAddresses.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              return (
                <motion.div 
                  key={addr.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => {
                    setSelectedAddress(addr.id);
                    toast.success(`Deliver to ${addr.type} selected`);
                  }}
                  className={`relative bg-black/20 border rounded-2xl p-5 space-y-4 cursor-pointer transition-all duration-300 ${isSelected ? 'border-[var(--color-gold)] shadow-[0_0_20px_rgba(226,167,80,0.1)] scale-[1.02]' : 'border-[var(--card-border)] hover:border-[var(--color-gold)]/30'}`}
                >
                  <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-[var(--color-gold)] text-black' : 'bg-[var(--color-gold)]/10 text-[var(--color-gold)]'}`}>
                            {addr.type === 'HOME' ? <Home size={14} /> : <Building2 size={14} />}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isSelected ? 'text-[var(--color-gold)]' : ''}`}>{addr.type}</span>
                        {isSelected && (
                           <div className="flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                              <CheckCircle2 size={10} className="text-green-500" />
                              <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">Active</span>
                           </div>
                        )}
                      </div>
                      <button className="text-[var(--card-sub)] hover:text-[var(--color-gold)] transition-colors">
                        <MoreVertical size={18} />
                      </button>
                  </div>

                  <div>
                      <h3 className={`text-sm font-black mb-1 tracking-tight transition-colors ${isSelected ? 'text-[var(--color-gold)]' : ''}`}>{addr.name}</h3>
                      <p className="text-xs text-[var(--card-sub)] font-bold leading-relaxed">{addr.address}</p>
                      <p className={`text-xs font-black mt-2 transition-colors ${isSelected ? 'text-[var(--card-text)]' : 'text-[var(--card-text)]'}`}>{addr.phone}</p>
                  </div>

                  <div className="flex gap-4 pt-2 border-t border-[var(--card-border)]/50">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(addr);
                        }}
                        className="text-[10px] font-black uppercase tracking-widest text-blue-500 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                      >
                        <Edit2 size={12} /> Edit
                      </button>
                      <button 
                        onClick={(e) => handleDelete(addr.id, e)}
                        className="text-[10px] font-black uppercase tracking-widest text-red-500 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                      >
                        <Trash2 size={12} /> Delete
                      </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {savedAddresses.length === 0 && (
             <div className="text-center py-20 bg-black/10 rounded-3xl border border-dashed border-[var(--card-border)]">
                <MapPin size={40} className="mx-auto text-[var(--card-sub)] mb-4 opacity-20" />
                <p className="text-sm text-[var(--card-sub)] font-bold uppercase tracking-widest">No saved addresses found</p>
             </div>
          )}
        </div>
      </div>

      {/* Slide-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-[var(--card-bg)] border-t border-[var(--card-border)] rounded-t-[32px] z-[70] p-6 max-h-[90vh] overflow-y-auto shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black uppercase tracking-widest">
                  {editingAddress ? 'Edit Address' : 'Add New Address'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] ml-1">Receiver Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--card-sub)]" />
                    <input 
                      type="text" 
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/20 border border-[var(--card-border)] rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-[var(--color-gold)]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--card-sub)]" />
                    <input 
                      type="tel" 
                      placeholder="Enter 10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-black/20 border border-[var(--card-border)] rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-[var(--color-gold)]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] ml-1">Complete Address</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-4 text-[var(--card-sub)]" />
                    <textarea 
                      placeholder="House No, Building, Street, Area..."
                      rows="3"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full bg-black/20 border border-[var(--card-border)] rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-[var(--color-gold)]/50 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Type Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] ml-1">Address Type</label>
                  <div className="flex gap-4">
                    {['HOME', 'WORK'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({...formData, type})}
                        className={`flex-1 py-3 rounded-xl border font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${formData.type === type ? 'bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-lg' : 'bg-white/5 border-[var(--card-border)] text-[var(--card-sub)] hover:border-[var(--color-gold)]/30'}`}
                      >
                        {type === 'HOME' ? <Home size={14} /> : <Building2 size={14} />}
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 pb-8">
                  <button 
                    onClick={handleSave}
                    className="w-full bg-[var(--color-gold)] text-black py-4 rounded-2xl font-black uppercase tracking-[3px] shadow-[0_10px_20px_rgba(226,167,80,0.2)] hover:scale-[1.02] transition-all active:scale-95"
                  >
                    {editingAddress ? 'Update Address' : 'Save Address'}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SavedAddresses;
