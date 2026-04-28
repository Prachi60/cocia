import Mascara from '../assets/Cards/mascara.png';
import LipstickDeal from '../assets/Cards/lipstick_deal.png';
import LipGloss from '../assets/Cards/lip_gloss.png';
import LipLiner from '../assets/Cards/lip_liner.png';
import PlumShampoo from '../assets/Cards/plum_shampoo.png';
import LorealShampoo from '../assets/Cards/loreal_shampoo.png';
import MatrixShampoo from '../assets/Cards/matrix_shampoo.png';
import MakeupHero from '../assets/Cards/makeup_picks.png';

import StationeryImg from '../assets/products/stationery.png';
import GiftingImg from '../assets/products/gifting.png';
import PrintingImg from '../assets/products/printing.png';
import JewelleryImg from '../assets/products/jewellery.png';
import ElectricalImg from '../assets/products/electrical.png';
import ToysImg from '../assets/products/toys.png';

import SamsungS24 from '../assets/Cards/samsung_s24.png';
import AsusLaptop from '../assets/Cards/asus_laptop.png';
import EarbudsDeal from '../assets/Cards/earbuds_deal.png';
import ElectronicsHero from '../assets/Cards/electronics_deal.png';

import ClothesImg from '../assets/Carousel/clths-removebg-preview.png';
import Tshirt from '../assets/products/tshirt.png';
import FashionHero from '../assets/Cards/fashion_hero.png';
import FlipFlops from '../assets/products/flip_flops.png';

import SplitAC from '../assets/products/split_ac.png';
import TowerFan from '../assets/products/tower_fan.png';
import FanPedestal from '../assets/products/fan_pedestal.png';
import FanBlack from '../assets/products/fan_black.png';
import CoolerWhite from '../assets/products/cooler_white.png';
import CookwareHero from '../assets/Cards/cookware_hero.png';

export const allCategoryProducts = {
  Beauty: [
    { id: 'b1', name: 'Luxury Matte Lipstick', category: 'Beauty', price: 499, oldPrice: 999, discount: '50% OFF', rating: 4.8, image: LipstickDeal, shortDescription: 'Long-lasting matte finish' },
    { id: 'b2', name: 'Vitamin C Face Serum', category: 'Beauty', price: 799, oldPrice: 1299, discount: '38% OFF', rating: 4.6, image: MakeupHero, shortDescription: 'Brightens and evens skin tone' },
    { id: 'b3', name: 'Volumizing Mascara', category: 'Beauty', price: 399, oldPrice: 599, discount: '33% OFF', rating: 4.5, image: Mascara, shortDescription: 'Waterproof extreme volume' },
    { id: 'b4', name: 'Shimmer Lip Gloss', category: 'Beauty', price: 299, oldPrice: 499, discount: '40% OFF', rating: 4.4, image: LipGloss, shortDescription: 'High shine gloss' },
    { id: 'b5', name: 'Precision Lip Liner', category: 'Beauty', price: 199, oldPrice: 299, discount: '33% OFF', rating: 4.2, image: LipLiner, shortDescription: 'Smooth glide pencil' },
    { id: 'b6', name: 'Plum Nourishing Shampoo', category: 'Beauty', price: 599, oldPrice: 899, discount: '33% OFF', rating: 4.7, image: PlumShampoo, shortDescription: 'Sulfate-free cleansing' },
    { id: 'b7', name: 'Loreal Hair Serum', category: 'Beauty', price: 499, oldPrice: 799, discount: '37% OFF', rating: 4.5, image: LorealShampoo, shortDescription: 'Frizz control formula' },
    { id: 'b8', name: 'Matrix Smoothing Mask', category: 'Beauty', price: 699, oldPrice: 999, discount: '30% OFF', rating: 4.6, image: MatrixShampoo, shortDescription: 'Deep hydration mask' }
  ],
  Gifting: [
    { id: 'g1', name: 'Premium Gifting Box', category: 'Gifting', price: 699, oldPrice: 999, discount: '30% OFF', rating: 4.8, image: GiftingImg, shortDescription: 'Assorted luxury collection' },
    { id: 'g2', name: 'Customized Photo Frame', category: 'Gifting', price: 499, oldPrice: 799, discount: '37% OFF', rating: 4.5, image: GiftingImg, shortDescription: 'Wooden engraved frame' },
    { id: 'g3', name: 'Aromatic Scented Candles', category: 'Gifting', price: 899, oldPrice: 1299, discount: '30% OFF', rating: 4.7, image: GiftingImg, shortDescription: 'Lavender & Vanilla set' },
    { id: 'g4', name: 'Couple Coffee Mugs', category: 'Gifting', price: 399, oldPrice: 599, discount: '33% OFF', rating: 4.6, image: GiftingImg, shortDescription: 'Mr. & Mrs. ceramic mugs' },
    { id: 'g5', name: 'Leather Wallet Set', category: 'Gifting', price: 1299, oldPrice: 2499, discount: '48% OFF', rating: 4.9, image: GiftingImg, shortDescription: 'Genuine leather combo' },
    { id: 'g6', name: 'Faux Plant Decor', category: 'Gifting', price: 299, oldPrice: 599, discount: '50% OFF', rating: 4.4, image: GiftingImg, shortDescription: 'Elegant desk planter' },
    { id: 'g7', name: 'Luxury Pen Set', category: 'Gifting', price: 1499, oldPrice: 2999, discount: '50% OFF', rating: 4.8, image: GiftingImg, shortDescription: 'Gold plated fountain pen' },
    { id: 'g8', name: 'Spa Care Basket', category: 'Gifting', price: 1999, oldPrice: 3499, discount: '42% OFF', rating: 4.7, image: GiftingImg, shortDescription: 'Ultimate relaxation kit' }
  ],
  Electronics: [
    { id: 'e1', name: 'Wireless Noise Cancelling Earbuds', category: 'Electronics', price: 2499, oldPrice: 5999, discount: '58% OFF', rating: 4.7, image: EarbudsDeal, shortDescription: '40H playtime & ANC' },
    { id: 'e2', name: 'Samsung Galaxy S24', category: 'Electronics', price: 79999, oldPrice: 89999, discount: '11% OFF', rating: 4.9, image: SamsungS24, shortDescription: 'Flagship AI smartphone' },
    { id: 'e3', name: 'Asus Gaming Laptop', category: 'Electronics', price: 65999, oldPrice: 85999, discount: '23% OFF', rating: 4.8, image: AsusLaptop, shortDescription: 'RTX 4050, 144Hz Display' },
    { id: 'e4', name: 'Electronics Gadget Pack', category: 'Electronics', price: 1499, oldPrice: 2999, discount: '50% OFF', rating: 4.8, image: ElectronicsHero, shortDescription: 'Essential tech accessories' },
    { id: 'e5', name: 'Mechanical Keyboard', category: 'Electronics', price: 2999, oldPrice: 4999, discount: '40% OFF', rating: 4.9, image: AsusLaptop, shortDescription: 'RGB backlit switches' },
    { id: 'e6', name: 'Wireless Mouse', category: 'Electronics', price: 599, oldPrice: 1299, discount: '53% OFF', rating: 4.4, image: AsusLaptop, shortDescription: 'Ergonomic & silent' },
    { id: 'e7', name: '4K Action Camera', category: 'Electronics', price: 4999, oldPrice: 9999, discount: '50% OFF', rating: 4.7, image: ElectronicsHero, shortDescription: 'Ultra HD waterproof' },
    { id: 'e8', name: '65W GaN Charger', category: 'Electronics', price: 1299, oldPrice: 2499, discount: '48% OFF', rating: 4.8, image: ElectronicsHero, shortDescription: 'Type-C fast adapter' }
  ],
  Jewellery: [
    { id: 'j1', name: 'Diamond Pendant', category: 'Jewellery', price: 12999, oldPrice: 15999, discount: '18% OFF', rating: 4.9, image: JewelleryImg, shortDescription: '18K gold elegant design' },
    { id: 'j2', name: 'Silver Hoop Earrings', category: 'Jewellery', price: 899, oldPrice: 1499, discount: '40% OFF', rating: 4.7, image: JewelleryImg, shortDescription: 'Pure 925 sterling silver' },
    { id: 'j3', name: 'Pearl Choker Set', category: 'Jewellery', price: 2499, oldPrice: 4999, discount: '50% OFF', rating: 4.8, image: JewelleryImg, shortDescription: 'Freshwater pearls' },
    { id: 'j4', name: 'Couple Rings Set', category: 'Jewellery', price: 1999, oldPrice: 3999, discount: '50% OFF', rating: 4.6, image: JewelleryImg, shortDescription: 'Platinum plated bands' },
    { id: 'j5', name: 'Temple Jewellery Necklace', category: 'Jewellery', price: 3499, oldPrice: 6999, discount: '50% OFF', rating: 4.8, image: JewelleryImg, shortDescription: 'Traditional bridal set' },
    { id: 'j6', name: 'Rose Gold Bracelet', category: 'Jewellery', price: 1299, oldPrice: 2499, discount: '48% OFF', rating: 4.7, image: JewelleryImg, shortDescription: 'Minimalist charm chain' },
    { id: 'j7', name: 'Stud Earrings Pack', category: 'Jewellery', price: 499, oldPrice: 999, discount: '50% OFF', rating: 4.5, image: JewelleryImg, shortDescription: 'Set of 6 daily wear' },
    { id: 'j8', name: 'Men\'s Chain', category: 'Jewellery', price: 1599, oldPrice: 2999, discount: '46% OFF', rating: 4.6, image: JewelleryImg, shortDescription: 'Stainless steel link' }
  ],
  Toys: [
    { id: 't1', name: 'Building Blocks Set', category: 'Toys', price: 899, oldPrice: 1499, discount: '40% OFF', rating: 4.8, image: ToysImg, shortDescription: '100 pcs colorful bricks' },
    { id: 't2', name: 'Remote Control Car', category: 'Toys', price: 1299, oldPrice: 2499, discount: '48% OFF', rating: 4.6, image: ToysImg, shortDescription: 'High speed off-road' },
    { id: 't3', name: 'Soft Teddy Bear', category: 'Toys', price: 699, oldPrice: 1299, discount: '46% OFF', rating: 4.9, image: ToysImg, shortDescription: 'Giant plush toy' },
    { id: 't4', name: 'Educational Puzzle', category: 'Toys', price: 399, oldPrice: 799, discount: '50% OFF', rating: 4.5, image: ToysImg, shortDescription: 'Wooden alphabet learning' },
    { id: 't5', name: 'Action Figure Set', category: 'Toys', price: 1499, oldPrice: 2999, discount: '50% OFF', rating: 4.7, image: ToysImg, shortDescription: 'Superhero collection' },
    { id: 't6', name: 'Kids Tent House', category: 'Toys', price: 1999, oldPrice: 3999, discount: '50% OFF', rating: 4.8, image: ToysImg, shortDescription: 'Indoor pop-up play tent' },
    { id: 't7', name: 'Musical Keyboard', category: 'Toys', price: 1299, oldPrice: 2499, discount: '48% OFF', rating: 4.6, image: ToysImg, shortDescription: '37 keys piano for kids' },
    { id: 't8', name: 'Board Game Combo', category: 'Toys', price: 899, oldPrice: 1599, discount: '43% OFF', rating: 4.7, image: ToysImg, shortDescription: 'Chess, Ludo & Snakes' }
  ],
  Stationery: [
    { id: 's1', name: 'Premium Notebook Set', category: 'Stationery', price: 499, oldPrice: 899, discount: '44% OFF', rating: 4.8, image: StationeryImg, shortDescription: 'Pack of 3 hardcover' },
    { id: 's2', name: 'Highlighter Pack', category: 'Stationery', price: 299, oldPrice: 499, discount: '40% OFF', rating: 4.6, image: StationeryImg, shortDescription: '6 pastel colors' },
    { id: 's3', name: 'Fine Point Pens', category: 'Stationery', price: 399, oldPrice: 699, discount: '43% OFF', rating: 4.7, image: StationeryImg, shortDescription: '12 assorted gel pens' },
    { id: 's4', name: 'Art Sketchbook', category: 'Stationery', price: 599, oldPrice: 999, discount: '40% OFF', rating: 4.9, image: StationeryImg, shortDescription: 'Thick acid-free paper' },
    { id: 's5', name: 'Desk Organizer', category: 'Stationery', price: 799, oldPrice: 1499, discount: '46% OFF', rating: 4.7, image: StationeryImg, shortDescription: 'Wooden multi-compartment' },
    { id: 's6', name: 'Sticky Notes Cube', category: 'Stationery', price: 199, oldPrice: 399, discount: '50% OFF', rating: 4.5, image: StationeryImg, shortDescription: 'Neon multi-color pad' },
    { id: 's7', name: 'Watercolor Paint Set', category: 'Stationery', price: 899, oldPrice: 1599, discount: '43% OFF', rating: 4.8, image: StationeryImg, shortDescription: '24 vivid tubes & brushes' },
    { id: 's8', name: 'Scientific Calculator', category: 'Stationery', price: 1299, oldPrice: 1999, discount: '35% OFF', rating: 4.8, image: StationeryImg, shortDescription: 'Advanced functions' }
  ],
  Printing: [
    { id: 'p1', name: 'Wireless Inkjet Printer', category: 'Printing', price: 4999, oldPrice: 8999, discount: '44% OFF', rating: 4.7, image: PrintingImg, shortDescription: 'Print, scan & copy' },
    { id: 'p2', name: 'A4 Copier Paper', category: 'Printing', price: 399, oldPrice: 599, discount: '33% OFF', rating: 4.8, image: PrintingImg, shortDescription: '500 sheets, 75 GSM' },
    { id: 'p3', name: 'Ink Cartridge Set', category: 'Printing', price: 1499, oldPrice: 2499, discount: '40% OFF', rating: 4.5, image: PrintingImg, shortDescription: 'Tri-color high yield' },
    { id: 'p4', name: 'Thermal Label Printer', category: 'Printing', price: 3499, oldPrice: 5999, discount: '41% OFF', rating: 4.6, image: PrintingImg, shortDescription: 'Barcode & shipping labels' },
    { id: 'p5', name: 'Photo Glossy Paper', category: 'Printing', price: 599, oldPrice: 999, discount: '40% OFF', rating: 4.7, image: PrintingImg, shortDescription: '4x6 inches, 100 sheets' },
    { id: 'p6', name: 'Laminating Machine', category: 'Printing', price: 2499, oldPrice: 4499, discount: '44% OFF', rating: 4.5, image: PrintingImg, shortDescription: 'A4 size hot & cold' },
    { id: 'p7', name: 'Spiral Binding Machine', category: 'Printing', price: 3999, oldPrice: 6999, discount: '42% OFF', rating: 4.4, image: PrintingImg, shortDescription: 'Heavy duty office use' },
    { id: 'p8', name: '3D Printer Filament', category: 'Printing', price: 1299, oldPrice: 1999, discount: '35% OFF', rating: 4.8, image: PrintingImg, shortDescription: 'PLA 1.75mm White' }
  ],
  Fashion: [
    { id: 'f1', name: 'Men\'s Denim Jacket', category: 'Fashion', price: 1499, oldPrice: 2999, discount: '50% OFF', rating: 4.8, image: FashionHero, shortDescription: 'Classic blue wash' },
    { id: 'f2', name: 'Women\'s Maxi Dress', category: 'Fashion', price: 1299, oldPrice: 2499, discount: '48% OFF', rating: 4.7, image: FashionHero, shortDescription: 'Floral summer wear' },
    { id: 'f3', name: 'Graphic Printed T-Shirt', category: 'Fashion', price: 499, oldPrice: 999, discount: '50% OFF', rating: 4.6, image: Tshirt, shortDescription: 'Breathable cotton tee' },
    { id: 'f4', name: 'Casual Flip Flops', category: 'Fashion', price: 299, oldPrice: 599, discount: '50% OFF', rating: 4.8, image: FlipFlops, shortDescription: 'Floral comfy design' },
    { id: 'f5', name: 'Men\'s Chino Pants', category: 'Fashion', price: 999, oldPrice: 1999, discount: '50% OFF', rating: 4.5, image: ClothesImg, shortDescription: 'Slim fit stretch fabric' },
    { id: 'f6', name: 'Polarized Sunglasses', category: 'Fashion', price: 599, oldPrice: 1499, discount: '60% OFF', rating: 4.6, image: FashionHero, shortDescription: 'UV400 protection aviators' },
    { id: 'f7', name: 'Women\'s Formal Blazer', category: 'Fashion', price: 1899, oldPrice: 3499, discount: '45% OFF', rating: 4.7, image: ClothesImg, shortDescription: 'Tailored office wear' },
    { id: 'f8', name: 'Analog Wrist Watch', category: 'Fashion', price: 1499, oldPrice: 3999, discount: '62% OFF', rating: 4.8, image: FashionHero, shortDescription: 'Minimalist leather strap' }
  ],
  Electrical: [
    { id: 'el1', name: 'Smart Split AC', category: 'Electrical', price: 35999, oldPrice: 51199, discount: '30% OFF', rating: 4.7, image: SplitAC, shortDescription: '1.5 Ton 5 Star Inverter' },
    { id: 'el2', name: 'Tower Fan', category: 'Electrical', price: 2499, oldPrice: 3899, discount: '36% OFF', rating: 4.6, image: TowerFan, shortDescription: 'High speed oscillation' },
    { id: 'el3', name: 'Pedestal Fan', category: 'Electrical', price: 1999, oldPrice: 3499, discount: '42% OFF', rating: 4.5, image: FanPedestal, shortDescription: 'High speed decorative' },
    { id: 'el4', name: 'Heavy Duty Black Fan', category: 'Electrical', price: 1899, oldPrice: 2499, discount: '24% OFF', rating: 4.8, image: FanBlack, shortDescription: 'Industrial cooling fan' },
    { id: 'el5', name: 'Air Cooler White', category: 'Electrical', price: 5799, oldPrice: 8299, discount: '30% OFF', rating: 4.7, image: CoolerWhite, shortDescription: 'Desert cooler 40L' },
    { id: 'el6', name: 'Copper Wire Bundle', category: 'Electrical', price: 1299, oldPrice: 1999, discount: '35% OFF', rating: 4.6, image: ElectricalImg, shortDescription: '90m fire retardant' },
    { id: 'el7', name: 'Modular Switches Pack', category: 'Electrical', price: 399, oldPrice: 699, discount: '42% OFF', rating: 4.5, image: ElectricalImg, shortDescription: 'Set of 10, 6A switches' },
    { id: 'el8', name: 'Rechargeable Torch', category: 'Electrical', price: 299, oldPrice: 599, discount: '50% OFF', rating: 4.4, image: ElectricalImg, shortDescription: 'Long beam LED' }
  ]
};
