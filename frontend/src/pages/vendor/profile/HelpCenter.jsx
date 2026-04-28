import React from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, HelpCircle, ChevronRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HelpCenter = () => {
  const navigate = useNavigate();

  const faqs = [
    { q: 'How to track my order?', a: 'You can track your order in the "My Orders" section.' },
    { q: 'How to return a product?', a: 'Go to "My Orders", select the item and click "Return".' },
    { q: 'Payment failed but money deducted', a: 'Don\'t worry, refund will be processed within 5-7 days.' },
    { q: 'Warranty information', a: 'Check the product description for specific warranty details.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)]"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] p-4">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="hover:text-[var(--color-gold)] transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-black uppercase tracking-widest">Help Center</h1>
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--card-sub)]" />
          <input 
            type="text" 
            placeholder="Search for help..." 
            className="w-full bg-black/20 border border-[var(--card-border)] rounded-2xl py-3 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-[var(--color-gold)]/50 transition-all"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-8">
        {/* Contact Options */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/20 border border-[var(--card-border)] rounded-2xl p-6 flex flex-col items-center text-center space-y-3 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer group">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 group-hover:scale-110 transition-transform">
               <MessageCircle size={24} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest">Live Chat</h3>
            <p className="text-[10px] text-[var(--card-sub)] font-bold">24/7 support agent</p>
          </div>
          <div className="bg-black/20 border border-[var(--card-border)] rounded-2xl p-6 flex flex-col items-center text-center space-y-3 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer group">
            <div className="p-3 bg-[var(--color-gold)]/10 rounded-full text-[var(--color-gold)] group-hover:scale-110 transition-transform">
               <Phone size={24} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest">Call Us</h3>
            <p className="text-[10px] text-[var(--card-sub)] font-bold">Mon-Sat (9am-6pm)</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h2 className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] ml-1">Frequently Asked Questions</h2>
          <div className="bg-black/20 border border-[var(--card-border)] rounded-2xl divide-y divide-[var(--card-border)]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-black/5 cursor-pointer group">
                <div className="flex items-center gap-3">
                   <HelpCircle size={18} className="text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors" />
                   <span className="text-xs font-bold text-[var(--card-text)]">{faq.q}</span>
                </div>
                <ChevronRight size={16} className="text-[var(--card-sub)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Legal/Policies */}
        <div className="space-y-4">
          <h2 className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-[3px] ml-1">Policies & Info</h2>
          <div className="grid grid-cols-1 gap-2">
            {['Privacy Policy', 'Terms of Service', 'Cancellation & Returns', 'Shipping Policy'].map((item) => (
               <div key={item} className="flex items-center justify-between p-4 bg-black/20 border border-[var(--card-border)] rounded-xl hover:border-[var(--color-gold)]/20 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                     <FileText size={18} className="text-[var(--card-sub)]" />
                     <span className="text-xs font-bold">{item}</span>
                  </div>
                  <ChevronRight size={16} className="text-[var(--card-sub)] group-hover:text-[var(--color-gold)] transition-colors" />
               </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpCenter;
