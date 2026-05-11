import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { 
  TrendingUp, Package, CheckCircle2, Clock, 
  ChevronRight, MapPin, ArrowRight, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const ACTIVE_ORDER = {
  id: 'OD87463',
  customer: 'Rahul S.',
  address: 'Sector 15, Noida, UP - 201301',
  items: 3,
  distance: '2.4 km',
  status: 'picked_up',
  earning: 48,
};

const DeliveryDashboard = () => {
  const navigate = useNavigate();
  const { isOnline } = useOutletContext();

  const stats = [
    { label: "Today's Earnings", value: '₹284', sub: '+₹48 active', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Completed', value: '6', sub: 'deliveries today', icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Avg. Time', value: '22 min', sub: 'per delivery', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Orders Left', value: '2', sub: 'pending nearby', icon: Package, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const recentDeliveries = [
    { id: 'OD87450', customer: 'Priya M.', address: 'Lajpat Nagar, Delhi', earning: 42, time: '10 min ago', status: 'delivered' },
    { id: 'OD87447', customer: 'Amit V.', address: 'South Ex, Delhi', earning: 55, time: '48 min ago', status: 'delivered' },
    { id: 'OD87441', customer: 'Sneha K.', address: 'Saket, Delhi', earning: 38, time: '2h ago', status: 'delivered' },
  ];

  return (
    <div className="space-y-5 px-4 pt-5">
      {/* Offline Banner */}
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 text-white px-5 py-4 rounded-2xl flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-slate-400 rounded-full" />
          <div>
            <p className="text-sm font-bold">You're Offline</p>
            <p className="text-[11px] text-slate-400 font-medium mt-0.5">Go online to receive new orders</p>
          </div>
        </motion.div>
      )}

      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Good afternoon, Amit 👋</h1>
        <p className="text-sm text-slate-400 font-medium mt-0.5">South Delhi Zone • {isOnline ? <span className="text-green-500 font-bold">Active</span> : <span className="text-slate-400 font-bold">Offline</span>}</p>
      </div>

      {/* Active Order Banner */}
      {isOnline && (
        <motion.button
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => navigate(`/delivery/orders/${ACTIVE_ORDER.id}`)}
          className="w-full bg-blue-600 text-white rounded-3xl p-5 text-left shadow-xl shadow-blue-100"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Active Delivery</span>
              </div>
              <p className="text-lg font-black leading-tight">{ACTIVE_ORDER.customer}</p>
            </div>
            <div className="bg-white/20 px-3 py-1.5 rounded-full">
              <span className="text-xs font-black">+₹{ACTIVE_ORDER.earning}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-100 text-xs font-bold mb-4">
            <MapPin size={13} />
            <span>{ACTIVE_ORDER.address}</span>
            <span className="opacity-60">• {ACTIVE_ORDER.distance}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">In Transit</span>
            <div className="flex items-center gap-1 text-xs font-black">
              View Details <ArrowRight size={14} />
            </div>
          </div>
        </motion.button>
      )}

      {/* New Order Incoming */}
      {isOnline && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
            <Zap size={20} className="text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black text-amber-900">New Order Auto-Assigned!</p>
            <p className="text-xs text-amber-600 font-medium mt-0.5">OD87471 • Vikram S. • 1.8 km away • ₹35</p>
          </div>
          <button
            onClick={() => navigate('/delivery/orders')}
            className="bg-amber-500 text-white px-4 py-2 rounded-xl text-xs font-black"
          >
            View
          </button>
        </motion.div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
          >
            <div className={`w-9 h-9 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon size={18} />
            </div>
            <p className="text-2xl font-black text-slate-900 leading-none">{stat.value}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">{stat.label}</p>
            <p className="text-[10px] text-slate-300 font-medium mt-0.5">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Deliveries */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[13px] font-black text-slate-400 uppercase tracking-widest">Recent Deliveries</h2>
          <button onClick={() => navigate('/delivery/orders')} className="text-blue-600 text-xs font-black flex items-center gap-1">
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div className="space-y-2">
          {recentDeliveries.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl px-4 py-3.5 border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 leading-tight">{d.customer}</p>
                <p className="text-[11px] text-slate-400 font-medium truncate">{d.address}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-black text-green-600">+₹{d.earning}</p>
                <p className="text-[10px] text-slate-300 font-medium mt-0.5">{d.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
