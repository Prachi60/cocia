import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, CheckCircle, Info, Trash2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem('userCart') || '[]');
      setCartItems(items);
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);

  const handleRemove = (cartId) => {
    const updated = cartItems.filter(item => item.cartId !== cartId);
    setCartItems(updated);
    localStorage.setItem('userCart', JSON.stringify(updated));
  };

  const updateQuantity = (cartId, delta) => {
    const updated = cartItems.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(1, (item.qty || 1) + delta);
        return { ...item, qty: newQty };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem('userCart', JSON.stringify(updated));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceStr = String(item.price || '0').replace(/,/g, '');
    return acc + (Number(priceStr) || 0) * (item.qty || 1);
  }, 0);

  const formattedTotal = totalPrice.toLocaleString('en-IN');

  return (
    <div className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)] transition-colors duration-300 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-[100] bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-[var(--card-text)] hover:text-[var(--color-gold)] transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-black tracking-widest uppercase text-[var(--color-gold)]">Shopping Cart</h1>
        </div>
        <div className="relative">
          <ShoppingCart size={20} className="text-[var(--card-text)]" />
          <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-gold)] text-black text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">{cartItems.length}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-[var(--card-border)]/30 rounded-full flex items-center justify-center mb-6 border border-[var(--card-border)]">
              <ShoppingCart size={40} className="text-[var(--color-gold)] opacity-50" />
            </div>
            <h2 className="text-xl font-black uppercase tracking-widest mb-2">Your Cart is Empty</h2>
            <p className="text-sm text-[var(--card-sub)] mb-8">Looks like you haven't added anything yet.</p>
            <Link to="/vendor/home" className="bg-[var(--color-gold)] text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-[0_0_20px_rgba(226,167,80,0.2)]">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:flex gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:w-[60%] space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-[var(--card-sub)] uppercase tracking-widest">{cartItems.length} Items Selected</span>
                <button onClick={() => { setCartItems([]); localStorage.setItem('userCart', '[]'); }} className="text-red-400 hover:text-red-500 text-xs font-black uppercase tracking-widest flex items-center gap-1 transition-colors">
                  <Trash2 size={14}/> Clear Cart
                </button>
              </div>

              {cartItems.map((item) => (
                <div key={item.cartId} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-4 flex gap-4 relative overflow-hidden group shadow-sm hover:border-[var(--color-gold)]/30 transition-colors">
                  <div className="w-28 h-28 bg-[var(--card-border)]/30 rounded-xl p-2 flex-shrink-0 border border-[var(--card-border)]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 product-img-blend" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="text-sm font-bold line-clamp-2 text-[var(--card-text)] leading-tight">{item.name}</h3>
                          <button onClick={() => handleRemove(item.cartId)} className="text-red-400 p-1.5 hover:bg-red-500/10 rounded-lg transition-colors flex-shrink-0">
                            <Trash2 size={16}/>
                          </button>
                        </div>
                        <span className="text-[10px] font-black text-[var(--color-gold)] uppercase tracking-widest mt-1 block">{item.brand || 'PREMIUM'}</span>
                      </div>
                      
                      <div className="flex items-end justify-between mt-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-[var(--card-sub)] line-through italic">₹{item.oldPrice || '0'}</span>
                          <span className="text-lg font-black text-[var(--card-text)] tracking-tight">₹{item.price}</span>
                        </div>
                        
                        <div className="border border-[var(--card-border)] rounded-lg flex items-center bg-[var(--card-bg)] overflow-hidden shadow-inner">
                          <button onClick={() => updateQuantity(item.cartId, -1)} className="px-3 py-1.5 text-[var(--card-sub)] hover:text-[var(--color-gold)] hover:bg-[var(--card-border)] transition-colors">-</button>
                          <span className="px-3 py-1.5 text-xs font-black border-x border-[var(--card-border)]">{item.qty || 1}</span>
                          <button onClick={() => updateQuantity(item.cartId, 1)} className="px-3 py-1.5 text-[var(--card-sub)] hover:text-[var(--color-gold)] hover:bg-[var(--card-border)] transition-colors">+</button>
                        </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Summary */}
            <div className="lg:w-[40%] mt-8 lg:mt-0 lg:sticky lg:top-[80px]">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 shadow-sm">
                <h2 className="text-sm font-black text-[var(--color-gold)] uppercase tracking-widest mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-sm mb-6 pb-6 border-b border-[var(--card-border)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--card-sub)]">Subtotal ({cartItems.length} items)</span>
                    <span className="font-bold text-[var(--card-text)]">₹{formattedTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--card-sub)]">Shipping Fee</span>
                    <span className="font-bold text-green-500">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--card-sub)]">Platform Fee</span>
                    <span className="font-bold text-[var(--card-text)]">₹10</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-[var(--card-text)] uppercase tracking-wider">Total</span>
                  <div className="text-right">
                    <span className="text-[10px] text-[var(--card-sub)] block mb-1">Including GST</span>
                    <span className="text-2xl font-black text-[var(--color-gold)] tracking-tight">₹{(totalPrice + 10).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/vendor/checkout')}
                  className="w-full bg-[var(--color-gold)] text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-[0_0_20px_rgba(226,167,80,0.2)] flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ChevronRight size={16} />
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-[var(--card-sub)] font-bold uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-green-500" /> Safe & Secure Payments
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
