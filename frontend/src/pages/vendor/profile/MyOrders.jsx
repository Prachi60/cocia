import React from 'react';
import { ArrowLeft, ChevronRight, Truck, CheckCircle2, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MyOrders = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: 'OD123456789',
      status: 'DELIVERED',
      date: '25 Apr 2026',
      items: [
        { name: 'Sleek Geometric Pendant', price: '4,499', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200' }
      ]
    },
    {
      id: 'OD123456790',
      status: 'SHIPPED',
      date: '27 Apr 2026',
      items: [
        { name: 'Premium Hard Trolley', price: '3,499', image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=200' }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen text-slate-800 font-sans"
    >
      {/* Header - Matching Screenshot */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-50 p-6 flex items-center gap-6">
        <button onClick={() => navigate(-1)} className="text-slate-900 active:scale-90 transition-transform">
          <ArrowLeft size={28} strokeWidth={2.5} />
        </button>
        <h1 className="text-[22px] font-black uppercase tracking-tight text-[#1c2331]">My Orders</h1>
      </div>

      <div className="container mx-auto px-5 py-8 max-w-xl space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-[#cccccc] rounded-[32px] p-6 space-y-5 shadow-sm active:scale-[0.98] transition-transform cursor-pointer overflow-hidden border border-gray-200">
            {/* Order Status Header */}
            <div className="flex justify-between items-center border-b border-white/30 pb-4">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  order.status === 'DELIVERED' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                }`}>
                   {order.status === 'DELIVERED' ? <CheckCircle2 size={18} strokeWidth={2.5} /> : <Truck size={18} strokeWidth={2.5} />}
                </div>
                <span className={`text-[13px] font-black tracking-widest ${
                  order.status === 'DELIVERED' ? 'text-[#2ecc71]' : 'text-[#3498db]'
                }`}>{order.status}</span>
              </div>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Order ID: {order.id}</span>
            </div>

            {/* Product Detail Section */}
            {order.items.map((item, idx) => (
              <div key={idx} className="flex gap-5 items-center">
                <div className="w-24 h-24 bg-white rounded-3xl overflow-hidden p-3 flex-shrink-0 shadow-inner">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-black text-[#1c2331] leading-tight mb-1">{item.name}</h3>
                  <p className="text-[15px] font-black text-[#f39c12]">₹{item.price}</p>
                  <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-wide">Ordered on {order.date}</p>
                </div>
                <div className="flex items-center pr-1">
                  <ChevronRight size={24} className="text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        ))}

        {orders.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-6">
                <LayoutGrid size={40} />
             </div>
             <h3 className="text-xl font-black uppercase text-slate-800">No Orders Found</h3>
             <p className="text-sm text-slate-500 font-bold mt-2">Looks like you haven't placed any orders yet.</p>
             <button 
               onClick={() => navigate('/vendor/home')} 
               className="mt-8 bg-[#2874f0] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[12px] shadow-lg shadow-blue-100"
             >
                Start Shopping
             </button>
          </div>
        )}
      </div>

      {/* Background Decor (Matching Theme) */}
      <div className="fixed -bottom-10 -right-10 w-64 h-64 bg-gray-50 rounded-full -z-10 blur-3xl opacity-50" />
    </motion.div>
  );
};

export default MyOrders;
