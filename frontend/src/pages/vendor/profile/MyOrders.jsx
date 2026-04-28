import React from 'react';
import { ArrowLeft, ShoppingBag, ChevronRight, Package, Truck, CheckCircle2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MyOrders = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: 'OD123456789',
      status: 'Delivered',
      date: '25 Apr 2026',
      items: [
        { name: 'Sleek Geometric Pendant', price: '4,499', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200' }
      ]
    },
    {
      id: 'OD123456790',
      status: 'Shipped',
      date: '27 Apr 2026',
      items: [
        { name: 'Premium Hard Trolley', price: '3,499', image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=200' }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)]"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="hover:text-[var(--color-gold)] transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-black uppercase tracking-widest">My Orders</h1>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-black/20 border border-[var(--card-border)] rounded-2xl p-4 space-y-4 hover:border-[var(--color-gold)]/30 transition-all cursor-pointer group">
            <div className="flex justify-between items-center border-b border-[var(--card-border)] pb-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                   {order.status === 'Delivered' ? <CheckCircle2 size={14} /> : <Truck size={14} />}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'text-green-500' : 'text-blue-500'}`}>{order.status}</span>
              </div>
              <span className="text-[10px] font-bold text-[var(--card-sub)] uppercase tracking-widest">Order ID: {order.id}</span>
            </div>

            {order.items.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-xl overflow-hidden p-2 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 py-1">
                  <h3 className="text-sm font-black tracking-tight leading-tight mb-1 group-hover:text-[var(--color-gold)] transition-colors">{item.name}</h3>
                  <p className="text-xs font-black text-[var(--color-gold)]">₹{item.price}</p>
                  <p className="text-[10px] text-[var(--card-sub)] mt-2 font-bold">Ordered on {order.date}</p>
                </div>
                <div className="flex items-center">
                  <ChevronRight size={20} className="text-[var(--card-sub)] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ))}

        {orders.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
             <div className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center text-[var(--color-gold)]">
                <ShoppingBag size={40} />
             </div>
             <h3 className="text-lg font-black uppercase tracking-widest">No Orders Yet</h3>
             <p className="text-sm text-[var(--card-sub)] font-bold max-w-xs">You haven't placed any orders yet. Start shopping to see your history!</p>
             <button onClick={() => navigate('/vendor/home')} className="mt-4 bg-[var(--color-gold)] text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg">Start Shopping</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyOrders;
