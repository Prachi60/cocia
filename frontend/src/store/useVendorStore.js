import { create } from 'zustand';

// Import local assets for proper image display
import FashionImg from '../assets/products/Fashion.png';
import JewelleryImg from '../assets/products/jewellery.png';
import TshirtImg from '../assets/products/tshirt.png';
import BeautyImg from '../assets/products/beauty_tab.png';
import MakeupImg from '../assets/Cards/makeup_picks.png';
import EarbudsImg from '../assets/Cards/earbuds_deal.png';
import SamsungImg from '../assets/Cards/samsung_s24.png';
import ElectronicsImg from '../assets/Cards/electronics_deal.png';
import SuitcaseImg from '../assets/products/suitcase.png';
import FlipFlopsImg from '../assets/products/flip_flops.png';
import LipstickImg from '../assets/Cards/lipstick_deal.png';
import ShampooImg from '../assets/Cards/plum_shampoo.png';
import ToysImg from '../assets/products/toys.png';
import StationeryImg from '../assets/products/stationery.png';
import GiftingImg from '../assets/products/gifting.png';

// Using local assets for products
const PRODUCT_IMAGES = {
  fashion: FashionImg,
  jewellery: JewelleryImg,
  tshirt: TshirtImg,
  lipstick: LipstickImg,
  shampoo: ShampooImg,
  makeup: MakeupImg,
  earbuds: EarbudsImg,
  phone: SamsungImg,
  electronics: ElectronicsImg,
  suitcase: SuitcaseImg,
  shoes: FlipFlopsImg,
  beauty: BeautyImg,
  toys: ToysImg,
  stationery: StationeryImg,
  gifting: GiftingImg,
};

const useVendorStore = create((set) => ({
  selectedCategory: 'For You',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  // Header visibility state
  isSaleBannerVisible: true,
  setSaleBannerVisible: (visible) => set({ isSaleBannerVisible: visible }),

  // Home Page Sections Data
  homeSections: {
    stillLooking: [
      { label: 'Co-ords', img: PRODUCT_IMAGES.fashion, link: '/vendor/products' },
      { label: 'Necklaces', img: PRODUCT_IMAGES.jewellery, link: '/vendor/products' },
      { label: "Women's Tops", img: PRODUCT_IMAGES.tshirt, link: '/vendor/products' },
      { label: 'Lipsticks', img: PRODUCT_IMAGES.lipstick, link: '/vendor/products' }
    ],
    topSelection: [
      { name: 'Biotique Face Wash', tag: 'Grab Or Gone', img: PRODUCT_IMAGES.shampoo, link: '/vendor/product-detail' },
      { name: 'Lakmé Moisturizer', tag: 'Best Picks', img: PRODUCT_IMAGES.makeup, link: '/vendor/product-detail' },
      { name: 'Vaseline Lip Balm', tag: 'Popular', img: PRODUCT_IMAGES.beauty, link: '/vendor/product-detail' },
      { name: 'MARS Lipstick', tag: 'Widest Range', img: PRODUCT_IMAGES.lipstick, link: '/vendor/product-detail' }
    ],
    brandsSpotlight: [
      { title: 'Flat 73% off', sub: 'Limited time deal', img: PRODUCT_IMAGES.earbuds, link: '/vendor/product-detail' },
      { title: 'Shop now', sub: 'Blend easily', img: PRODUCT_IMAGES.makeup, link: '/vendor/product-detail' },
      { title: 'Coming to India', sub: 'CMF Watch 3 Pro', img: PRODUCT_IMAGES.phone, link: '/vendor/product-detail' },
      { title: 'Just ₹599', sub: 'Lowest price ever', img: PRODUCT_IMAGES.shampoo, link: '/vendor/product-detail' }
    ],
    bestQuality: [
      { name: "GUTI Women's Jeans", tag: 'Grab Or Gone', img: PRODUCT_IMAGES.fashion, link: '/vendor/product-detail' },
      { name: "Mandarin Women's Shirts", tag: 'Popular', img: PRODUCT_IMAGES.tshirt, link: '/vendor/product-detail' },
      { name: 'Royatto Necklaces', tag: 'Popular', img: PRODUCT_IMAGES.jewellery, link: '/vendor/product-detail' },
      { name: "Sqew Women's Trousers", tag: 'In Focus Now', img: PRODUCT_IMAGES.shoes, link: '/vendor/product-detail' }
    ],
    keepShopping: [
      { label: 'Suitcases', img: PRODUCT_IMAGES.suitcase, link: '/vendor/products' },
      { label: 'Smartphones', img: PRODUCT_IMAGES.phone, link: '/vendor/products' },
      { label: 'Electronics', img: PRODUCT_IMAGES.electronics, link: '/vendor/products' },
      { label: 'Beauty', img: PRODUCT_IMAGES.makeup, link: '/vendor/products' }
    ]
  },
  
  setHomeSections: (newSections) => set((state) => ({
    homeSections: { ...state.homeSections, ...newSections }
  }))
}));

export default useVendorStore;
