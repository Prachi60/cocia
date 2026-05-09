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
import BannerImg from '../../assets/Banner.jpeg';
import CardImg from '../../assets/products/card.png';
import FashionTabImg from '../../assets/fashion_tab_img.png';

import useVendorStore from '../../store/useVendorStore';

const Home = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const navigate = useNavigate();
  const { selectedCategory, homeSections } = useVendorStore();

  const categoryBanners = useMemo(() => ({
    'Home': [
      { id: 1, image: BannerImg, title: 'Summer Sale' },
      { id: 2, image: FashionTabImg, title: 'New Arrivals' },
      { id: 3, image: CardImg, title: 'Electronics Deal' },
      { id: 4, image: BannerImg, title: 'Grocery Offers' }
    ],
    'Toys': [
      { id: 1, image: BannerImg, title: 'Toy World' },
      { id: 2, image: FashionTabImg, title: 'LEGO Sale' }
    ],
    'Beauty': [
      { id: 1, image: BannerImg, title: 'Skin Care' },
      { id: 2, image: FashionTabImg, title: 'Makeup Kits' }
    ],
    'Art. Jewellery': [
      { id: 1, image: FashionTabImg, title: 'Designer Sets' },
      { id: 2, image: BannerImg, title: 'Modern Jewellery' }
    ],
    '1g Gold': [
      { id: 1, image: BannerImg, title: '1g Gold Coins' },
      { id: 2, image: FashionTabImg, title: 'Gold Chains' }
    ],
    'Cosmetics': [
      { id: 1, image: FashionTabImg, title: 'Premium Cosmetics' },
      { id: 2, image: BannerImg, title: 'Glow Up Sale' }
    ],
    'Fashion': [
      { id: 1, image: BannerImg, title: 'Premium Fashion' },
      { id: 2, image: FashionTabImg, title: 'Summer Collection' }
    ]
  }), []);

  const data = useMemo(() => ({
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
    if (label === 'Toys') {
      navigate('/vendor/toys');
    } else {
      setActiveTab(label);
    }
  }, [navigate]);

  return (
    <div 
      className="bg-[var(--card-bg)] min-h-screen pb-4 overflow-x-hidden"
      style={{ 
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)',
        WebkitTransform: 'translate3d(0,0,0)',
        contain: 'layout style'
      }}
    >
      {/* 🔴 REDESIGNED PROMOTIONAL AREA */}
      <div className="flex flex-col bg-[#2874f0]">
        {(selectedCategory === 'For You' || selectedCategory === 'Home') && <SaleBanner />}
      </div>

      {/* Banner Carousel */}
      <div className="bg-white pb-2">
        <BannerCarousel banners={categoryBanners[selectedCategory] || categoryBanners['Home']} />
      </div>

      {selectedCategory !== 'For You' && selectedCategory !== 'Home' && (
        <div className="py-4">
          <div className="flex justify-between items-center px-4 mb-4">
            <h2 className="text-xl font-black text-[var(--card-text)]">{selectedCategory} Specials</h2>
            <div className="h-1 flex-1 bg-gray-100 mx-4 rounded-full" />
          </div>
          <CategoryProductsSection selectedCategory={selectedCategory} />
        </div>
      )}

      {(selectedCategory === 'For You' || selectedCategory === 'Home') && (
        <>
          <LazySection height="240px">
            <StillLookingSection items={homeSections.stillLooking} />
          </LazySection>

          <LazySection height="400px">
            <TopSelection items={homeSections.topSelection} />
          </LazySection>

          <LazySection height="350px">
            <BrandsSpotlight items={homeSections.brandsSpotlight} />
          </LazySection>

          <LazySection height="500px">
            <BestQuality items={homeSections.bestQuality} />
          </LazySection>

          <LazySection height="250px">
            <KeepShopping items={homeSections.keepShopping} />
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
