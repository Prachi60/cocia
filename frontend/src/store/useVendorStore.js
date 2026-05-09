import { create } from 'zustand';

// Import Assets for default state
import FashionHero from '../assets/Cards/fashion_hero.png';
import JewelleryImg from '../assets/products/jewellery.png';
import ClothesImg from '../assets/Carousel/clths-removebg-preview.png';
import LipstickDeal from '../assets/Cards/lipstick_deal.png';
import PlumShampoo from '../assets/Cards/plum_shampoo.png';
import MakeupHero from '../assets/Cards/makeup_picks.png';
import LorealShampoo from '../assets/Cards/loreal_shampoo.png';
import LipGloss from '../assets/Cards/lip_gloss.png';
import EarbudsDeal from '../assets/Cards/earbuds_deal.png';
import SamsungS24 from '../assets/Cards/samsung_s24.png';
import ElectronicsHero from '../assets/Cards/electronics_deal.png';
import Suitcase from '../assets/products/suitcase.png';

const useVendorStore = create((set) => ({
  selectedCategory: 'For You',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  // Header visibility state
  isSaleBannerVisible: true,
  setSaleBannerVisible: (visible) => set({ isSaleBannerVisible: visible }),

  // Home Page Sections Data
  homeSections: {
    stillLooking: [
      { label: 'Co-ords', img: FashionHero, link: '/vendor/products' },
      { label: 'Necklaces', img: JewelleryImg, link: '/vendor/products' },
      { label: "Women's Tops", img: ClothesImg, link: '/vendor/products' },
      { label: 'Lipsticks', img: LipstickDeal, link: '/vendor/products' }
    ],
    topSelection: [
      { name: 'Biotique Face Wash', tag: 'Grab Or Gone', img: PlumShampoo, link: '/vendor/product-detail' },
      { name: 'Lakmé Moisturizer', tag: 'Best Picks', img: MakeupHero, link: '/vendor/product-detail' },
      { name: 'Vaseline Lip Balm', tag: 'Popular', img: LorealShampoo, link: '/vendor/product-detail' },
      { name: 'MARS Lipstick', tag: 'Widest Range', img: LipGloss, link: '/vendor/product-detail' }
    ],
    brandsSpotlight: [
      { title: 'Flat 73% off', sub: 'Limited time deal', img: EarbudsDeal, link: '/vendor/product-detail' },
      { title: 'Shop now', sub: 'Blend easily', img: MakeupHero, link: '/vendor/product-detail' },
      { title: 'Coming to India', sub: 'CMF Watch 3 Pro', img: EarbudsDeal, link: '/vendor/product-detail' },
      { title: 'Just ₹599', sub: 'Lowest price ever', img: PlumShampoo, link: '/vendor/product-detail' }
    ],
    bestQuality: [
      { name: "GUTI Women's Jeans", tag: 'Grab Or Gone', img: FashionHero, link: '/vendor/product-detail' },
      { name: "Mandarin Women's Shirts", tag: 'Popular', img: ClothesImg, link: '/vendor/product-detail' },
      { name: 'Royatto Necklaces', tag: 'Popular', img: JewelleryImg, link: '/vendor/product-detail' },
      { name: "Sqew Women's Trousers", tag: 'In Focus Now', img: FashionHero, link: '/vendor/product-detail' }
    ],
    keepShopping: [
      { label: 'Suitcases', img: Suitcase, link: '/vendor/products' },
      { label: 'Smartphones', img: SamsungS24, link: '/vendor/products' },
      { label: 'Electronics', img: ElectronicsHero, link: '/vendor/products' },
      { label: 'Beauty', img: MakeupHero, link: '/vendor/products' }
    ]
  },
  
  setHomeSections: (newSections) => set((state) => ({
    homeSections: { ...state.homeSections, ...newSections }
  }))
}));

export default useVendorStore;
