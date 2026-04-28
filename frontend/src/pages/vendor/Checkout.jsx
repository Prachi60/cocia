import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, CheckCircle2, ChevronDown, Star, Info, CreditCard, Banknote, Loader2 } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2); // 2: Order Summary, 3: Payment
  const [selectedPayment, setSelectedPayment] = useState('UPI');
  const [selectedUpi, setSelectedUpi] = useState('paytm'); // 'paytm' or 'phonepe'
  const [orderStatus, setOrderStatus] = useState('idle'); // 'idle', 'processing', 'success'

  const handlePlaceOrder = () => {
    setOrderStatus('processing');
    setTimeout(() => {
      setOrderStatus('success');
      setTimeout(() => {
        navigate('/vendor/home');
      }, 2000);
    }, 2000);
  };
  
  const product = location.state?.product || {
    name: 'Vembley Four Magnetic Hearts Clov...',
    price: '185',
    oldPrice: '1,999',
    off: '90%',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    rating: '4.1',
    reviews: '1,321'
  };
  
  const address = location.state?.address || {
    type: 'HOME',
    name: 'Mukesh Jinodiya',
    address: '83 kishan pura mataji mandir, sector no. 5 new harsud chhanera, New Harsud, Nehru Marg, Mangal Pandey Ward, Harsud, Khandwa 450116',
    phone: '9302841832'
  };

  const renderStepper = () => (
    <div className="bg-[var(--card-bg)] px-6 py-3 flex items-center justify-between border-b border-[var(--card-border)]">
      <div className="flex items-center w-full justify-between text-xs font-bold text-[var(--card-sub)] relative">
        <div className="absolute top-2.5 left-[15%] right-[15%] h-[2px] bg-[var(--card-border)] z-0 flex">
            <div className="w-1/2 h-full bg-[var(--color-gold)]"></div>
            <div className={`w-1/2 h-full transition-colors ${currentStep === 3 ? 'bg-[var(--color-gold)]' : 'bg-[var(--card-border)]'}`}></div>
        </div>

        <div className="flex flex-col items-center gap-1 z-10 bg-[var(--card-bg)] px-2 text-[var(--color-gold)] cursor-pointer" onClick={() => navigate(-1)}>
          <CheckCircle2 size={20} className="fill-[var(--color-gold)] text-black" />
          <span>Address</span>
        </div>
        
        <div className={`flex flex-col items-center gap-1 z-10 bg-[var(--card-bg)] px-2 ${currentStep >= 2 ? 'text-[var(--color-gold)]' : ''}`}>
          {currentStep > 2 ? <CheckCircle2 size={20} className="fill-[var(--color-gold)] text-black" /> : <div className="w-5 h-5 rounded-full bg-[var(--color-gold)] text-black flex items-center justify-center text-[10px]">2</div>}
          <span>Order Summary</span>
        </div>
        
        <div className={`flex flex-col items-center gap-1 z-10 bg-[var(--card-bg)] px-2 ${currentStep === 3 ? 'text-[var(--color-gold)]' : ''}`}>
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 3 ? 'bg-[var(--color-gold)] text-black' : 'bg-[var(--card-border)] text-[var(--card-sub)]'}`}>3</div>
          <span>Payment</span>
        </div>
      </div>
    </div>
  );

  const renderOrderSummary = () => (
    <div className="pb-24">
      {/* Deliver To */}
      <div className="bg-[var(--card-bg)] p-4 mb-2 border-b border-[var(--card-border)]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-bold text-[var(--card-text)]">Deliver to:</h3>
          <button onClick={() => navigate(-1)} className="text-[var(--color-gold)] text-sm font-bold bg-transparent border border-[var(--card-border)] px-3 py-1 rounded">Change</button>
        </div>
        <p className="text-sm font-bold text-[var(--card-text)] flex items-center gap-2 mb-1">
          {address.name} <span className="text-[10px] bg-[var(--card-border)] text-[var(--card-sub)] px-1.5 py-0.5 rounded">{address.type || 'HOME'}</span>
        </p>
        <p className="text-sm text-[var(--card-sub)] leading-snug mb-2">{address.address}</p>
        <p className="text-sm text-[var(--card-text)] font-bold">{address.phone || '9302841832'}</p>
      </div>

      {/* Product Details */}
      <div className="bg-[var(--card-bg)] p-4 mb-2 border-b border-[var(--card-border)] relative">
        <div className="flex gap-4">
            <div className="absolute top-2 left-4 text-[10px] text-green-600 bg-green-50/10 px-1 font-bold border border-green-600/30">Hot Deal</div>
            <div className="w-20 flex-shrink-0 mt-4">
                <div className="w-20 h-20 bg-black/5 rounded overflow-hidden border border-[var(--card-border)]">
                    <img src={product.image} className="w-full h-full object-cover" alt="product" />
                </div>
                <div className="mt-2 border border-[var(--card-border)] rounded flex items-center justify-between px-2 py-1 bg-transparent cursor-pointer">
                    <span className="text-xs font-bold text-[var(--card-text)]">Qty: 1</span>
                    <ChevronDown size={14} className="text-[var(--card-text)]" />
                </div>
            </div>
            <div className="flex-1 mt-4">
                <p className="text-sm text-[var(--card-text)] line-clamp-2">{product.name}</p>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-[10px] text-black bg-green-600 px-1.5 py-0.5 rounded-sm font-bold">
                    {product.rating} <Star size={8} className="fill-black ml-0.5" />
                    </div>
                    <span className="text-[10px] text-[var(--card-sub)]">({product.reviews})</span>
                    <ShieldCheck size={12} className="text-[var(--color-gold)] ml-1" /> <span className="text-[10px] font-black italic text-[var(--color-gold)] -ml-1">Assured</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                    <span className="text-green-500 font-bold text-xs flex items-center"><ChevronDown size={12}/>{product.off}</span>
                    <span className="text-[var(--card-sub)] line-through text-xs">₹{product.oldPrice}</span>
                    <span className="text-[var(--card-text)] font-bold text-sm">₹{product.price}</span>
                </div>
            </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--card-border)] text-sm text-[var(--card-text)]">
          Delivery by May 1, Fri
        </div>
      </div>

      {/* Price Details */}
      <div className="bg-[var(--card-bg)] p-4 mt-2">
        <h3 className="text-[var(--card-sub)] font-bold text-sm mb-4">Price Details</h3>
        <div className="flex justify-between items-center text-sm text-[var(--card-text)] mb-3">
          <span>MRP</span>
          <span>₹1,999</span>
        </div>
        <div className="flex justify-between items-center text-sm text-[var(--card-text)] mb-3">
          <span className="flex items-center gap-1">Fees <ChevronDown size={14}/></span>
          <span>₹7</span>
        </div>
        <div className="flex justify-between items-center text-sm text-[var(--card-text)] mb-3">
          <span className="flex items-center gap-1">Discounts <ChevronDown size={14}/></span>
          <span className="text-green-500">- ₹1,814</span>
        </div>
        <div className="flex justify-between items-center text-base font-bold text-[var(--card-text)] border-t border-dashed border-[var(--card-border)] pt-3 mt-3">
          <span>Total Amount</span>
          <span>₹192</span>
        </div>
        <div className="mt-4 bg-green-500/10 text-green-500 text-xs font-bold text-center py-2 rounded">
          You'll save ₹1,807 on this order!
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="pb-24">
      <div className="bg-[var(--card-bg)] p-4 mb-2 flex justify-between items-center border-b border-[var(--card-border)]">
        <span className="text-sm font-bold text-[var(--card-sub)] flex items-center gap-1">Total Amount <ChevronDown size={16}/></span>
        <span className="text-lg font-bold text-[var(--color-gold)]">₹192</span>
      </div>
      
      <div className="bg-green-500/10 px-4 py-3 mb-2 flex justify-between items-center border border-green-500/20 mx-2 rounded-lg">
        <div>
            <p className="text-sm font-bold text-green-500">5% Cashback</p>
            <p className="text-xs text-green-600 mt-0.5">Claim now with payment offers</p>
        </div>
        <div className="flex items-center gap-1 bg-[var(--card-bg)] px-2 py-1 rounded shadow-sm border border-[var(--card-border)]">
            <span className="text-[10px] font-bold text-[var(--card-text)]">Paytm</span>
            <span className="text-[10px] font-bold text-[var(--color-gold)]">+3</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="bg-[var(--card-bg)] border-y border-[var(--card-border)] mt-2">
        <div 
          className="p-4 border-b border-[var(--card-border)] flex items-start justify-between cursor-pointer"
          onClick={() => setSelectedPayment(selectedPayment === 'UPI' ? '' : 'UPI')}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-6 border border-[var(--card-border)] rounded flex items-center justify-center text-[10px] font-bold bg-black/5 text-[var(--card-text)]">UPI</div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[var(--card-text)]">UPI</span>
              {selectedPayment !== 'UPI' && (
                <>
                  <span className="text-xs text-[var(--card-sub)] mt-1">Pay by any UPI app</span>
                  <span className="text-[10px] font-bold text-green-500 mt-1">Get upto ₹50 cashback • 3 offers available</span>
                </>
              )}
            </div>
          </div>
          <ChevronDown size={20} className={`text-[var(--card-sub)] transition-transform ${selectedPayment === 'UPI' ? 'rotate-180' : ''}`} />
        </div>
        
        {/* Expanded UPI Option */}
        {selectedPayment === 'UPI' && (
          <div className="bg-[var(--color-gold)]/5 dark:bg-white/5 p-4 border-b border-[var(--card-border)]">
            
            {/* Paytm */}
            <div className="cursor-pointer" onClick={() => setSelectedUpi('paytm')}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 transition-all ${selectedUpi === 'paytm' ? 'border-[5px] border-[var(--color-gold)]' : 'border border-[var(--card-sub)]'}`}></div>
                <span className="text-sm font-bold text-[var(--card-text)] flex-1">Paytm</span>
                <div className="w-8 h-8 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px] font-black text-[#00b9f1]">Paytm</span>
                </div>
              </div>
              {selectedUpi === 'paytm' && (
                <>
                  <p className="text-[10px] text-[var(--color-gold)] ml-7 mb-3 border-b border-[var(--color-gold)]/30 border-dashed inline-block">Offer already exhausted</p>
                  <button 
                    onClick={handlePlaceOrder}
                    className="w-full ml-7 max-w-[calc(100%-28px)] bg-[var(--color-gold)] text-black font-bold py-3 rounded text-sm hover:brightness-110 transition-all shadow-sm">
                    Pay ₹192
                  </button>
                </>
              )}
            </div>

            {/* PhonePe */}
            <div className="mt-4 pt-4 border-t border-[var(--card-border)] cursor-pointer" onClick={() => setSelectedUpi('phonepe')}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 transition-all ${selectedUpi === 'phonepe' ? 'border-[5px] border-[var(--color-gold)]' : 'border border-[var(--card-sub)]'}`}></div>
                <span className="text-sm text-[var(--card-text)] flex-1 font-bold">PhonePe</span>
                <div className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">पे</div>
              </div>
              {selectedUpi === 'phonepe' && (
                <div className="mt-4">
                  <button 
                    onClick={handlePlaceOrder}
                    className="w-full ml-7 max-w-[calc(100%-28px)] bg-[var(--color-gold)] text-black font-bold py-3 rounded text-sm hover:brightness-110 transition-all shadow-sm">
                    Pay ₹192
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Other Methods */}
      <div className="bg-[var(--card-bg)] border-b border-[var(--card-border)]">
        <div 
          className="p-4 border-b border-[var(--card-border)] flex items-start justify-between cursor-pointer"
          onClick={() => setSelectedPayment(selectedPayment === 'CARD' ? '' : 'CARD')}
        >
          <div className="flex items-start gap-3">
            <CreditCard size={20} className="text-[var(--card-sub)]" />
            <div>
              <p className="text-sm font-bold text-[var(--card-text)]">Credit / Debit / ATM Card</p>
              <p className="text-xs text-[var(--card-sub)] mt-1">Add and secure cards as per RBI guidelines</p>
              <p className="text-xs text-green-500 font-bold mt-1">Get upto 5% cashback • 2 offers available</p>
            </div>
          </div>
          <ChevronDown size={20} className={`text-[var(--card-sub)] transition-transform ${selectedPayment === 'CARD' ? 'rotate-180' : ''}`} />
        </div>
        
        {selectedPayment === 'CARD' && (
          <div className="p-4 bg-[var(--color-gold)]/5 dark:bg-white/5 border-b border-[var(--card-border)]">
            <div className="space-y-3 mb-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  className="w-full bg-[var(--card-bg)] text-[var(--card-text)] border border-[var(--card-border)] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="Valid Thru (MM/YY)" 
                  className="w-1/2 bg-[var(--card-bg)] text-[var(--card-text)] border border-[var(--card-border)] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
                <input 
                  type="password" 
                  placeholder="CVV" 
                  maxLength={4}
                  className="w-1/2 bg-[var(--card-bg)] text-[var(--card-text)] border border-[var(--card-border)] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
              </div>
            </div>
            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-[var(--color-gold)] text-black font-bold py-3 rounded text-sm hover:brightness-110 transition-all shadow-sm">
              Pay ₹192
            </button>
          </div>
        )}
        
        <div 
          className="p-4 border-b border-[var(--card-border)] flex items-center justify-between cursor-pointer"
          onClick={() => setSelectedPayment(selectedPayment === 'COD' ? '' : 'COD')}
        >
          <div className="flex items-center gap-3">
            <Banknote size={20} className="text-[var(--card-sub)]" />
            <div>
              <p className="text-sm font-bold text-[var(--card-text)]">Cash on Delivery</p>
            </div>
          </div>
          <ChevronDown size={20} className={`text-[var(--card-sub)] transition-transform ${selectedPayment === 'COD' ? 'rotate-180' : ''}`} />
        </div>

        {selectedPayment === 'COD' && (
          <div className="p-4 bg-[var(--color-gold)]/5 dark:bg-white/5 border-b border-[var(--card-border)]">
             <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3 rounded-lg text-[11px] text-[var(--card-sub)] leading-relaxed mb-4 shadow-sm">
                Due to handling costs, a nominal fee of ₹9 will be charged for orders placed using this option. Avoid this fee by paying online now.
             </div>
             <button 
                className="w-full bg-[var(--color-gold)] text-black font-bold py-3 rounded text-sm hover:brightness-110 transition-all shadow-sm"
                onClick={handlePlaceOrder}
             >
                Place Order
             </button>
          </div>
        )}
      </div>
    </div>
  );

  if (orderStatus !== 'idle') {
    return (
      <div className="min-h-screen bg-[var(--card-bg)] flex flex-col items-center justify-center w-full fixed inset-0 z-[100] px-6 text-center">
        {orderStatus === 'processing' ? (
          <>
            <Loader2 size={48} className="text-[var(--color-gold)] animate-spin mb-6" />
            <p className="text-base font-black text-[var(--card-text)]">Processing Order</p>
            <p className="text-xs font-bold text-[var(--card-sub)] mt-2 bg-[var(--card-border)] px-4 py-2 rounded-full">Please do not press back or close the app</p>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <p className="text-xl font-black text-green-600 mb-1">Order Placed Successfully!</p>
            <p className="text-sm font-bold text-[var(--card-sub)] mt-2">Redirecting to Home...</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black w-full overflow-x-hidden">
      {/* Header */}
      <div className="bg-[var(--card-bg)] px-4 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-[var(--card-border)]">
        <div className="flex items-center gap-4">
          <ChevronLeft size={24} onClick={() => currentStep === 3 ? setCurrentStep(2) : navigate(-1)} className="cursor-pointer text-[var(--card-text)]" />
          <div>
            <p className="text-[10px] text-[var(--card-sub)]">Step {currentStep} of 3</p>
            <h1 className="text-base font-bold text-[var(--card-text)]">{currentStep === 2 ? 'Order Summary' : 'Payments'}</h1>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 px-2 py-1 rounded text-[10px] font-bold text-[var(--card-text)] border border-[var(--card-border)]">
          <ShieldCheck size={12} className="text-[var(--color-gold)]" /> 100% Secure
        </div>
      </div>

      {renderStepper()}

      <div className="bg-gray-50 dark:bg-black">
        {currentStep === 2 ? renderOrderSummary() : renderPayment()}
      </div>

      {/* Footer */}
      {currentStep === 2 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[var(--card-bg)] border-t border-[var(--card-border)] p-3 flex justify-between items-center z-50">
          <div className="pl-2">
            <p className="text-xs text-[var(--card-sub)] line-through mb-0.5">1,999</p>
            <p className="text-lg font-bold text-[var(--card-text)] flex items-center gap-2">192 <Info size={14} className="text-[var(--card-sub)] cursor-pointer" /></p>
          </div>
          <button 
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentStep(3);
            }}
            className="bg-[var(--color-gold)] hover:brightness-110 transition-colors text-black font-bold px-12 py-3.5 rounded text-sm shadow-sm"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
