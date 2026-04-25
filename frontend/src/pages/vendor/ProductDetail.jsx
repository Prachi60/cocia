import React, { useState } from 'react';
import { ChevronRight, Star, ShieldCheck, MapPin, Share2, Heart, Info, ChevronDown, Check, Truck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Import assets
import SamsungS24 from '../../assets/Cards/samsung_s24.png';

const ProductDetail = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [pincode, setPincode] = useState('452012');
  
  const location = useLocation();
  const product = location.state?.product || {
    brand: 'SAMSUNG',
    name: 'Galaxy S24 5G Snapdragon',
    price: '46,999',
    oldPrice: '74,999',
    off: '37% OFF',
    rating: '4.6',
    reviews: '61,382',
    delivery: '27th Apr',
    image: SamsungS24,
    bestseller: true
  };

  return (
    <div className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)] transition-colors duration-300">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-[11px] text-[var(--card-sub)] overflow-x-auto whitespace-nowrap border-b border-[var(--card-border)]">
        <Link to="/vendor/home" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
        <ChevronRight size={10} />
        <Link to="/vendor/products" className="hover:text-[var(--color-gold)] transition-colors">Category</Link>
        <ChevronRight size={10} />
        <span className="text-[var(--color-gold)] font-bold truncate">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 lg:flex lg:gap-8 pt-6 pb-20 relative">
        
        {/* Left Column: Image Section */}
        <div className="lg:w-[45%] lg:sticky lg:top-[70px] lg:h-fit">
          <div className="flex flex-col gap-6">
             <div className="relative border border-[var(--card-border)] rounded-2xl p-8 h-[400px] lg:h-[500px] flex items-center justify-center bg-[var(--card-bg)] group overflow-hidden shadow-sm">
                <img src={product.image} alt={product.name} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110 product-img-blend" />
                
                {/* Status Badges */}
                {product.bestseller && (
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-[var(--color-gold)] text-black text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">BESTSELLER</span>
                  </div>
                )}

                {/* Heart & Share */}
                <div className="absolute top-4 right-4 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-[var(--card-bg)]/60 backdrop-blur-md border border-[var(--card-border)] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[var(--color-gold)] hover:text-black transition-all">
                    <Heart size={18} />
                  </div>
                  <div className="w-10 h-10 bg-[var(--card-bg)]/60 backdrop-blur-md border border-[var(--card-border)] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[var(--color-gold)] hover:text-black transition-all">
                    <Share2 size={18} />
                  </div>
                </div>
             </div>

             {/* Action Buttons */}
             <div className="hidden lg:grid grid-cols-2 gap-3 mt-2">
                <button className="bg-black border-2 border-[var(--color-gold)] text-[var(--color-gold)] py-4 font-black rounded-xl hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
                  Add to Cart
                </button>
                <button className="bg-[var(--color-gold)] text-black py-4 font-black rounded-xl hover:bg-[#c99547] transition-all duration-300 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(226,167,80,0.3)]">
                  Buy Now
                </button>
             </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:w-[55%] flex flex-col pt-6 lg:pt-0">
          <div className="mb-2">
            <span className="text-[var(--color-gold)] font-black text-[10px] uppercase tracking-[3px]">{product.brand || 'PREMIUM BRAND'}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black mb-3 leading-tight text-[var(--card-text)] tracking-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 text-[var(--color-gold)]">
              {[1,2,3,4].map(i => <Star key={i} size={14} fill="currentColor" />)}
              <Star size={14} />
              <span className="ml-2 text-sm font-bold text-[var(--card-sub)]">{product.rating || '4.5'} ({product.reviews || '1k+'} Reviews)</span>
            </div>
            <div className="px-2 py-0.5 border border-[var(--color-gold)]/30 rounded text-[9px] font-black text-[var(--color-gold)] uppercase tracking-widest bg-[var(--color-gold)]/5">
              Premium Choice
            </div>
          </div>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-black text-[var(--color-gold)]">₹{product.price}</span>
            {product.oldPrice && <span className="text-gray-500 line-through text-lg italic">₹{product.oldPrice}</span>}
            {product.off && <span className="bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-[12px] font-black px-2 py-0.5 rounded border border-[var(--color-gold)]/20">{product.off}</span>}
          </div>

          <div className="space-y-6 mb-10">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm">
              <h3 className="text-[var(--color-gold)] font-black text-xs uppercase tracking-widest mb-3">Limited Time Offers</h3>
              <div className="space-y-2">
                <p className="text-sm flex items-start gap-2">
                  <Check size={16} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span>Bank Offer: 5% Unlimited Cashback on Axis Bank Card</span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <Check size={16} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span>Special Price: Get extra ₹28000 off</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[var(--card-sub)] font-bold text-xs uppercase tracking-widest">Select Storage</h3>
              <div className="flex gap-2">
                {['128 GB', '256 GB', '512 GB'].map((v, i) => (
                  <button 
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 rounded-lg text-xs font-black transition-all border ${selectedVariant === i ? 'bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-md' : 'bg-transparent text-[var(--card-sub)] border-[var(--card-border)] hover:border-[var(--color-gold)]/50'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center gap-4 mb-10 py-4 border-y border-[var(--card-border)]">
             <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)]">
               <Truck size={20} />
             </div>
             <div>
               <p className="text-xs font-bold text-[var(--card-sub)] uppercase tracking-widest">Free Express Delivery</p>
               <p className="text-sm font-black text-[var(--color-gold)]">By {product.delivery || 'Tomorrow'}</p>
             </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {[
              { l: 'Display', v: '6.2" QHD+' },
              { l: 'Battery', v: '4000 mAh' },
              { l: 'Processor', v: 'Snapdragon 8 Gen 3' },
              { l: 'Camera', v: '50MP Triple' }
            ].map(spec => (
              <div key={spec.l} className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm">
                <p className="text-[10px] text-[var(--card-sub)] uppercase font-black tracking-widest mb-1">{spec.l}</p>
                <p className="text-sm font-black text-[var(--card-text)]">{spec.v}</p>
              </div>
            ))}
          </div>

          {/* Related Products: "More Like This" */}
          <div className="pt-8 border-t border-[var(--card-border)]">
            <h2 className="text-lg font-black text-[var(--color-gold)] uppercase tracking-[3px] mb-6">More Like This</h2>
            <div className="flex overflow-x-auto gap-4 no-scrollbar pb-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-[140px] flex-shrink-0 group cursor-pointer">
                  <div className="aspect-square bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] overflow-hidden mb-2 p-2 group-hover:border-[var(--color-gold)]/30 transition-all shadow-sm">
                    <img src={SamsungS24} alt="related" className="w-full h-full object-contain product-img-blend group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-[10px] font-black text-[var(--card-text)] truncate px-1">Galaxy S24 Ultra</p>
                  <p className="text-[11px] font-black text-[var(--color-gold)] px-1">₹72,999</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 bg-[var(--card-bg)] border-t border-[var(--card-border)] backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="py-4 text-xs font-black text-[var(--card-text)] border-r border-[var(--card-border)] active:bg-gray-100 dark:active:bg-gray-800 transition-colors">ADD TO CART</button>
        <button className="py-4 text-xs font-black text-black bg-[var(--color-gold)] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductDetail;
