import { create } from 'zustand';

const useAccountStore = create((set) => ({
  userProfile: {
    name: 'Harsh Pandey',
    email: 'harsh.vendor@shophub.com',
    phone: '9876543210',
    gender: 'Male',
    dob: '1995-05-15',
    avatar: null
  },
  savedAddresses: [
    {
      id: 1,
      type: 'HOME',
      name: 'Harsh Pandey',
      address: '83 Kishan Pura Mataji Mandir, Sector No. 5 New Harsud Chh...',
      phone: '+91 98765 43210'
    }
  ],
  savedCards: [
    {
      id: 1,
      type: 'VISA',
      number: '•••• •••• •••• 4242',
      expiry: '12/28',
      holder: 'Harsh Pandey',
      color: 'from-blue-600 to-indigo-700'
    }
  ],
  orders: [
    {
      id: 'OD123456789',
      status: 'Delivered',
      date: '25 Apr 2026',
      items: [
        { name: 'Sleek Geometric Pendant', price: '4,499', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200' }
      ]
    }
  ],
  wishlist: [],
  coupons: [
    {
      code: 'COCIA50',
      discount: '50% OFF',
      desc: 'On your first jewelry purchase',
      minOrder: '₹999',
      expiry: 'Ends in 2 days'
    }
  ],
  notifications: [
    { id: 1, title: 'Order Shipped', desc: 'Your order #OD12345 is on the way!', time: '2h ago' }
  ],
  selectedAddressId: 1,
  isDarkMode: true,

  // Actions
  setSelectedAddress: (id) => set({ selectedAddressId: id }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  updateProfile: (newData) => set((state) => ({
    userProfile: { ...state.userProfile, ...newData }
  })),

  addAddress: (address) => set((state) => ({
    savedAddresses: [...state.savedAddresses, { ...address, id: Date.now() }]
  })),

  removeAddress: (id) => set((state) => ({
    savedAddresses: state.savedAddresses.filter(a => a.id !== id)
  })),

  updateAddress: (updatedAddr) => set((state) => ({
    savedAddresses: state.savedAddresses.map(a => a.id === updatedAddr.id ? updatedAddr : a)
  })),

  addCard: (card) => set((state) => ({
    savedCards: [...state.savedCards, { ...card, id: Date.now() }]
  })),

  removeCard: (id) => set((state) => ({
    savedCards: state.savedCards.filter(c => c.id !== id)
  })),

  addToWishlist: (product) => set((state) => ({
    wishlist: [...state.wishlist, product]
  })),

  removeFromWishlist: (id) => set((state) => ({
    wishlist: state.wishlist.filter(item => item.id !== id)
  }))
}));

export default useAccountStore;
