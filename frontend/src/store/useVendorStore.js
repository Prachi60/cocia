import { create } from 'zustand';

const useVendorStore = create((set) => ({
  selectedCategory: 'For You',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  // Header visibility state
  isSaleBannerVisible: true,
  setSaleBannerVisible: (visible) => set({ isSaleBannerVisible: visible }),
}));

export default useVendorStore;
