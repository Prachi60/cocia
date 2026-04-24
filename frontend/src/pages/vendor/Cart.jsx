import React from 'react';
import { ShoppingCart, ChevronRight, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-20">
      {/* Bazaar Subtotal Section */}
      <div className="bg-white p-4 mb-3 shadow-sm">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xl font-black italic text-[#c4272e]">bazaar</span>
        </div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-lg">Subtotal (1 item):</span>
          <span className="text-xl font-bold flex items-start">
             <span className="text-xs mt-1">₹</span>
             375<span className="text-xs mt-1">00</span>
          </span>
        </div>
        <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-slate-900 font-medium py-3 rounded-full shadow-sm transition-colors mb-4">
          Proceed to Buy Bazaar Items
        </button>
        
        <div className="flex items-center justify-between py-2 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm">
             <span className="text-slate-600">Delivery to</span>
             <span className="font-bold">Harsh Pandey- INDORE</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t border-slate-100">
           <div className="w-12 h-12 bg-slate-50 rounded border border-slate-100 p-1">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" className="w-full h-full object-contain" />
           </div>
           <ChevronRight size={20} className="text-slate-400" />
        </div>
        
        <div className="text-center py-2">
           <Link to="/vendor/home" className="text-blue-600 text-sm font-medium">Continue Shopping on Bazaar</Link>
        </div>
      </div>

      {/* Main Shopping Cart Section */}
      <div className="bg-white p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        
        {/* Free Delivery Progress */}
        <div className="mb-6">
           <div className="w-full bg-slate-100 h-2 rounded-full mb-2 overflow-hidden">
              <div className="bg-green-600 h-full w-[75%]"></div>
           </div>
           <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-green-700 font-bold">
                 <CheckCircle size={18} fill="currentColor" className="text-white bg-green-700 rounded-full" />
                 <span>Your order is eligible for FREE Delivery.</span>
              </div>
              <span className="font-bold">₹499</span>
           </div>
           <p className="text-sm text-slate-600 mt-1">Choose <span className="text-blue-600 hover:underline">FREE Delivery</span> option at checkout.</p>
        </div>

        <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-slate-900 font-medium py-3 rounded-full shadow-sm transition-colors mb-6">
          Proceed to Buy (1 item)
        </button>

        <div className="flex items-center gap-2 mb-6">
           <div className="w-4 h-4 border border-blue-600 rounded flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></div>
           </div>
           <span className="text-blue-600 text-sm font-medium">Select all items</span>
        </div>

        {/* Dummy Cart Item */}
        <div className="flex gap-4 border-t border-slate-100 pt-6">
           <div className="w-24 h-24 bg-slate-50 rounded p-2">
              <img src="https://images.unsplash.com/photo-1696446701796-da61225697cc?w=200" className="w-full h-full object-contain" />
           </div>
           <div className="flex-1">
              <h3 className="text-sm font-medium line-clamp-2">Apple iPhone 15 (Blue, 128 GB) - Latest Model with A16 Bionic Chip</h3>
              <p className="text-xl font-bold mt-1">₹69,999</p>
              <p className="text-xs text-green-600 font-bold mt-1">In Stock</p>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Info size={12} /> Eligible for FREE Shipping</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
