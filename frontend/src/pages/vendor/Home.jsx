import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Home Components
import LazySection from '../../components/vendor/home/LazySection';
import StillLookingSection from '../../components/vendor/home/StillLookingSection';
import TopSelection from '../../components/vendor/home/TopSelection';
import BrandsSpotlight from '../../components/vendor/home/BrandsSpotlight';
import BestQuality from '../../components/vendor/home/BestQuality';
import KeepShopping from '../../components/vendor/home/KeepShopping';
import RatingSection from '../../components/vendor/home/RatingSection';
import CategoryTabs from '../../components/vendor/home/CategoryTabs';

// Import Existing Shared Components
import CategoryProductsSection from '../../components/vendor/CategoryProductsSection';
import SaleBanner from '../../components/vendor/SaleBanner';
import BannerCarousel from '../../components/vendor/BannerCarousel';

// Import Assets
import SamsungS24 from '../../assets/Cards/samsung_s24.png';
import EarbudsDeal from '../../assets/Cards/earbuds_deal.png';
import LorealShampoo from '../../assets/Cards/loreal_shampoo.png';
import PlumShampoo from '../../assets/Cards/plum_shampoo.png';
import LipGloss from '../../assets/Cards/lip_gloss.png';
import JewelleryImg from '../../assets/products/jewellery.png';
import FashionHero from '../../assets/Cards/fashion_hero.png';
import ElectronicsHero from '../../assets/Cards/electronics_deal.png';
import MakeupHero from '../../assets/Cards/makeup_picks.png';
import FashionTabProduct from '../../assets/products/Fashion.png';
import ForYouProduct from '../../assets/products/card.png';
import BeautyTab from '../../assets/products/beauty_tab.png';
import ToysTab from '../../assets/products/toys_tab.png';
import StationeryTab from '../../assets/products/stationaryFinal.png';
import ClothesImg from '../../assets/Carousel/clths-removebg-preview.png';
import LipstickDeal from '../../assets/Cards/lipstick_deal.png';
import Suitcase from '../../assets/products/suitcase.png';

import useVendorStore from '../../store/useVendorStore';

const Home = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const navigate = useNavigate();
  const { selectedCategory } = useVendorStore();

  const categoryBanners = useMemo(() => ({
    'Home': [
      { id: 1, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000', title: 'Summer Sale' },
      { id: 2, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000', title: 'New Arrivals' },
      { id: 3, image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1000', title: 'Electronics Deal' },
      { id: 4, image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000', title: 'Grocery Offers' }
    ],
    'Toys': [
      { id: 1, image: 'https://images.unsplash.com/photo-1532330384785-f72436894000?auto=format&fit=crop&q=80&w=1000', title: 'Toy World' },
      { id: 2, image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1000', title: 'LEGO Sale' },
      { id: 3, image: 'https://images.unsplash.com/photo-1566576661366-747895316999?auto=format&fit=crop&q=80&w=1000', title: 'Action Figures' }
    ],
    'Beauty': [
      { id: 1, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1000', title: 'Skin Care' },
      { id: 2, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000', title: 'Makeup Kits' },
      { id: 3, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000', title: 'Perfume' }
    ],
    'Art. Jewellery': [
      { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000', title: 'Designer Sets' },
      { id: 2, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=1000', title: 'Modern Jewellery' }
    ],
    '1g Gold': [
      { id: 1, image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=1000', title: '1g Gold Coins' },
      { id: 2, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000', title: 'Gold Chains' }
    ],
    'Cosmetics': [
      { id: 1, image: 'https://images.unsplash.com/photo-1527799822394-4d1005f9630c?auto=format&fit=crop&q=80&w=1000', title: 'Premium Cosmetics' },
      { id: 2, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1000', title: 'Glow Up Sale' }
    ],
    'Fashion': [
      { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000', title: 'Premium Fashion' },
      { id: 2, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000', title: 'Summer Collection' },
      { id: 3, image: 'https://images.unsplash.com/photo-1539109132381-31a193636533?auto=format&fit=crop&q=80&w=1000', title: 'Kids Wear' }
    ]
  }), []);

  const data = useMemo(() => ({
    stillLooking: [
      { label: 'Co-ords', img: FashionHero },
      { label: 'Necklaces', img: JewelleryImg },
      { label: "Women's Tops", img: ClothesImg },
      { label: 'Lipsticks', img: LipstickDeal }
    ],
    topSelection: [
      { name: 'Biotique Face Wash', tag: 'Grab Or Gone', img: PlumShampoo },
      { name: 'Lakmé Moisturizer', tag: 'Best Picks', img: MakeupHero },
      { name: 'Vaseline Lip Balm', tag: 'Popular', img: LorealShampoo },
      { name: 'MARS Lipstick', tag: 'Widest Range', img: LipGloss }
    ],
    brandsSpotlight: [
      { title: 'Flat 73% off', sub: 'Limited time deal', img: EarbudsDeal },
      { title: 'Shop now', sub: 'Blend easily', img: MakeupHero },
      { title: 'Coming to India', sub: 'CMF Watch 3 Pro', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200&h=200' },
      { title: 'Just ₹599', sub: 'Lowest price ever', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200&h=200' },
      { title: 'From ₹1,099', sub: 'Track your health', img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=200&h=200' },
      { title: 'Spl.price ₹899', sub: 'Sale price live', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=200&h=200' }
    ],
    bestQuality: [
      { name: "GUTI Women's Jeans", tag: 'Grab Or Gone', img: FashionHero },
      { name: "Mandarin Women's Shirts", tag: 'Popular', img: ClothesImg },
      { name: 'Royatto Necklaces', tag: 'Popular', img: JewelleryImg },
      { name: "Sqew Women's Trousers", tag: 'In Focus Now', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=300&h=400' }
    ],
    keepShopping: [
      { label: 'Suitcases', img: Suitcase },
      { label: 'Smartphones', img: SamsungS24 },
      { label: 'Electronics', img: ElectronicsHero },
      { label: 'Beauty', img: MakeupHero }
    ],
    ratings: [
      { name: 'SONATA...', fullName: 'SONATA NP7987YM06W So...', date: 'Delivered on Apr 13, 2026', img: JewelleryImg },
      { name: 'LAKME...', fullName: 'LAKME 9TO5 VITAMIN C+...', date: 'Delivered on Apr 10, 2026', img: MakeupHero }
    ],
    tabs: [
      { label: 'For You', img: ForYouProduct },
      { label: 'Stationery', img: StationeryTab },
      { label: 'Fashion', img: FashionTabProduct },
      { label: 'Beauty', img: BeautyTab },
      { label: 'Toys', img: ToysTab }
    ]
  }), []);

  const handleTabClick = useCallback((label) => {
    setActiveTab(label);
  }, []);

  return (
    <div className="bg-[var(--card-bg)] min-h-screen pb-4 overflow-x-hidden">
      {/* 🔴 REDESIGNED PROMOTIONAL AREA */}
      <div className="flex flex-col bg-[#2874f0]">
        {selectedCategory === 'Home' && <SaleBanner />}
      </div>

      {/* Banner Carousel */}
      <div className="bg-white pb-2">
        <BannerCarousel banners={categoryBanners[selectedCategory] || categoryBanners['Home']} />
      </div>

      {selectedCategory !== 'Home' && (
        <div className="py-4">
          <div className="flex justify-between items-center px-4 mb-4">
            <h2 className="text-xl font-black text-[var(--card-text)]">{selectedCategory} Specials</h2>
            <div className="h-1 flex-1 bg-gray-100 mx-4 rounded-full" />
          </div>
          <CategoryProductsSection selectedCategory={selectedCategory} />
        </div>
      )}

      {selectedCategory === 'Home' && (
        <>
          <LazySection height="240px">
            <StillLookingSection items={data.stillLooking} />
          </LazySection>

          <LazySection height="400px">
            <TopSelection items={data.topSelection} />
          </LazySection>

          <LazySection height="350px">
            <BrandsSpotlight items={data.brandsSpotlight} />
          </LazySection>

          <LazySection height="500px">
            <BestQuality items={data.bestQuality} />
          </LazySection>

          <LazySection height="250px">
            <KeepShopping items={data.keepShopping} />
          </LazySection>

          <LazySection height="200px">
            <RatingSection items={data.ratings} />
          </LazySection>

          <LazySection height="150px">
            <CategoryTabs 
              tabs={data.tabs} 
              activeTab={activeTab} 
              onTabClick={handleTabClick} 
            />
          </LazySection>

          {/* Dynamic Products Section based on Bottom Tabs */}
          <div className="pb-20">
            <CategoryProductsSection selectedCategory={activeTab} />
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Home);
