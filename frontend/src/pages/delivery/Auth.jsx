import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ShieldCheck, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DeliveryAuth = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOTP = () => {
    if (phone.length < 10) {
      setError('Enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    // Auto-focus next
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length < 4) {
      setError('Enter all 4 digits');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/delivery/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-nunito max-w-md mx-auto">
      {/* Header */}
      <div className="px-6 pt-16 pb-8">
        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-100">
          <ShieldCheck size={28} className="text-white" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight font-montserrat">
          Cocio<span className="text-blue-600">.</span>
        </h1>
        <p className="text-lg font-bold text-slate-400 mt-1 tracking-tight">Delivery Partner Portal</p>
      </div>

      {/* Form Area */}
      <div className="flex-1 px-6">
        <AnimatePresence mode="wait">
          {step === 'phone' ? (
            <motion.div
              key="phone"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Enter your mobile number</h2>
                <p className="text-sm text-slate-400 font-medium mt-1">We'll send a 4-digit OTP to verify your identity</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                  <span className="text-slate-500 font-bold text-sm">+91</span>
                  <div className="w-px h-5 bg-slate-200" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="98765 43210"
                    className="flex-1 bg-transparent text-slate-900 font-bold text-base placeholder:text-slate-300 outline-none tracking-widest"
                  />
                  <Phone size={18} className="text-slate-300" />
                </div>
              </div>

              {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

              <button
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send OTP <ArrowRight size={18} /></>
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-6"
            >
              <div>
                <button onClick={() => setStep('phone')} className="flex items-center gap-1 text-blue-600 text-sm font-bold mb-4">
                  <ChevronLeft size={18} /> Back
                </button>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Enter OTP</h2>
                <p className="text-sm text-slate-400 font-medium mt-1">Sent to <span className="text-slate-700 font-bold">+91 {phone}</span></p>
              </div>

              <div className="flex items-center justify-between gap-3">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="tel"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' && !otp[i] && i > 0) {
                        document.getElementById(`otp-${i - 1}`)?.focus();
                      }
                    }}
                    className="w-16 h-16 text-center text-2xl font-black text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                  />
                ))}
              </div>

              <p className="text-xs text-slate-400 font-medium">
                Didn't receive OTP? <button className="text-blue-600 font-bold" onClick={() => setOtp(['', '', '', ''])}>Resend in 30s</button>
              </p>

              {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

              <button
                onClick={handleVerify}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Verify & Login <ArrowRight size={18} /></>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-widest p-8">
        Cocio Partner Network • Secure Login
      </p>
    </div>
  );
};

export default DeliveryAuth;
