import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  ChevronDown, 
  SlidersHorizontal, 
  Search,
  ShoppingCart,
  ArrowLeft,
  LayoutGrid,
  Menu,
  MapPin
} from 'lucide-react';

import JewelleryImg from '../../assets/products/jewellery.png';
import MakeupHero from '../../assets/Cards/makeup_picks.png';
import SamsungS24 from '../../assets/Cards/samsung_s24.png';
import EarbudsDeal from '../../assets/Cards/earbuds_deal.png';

const CategoryProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'Jewellery';
  const [activeSort, setActiveSort] = useState('Popularity');
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Multi-category product data
  const categoryData = {
    'Jewellery': [
      {
        id: 1,
        brand: 'MODERN MINIMAL',
        name: 'Sleek Geometric Pendant',
        price: '4,499',
        oldPrice: '7,999',
        off: '43% off',
        rating: '4.9',
        reviews: '2,450',
        delivery: '28th Apr',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        bestseller: true
      },
      {
        id: 2,
        brand: 'FANCY CHIC',
        name: 'Dainty Serenity Drops',
        price: '2,199',
        oldPrice: '4,500',
        off: '51% off',
        rating: '4.7',
        reviews: '1,120',
        delivery: '29th Apr',
        image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 3,
        brand: 'CONTEMPORARY',
        name: 'Elegance Infinity Band',
        price: '3,299',
        oldPrice: '5,999',
        off: '45% off',
        rating: '4.8',
        reviews: '3,890',
        delivery: '27th Apr',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 4,
        brand: 'URBAN LUXE',
        name: 'Regal Strand Necklace',
        price: '8,990',
        oldPrice: '12,000',
        off: '25% off',
        rating: '4.9',
        reviews: '560',
        delivery: '1st May',
        image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 5,
        brand: 'PURE SILHOUETTE',
        name: 'Slender Wristlet Set',
        price: '6,499',
        oldPrice: '9,999',
        off: '35% off',
        rating: '4.8',
        reviews: '890',
        delivery: '2nd May',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 6,
        brand: 'MODERNIST',
        name: 'Abstract Nova Studs',
        price: '1,599',
        oldPrice: '2,999',
        off: '46% off',
        rating: '4.6',
        reviews: '420',
        delivery: '30th Apr',
        image: 'https://images.unsplash.com/photo-1596944229900-df90bd4ce28c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 7,
        brand: 'NOIR LUXE',
        name: 'Midnight Solitaire Band',
        price: '12,499',
        oldPrice: '18,000',
        off: '30% off',
        rating: '4.9',
        reviews: '120',
        delivery: '4th May',
        image: 'https://images.unsplash.com/photo-1630019058353-5240c1df45e7?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 8,
        brand: 'ETHEREAL',
        name: 'Lunar Glow Pendant',
        price: '5,299',
        oldPrice: '7,500',
        off: '29% off',
        rating: '4.7',
        reviews: '2,100',
        delivery: '3rd May',
        image: 'https://images.unsplash.com/photo-1599459183200-59c26447e351?auto=format&fit=crop&w=600&q=80',
      }
    ],
    'Electronics': [
      {
        id: 101,
        brand: 'SAMSUNG',
        name: 'Galaxy S24 5G (Cobalt Violet)',
        price: '46,999',
        oldPrice: '74,999',
        off: '37% off',
        rating: '4.6',
        reviews: '61,382',
        delivery: '29th Apr',
        image: SamsungS24,
        bestseller: true
      },
      {
        id: 102,
        brand: 'NOISE',
        name: 'Buds VS102 Wireless Earbuds',
        price: '1,299',
        oldPrice: '2,999',
        off: '56% off',
        rating: '4.2',
        reviews: '12,120',
        delivery: '30th Apr',
        image: EarbudsDeal,
      },
      {
        id: 103,
        brand: 'APPLE',
        name: 'AirPods Pro (2nd Gen)',
        price: '24,900',
        oldPrice: '26,900',
        off: '7% off',
        rating: '4.8',
        reviews: '45,210',
        delivery: '1st May',
        image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 104,
        brand: 'SONY',
        name: 'WH-1000XM5 Headphones',
        price: '29,990',
        oldPrice: '34,990',
        off: '14% off',
        rating: '4.7',
        reviews: '8,920',
        delivery: '2nd May',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 105,
        brand: 'BOAT',
        name: 'Airdopes 141',
        price: '1,499',
        oldPrice: '4,490',
        off: '66% off',
        rating: '4.1',
        reviews: '150k+',
        delivery: '30th Apr',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 106,
        brand: 'SAMSUNG',
        name: 'Galaxy Watch 6 Classic',
        price: '36,999',
        oldPrice: '42,999',
        off: '13% off',
        rating: '4.5',
        reviews: '12,500',
        delivery: '3rd May',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
      }
    ],
    'Beauty': [
      {
        id: 201,
        brand: 'PLUM',
        name: 'Luxury Skincare Gift Set',
        price: '1,249',
        oldPrice: '1,999',
        off: '37% off',
        rating: '4.8',
        reviews: '15,450',
        delivery: '28th Apr',
        image: MakeupHero,
        bestseller: true
      },
      {
        id: 202,
        brand: 'MAYBELLINE',
        name: 'SuperStay Matte Ink Liquid Lipstick',
        price: '549',
        oldPrice: '699',
        off: '21% off',
        rating: '4.5',
        reviews: '89,120',
        delivery: '29th Apr',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 203,
        brand: 'LOREAL',
        name: 'Revitalift Hyaluronic Acid Serum',
        price: '899',
        oldPrice: '999',
        off: '10% off',
        rating: '4.6',
        reviews: '34,500',
        delivery: '30th Apr',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 204,
        brand: 'MAC',
        name: 'Studio Fix Fluid Foundation',
        price: '3,200',
        oldPrice: '3,500',
        off: '8% off',
        rating: '4.7',
        reviews: '12,300',
        delivery: '1st May',
        image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 205,
        brand: 'CLINIQUE',
        name: 'Moisture Surge 100H',
        price: '1,950',
        oldPrice: '2,500',
        off: '22% off',
        rating: '4.9',
        reviews: '5,600',
        delivery: '2nd May',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 206,
        brand: 'HUDA BEAUTY',
        name: 'Nude Obsessions Eyeshadow Palette',
        price: '2,650',
        oldPrice: '2,990',
        off: '11% off',
        rating: '4.8',
        reviews: '18,900',
        delivery: '3rd May',
        image: 'https://images.unsplash.com/photo-1512496115841-a4a6e5b410fb?auto=format&fit=crop&w=600&q=80',
      }
    ]
  };

  const products = categoryData[category] || categoryData['Jewellery'];

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/,/g, ''));
    const priceB = parseInt(b.price.replace(/,/g, ''));
    if (activeSort === 'Price: Low to High') return priceA - priceB;
    if (activeSort === 'Price: High to Low') return priceB - priceA;
    if (activeSort === 'Customer Rating') return parseFloat(b.rating) - parseFloat(a.rating);
    return 0; // Popularity (Default)
  });

  const trendingData = {
    'Jewellery': [
      { id: 501, name: 'Chic Choker', price: '1,299', off: '60% off', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=300&q=80' },
      { id: 502, name: 'Golden Hoops', price: '899', off: '45% off', image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=300&q=80' },
      { id: 503, name: 'Celestial Ring', price: '1,499', off: '30% off', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=300&q=80' },
      { id: 504, name: 'Urban Cuff', price: '2,100', off: '20% off', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=300&q=80' }
    ],
    'Electronics': [
      { id: 601, name: 'Smart Watch', price: '3,499', off: '40% off', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80' },
      { id: 602, name: 'Wireless Headphones', price: '4,999', off: '50% off', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=300&q=80' },
      { id: 603, name: 'Power Bank', price: '1,299', off: '35% off', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=300&q=80' },
      { id: 604, name: 'Bluetooth Speaker', price: '2,100', off: '25% off', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80' }
    ],
    'Beauty': [
      { id: 701, name: 'Face Wash', price: '299', off: '10% off', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80' },
      { id: 702, name: 'Body Lotion', price: '499', off: '15% off', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=300&q=80' },
      { id: 703, name: 'Lip Balm', price: '199', off: '5% off', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80' },
      { id: 704, name: 'Hair Serum', price: '699', off: '20% off', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80' }
    ]
  };

  const trendingItems = trendingData[category] || trendingData['Jewellery'];

  return (
    <div className="bg-[var(--card-bg)] min-h-screen text-[var(--card-text)] transition-colors duration-300 pb-10">
      {/* 🔶 Enhanced Multi-row Header */}
      <div className="sticky top-0 z-[100] bg-[var(--card-bg)]/90 backdrop-blur-md border-b border-[var(--card-border)] shadow-sm">
        {/* Row 1: Nav & Cart */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/vendor/home" className="text-[var(--card-text)] transition-colors hover:text-[var(--color-gold)]">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-lg font-black tracking-tight uppercase">{category.name}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Placeholder (matches image) */}
            <div className="hidden sm:flex items-center bg-[var(--card-border)] rounded-full p-1 px-2 gap-2 cursor-pointer border border-[var(--card-border)]">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                 <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.243 3.05a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM14.243 16.95a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM5.757 16.95a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 10a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zM5.757 5.05a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 7a3 3 0 100 6 3 3 0 000-6z" /></svg>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            </div>
            
            <div className="relative cursor-pointer group">
              <ShoppingCart size={24} className="text-[var(--card-text)] group-hover:text-[var(--color-gold)] transition-colors" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[var(--card-bg)]">0</span>
            </div>
          </div>
        </div>

        {/* Row 2: Search */}
        <div className="px-5 pb-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder={`Search ${category.name}...`} 
              className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl py-3 px-12 text-sm focus:outline-none focus:border-[var(--color-gold)]/50 text-[var(--card-text)] transition-all shadow-inner"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-[var(--card-sub)]" />
            <div className="absolute right-4 top-3.5 flex items-center gap-3 text-[var(--card-sub)]">
              <svg className="w-5 h-5 cursor-pointer hover:text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <svg className="w-5 h-5 cursor-pointer hover:text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
          </div>
        </div>

        {/* Row 3: Location Bar */}
        <div className="bg-[#eefcfd] dark:bg-[#1a2b2c] px-5 py-2.5 flex items-center justify-between border-t border-[var(--card-border)]/50">
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--card-text)]">
            <MapPin size={14} className="text-[var(--card-sub)]" />
            <span>Deliver to <span className="font-black">Prachi - Indore 452012</span></span>
            <ChevronDown size={14} className="text-[var(--card-sub)]" />
          </div>
          <button className="text-[10px] font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider">Join Prime</button>
        </div>
      </div>

      {/* 🔶 Category Info Banner */}
      <div className="px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-[var(--card-text)] uppercase tracking-wider">{category}</h1>
          <p className="text-[10px] font-bold text-[var(--color-gold)] uppercase tracking-widest mt-1">Curated minimalist collection</p>
        </div>
        <div className="w-10 h-10 bg-[var(--card-bg)] rounded-full flex items-center justify-center border border-[var(--card-border)] shadow-sm">
          <ArrowLeft size={18} className="rotate-180 text-[var(--card-text)]" />
        </div>
      </div>

      {/* 🔶 Filter & Sort Bar */}
      <div className="sticky top-[58px] z-[90] bg-[var(--card-bg)] border-y border-[var(--card-border)] px-4 py-3 flex items-center gap-4">
        <button 
          onClick={() => setShowSortModal(true)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[var(--card-bg)] rounded-md border border-[var(--card-border)] text-[12px] font-black text-[var(--card-text)] uppercase active:bg-gray-100 dark:active:bg-gray-800 transition-colors shadow-sm"
        >
          Sort <ChevronDown size={14} className={showSortModal ? 'rotate-180 transition-transform' : 'transition-transform'} />
        </button>
        <div className="w-[1px] h-6 bg-[var(--card-border)]"></div>
        <button 
          onClick={() => setShowFilterModal(true)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[var(--card-bg)] rounded-md border border-[var(--card-border)] text-[12px] font-black text-[var(--card-text)] uppercase active:bg-gray-100 dark:active:bg-gray-800 transition-colors shadow-sm"
        >
          <SlidersHorizontal size={14} className="text-[var(--color-gold)]" /> Filter
        </button>
      </div>

      {/* 🔶 Main Product Grid (Top Part) */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {sortedProducts.slice(0, 4).map((product) => (
          <Link to="/vendor/product-detail" state={{ product }} key={product.id} className="flex flex-col group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-[var(--card-border)] rounded-xl border border-transparent overflow-hidden mb-2 group-hover:border-[var(--color-gold)]/30 transition-all shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${document.documentElement.classList.contains('dark') ? 'opacity-80' : 'opacity-100'} group-hover:opacity-100 product-img-blend`} 
                />
              
              {/* Heart Icon */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-black/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-red-500 transition-all">
                <Heart size={16} />
              </button>

              {/* Bestseller Tag */}
              {product.bestseller && (
                <div className="absolute top-0 left-0 bg-[#008c7a] text-white text-[8px] font-black px-2 py-1 rounded-br-lg uppercase tracking-wider shadow-lg">
                  Bestseller
                </div>
              )}

              {/* Rating Mini Tag */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1 shadow-md">
                {product.rating} <Star size={8} fill="currentColor" className="text-green-700" /> <span className="text-gray-400 font-bold border-l border-gray-300 pl-1">{product.reviews}</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="px-1">
              <h3 className="text-[11px] font-black text-[var(--card-sub)] uppercase tracking-widest">{product.brand}</h3>
              <p className="text-[11px] font-medium text-[var(--card-text)] line-clamp-1 leading-snug mt-0.5">{product.name}</p>
              
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="text-[13px] font-black text-[var(--card-text)]">₹{product.price}</span>
                <span className="text-[10px] text-[var(--card-sub)] line-through italic">₹{product.oldPrice}</span>
                <span className="text-[10px] font-black text-[var(--color-gold)] tracking-tighter">({product.off})</span>
              </div>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-[9px] font-medium text-[var(--card-sub)]">Delivery by</span>
                <span className="text-[9px] font-black text-[var(--card-text)] uppercase tracking-tighter">{product.delivery}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 🔶 Horizontal Trends Section (Slider as requested) */}
      <div className="my-2 py-4 bg-[var(--card-border)]/30 border-y border-[var(--card-border)]">
        <div className="px-4 flex items-center gap-2 mb-3">
          <span className="bg-[#008c7a] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Trending</span>
          <h2 className="text-[13px] font-black text-[var(--card-text)] uppercase tracking-tight">Hot and latest for you</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 no-scrollbar pb-2">
          {trendingItems.map((item) => (
            <Link to="/vendor/product-detail" state={{ product: item }} key={item.id} className="block w-[140px] flex-shrink-0 bg-[var(--card-bg)] rounded-xl overflow-hidden border border-[var(--card-border)] p-2 group active:scale-95 transition-all shadow-sm">
              <div className="aspect-square rounded-lg overflow-hidden mb-2">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 product-img-blend" />
              </div>
              <h3 className="text-[10px] font-black text-[var(--card-sub)] uppercase tracking-widest">{item.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[12px] font-black text-[var(--card-text)]">₹{item.price}</span>
                <span className="text-[9px] font-black text-[var(--color-gold)]">{item.off}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔶 Main Product Grid (Bottom Part) */}
      <div className="px-4 py-2 mt-4">
        <h2 className="text-[13px] font-black text-[var(--card-text)] uppercase tracking-tight">For You</h2>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        {sortedProducts.slice(4).map((product) => (
          <Link to="/vendor/product-detail" state={{ product }} key={product.id} className="flex flex-col group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] bg-[var(--card-border)] rounded-xl border border-transparent overflow-hidden mb-2 group-hover:border-[var(--color-gold)]/30 transition-all shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${document.documentElement.classList.contains('dark') ? 'opacity-80' : 'opacity-100'} group-hover:opacity-100 product-img-blend`} 
                />
              
              {/* Heart Icon */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-black/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-red-500 transition-all">
                <Heart size={16} />
              </button>

              {/* Bestseller Tag */}
              {product.bestseller && (
                <div className="absolute top-0 left-0 bg-[#008c7a] text-white text-[8px] font-black px-2 py-1 rounded-br-lg uppercase tracking-wider shadow-lg">
                  Bestseller
                </div>
              )}

              {/* Rating Mini Tag */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1 shadow-md">
                {product.rating} <Star size={8} fill="currentColor" className="text-green-700" /> <span className="text-gray-400 font-bold border-l border-gray-300 pl-1">{product.reviews}</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="px-1">
              <h3 className="text-[11px] font-black text-[var(--card-sub)] uppercase tracking-widest">{product.brand}</h3>
              <p className="text-[11px] font-medium text-[var(--card-text)] line-clamp-1 leading-snug mt-0.5">{product.name}</p>
              
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="text-[13px] font-black text-[var(--card-text)]">₹{product.price}</span>
                <span className="text-[10px] text-[var(--card-sub)] line-through italic">₹{product.oldPrice}</span>
                <span className="text-[10px] font-black text-[var(--color-gold)] tracking-tighter">({product.off})</span>
              </div>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-[9px] font-medium text-[var(--card-sub)]">Delivery by</span>
                <span className="text-[9px] font-black text-[var(--card-text)] uppercase tracking-tighter">{product.delivery}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 🔶 Sort Modal (Bottom Sheet) */}
      {showSortModal && (
        <div className="fixed inset-0 z-[200] flex items-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSortModal(false)}></div>
          <div className="relative w-full bg-[#111111] rounded-t-2xl border-t border-[var(--color-gold)]/20 p-6 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1 bg-gray-800 rounded-full mx-auto mb-6"></div>
            <h2 className="text-sm font-black text-[var(--color-gold)] uppercase tracking-widest mb-6">Sort By</h2>
            <div className="space-y-4">
              {['Popularity', 'Price: Low to High', 'Price: High to Low', 'Customer Rating'].map((option) => (
                <button 
                  key={option}
                  onClick={() => {
                    setActiveSort(option);
                    setShowSortModal(false);
                  }}
                  className={`w-full flex items-center justify-between text-sm font-bold py-2 ${activeSort === option ? 'text-white' : 'text-gray-500'}`}
                >
                  {option}
                  {activeSort === option && <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full shadow-[0_0_8px_var(--color-gold)]"></div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🔶 Filter Modal (Full Screen Overlay) */}
      {showFilterModal && (
        <div className="fixed inset-0 z-[200] bg-black animate-in fade-in duration-200">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-900 flex justify-between items-center">
              <h2 className="text-sm font-black text-[var(--color-gold)] uppercase tracking-widest">Filters</h2>
              <button onClick={() => setShowFilterModal(false)} className="text-white">✕</button>
            </div>
            <div className="flex-1 p-6 space-y-8">
              <div>
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Price Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 p-3 rounded-lg text-xs font-bold text-white">Min: ₹0</div>
                  <div className="bg-gray-900 border border-gray-800 p-3 rounded-lg text-xs font-bold text-white">Max: ₹50,000+</div>
                </div>
              </div>
              <div>
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Availability</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-5 bg-[var(--color-gold)] rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-white">Express Delivery Only</span>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-900 flex gap-4">
              <button onClick={() => setShowFilterModal(false)} className="flex-1 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest">Clear All</button>
              <button onClick={() => setShowFilterModal(false)} className="flex-[2] py-4 bg-[var(--color-gold)] text-black text-[11px] font-black uppercase tracking-widest rounded-lg">Apply Filters</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
