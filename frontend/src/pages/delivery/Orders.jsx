import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, CheckCircle2, Clock, MapPin, ChevronRight, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_ORDERS = {
  pending: [
    {
      id: 'OD87471', customer: 'Vikram S.', address: 'Lajpat Nagar, South Delhi',
      pickupAddress: 'Vendor: FreshMart, CR Park, Delhi',
      items: 2, distance: '1.8 km', earning: 35, weight: '1.2 kg',
      timeLeft: 90, // seconds to accept
    },
    {
      id: 'OD87475', customer: 'Neha P.', address: 'Green Park, New Delhi',
      pickupAddress: 'Vendor: QuickShop, Malviya Nagar, Delhi',
      items: 1, distance: '3.1 km', earning: 52, weight: '0.5 kg',
      timeLeft: 110,
    },
  ],
  active: [
    {
      id: 'OD87463', customer: 'Rahul S.', address: 'Sector 15, Noida, UP',
      pickupAddress: 'Vendor: MegaMart, Sector 12, Noida',
      items: 3, distance: '2.4 km', earning: 48, status: 'in_transit',
    },
  ],
  history: [
    { id: 'OD87450', customer: 'Priya M.', address: 'Lajpat Nagar, Delhi', earning: 42, date: 'Today, 3:10 PM' },
    { id: 'OD87447', customer: 'Amit V.', address: 'South Ex, Delhi', earning: 55, date: 'Today, 2:22 PM' },
    { id: 'OD87441', customer: 'Sneha K.', address: 'Saket, Delhi', earning: 38, date: 'Today, 1:05 PM' },
    { id: 'OD87430', customer: 'Raj N.', address: 'Hauz Khas, Delhi', earning: 61, date: 'Yesterday, 6:45 PM' },
  ],
};

const TABS = ['Pending', 'Active', 'History'];

const DeliveryOrders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Pending');
  const [orders, setOrders] = useState(MOCK_ORDERS);

  const handleDecline = (orderId) => {
    setOrders(prev => ({
      ...prev,
      pending: prev.pending.filter(o => o.id !== orderId),
    }));
  };

  const handleAccept = (order) => {
    setOrders(prev => ({
      ...prev,
      pending: prev.pending.filter(o => o.id !== order.id),
      active: [...prev.active, { ...order, status: 'accepted' }],
    }));
  };

  return (
    <div className="pt-5">
      {/* Header */}
      <div className="px-4 mb-4">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">My Orders</h1>
        <p className="text-sm text-slate-400 font-medium mt-0.5">
          {orders.pending.length} pending • {orders.active.length} active
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 px-4 mb-4">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-[12px] font-black uppercase tracking-wider relative transition-colors ${
              activeTab === tab ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            {tab}
            {tab === 'Pending' && orders.pending.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full">{orders.pending.length}</span>
            )}
            {activeTab === tab && (
              <motion.div layoutId="ordersTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="px-4 space-y-3">
        <AnimatePresence>
          {/* --- PENDING ORDERS --- */}
          {activeTab === 'Pending' && (
            orders.pending.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={28} className="text-slate-300" />
                </div>
                <p className="text-sm font-bold text-slate-400">No pending orders right now</p>
                <p className="text-xs text-slate-300 mt-1">New orders will appear here automatically</p>
              </div>
            ) : (
              orders.pending.map((order, i) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  {/* Auto-assigned badge */}
                  <div className="bg-amber-500 px-4 py-2 flex items-center gap-2">
                    <Zap size={13} className="text-white" />
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Auto-Assigned to You</span>
                    <div className="ml-auto bg-white/30 px-2 py-0.5 rounded-full text-white text-[10px] font-black">
                      Accept in {order.timeLeft}s
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order #{order.id}</p>
                        <p className="text-base font-black text-slate-900 mt-0.5">{order.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-black text-green-600">+₹{order.earning}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{order.distance}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        </div>
                        <span>{order.pickupAddress}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                        </div>
                        <span>{order.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 mb-4">
                      <span className="bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg">{order.items} items</span>
                      <span className="bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg">{order.weight}</span>
                      <span className="bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg">{order.distance}</span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDecline(order.id)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-50 text-red-500 rounded-xl text-xs font-black uppercase tracking-wider border border-red-100"
                      >
                        <X size={16} /> Decline
                      </button>
                      <button
                        onClick={() => handleAccept(order)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-100"
                      >
                        <CheckCircle2 size={16} /> Accept
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )
          )}

          {/* --- ACTIVE ORDERS --- */}
          {activeTab === 'Active' && (
            orders.active.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} className="text-slate-300" />
                </div>
                <p className="text-sm font-bold text-slate-400">No active deliveries</p>
              </div>
            ) : (
              orders.active.map((order, i) => (
                <motion.button
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => navigate(`/delivery/orders/${order.id}`)}
                  className="w-full bg-blue-600 text-white rounded-2xl p-5 text-left shadow-xl shadow-blue-100"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-70">In Transit</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-black">{order.customer}</p>
                      <div className="flex items-center gap-1 text-blue-200 text-xs font-medium mt-1">
                        <MapPin size={12} />{order.address}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black">+₹{order.earning}</p>
                      <ChevronRight size={18} className="ml-auto mt-2 opacity-60" />
                    </div>
                  </div>
                </motion.button>
              ))
            )
          )}

          {/* --- HISTORY --- */}
          {activeTab === 'History' && (
            <div className="space-y-2">
              {orders.history.map((order, i) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl px-4 py-3.5 border border-slate-100 shadow-sm flex items-center gap-4"
                >
                  <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">{order.customer}</p>
                    <p className="text-[11px] text-slate-400 font-medium truncate">{order.address}</p>
                    <p className="text-[10px] text-slate-300 font-medium mt-0.5">{order.date}</p>
                  </div>
                  <p className="text-base font-black text-green-600 shrink-0">+₹{order.earning}</p>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DeliveryOrders;
