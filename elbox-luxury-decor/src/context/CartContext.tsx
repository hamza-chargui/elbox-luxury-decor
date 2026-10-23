import React, { createContext, useContext, useState, useEffect } from 'react';
import { CATALOG_ITEMS, CatalogItem } from '../data/catalog';

export interface CartItem {
  item: CatalogItem;
  quantity: number;
  variant: string;
}

export type ScreenType = 'home' | 'catalog' | 'product' | 'bag';

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  subtotal: number;
  itemCount: number;
  freeShippingTierUnlocked: boolean;
  currentScreen: ScreenType;
  selectedProductId: string;
  quickViewProduct: CatalogItem | null;
  isCartDrawerOpen: boolean;
  isMobileNavOpen: boolean;
  isAppointmentModalOpen: boolean;
  currency: 'TND' | 'EUR' | 'USD';
  language: 'EN' | 'FR';
  toastMessage: string | null;
  addToCart: (item: CatalogItem, qty?: number, variant?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  toggleWishlist: (itemId: string) => void;
  isWishlisted: (itemId: string) => boolean;
  navigateTo: (screen: ScreenType, productId?: string) => void;
  openQuickView: (item: CatalogItem) => void;
  closeQuickView: () => void;
  setIsCartDrawerOpen: (open: boolean) => void;
  setIsMobileNavOpen: (open: boolean) => void;
  setIsAppointmentModalOpen: (open: boolean) => void;
  setCurrency: (c: 'TND' | 'EUR' | 'USD') => void;
  setLanguage: (l: 'EN' | 'FR') => void;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with the 2 artisanal items displayed in the spec
  const initialItem1 = CATALOG_ITEMS.find(i => i.ref === 'REF-ELB-0104') || CATALOG_ITEMS[0];
  const initialItem2 = CATALOG_ITEMS.find(i => i.ref === 'REF-ELB-0022') || CATALOG_ITEMS[12];

  const [cart, setCart] = useState<CartItem[]>([
    {
      item: initialItem1,
      quantity: 1,
      variant: 'Amber Fluted & Noir Knot'
    },
    {
      item: initialItem2,
      quantity: 1,
      variant: 'High-Clarity Marine Cyan'
    }
  ]);

  const [wishlist, setWishlist] = useState<string[]>(['ref-elb-0104']);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('ref-elb-0104');
  const [quickViewProduct, setQuickViewProduct] = useState<CatalogItem | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [currency, setCurrency] = useState<'TND' | 'EUR' | 'USD'>('TND');
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const subtotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0);
  const itemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const freeShippingTierUnlocked = subtotal >= 400;

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToCart = (item: CatalogItem, qty = 1, variant?: string) => {
    const chosenVariant = variant || (item.variants[0]?.name ?? 'Standard Finish');
    setCart(prev => {
      const existingIndex = prev.findIndex(ci => ci.item.id === item.id && ci.variant === chosenVariant);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + qty
        };
        return next;
      }
      return [...prev, { item, quantity: qty, variant: chosenVariant }];
    });
    showToast(`Allocated (${qty}x) — ${item.title}`);
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(ci => ci.item.id !== itemId));
    showToast('Object released from curated reservation');
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(ci => {
        if (ci.item.id === itemId) {
          const newQty = Math.max(1, Math.min(8, ci.quantity + delta));
          return { ...ci, quantity: newQty };
        }
        return ci;
      });
    });
  };

  const toggleWishlist = (itemId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(itemId);
      if (exists) {
        showToast('Removed from private wishlist');
        return prev.filter(id => id !== itemId);
      } else {
        showToast('Saved to private atelier wishlist');
        return [...prev, itemId];
      }
    });
  };

  const isWishlisted = (itemId: string) => wishlist.includes(itemId);

  const navigateTo = (screen: ScreenType, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentScreen(screen);
    setIsMobileNavOpen(false);
    setIsCartDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuickView = (item: CatalogItem) => {
    setQuickViewProduct(item);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        subtotal,
        itemCount,
        freeShippingTierUnlocked,
        currentScreen,
        selectedProductId,
        quickViewProduct,
        isCartDrawerOpen,
        isMobileNavOpen,
        isAppointmentModalOpen,
        currency,
        language,
        toastMessage,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
        navigateTo,
        openQuickView,
        closeQuickView,
        setIsCartDrawerOpen,
        setIsMobileNavOpen,
        setIsAppointmentModalOpen,
        setCurrency,
        setLanguage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
