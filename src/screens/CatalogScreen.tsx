import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CATALOG_ITEMS, CatalogItem } from '../data/catalog';

export const CatalogScreen: React.FC = () => {
  const { navigateTo, openQuickView, addToCart, toggleWishlist, isWishlisted } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);
  const [activeTone, setActiveTone] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('curated');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const materials = [
    { id: 'Smoked Glass', label: 'Verre Fumé' },
    { id: 'Amber Glass', label: 'Verre Ambré' },
    { id: 'Glazed Ceramic', label: 'Céramique Émaillée' },
    { id: 'Alabaster & Marble', label: 'Albâtre & Marbre' },
    { id: 'Brass & Metallic', label: 'Laiton & Bronze' }
  ];

  const tones = [
    { id: 'Amber', label: 'Ambre' },
    { id: 'Smoked', label: 'Fumé' },
    { id: 'Cyan', label: 'Cyan' },
    { id: 'Blanc', label: 'Blanc' },
    { id: 'Bronze', label: 'Bronze' }
  ];

  const categoryLabels: Record<string, string> = {
    all: 'Toutes les Pièces',
    vases: 'Vases & Verrerie',
    botanicals: 'Flore Botanique',
    vessels: 'Récipients & Vases',
    monochrome: 'Monochrome'
  };

  const sortOptions = [
    { value: 'curated', label: 'Sélection Atelier' },
    { value: 'newest', label: 'Nouveautés' },
    { value: 'price-asc', label: 'Prix : Croissant' },
    { value: 'price-desc', label: 'Prix : Décroissant' }
  ];

  // Filter & Sort logic
  const filteredItems = useMemo(() => {
    let items = [...CATALOG_ITEMS];

    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    if (activeMaterial) {
      items = items.filter(item => item.material === activeMaterial);
    }

    if (activeTone) {
      items = items.filter(item => item.tone === activeTone);
    }

    switch (sortBy) {
      case 'newest':
        items.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'price-asc':
        items.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-desc':
        items.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'curated':
      default:
        break;
    }

    return items;
  }, [activeCategory, activeMaterial, activeTone, sortBy]);

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== null || activeTone !== null;
  const activeFilterCount = (activeCategory !== 'all' ? 1 : 0) + (activeMaterial ? 1 : 0) + (activeTone ? 1 : 0);

  const handleClearAll = () => {
    setActiveCategory('all');
    setActiveMaterial(null);
    setActiveTone(null);
    setSortBy('curated');
  };

  const getCollectionTitle = () => {
    if (activeCategory === 'all') return 'La Collection';
    return categoryLabels[activeCategory] || 'La Collection';
  };

  const currentSortLabel = sortOptions.find(o => o.value === sortBy)?.label || 'Sélection Atelier';

  return (
    <div className="w-full bg-[#fdf9f1] min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. EDITORIAL HEADER */}
        <section className="pt-6 pb-4">
          {/* Compact breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#605e56] font-label-caps uppercase tracking-wider mb-2">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="hover:text-[#795434] transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <span className="text-[#d4c3b8]">/</span>
            <span className="text-[#605e56]">Boutique</span>
            <span className="text-[#d4c3b8]">/</span>
            <span className="text-[#1c1c17] font-medium">{getCollectionTitle()}</span>
          </nav>

          {/* Title & Subtle Count */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h1 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-[#1c1c17] font-normal tracking-tight">
              {getCollectionTitle()}
            </h1>
            <span className="text-xs text-[#605e56] font-label-caps uppercase tracking-widest sm:text-right">
              {filteredItems.length} {filteredItems.length === 1 ? 'création' : 'créations'}
            </span>
          </div>

          {/* Short description */}
          <p className="font-body-sm text-xs sm:text-sm text-[#50453c] mt-1.5 max-w-xl">
            Verrerie tactile, récipients organiques et flore d'exception façonnés pour un art de vivre serein.
          </p>

          {/* Clean divider */}
          <div className="w-full border-b border-[#e6e2da] mt-4" />
        </section>

        {/* 2. BESPOKE FILTER & SORT TOOLBAR (Designed for ELBOX Atelier) */}
        <section className="sticky top-20 z-30 bg-[#fdf9f1]/95 backdrop-blur-md py-3.5 border-b border-[#e6e2da]/80 transition-all">
          {/* Desktop Toolbar */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const isSelected = activeCategory === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveCategory(key)}
                    className={`px-3.5 py-1.5 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#31302b] text-[#f4f0e8] font-medium shadow-sm'
                        : 'text-[#50453c] hover:text-[#1c1c17] hover:bg-[#f1ede5]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Right Controls: Filters toggle, Luxury Sort Popover, Clear */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Secondary Filter Toggle */}
              <button
                type="button"
                onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                className={`px-3.5 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider flex items-center gap-2 border transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${
                  isFilterPanelOpen || activeMaterial || activeTone
                    ? 'border-[#795434] bg-[#f5efe6] text-[#795434] font-medium'
                    : 'border-[#d4c3b8] bg-[#fdf9f1] text-[#2c2b27] hover:bg-[#f5efe6] hover:border-[#795434]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">tune</span>
                <span>Filtres</span>
                {(activeMaterial || activeTone) && (
                  <span className="w-4 h-4 rounded-full bg-[#795434] text-white text-[10px] flex items-center justify-center font-bold">
                    {(activeMaterial ? 1 : 0) + (activeTone ? 1 : 0)}
                  </span>
                )}
              </button>

              {/* Bespoke Luxury Sort Dropdown (Matches Website Design System) */}
              <div className="relative" ref={sortDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  aria-haspopup="listbox"
                  aria-expanded={isSortOpen}
                  className="px-3.5 py-2 border border-[#d4c3b8] rounded-[2px] bg-[#fdf9f1] hover:bg-[#f5efe6] text-[#1c1c17] font-label-nav text-xs uppercase tracking-wider flex items-center justify-between gap-2.5 transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.03)] min-w-[190px]"
                >
                  <span className="text-[#795434] font-medium">Tri :</span>
                  <span className="font-medium text-[#1c1c17] truncate">{currentSortLabel}</span>
                  <span className={`material-symbols-outlined text-[17px] text-[#795434] transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                {/* Luxury Dropdown Menu Popover */}
                {isSortOpen && (
                  <div
                    role="listbox"
                    className="absolute right-0 top-full mt-1.5 w-56 bg-[#fdf9f1] border border-[#d4c3b8] rounded-[2px] shadow-[0_12px_32px_rgba(41,40,33,0.14)] py-1.5 z-40 backdrop-blur-md animate-fadeIn"
                  >
                    {sortOptions.map((opt) => {
                      const isSelected = sortBy === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setSortBy(opt.value);
                            setIsSortOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-left text-xs font-label-nav uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#f1ede5] text-[#795434] font-semibold'
                              : 'text-[#2c2b27] hover:bg-[#f7f2eb] hover:text-[#795434]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#795434]"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Clear all link (Visible ONLY when filters active) */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs font-label-nav uppercase tracking-wider text-[#795434] hover:underline cursor-pointer flex items-center gap-1 pl-1"
                >
                  <span>Réinitialiser</span>
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Desktop Secondary Filter Drawer/Panel */}
          {isFilterPanelOpen && (
            <div className="hidden md:flex flex-col gap-3.5 pt-3.5 mt-3 border-t border-[#e6e2da] animate-fadeIn">
              {/* Material chips */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-label-caps uppercase tracking-wider text-[#795434] font-semibold mr-1">
                  Matière :
                </span>
                {materials.map((mat) => {
                  const isSelected = activeMaterial === mat.id;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setActiveMaterial(isSelected ? null : mat.id)}
                      className={`px-3 py-1.5 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-colors cursor-pointer border ${
                        isSelected
                          ? 'border-[#795434] bg-[#795434] text-white font-medium'
                          : 'border-[#d4c3b8]/60 bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17] hover:border-[#795434]'
                      }`}
                    >
                      {mat.label}
                    </button>
                  );
                })}
              </div>

              {/* Tone chips */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-label-caps uppercase tracking-wider text-[#795434] font-semibold mr-1">
                  Tonalité :
                </span>
                {tones.map((t) => {
                  const isSelected = activeTone === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTone(isSelected ? null : t.id)}
                      className={`px-3 py-1.5 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-colors cursor-pointer border ${
                        isSelected
                          ? 'border-[#795434] bg-[#795434] text-white font-medium'
                          : 'border-[#d4c3b8]/60 bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17] hover:border-[#795434]'
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Mobile Toolbar (Elevated Atelier Row) */}
          <div className="md:hidden flex items-center justify-between gap-2.5">
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex-1 py-2.5 px-3 border border-[#d4c3b8] rounded-[2px] text-xs font-label-nav uppercase tracking-wider text-[#1c1c17] flex items-center justify-center gap-1.5 bg-[#fdf9f1] active:bg-[#f1ede5] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#795434]">tune</span>
              <span>Filtres {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
            </button>

            {/* Mobile Sort Trigger */}
            <div className="relative flex-1" ref={sortDropdownRef}>
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full py-2.5 px-3 border border-[#d4c3b8] rounded-[2px] text-xs font-label-nav uppercase tracking-wider text-[#1c1c17] flex items-center justify-between bg-[#fdf9f1] active:bg-[#f1ede5] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <span className="truncate">{currentSortLabel}</span>
                <span className="material-symbols-outlined text-[#795434] text-[16px]">
                  {isSortOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-full bg-[#fdf9f1] border border-[#d4c3b8] rounded-[2px] shadow-[0_12px_32px_rgba(41,40,33,0.16)] py-1.5 z-50">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-3.5 py-2.5 text-left text-xs font-label-nav uppercase tracking-wider flex items-center justify-between ${
                        sortBy === opt.value
                          ? 'bg-[#f1ede5] text-[#795434] font-semibold'
                          : 'text-[#2c2b27] hover:bg-[#f7f2eb]'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.value && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#795434]"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearAll}
                className="px-2 py-2 text-xs font-label-nav uppercase tracking-wider text-[#795434]"
                title="Effacer tout"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Mobile Active Filter Chips */}
          {hasActiveFilters && (
            <div className="md:hidden flex items-center gap-1.5 overflow-x-auto pt-2.5 no-scrollbar">
              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f1ede5] border border-[#d4c3b8] text-[#1c1c17] rounded text-[11px] font-label-nav uppercase whitespace-nowrap">
                  {categoryLabels[activeCategory]}
                  <button type="button" onClick={() => setActiveCategory('all')} className="text-[#795434] font-bold">×</button>
                </span>
              )}
              {activeMaterial && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f1ede5] border border-[#d4c3b8] text-[#1c1c17] rounded text-[11px] font-label-nav uppercase whitespace-nowrap">
                  {materials.find(m => m.id === activeMaterial)?.label || activeMaterial}
                  <button type="button" onClick={() => setActiveMaterial(null)} className="text-[#795434] font-bold">×</button>
                </span>
              )}
              {activeTone && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f1ede5] border border-[#d4c3b8] text-[#1c1c17] rounded text-[11px] font-label-nav uppercase whitespace-nowrap">
                  {tones.find(t => t.id === activeTone)?.label || activeTone}
                  <button type="button" onClick={() => setActiveTone(null)} className="text-[#795434] font-bold">×</button>
                </span>
              )}
            </div>
          )}
        </section>

        {/* MOBILE FILTER BOTTOM SHEET */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
            <div
              className="fixed inset-0 bg-[#31302b]/60 backdrop-blur-sm"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <div className="relative bg-[#fdf9f1] rounded-t-xl max-h-[85vh] overflow-y-auto flex flex-col p-6 shadow-2xl z-10 border-t border-[#d4c3b8]">
              <div className="flex items-center justify-between border-b border-[#e6e2da] pb-3.5 mb-5">
                <div>
                  <h3 className="font-title-editorial text-lg text-[#1c1c17]">Affiner la Sélection</h3>
                  <p className="text-[11px] text-[#605e56] font-label-caps uppercase tracking-wider mt-0.5">
                    {filteredItems.length} créations disponibles
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 text-[#50453c] hover:text-[#1c1c17]"
                  aria-label="Fermer les filtres"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Categories */}
              <div className="mb-5">
                <span className="block text-xs font-label-caps uppercase tracking-wider text-[#795434] font-semibold mb-2.5">
                  Catégories
                </span>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveCategory(key)}
                      className={`px-3.5 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all ${
                        activeCategory === key
                          ? 'bg-[#31302b] text-[#f4f0e8] font-medium shadow-sm'
                          : 'bg-[#f1ede5] text-[#50453c] border border-[#d4c3b8]/40'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="mb-5">
                <span className="block text-xs font-label-caps uppercase tracking-wider text-[#795434] font-semibold mb-2.5">
                  Matières
                </span>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setActiveMaterial(activeMaterial === mat.id ? null : mat.id)}
                      className={`px-3.5 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all ${
                        activeMaterial === mat.id
                          ? 'bg-[#795434] text-white font-medium shadow-sm'
                          : 'bg-[#f1ede5] text-[#50453c] border border-[#d4c3b8]/40'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tones */}
              <div className="mb-6">
                <span className="block text-xs font-label-caps uppercase tracking-wider text-[#795434] font-semibold mb-2.5">
                  Tonalités
                </span>
                <div className="flex flex-wrap gap-2">
                  {tones.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTone(activeTone === t.id ? null : t.id)}
                      className={`px-3.5 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all ${
                        activeTone === t.id
                          ? 'bg-[#795434] text-white font-medium shadow-sm'
                          : 'bg-[#f1ede5] text-[#50453c] border border-[#d4c3b8]/40'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Sheet Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#e6e2da]">
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="flex-1 py-3 text-xs font-label-nav uppercase tracking-widest text-[#50453c] bg-[#f1ede5] border border-[#d4c3b8] rounded-[2px]"
                >
                  Réinitialiser
                </button>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-2 py-3 text-xs font-label-nav uppercase tracking-widest text-[#f4f0e8] bg-[#31302b] rounded-[2px] shadow-sm"
                >
                  Appliquer ({filteredItems.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. PRODUCT GRID */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto space-y-3">
            <p className="font-title-editorial text-xl text-[#1c1c17]">Aucune pièce ne correspond aux critères sélectionnés.</p>
            <p className="font-body-sm text-xs text-[#50453c]">
              Ajustez vos filtres ou réinitialisez pour contempler l'intégralité du répertoire de l'Atelier.
            </p>
            <button
              type="button"
              onClick={handleClearAll}
              className="mt-3 px-6 py-3 bg-[#31302b] text-[#f4f0e8] text-xs font-label-nav uppercase tracking-widest rounded-[2px] hover:bg-[#795434] transition-colors cursor-pointer"
            >
              Réinitialiser les Filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-12 pt-6">
            {filteredItems.map((item: CatalogItem) => {
              const wishlisted = isWishlisted(item.id);
              const hasAlternate = item.gallery && item.gallery.length > 1;
              const secondaryImage = hasAlternate ? item.gallery[1] : null;

              return (
                <article
                  key={item.id}
                  className="group flex flex-col bg-transparent"
                >
                  {/* Photography Stage */}
                  <div
                    onClick={() => navigateTo('product', item.id)}
                    className="relative aspect-[4/5] bg-[#f1ede5] overflow-hidden rounded-[2px] cursor-pointer"
                  >
                    {/* Primary Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                        secondaryImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
                      }`}
                    />

                    {/* Secondary Image on Hover (Belonging strictly to the SAME product) */}
                    {secondaryImage && (
                      <img
                        src={secondaryImage}
                        alt={`${item.title} détail`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                      />
                    )}

                    {/* Subtle Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(item.id);
                      }}
                      aria-label="Coup de cœur"
                      className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                        wishlisted
                          ? 'bg-[#795434] text-white shadow-sm'
                          : 'bg-[#fdf9f1]/80 text-[#50453c] hover:text-[#795434] hover:bg-white'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={wishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
                      >
                        favorite
                      </span>
                    </button>

                    {/* Discreet Quick View Action */}
                    <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuickView(item);
                        }}
                        className="w-full py-2 bg-[#fdf9f1]/95 backdrop-blur-md text-[#1c1c17] rounded-[2px] font-label-nav text-[10px] uppercase tracking-widest hover:bg-[#31302b] hover:text-[#f4f0e8] transition-colors shadow-sm cursor-pointer"
                      >
                        Aperçu Rapide
                      </button>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="pt-3 flex flex-col flex-grow">
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-wider">
                        {item.material}
                      </span>
                      <span className="font-label-price text-xs sm:text-sm text-[#1c1c17] font-medium shrink-0">
                        {item.price > 0 ? `${item.price} TND` : 'Sur demande'}
                      </span>
                    </div>

                    <h2
                      onClick={() => navigateTo('product', item.id)}
                      className="font-title-editorial text-sm sm:text-base text-[#1c1c17] mt-0.5 group-hover:text-[#795434] transition-colors cursor-pointer leading-snug line-clamp-2"
                    >
                      {item.title}
                    </h2>

                    {/* Mobile Quick Action */}
                    <div className="mt-2 pt-2 border-t border-[#e6e2da]/60 flex items-center justify-between text-xs sm:hidden">
                      <button
                        type="button"
                        onClick={() => addToCart(item, 1)}
                        className="font-label-nav text-[10px] uppercase tracking-wider text-[#795434] font-medium"
                      >
                        + Ajouter
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateTo('product', item.id)}
                        className="text-[10px] font-label-caps uppercase text-[#605e56]"
                      >
                        Détails →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
