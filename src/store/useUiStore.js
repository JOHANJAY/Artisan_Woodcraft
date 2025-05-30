import { create } from 'zustand'

// Create UI store for managing global UI state
const useUiStore = create((set) => ({
  // Lightbox / Gallery
  lightboxOpen: false,
  lightboxIndex: 0,
  lightboxImages: [],
  
  openLightbox: (images, index = 0) => set({ 
    lightboxOpen: true, 
    lightboxImages: images, 
    lightboxIndex: index 
  }),
  
  closeLightbox: () => set({ 
    lightboxOpen: false 
  }),
  
  setLightboxIndex: (index) => set({ 
    lightboxIndex: index 
  }),
  
  // Mobile menu
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ 
    mobileMenuOpen: !state.mobileMenuOpen 
  })),
  
  // Form data persistence
  quoteFormData: {},
  updateQuoteFormData: (data) => set((state) => ({ 
    quoteFormData: { ...state.quoteFormData, ...data } 
  })),
  
  resetQuoteFormData: () => set({ 
    quoteFormData: {} 
  }),
  
  // Notifications
  notification: null,
  showNotification: (message, type = 'success') => {
    set({ notification: { message, type } })
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      set({ notification: null })
    }, 5000)
  },
  
  hideNotification: () => set({ 
    notification: null 
  }),
}))

export default useUiStore