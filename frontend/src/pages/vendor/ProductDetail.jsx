import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, ShieldCheck, MapPin, Share2, Heart, Info, ChevronDown, Check, Truck, Home, Store, RotateCcw, IndianRupee, X, Search, LocateFixed, Plus, MoreHorizontal, Trash2, Edit2, Loader2, ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Import assets
import SamsungS24 from '../../assets/Cards/samsung_s24.png';
import FlipFlops from '../../assets/products/flip_flops.png';
import Tshirt from '../../assets/products/tshirt.png';
import Suitcase from '../../assets/products/suitcase.png';
import Balloons from '../../assets/products/balloons.png';
import SplitAC from '../../assets/products/split_ac.png';
import TowerFan from '../../assets/products/tower_fan.png';
import JewelleryImg from '../../assets/products/jewellery.png';
import CookwareHero from '../../assets/Cards/cookware_hero.png';
import FashionHero from '../../assets/Cards/fashion_hero.png';
import AsusLaptop from '../../assets/Cards/asus_laptop.png';
import EarbudsDeal from '../../assets/Cards/earbuds_deal.png';
import MakeupHero from '../../assets/Cards/makeup_picks.png';

const ProductDetail = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [pincode, setPincode] = useState('452012');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'HOME',
      name: 'Mukesh Jinodiya',
      address: '83 kishan pura mataji mandir, sector no. 5 new harsud chh...'
    },
    {
      id: 2,
      type: 'HOME',
      name: 'Vini Jinodiya',
      address: '36, narmada kirana store abhinandan nagar mr10 indore, ...'
    }
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const selectedAddress = addresses.find(a => a.id === selectedAddressId);
  
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const handleCurrentLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setTimeout(() => {
            const newId = addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
            const newAddr = { 
              id: newId, 
              type: 'CURRENT', 
              name: 'My Current Location', 
              address: `GPS: ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)} (Auto-detected)` 
            };
            setAddresses([...addresses, newAddr]);
            setSelectedAddressId(newId);
            setIsLocating(false);
            setShowAddressModal(false);
          }, 800);
        },
        (error) => {
          alert("Unable to retrieve your location. Please check browser permissions.");
          setIsLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setIsLocating(false);
    }
  };
  const [editingAddressData, setEditingAddressData] = useState({ id: null, name: '', address: '', type: 'HOME' });

  const handleSaveAddress = () => {
    if (editingAddressData.id) {
      setAddresses(addresses.map(a => a.id === editingAddressData.id ? editingAddressData : a));
    } else {
      const newId = addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
      const newAddr = { ...editingAddressData, id: newId, type: 'HOME' };
      setAddresses([...addresses, newAddr]);
      setSelectedAddressId(newId);
    }
    setIsEditingAddress(false);
  };

  const handleDeleteAddress = (id, e) => {
    e.stopPropagation();
    const filtered = addresses.filter(a => a.id !== id);
    setAddresses(filtered);
    if (selectedAddressId === id && filtered.length > 0) {
      setSelectedAddressId(filtered[0].id);
    } else if (filtered.length === 0) {
      setSelectedAddressId(null);
    }
  };
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem('userCart') || '[]');
      const newItem = { 
        ...product, 
        cartId: Date.now(), 
        qty: 1
      };
      localStorage.setItem('userCart', JSON.stringify([...existingCart, newItem]));
      window.dispatchEvent(new Event('cartUpdated'));
      setToastMessage('Item added to cart');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (e) {
      console.error('Failed to add to cart', e);
    }
  };

  const handleBuyNow = () => {
    navigate('/vendor/checkout', { state: { product, quantity: selectedVariant, address: selectedAddress } });
  };
  
  const product = location.state?.product || {
    brand: 'MODERN MINIMAL',
    name: 'Sleek Geometric Pendant',
    price: '4,499',
    oldPrice: '7,999',
    off: '43% OFF',
    rating: '4.9',
    reviews: '2,450',
    delivery: '28th Apr',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    bestseller: true
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]');
    const existing = wishlist.find(item => item.id === product.id || item.name === product.name);
    setIsWishlisted(!!existing);
  }, [product]);

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    let wishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]');
    const existingIndex = wishlist.findIndex(item => item.id === product.id || item.name === product.name);
    
    if (existingIndex >= 0) {
      wishlist.splice(existingIndex, 1);
      setIsWishlisted(false);
      setToastMessage('Removed from wishlist');
    } else {
      wishlist.push({ ...product, id: product.id || Date.now() });
      setIsWishlisted(true);
      setToastMessage('Added to wishlist');
    }
    
    localStorage.setItem('userWishlist', JSON.stringify(wishlist));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const getRelatedProducts = (productName) => {
    const nameStr = (productName || '').toLowerCase();
    
    // Luggage / Suitcase
    if (nameStr.includes('trolley') || nameStr.includes('suitcase') || nameStr.includes('bag')) {
      return [
        { name: 'Travel Duffle Bag', price: '1,299', image: FashionHero },
        { name: 'Hard Shell Suitcase', price: '2,999', image: Suitcase },
        { name: 'Travel Neck Pillow', price: '499', image: Balloons },
        { name: 'Luggage Tags Set', price: '199', image: FashionHero }
      ];
    }
    
    // Footwear
    if (nameStr.includes('shoe') || nameStr.includes('flip') || nameStr.includes('flop') || nameStr.includes('footwear')) {
      return [
        { name: 'Casual Sneakers', price: '899', image: FashionHero },
        { name: 'Floral Flip Flops', price: '299', image: FlipFlops },
        { name: 'Running Shoes', price: '1,299', image: FashionHero },
        { name: 'Leather Loafers', price: '1,499', image: FashionHero }
      ];
    }

    // Clothing / Tshirt
    if (nameStr.includes('shirt') || nameStr.includes('tee') || nameStr.includes('casual') || nameStr.includes('top')) {
      return [
        { name: 'Cotton Printed Tee', price: '399', image: Tshirt },
        { name: 'Polo Neck T-Shirt', price: '599', image: Tshirt },
        { name: 'Casual Denim Shirt', price: '899', image: FashionHero },
        { name: 'Basic V-Neck Tee', price: '349', image: Tshirt }
      ];
    }
    
    // Party / Balloons
    if (nameStr.includes('balloon') || nameStr.includes('party') || nameStr.includes('star')) {
      return [
        { name: 'Birthday Banner', price: '149', image: Balloons },
        { name: 'LED Fairy Lights', price: '299', image: CookwareHero },
        { name: 'Party Poppers', price: '99', image: Balloons },
        { name: 'Decoration Kit', price: '499', image: Balloons }
      ];
    }
    
    // Electronics / Galaxy / Tech
    if (nameStr.includes('galaxy') || nameStr.includes('samsung') || nameStr.includes('earbuds') || nameStr.includes('phone') || nameStr.includes('watch') || nameStr.includes('buds')) {
      return [
        { name: 'Galaxy Z Fold 5', price: '1,54,999', image: SamsungS24 },
        { name: 'Gaming Laptop', price: '72,990', image: AsusLaptop },
        { name: 'Wireless Earbuds', price: '1,299', image: EarbudsDeal },
        { name: 'Smart Watch', price: '2,499', image: EarbudsDeal }
      ];
    }
    
    // Beauty / Skincare
    if (nameStr.includes('skincare') || nameStr.includes('makeup') || nameStr.includes('plum') || nameStr.includes('beauty') || nameStr.includes('gift set') || nameStr.includes('serum')) {
      return [
        { name: 'Vitamin C Serum', price: '599', image: MakeupHero },
        { name: 'Matte Lipstick Set', price: '999', image: MakeupHero },
        { name: 'Rose Water Toner', price: '299', image: MakeupHero },
        { name: 'Night Cream', price: '799', image: MakeupHero }
      ];
    }
    
    // Default / Jewellery
    return [
      { name: 'Dainty Serenity Drops', price: '2,199', image: JewelleryImg },
      { name: 'Elegance Infinity Band', price: '3,299', image: JewelleryImg },
      { name: 'Regal Strand Necklace', price: '8,990', image: JewelleryImg },
      { name: 'Slender Wristlet Set', price: '6,499', image: JewelleryImg }
    ];
  };

  const relatedProducts = getRelatedProducts(product.name);

  return (
    <div className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)] transition-colors duration-300">
      {/* Header */}
      <div className="sticky top-0 z-[100] bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] px-4 py-4 flex items-center">
        <button onClick={() => navigate(-1)} className="text-[var(--card-text)] hover:text-[var(--color-gold)] transition-colors">
          <ArrowLeft size={24} />
        </button>
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
                  <div 
                    onClick={handleToggleWishlist}
                    className={`w-10 h-10 bg-[var(--card-bg)]/60 backdrop-blur-md border border-[var(--card-border)] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all ${isWishlisted ? 'text-red-500 border-red-500/50 hover:bg-red-500/10' : 'hover:bg-[var(--color-gold)] hover:text-black'}`}
                  >
                    <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                  </div>
                  <div className="w-10 h-10 bg-[var(--card-bg)]/60 backdrop-blur-md border border-[var(--card-border)] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[var(--color-gold)] hover:text-black transition-all">
                    <Share2 size={18} />
                  </div>
                </div>
             </div>

             {/* Action Buttons */}
             <div className="hidden lg:grid grid-cols-2 gap-3 mt-2">
                <button onClick={handleAddToCart} className="bg-black border-2 border-[var(--color-gold)] text-[var(--color-gold)] py-4 font-black rounded-xl hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
                  Add to Cart
                </button>
                <button onClick={handleBuyNow} className="bg-[var(--color-gold)] text-black py-4 font-black rounded-xl hover:bg-[#c99547] transition-all duration-300 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(226,167,80,0.3)]">
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
                  <span>Bank Offer: 5% Unlimited Cashback on HDFC Bank Card</span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <Check size={16} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span>Special Offer: Flat 10% off on making charges</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[var(--card-sub)] font-bold text-xs uppercase tracking-widest">Minimum Order Quantity</h3>
              <div className="flex gap-2">
                {['1 Piece', '5 Pieces', '10+ Pieces'].map((v, i) => (
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

          {/* Delivery details */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-white mb-4">Delivery details</h2>
            
            <div className="rounded-xl overflow-hidden border border-gray-800 flex flex-col">
              {/* Home */}
              <div className="bg-[#1c351b] p-4 flex items-center justify-between cursor-pointer" onClick={() => setShowAddressModal(true)}>
                <div className="flex items-center gap-3">
                  <Home size={20} className="text-white" />
                  <p className="text-sm font-bold text-white truncate max-w-[200px] md:max-w-[300px]">{selectedAddress?.type} <span className="font-normal text-gray-300">{selectedAddress?.address}</span></p>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>

              {/* Delivery */}
              <div className="bg-[#202020] p-4 flex items-center gap-3 border-t border-black/50">
                <Truck size={20} className="text-white" />
                <p className="text-sm font-bold text-white">Delivery by 1 May, Fri</p>
              </div>

              {/* Fulfilled */}
              <div className="bg-[#202020] p-4 flex items-start gap-3 border-t border-black/50">
                <Store size={20} className="text-white mt-0.5" />
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-white">Fulfilled by Cocia</p>
                  <p className="text-xs text-gray-400 mt-1">4.2 <Star size={10} className="inline fill-gray-400" /> • 5 years with Cocia</p>
                  <button className="text-xs font-bold text-green-500 mt-2 text-left w-fit">See other sellers</button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-4 px-2">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1c351b] border border-green-900 flex items-center justify-center relative overflow-hidden">
                  <RotateCcw size={20} className="text-green-500 relative z-10" />
                </div>
                <p className="text-[12px] text-gray-300 leading-tight mt-1">10-Day<br/>Return <ChevronRight size={10} className="inline" /></p>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1c351b] border border-green-900 flex items-center justify-center relative overflow-hidden">
                  <IndianRupee size={20} className="text-green-500 relative z-10" />
                </div>
                <p className="text-[12px] text-gray-300 leading-tight mt-1">Cash on<br/>Delivery <ChevronRight size={10} className="inline" /></p>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1c351b] border border-green-900 flex items-center justify-center relative overflow-hidden">
                  <ShieldCheck size={20} className="text-green-500 relative z-10" />
                </div>
                <p className="text-[12px] text-gray-300 leading-tight mt-1">Cocia<br/>Assured <ChevronRight size={10} className="inline" /></p>
              </div>
            </div>
          </div>



          {/* Related Products: "More Like This" */}
          <div className="pt-8 border-t border-[var(--card-border)]">
            <h2 className="text-lg font-black text-[var(--color-gold)] uppercase tracking-[3px] mb-6">More Like This</h2>
            <div className="flex overflow-x-auto gap-4 no-scrollbar pb-6">
              {relatedProducts.map((item, i) => (
                <Link 
                  key={i} 
                  to="/vendor/product-detail" 
                  state={{ product: item }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-[140px] flex-shrink-0 group cursor-pointer block"
                >
                  <div className="aspect-square bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] overflow-hidden mb-2 p-2 group-hover:border-[var(--color-gold)]/30 transition-all shadow-sm">
                    <img src={item.image} alt="related" className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-[10px] font-black text-[var(--card-text)] truncate px-1">{item.name}</p>
                  <p className="text-[11px] font-black text-[var(--color-gold)] px-1">₹{item.price}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 bg-[var(--card-bg)] border-t border-[var(--card-border)] backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button onClick={handleAddToCart} className="py-4 text-xs font-black text-[var(--card-text)] border-r border-[var(--card-border)] active:bg-gray-100 dark:active:bg-gray-800 transition-colors hover:text-[var(--color-gold)]">ADD TO CART</button>
        <button onClick={handleBuyNow} className="py-4 text-xs font-black text-black bg-[var(--color-gold)] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">BUY NOW</button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[300] bg-black border border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(226,167,80,0.3)] flex items-center gap-2 animate-in slide-in-from-top-4 fade-in duration-300">
          <Check size={16} /> {toastMessage || 'Item added to cart'}
        </div>
      )}

      {/* Address Selection Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 z-[200] flex items-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddressModal(false)}></div>
          <div className="relative w-full bg-white rounded-t-2xl flex flex-col max-h-[85vh] animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-black">{isEditingAddress ? (editingAddressData.id ? 'Edit Address' : 'Add New Address') : 'Select delivery address'}</h2>
              <X size={24} className="text-black cursor-pointer" onClick={() => {
                if (isEditingAddress) setIsEditingAddress(false);
                else setShowAddressModal(false);
              }} />
            </div>

            <div className="overflow-y-auto p-4 flex-1">
              {isEditingAddress ? (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Name</label>
                    <input 
                      type="text" 
                      value={editingAddressData.name}
                      onChange={(e) => setEditingAddressData({...editingAddressData, name: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-sm text-black focus:outline-none focus:border-blue-500"
                      placeholder="E.g. Mukesh Jinodiya"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Full Address</label>
                    <textarea 
                      rows="3"
                      value={editingAddressData.address}
                      onChange={(e) => setEditingAddressData({...editingAddressData, address: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-sm text-black focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Enter building, street, area, pincode..."
                    />
                  </div>
                  <div className="pt-4 flex gap-3">
                    <button 
                      onClick={() => setIsEditingAddress(false)}
                      className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSaveAddress}
                      className="flex-[2] bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Address
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Search */}
                  <div className="relative mb-4">
                    <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search by area, street name, pin code"
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm text-black focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Current Location */}
                  <div 
                    className={`flex items-center gap-3 py-3 border-b border-dashed border-gray-200 ${isLocating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={!isLocating ? handleCurrentLocation : undefined}
                  >
                    {isLocating ? (
                      <Loader2 size={20} className="text-blue-600 animate-spin" />
                    ) : (
                      <LocateFixed size={20} className="text-blue-600" />
                    )}
                    <span className="text-sm font-bold text-blue-600">
                      {isLocating ? 'Detecting location...' : 'Use my current location'}
                    </span>
                  </div>

                  {/* Saved Addresses Header */}
                  <div className="flex items-center justify-between mt-6 mb-4">
                    <h3 className="text-sm font-bold text-black">Saved addresses</h3>
                    <button 
                      className="flex items-center gap-1 text-sm font-bold text-blue-600"
                      onClick={() => {
                        setEditingAddressData({ id: null, name: '', address: '', type: 'HOME' });
                        setIsEditingAddress(true);
                      }}
                    >
                      <Plus size={16} /> Add New
                    </button>
                  </div>

                  {/* Saved Addresses List */}
                  {addresses.map((addr) => (
                    <div 
                      key={addr.id} 
                      className="flex gap-3 mb-6 relative cursor-pointer group"
                      onClick={() => {
                        setSelectedAddressId(addr.id);
                        setShowAddressModal(false);
                      }}
                    >
                      <Home size={20} className="text-black mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold text-black text-sm group-hover:text-blue-600 transition-colors">{addr.name}</span>
                          {selectedAddressId === addr.id && (
                            <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded">Selected</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 leading-snug pr-6">{addr.address}</p>
                      </div>
                      <div className="absolute right-0 top-1 flex items-center gap-4 bg-white pl-2">
                        <Trash2 
                          size={16} 
                          className="text-red-400 hover:text-red-600 cursor-pointer transition-colors"
                          onClick={(e) => handleDeleteAddress(addr.id, e)}
                        />
                        <Edit2 
                          size={16} 
                          className="text-gray-400 hover:text-black cursor-pointer transition-colors" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingAddressData(addr);
                            setIsEditingAddress(true);
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
