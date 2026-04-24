import React, { useState } from 'react';
import { ChevronRight, Star, ShieldCheck, MapPin, Share2, Heart, Info, ChevronDown, Check, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import assets
import SamsungS24 from '../../assets/Cards/samsung_s24.png';

const ProductDetail = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [pincode, setPincode] = useState('484001');

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-[12px] text-gray-500 overflow-x-auto whitespace-nowrap">
        <Link to="/vendor/home" className="hover:text-[#2874f0]">Home</Link>
        <ChevronRight size={10} />
        <Link to="/vendor/products" className="hover:text-[#2874f0]">Mobiles & Accessories</Link>
        <ChevronRight size={10} />
        <Link to="/vendor/products" className="hover:text-[#2874f0]">Mobiles</Link>
        <ChevronRight size={10} />
        <Link to="/vendor/products" className="hover:text-[#2874f0]">Samsung Mobiles</Link>
        <ChevronRight size={10} />
        <span className="text-gray-900 truncate">Samsung Galaxy S24 5G Snapdragon (Cobalt Violet, 128 GB)</span>
      </div>

      <div className="container mx-auto px-4 lg:flex lg:gap-6 relative">
        
        {/* Left Column: Sticky Image Section */}
        <div className="lg:w-[40%] lg:sticky lg:top-[70px] lg:h-fit pb-10">
          <div className="flex flex-col gap-4">
             {/* Thumbnail & Main Image Wrapper */}
             <div className="flex flex-row-reverse lg:flex-row gap-4">
               {/* Vertical Thumbnails (Desktop) */}
               <div className="hidden lg:flex flex-col gap-2 w-16">
                 {[1, 2, 3, 4, 5].map((i) => (
                   <div key={i} className={`w-14 h-14 border p-1 cursor-pointer hover:border-[#2874f0] ${i === 1 ? 'border-[#2874f0]' : 'border-gray-200'}`}>
                     <img src={SamsungS24} alt="thumb" className="w-full h-full object-contain" />
                   </div>
                 ))}
               </div>

               {/* Main Image */}
               <div className="flex-1 relative border border-gray-100 p-8 h-[400px] lg:h-[450px] flex items-center justify-center bg-white group cursor-crosshair">
                  <img src={SamsungS24} alt="Main Product" className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Heart & Share */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3">
                    <div className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:shadow-md">
                      <Heart size={18} className="text-gray-400" />
                    </div>
                    <div className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:shadow-md">
                      <Share2 size={18} className="text-gray-400" />
                    </div>
                  </div>
               </div>
             </div>

             {/* Bottom Action Buttons (Desktop Only, sticky footer for mobile) */}
             <div className="hidden lg:grid grid-cols-2 gap-2 mt-4">
                <button className="bg-[#ff9f00] text-white py-4 font-bold rounded-sm shadow-sm hover:bg-[#fb9200] transition-colors uppercase tracking-tight flex items-center justify-center gap-2">
                  <span className="text-xl">🛒</span> ADD TO CART
                </button>
                <button className="bg-[#fb641b] text-white py-4 font-bold rounded-sm shadow-sm hover:bg-[#f35710] transition-colors uppercase tracking-tight flex items-center justify-center gap-2">
                  <span className="text-xl">⚡</span> BUY NOW
                </button>
             </div>
          </div>
        </div>

        {/* Right Column: Scrollable Details Section */}
        <div className="lg:w-[60%] lg:pl-4">
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-medium mb-1 leading-snug">
              Samsung Galaxy S24 5G Snapdragon (Cobalt Violet, 128 GB)  (8 GB RAM)
            </h1>
            
            {/* Rating Summary */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#388e3c] text-white text-[12px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                4.6 <Star size={10} fill="white" />
              </div>
              <span className="text-sm font-bold text-gray-500">61,382 Ratings & 4,512 Reviews</span>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Assured" className="h-[21px]" />
            </div>

            {/* Special Price Info */}
            <div className="text-[#388e3c] text-xs font-bold mb-1">Extra ₹28000 off</div>
            
            {/* Price Section */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl md:text-3xl font-bold">₹46,999</span>
              <span className="text-gray-500 line-through text-sm md:text-base">₹74,999</span>
              <span className="text-[#388e3c] font-bold text-sm md:text-base">37% off</span>
              <Info size={14} className="text-gray-400 cursor-pointer" />
            </div>
            <p className="text-[12px] text-gray-500 mb-6">+ ₹199 Protect Promise Fee</p>

            {/* Bank Offers */}
            <div className="mb-8">
              <h3 className="font-bold text-sm mb-3">Available offers</h3>
              <div className="space-y-2">
                {[
                  "Bank Offer 5% Cashback on Flipkart Axis Bank Card",
                  "Bank Offer ₹2000 Off On SBI Credit Card Transactions",
                  "Special Price Get extra ₹28000 off (price inclusive of cashback/coupon)",
                  "Partner Offer Sign-up for Flipkart Pay Later & get free Times Prime Benefits"
                ].map((offer, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/offer_0e037c.png" alt="tag" className="w-4 mt-0.5" />
                    <span><span className="font-bold">{offer.split(' ')[0]} {offer.split(' ')[1]}</span> {offer.split(' ').slice(2).join(' ')} <span className="text-[#2874f0] font-bold text-xs cursor-pointer ml-1">T&C</span></span>
                  </div>
                ))}
                <button className="text-[#2874f0] text-sm font-bold mt-2">View 18 more offers</button>
              </div>
            </div>

            {/* Highlights & Warranty */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-y border-gray-100 py-6">
               <div className="flex flex-col gap-4">
                  <div className="flex items-start">
                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Highlights</span>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>8 GB RAM | 128 GB ROM</li>
                      <li>15.75 cm (6.2 inch) Full HD+ Display</li>
                      <li>50MP + 10MP + 12MP | 12MP Front Camera</li>
                      <li>4000 mAh Lithium-ion Battery</li>
                      <li>Snapdragon 8 Gen 3 Mobile Platform Processor</li>
                    </ul>
                  </div>
               </div>
               <div className="flex items-start">
                  <span className="w-24 text-sm text-gray-500 flex-shrink-0">Warranty</span>
                  <p className="text-sm">1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-box Accessories</p>
               </div>
            </div>

            {/* Variant Selectors */}
            <div className="flex flex-col gap-8 mb-10">
              {/* Color */}
              <div className="flex items-start">
                <span className="w-24 text-sm text-gray-500 flex-shrink-0 mt-2">Color</span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Cobalt Violet', img: SamsungS24 },
                    { name: 'Onyx Black', img: SamsungS24 },
                    { name: 'Amber Yellow', img: SamsungS24 },
                    { name: 'Marble Gray', img: SamsungS24 }
                  ].map((color, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedColor(i)}
                      className={`w-14 h-14 border-2 p-1 cursor-pointer transition-all ${selectedColor === i ? 'border-[#2874f0]' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <img src={color.img} alt={color.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* RAM/ROM */}
              <div className="flex items-start">
                <span className="w-24 text-sm text-gray-500 flex-shrink-0 mt-2">Storage</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: '128 GB', price: '₹46,999' },
                    { label: '256 GB', price: '₹51,999' },
                    { label: '512 GB', price: '₹59,999' }
                  ].map((v, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedVariant(i)}
                      className={`px-4 py-2 border rounded-sm cursor-pointer text-sm font-medium transition-all ${selectedVariant === i ? 'border-[#2874f0] text-[#2874f0] bg-blue-50/50' : 'border-gray-300 hover:border-gray-400'}`}
                    >
                      {v.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="border border-gray-100 rounded-sm p-6 mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-24 text-sm text-gray-500 flex-shrink-0">Delivery</span>
                <div className="flex-1 flex items-center border-b-2 border-[#2874f0] max-w-[200px]">
                  <MapPin size={16} className="text-[#2874f0]" />
                  <input 
                    type="text" 
                    value={pincode} 
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-1 px-2 py-1 outline-none text-sm font-bold"
                  />
                  <button className="text-[#2874f0] text-sm font-bold px-2">Check</button>
                </div>
              </div>
              <div className="ml-28 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold">Delivery by 27 Apr, Monday</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-[#388e3c] font-bold">Free</span>
                  <span className="text-gray-400 line-through">₹40</span>
                </div>
                <p className="text-xs text-gray-500">If ordered before 11:59 PM today</p>
                <div className="text-[#2874f0] text-xs font-bold cursor-pointer">View Details</div>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-10">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h2 className="text-lg font-bold">Product Description</h2>
              </div>
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row items-center gap-10">
                   <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Galaxy AI is Here</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Welcome to the era of mobile AI. With Galaxy S24 | S24+ in your hands, you can unleash whole new levels of creativity, productivity and possibility — starting with the most important device in your life. Your smartphone.
                      </p>
                   </div>
                   <div className="flex-1">
                      <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a0f1d07-2c9b-4e8c-8e6c-7e6e5f5f5f5f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Galaxy AI" className="w-full rounded" />
                   </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-20 border border-gray-100 rounded-sm">
               <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <h2 className="font-bold">Specifications</h2>
               </div>
               <div className="p-6">
                  <h3 className="text-sm font-medium mb-4">General</h3>
                  <div className="space-y-3">
                    {[
                      { l: 'In The Box', v: 'Handset, Sim Ejection Pin, Data Cable, Quick Start Guide' },
                      { l: 'Model Number', v: 'SM-S921BZYVINS' },
                      { l: 'Model Name', v: 'Galaxy S24 5G' },
                      { l: 'Color', v: 'Cobalt Violet' },
                      { l: 'Browse Type', v: 'Smartphones' },
                      { l: 'SIM Type', v: 'Dual Sim' }
                    ].map((row, i) => (
                      <div key={i} className="flex text-sm">
                        <span className="w-1/3 text-gray-500">{row.l}</span>
                        <span className="flex-1 text-gray-900">{row.v}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <button className="w-full py-3 border-t border-gray-100 text-[#2874f0] text-sm font-bold hover:bg-gray-50">View all features</button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-2 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button className="py-4 font-bold text-gray-900 text-sm flex items-center justify-center gap-2">
           ADD TO CART
        </button>
        <button className="bg-[#fb641b] py-4 font-bold text-white text-sm flex items-center justify-center gap-2">
           BUY NOW
        </button>
      </div>

      {/* Ratings & Reviews - Full Width Style */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 md:p-10 rounded-sm border border-gray-100 shadow-sm">
             <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
                <button className="bg-white border border-gray-200 px-8 py-3 rounded-sm font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                  Rate Product
                </button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-100 pb-10">
                <div className="flex flex-col items-center">
                   <div className="text-4xl font-bold flex items-center gap-2">4.6 <Star size={28} className="text-green-700" fill="currentColor" /></div>
                   <p className="text-gray-500 text-sm mt-2">61,382 Ratings &</p>
                   <p className="text-gray-500 text-sm">4,512 Reviews</p>
                </div>
                
                <div className="md:col-span-2 flex flex-col gap-2">
                   {[5, 4, 3, 2, 1].map((star) => (
                     <div key={star} className="flex items-center gap-3">
                       <span className="text-xs font-bold w-4">{star}★</span>
                       <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                         <div className={`h-full ${star >= 3 ? 'bg-[#388e3c]' : star === 2 ? 'bg-[#ff9f00]' : 'bg-[#ff6161]'}`} style={{ width: `${star === 5 ? '80' : star === 4 ? '15' : '5'}%` }}></div>
                       </div>
                       <span className="text-[10px] text-gray-500 w-10 text-right">{star === 5 ? '45,210' : '5,120'}</span>
                     </div>
                   ))}
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { l: 'Camera', s: 4.6 },
                    { l: 'Battery', s: 3.8 },
                    { l: 'Display', s: 4.7 }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <span className="text-sm text-gray-600">{stat.l}</span>
                       <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-700" style={{ width: `${stat.s * 20}%` }}></div>
                          </div>
                          <span className="text-xs font-bold">{stat.s}</span>
                       </div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="mt-10 space-y-10">
                {[
                  { title: 'Wonderful', rating: 5, comment: 'Just wow 😍😍. The Samsung S24 is a masterpiece. The AI features are actually useful and the build quality is premium.', user: 'Flipkart Customer', date: 'Oct, 2023', likes: 452 },
                  { title: 'Highly recommended', rating: 5, comment: 'Superb camera quality and very compact. Fits perfectly in hand.', user: 'Rahul Sharma', date: 'Jan, 2024', likes: 128 }
                ].map((review, i) => (
                  <div key={i} className="border-b border-gray-50 pb-10 last:border-0">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#388e3c] text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                          {review.rating} <Star size={8} fill="white" />
                        </div>
                        <span className="font-bold text-gray-900">{review.title}</span>
                     </div>
                     <p className="text-sm text-gray-700 mb-6 leading-relaxed">{review.comment}</p>
                     
                     {/* Review Images */}
                     <div className="flex gap-2 mb-6">
                        {[1, 2].map((img) => (
                          <div key={img} className="w-16 h-16 border border-gray-200 rounded p-1 cursor-pointer overflow-hidden">
                            <img src={SamsungS24} alt="review" className="w-full h-full object-contain" />
                          </div>
                        ))}
                     </div>

                     <div className="flex justify-between items-center text-[12px] text-gray-500">
                        <div className="flex items-center gap-3">
                           <span className="font-bold text-gray-900">{review.user}</span>
                           <ShieldCheck size={14} className="text-[#388e3c]" />
                           <span>Verified Purchase</span>
                           <span>•</span>
                           <span>{review.date}</span>
                        </div>
                        <div className="flex items-center gap-6">
                           <button className="flex items-center gap-2 hover:text-[#2874f0]">
                              <span className="text-lg">👍</span> {review.likes}
                           </button>
                           <button className="flex items-center gap-2 hover:text-red-500">
                              <span className="text-lg">👎</span>
                           </button>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
