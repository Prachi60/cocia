import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, CheckCircle2, Navigation, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_ORDER = {
  id: 'OD87463', customer: 'Rahul Sharma', phone: '+91 98765 43210',
  address: 'Flat 4B, Emerald Apartments, Sector 15, Noida, UP - 201301',
  lat: 28.5355, lng: 77.3910,
  pickupAddress: 'FreshMart, Shop 12, Sector 15 Market, Noida',
  pickupLat: 28.5400, pickupLng: 77.3890,
  items: 3, earning: 48, otp: '7843', status: 'in_transit',
};

const STATUS_STEPS = [
  { key: 'accepted', label: 'Order Accepted', desc: 'Head to vendor for pickup' },
  { key: 'at_pickup', label: 'At Pickup', desc: 'Collect the package from vendor' },
  { key: 'in_transit', label: 'In Transit', desc: 'On the way to customer' },
  { key: 'delivered', label: 'Delivered', desc: 'Package handed to customer' },
];

const DeliveryOrderDetail = () => {
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState('in_transit');
  const [otpInput, setOtpInput] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const statusIndex = STATUS_STEPS.findIndex(s => s.key === currentStatus);

  const handleVerifyOTP = () => {
    if (otpInput === MOCK_ORDER.otp) setOtpVerified(true);
    else alert('Incorrect OTP. Ask the customer for the correct code.');
  };

  const handleMarkDelivered = () => {
    if (!otpVerified) { alert('Please verify the customer OTP first'); return; }
    setCurrentStatus('delivered');
    setDelivered(true);
  };

  if (delivered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-100">
            <CheckCircle2 size={48} className="text-white" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Delivered!</h2>
          <p className="text-3xl font-black text-green-600 mt-4">+₹{MOCK_ORDER.earning}</p>
          <p className="text-sm text-slate-400 font-medium">Added to your earnings</p>
          <button onClick={() => navigate('/delivery/orders')}
            className="mt-8 w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-100">
            Back to Orders
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-8">
      <div className="sticky top-0 bg-white z-10 px-4 py-4 border-b border-slate-100 flex items-center gap-3 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 bg-slate-50 rounded-xl">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <div>
          <h1 className="text-base font-black text-slate-900">Order #{MOCK_ORDER.id}</h1>
          <p className="text-[11px] text-slate-400 font-medium capitalize">{currentStatus.replace('_', ' ')}</p>
        </div>
        <div className="ml-auto bg-green-50 text-green-600 font-black text-sm px-3 py-1.5 rounded-full border border-green-100">
          +₹{MOCK_ORDER.earning}
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Status Timeline */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Delivery Progress</h3>
          <div className="space-y-4">
            {STATUS_STEPS.map((step, i) => {
              const isActive = step.key === currentStatus;
              const isDone = statusIndex > i;
              return (
                <div key={step.key} className="flex gap-4 items-start relative">
                  {i < STATUS_STEPS.length - 1 && (
                    <div className={`absolute left-[11px] top-6 w-0.5 h-8 ${isDone ? 'bg-blue-200' : 'bg-slate-100'}`} />
                  )}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isActive ? 'bg-blue-600 shadow-lg shadow-blue-100' : isDone ? 'bg-blue-100' : 'bg-slate-100'}`}>
                    {isDone ? <CheckCircle2 size={14} className="text-blue-600" /> : <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-slate-300'}`} />}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isActive ? 'text-blue-600' : isDone ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pickup */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-blue-600 rounded-full" /><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pickup</span></div>
            <p className="text-sm font-bold text-slate-900">{MOCK_ORDER.pickupAddress}</p>
          </div>
          <button onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${MOCK_ORDER.pickupLat},${MOCK_ORDER.pickupLng}`, '_blank')}
            className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-xs font-black border border-blue-100 shrink-0">
            <Navigation size={14} /> Navigate
          </button>
        </div>

        {/* Customer / Drop */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-green-500 rounded-full" /><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Drop-off</span></div>
              <p className="text-sm font-bold text-slate-900">{MOCK_ORDER.customer}</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{MOCK_ORDER.address}</p>
            </div>
            <button onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${MOCK_ORDER.lat},${MOCK_ORDER.lng}`, '_blank')}
              className="flex items-center gap-1.5 bg-green-50 text-green-600 px-4 py-2 rounded-xl text-xs font-black border border-green-100 shrink-0">
              <Navigation size={14} /> Navigate
            </button>
          </div>
          <a href={`tel:${MOCK_ORDER.phone}`} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><Phone size={15} className="text-blue-600" /></div>
            <div><p className="text-xs font-black text-slate-900">Call Customer</p><p className="text-[11px] text-slate-400 font-medium">{MOCK_ORDER.phone}</p></div>
          </a>
        </div>

        {/* OTP */}
        <div className={`bg-white rounded-2xl border shadow-sm p-5 ${otpVerified ? 'border-green-200' : 'border-slate-100'}`}>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={18} className={otpVerified ? 'text-green-500' : 'text-slate-400'} />
            <h3 className="text-sm font-black text-slate-900">Delivery OTP Verification</h3>
            {otpVerified && <span className="ml-auto text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified ✓</span>}
          </div>
          {!otpVerified ? (
            <>
              <p className="text-xs text-slate-400 font-medium mb-3">Ask the customer for their 4-digit OTP</p>
              <div className="flex gap-3">
                <input type="tel" maxLength={4} value={otpInput} onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="- - - -" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-center text-2xl font-black text-slate-900 tracking-widest focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none" />
                <button onClick={handleVerifyOTP} className="bg-blue-600 text-white px-5 rounded-xl font-black text-xs">Verify</button>
              </div>
            </>
          ) : (
            <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-500 shrink-0" />
              <p className="text-sm font-bold text-green-700">OTP verified! You can now mark as delivered.</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button onClick={() => setShowIssueModal(true)}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-red-50 text-red-500 rounded-2xl text-xs font-black uppercase tracking-wider border border-red-100">
            <AlertCircle size={16} /> Report Issue
          </button>
          <button onClick={handleMarkDelivered}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg transition-all ${otpVerified ? 'bg-green-600 text-white shadow-green-100' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
            <CheckCircle2 size={16} /> Mark Delivered
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showIssueModal && (
          <div className="fixed inset-0 z-50 flex items-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowIssueModal(false)} className="absolute inset-0 bg-black/50" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 30 }} className="relative w-full bg-white rounded-t-[32px] p-6">
              <h3 className="text-lg font-black text-slate-900 mb-4">Report an Issue</h3>
              {['Customer not available', 'Wrong address provided', 'Customer refused delivery', 'Damaged package', 'Other'].map(issue => (
                <button key={issue} onClick={() => setShowIssueModal(false)} className="w-full text-left px-4 py-4 border-b border-slate-50 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">{issue}</button>
              ))}
              <button onClick={() => setShowIssueModal(false)} className="w-full mt-4 py-3 bg-slate-100 text-slate-600 rounded-2xl font-black text-sm">Cancel</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeliveryOrderDetail;
