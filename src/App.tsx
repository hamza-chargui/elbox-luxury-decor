/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { CatalogScreen } from './screens/CatalogScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { CuratedBagScreen } from './screens/CuratedBagScreen';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ShowroomAppointmentModal } from './components/ShowroomAppointmentModal';
import { MobileBottomNav } from './components/MobileBottomNav';

const AppContent: React.FC = () => {
  const { currentScreen, toastMessage } = useCart();

  return (
    <div className="min-h-screen bg-[#fdf9f1] text-[#1c1c17] flex flex-col font-body-md selection:bg-[#946c4a] selection:text-white pb-16 lg:pb-0">
      {/* Header with Top Atelier Announcement */}
      <Header />

      {/* Screen Router */}
      <main className="flex-1 flex flex-col w-full">
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'catalog' && <CatalogScreen />}
        {currentScreen === 'product' && <ProductDetailScreen />}
        {currentScreen === 'bag' && <CuratedBagScreen />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileBottomNav />

      {/* Interactive Overlays & Drawers */}
      <CartDrawer />
      <QuickViewModal />
      <ShowroomAppointmentModal />

      {/* Floating Atelier Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-20 lg:bottom-6 right-6 z-50 bg-[#31302b] text-[#f4f0e8] px-4 py-3 rounded shadow-xl border border-[#795434]/40 flex items-center gap-2.5 font-label-nav text-xs tracking-wider uppercase animate-bounce duration-300 pointer-events-none"
        >
          <span className="material-symbols-outlined text-[#edbd95] text-[18px]">verified</span>
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
