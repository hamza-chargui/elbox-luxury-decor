import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const {
    currentScreen,
    navigateTo,
    itemCount,
    wishlist,
    setIsCartDrawerOpen,
    setIsMobileNavOpen,
    setIsAppointmentModalOpen,
    showToast
  } = useCart();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fdf9f1]/95 backdrop-blur-md border-b border-[#e6e2da]/70 shadow-[0_1px_8px_rgba(41,40,33,0.03)]">
        {/* Main Navigation Bar (Clean, no top announcement bar) */}
        <div className="h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left Brand Identity & Nav Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label="Ouvrir le menu de navigation"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1c1c17] hover:text-[#795434] transition-colors cursor-pointer"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            {/* Logo: E L B O X without "Atelier Tunis" */}
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center text-left group cursor-pointer"
            >
              <span className="font-title-editorial text-2xl sm:text-[26px] tracking-[0.24em] text-[#1c1c17] font-semibold uppercase leading-none group-hover:text-[#795434] transition-colors">
                E L B O X
              </span>
            </button>

            {/* Desktop Navigation Links in French */}
            <nav className="hidden lg:flex items-center gap-7">
              <button
                type="button"
                onClick={() => navigateTo('catalog')}
                className={`font-label-nav text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                  currentScreen === 'catalog'
                    ? 'text-[#795434] font-semibold border-b-2 border-[#795434] pb-0.5'
                    : 'text-[#50453c] hover:text-[#1c1c17]'
                }`}
              >
                Boutique
              </button>
              <button
                type="button"
                onClick={() => navigateTo('catalog')}
                className="font-label-nav text-xs uppercase tracking-widest text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
              >
                Collections
              </button>
              <button
                type="button"
                onClick={() => navigateTo('catalog')}
                className="font-label-nav text-xs uppercase tracking-widest text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
              >
                Ensembles
              </button>
              <button
                type="button"
                onClick={() => {
                  if (currentScreen !== 'home') navigateTo('home');
                  setTimeout(() => {
                    document.getElementById('styling-journal-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="font-label-nav text-xs uppercase tracking-widest text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
              >
                Journal de Style
              </button>
              <button
                type="button"
                onClick={() => setIsAppointmentModalOpen(true)}
                className="font-label-nav text-xs uppercase tracking-widest text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
              >
                L'Atelier
              </button>
            </nav>
          </div>

          {/* Right Action Icons: Search, Wishlist, Bag (No currency/language, No account icon) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              aria-label="Rechercher dans le catalogue"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-9 h-9 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Wishlist Icon */}
            <button
              type="button"
              aria-label="Coups de cœur"
              onClick={() => navigateTo('catalog')}
              className="relative w-9 h-9 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
              title="Pièces favorites"
            >
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#795434]"></span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              type="button"
              aria-label="Panier Curaté"
              onClick={() => setIsCartDrawerOpen(true)}
              className="relative w-9 h-9 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span className="absolute top-1 right-0.5 w-4 h-4 rounded-full bg-[#795434] text-white font-label-caps text-[9px] flex items-center justify-center leading-none">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {/* Collapsible Search Input Bar */}
        {isSearchOpen && (
          <div className="w-full bg-[#f1ede5] border-t border-[#e6e2da] px-4 sm:px-12 py-3 flex items-center gap-3 animate-fadeIn">
            <span className="material-symbols-outlined text-[#795434] text-[20px]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigateTo('catalog');
                  setIsSearchOpen(false);
                }
              }}
              placeholder="Rechercher une pièce, un matériau (Verre Fumé, Ambre, Laiton, Marbre)..."
              className="w-full bg-transparent text-[#1c1c17] placeholder-[#82756b] font-body-sm text-sm focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={() => {
                if (searchQuery) {
                  navigateTo('catalog');
                }
                setIsSearchOpen(false);
              }}
              className="px-4 py-1.5 bg-[#31302b] text-white rounded-[2px] text-xs font-label-nav uppercase tracking-wider hover:bg-[#795434] transition-colors shrink-0 cursor-pointer"
            >
              Explorer
            </button>
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="text-[#50453c] hover:text-[#1c1c17] transition-colors"
              aria-label="Fermer la recherche"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        )}
      </header>

      {/* Mobile Drawer (No account icon, No currency toggle) */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] z-50 bg-[#fdf9f1] flex flex-col justify-between pt-safe pb-safe transition-transform duration-300 ease-out shadow-2xl border-l border-[#e6e2da] ${
          useCart().isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 py-6">
          <div className="flex items-center justify-between border-b border-[#e6e2da] pb-4">
            <span className="font-title-editorial text-lg tracking-[0.2em] text-[#1c1c17] uppercase">
              E L B O X
            </span>
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-[#1c1c17] hover:text-[#795434] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <div className="py-6 flex flex-col gap-5">
            <button
              type="button"
              onClick={() => {
                navigateTo('home');
                setIsMobileNavOpen(false);
              }}
              className="font-headline-sm text-lg text-left text-[#1c1c17] hover:text-[#795434] transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button
              type="button"
              onClick={() => {
                navigateTo('catalog');
                setIsMobileNavOpen(false);
              }}
              className="font-headline-sm text-lg text-left text-[#1c1c17] hover:text-[#795434] transition-colors cursor-pointer"
            >
              Boutique &amp; Catalogue
            </button>
            <button
              type="button"
              onClick={() => {
                navigateTo('catalog');
                setIsMobileNavOpen(false);
              }}
              className="font-headline-sm text-lg text-left text-[#1c1c17] hover:text-[#795434] transition-colors cursor-pointer"
            >
              Collections &amp; Vases
            </button>
            <button
              type="button"
              onClick={() => {
                navigateTo('bag');
                setIsMobileNavOpen(false);
              }}
              className="font-headline-sm text-lg text-left text-[#1c1c17] hover:text-[#795434] transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>Panier Curaté</span>
              <span className="px-2 py-0.5 rounded-full bg-[#795434] text-white font-label-caps text-[10px]">
                {itemCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                navigateTo('home');
                setIsMobileNavOpen(false);
                setTimeout(() => {
                  document.getElementById('styling-journal-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="font-headline-sm text-lg text-left text-[#1c1c17] hover:text-[#795434] transition-colors cursor-pointer"
            >
              Journal de Style
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAppointmentModalOpen(true);
                setIsMobileNavOpen(false);
              }}
              className="font-headline-sm text-lg text-left text-[#1c1c17] hover:text-[#795434] transition-colors cursor-pointer"
            >
              Rendez-vous Showroom
            </button>
          </div>

          <div className="mt-auto pt-6 border-t border-[#e6e2da] space-y-3">
            <button
              type="button"
              onClick={async () => {
                showToast('Téléchargement de l’archive complète (36.8 Mo) en cours...');
                try {
                  const res = await fetch('/elbox-luxury-decor.zip');
                  if (!res.ok) throw new Error('Échec HTTP');
                  const blob = await res.blob();
                  if (blob.size < 100000) {
                    throw new Error('Archive en cours de finalisation.');
                  }
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'elbox-luxury-decor.zip';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
                  showToast('Archive (36.8 Mo) téléchargée avec succès !');
                } catch {
                  window.location.href = '/elbox-luxury-decor.zip';
                }
              }}
              className="w-full py-2.5 px-3 bg-[#31302b] text-[#f4f0e8] hover:bg-[#795434] transition-colors rounded-[2px] font-label-nav text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Télécharger le Projet (.ZIP — 36.8 Mo)</span>
            </button>

            <div className="bg-[#f7f3eb] p-3.5 rounded-[2px] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-[#50453c] uppercase">Showrooms</span>
                <span className="font-body-sm text-xs text-[#1c1c17] font-medium">La Marsa • Sidi Bou Saïd</span>
              </div>
              <span className="material-symbols-outlined text-[#795434] text-[20px]">storefront</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile drawer */}
      {useCart().isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-[#31302b]/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
    </>
  );
};
