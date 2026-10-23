import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CATALOG_ITEMS, DISCIPLINES } from '../data/catalog';

export const HomeScreen: React.FC = () => {
  const { navigateTo, openQuickView, addToCart, setIsAppointmentModalOpen } = useCart();
  const [activeTab, setActiveTab] = useState<'all' | 'amber' | 'cerulean' | 'sculptural' | 'flora'>('all');

  // Filter products for homepage showcase
  const filteredShowcase = CATALOG_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'amber') return item.material === 'Amber Glass' || item.material === 'Smoked Glass';
    if (activeTab === 'cerulean') return item.title.toLowerCase().includes('cerulean') || item.title.toLowerCase().includes('emerald');
    if (activeTab === 'sculptural') return item.category === 'monochrome' || item.material === 'Alabaster & Marble';
    if (activeTab === 'flora') return item.category === 'botanicals';
    return true;
  }).slice(0, 8);

  return (
    <div className="w-full bg-[#fdf9f1] min-h-screen pt-20">
      {/* 1. HERO SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-8 lg:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[#795434]">
              <span className="w-2 h-2 rounded-full bg-[#795434]"></span>
              <span className="font-label-caps text-xs tracking-widest uppercase">
                Collection Atelier Automne / Hiver 2025 • Tunis
              </span>
            </div>

            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-[#1c1c17] leading-[1.08] tracking-tight">
              Faire Place au Beau.
            </h1>

            <p className="font-body-lg text-[#50453c] text-base lg:text-lg leading-relaxed max-w-xl">
              Objets de contemplation façonnés à la main, verrerie architecturale soufflée à la bouche, et créations végétales réalistes conçues pour infuser sérénité et équilibre aux intérieurs d'exception.
            </p>

            {/* Spec Highlights Table */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e6e2da]">
              <div>
                <p className="font-label-caps text-[10px] text-[#795434] uppercase tracking-wider font-semibold">Origine de l'Atelier</p>
                <p className="font-body-md text-sm font-semibold text-[#1c1c17] mt-0.5">La Marsa</p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-[#795434] uppercase tracking-wider font-semibold">Matières d'Élection</p>
                <p className="font-body-md text-sm font-semibold text-[#1c1c17] mt-0.5">Verre Fumé &amp; Laiton</p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-[#795434] uppercase tracking-wider font-semibold">Éditions Curatées</p>
                <p className="font-body-md text-sm font-semibold text-[#1c1c17] mt-0.5">Série Limitée 2025</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => navigateTo('catalog')}
                className="px-8 py-3.5 bg-[#31302b] hover:bg-[#795434] text-[#f4f0e8] font-label-nav text-xs uppercase tracking-widest rounded-[2px] transition-all shadow-md text-center cursor-pointer"
              >
                Explorer la Collection
              </button>

              <button
                type="button"
                onClick={() => setIsAppointmentModalOpen(true)}
                className="px-6 py-3.5 bg-transparent hover:bg-[#f1ede5] text-[#1c1c17] border border-[#d4c3b8] font-label-nav text-xs uppercase tracking-widest rounded-[2px] transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Prendre Rendez-vous à l'Atelier</span>
                <span className="material-symbols-outlined text-[16px] text-[#795434]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Hero Staging Composition (Restored original illuminated ELBOX showroom wall) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#ece8e0] shadow-2xl group border border-[#e6e2da]">
              {/* Restored Original Illuminated ELBOX Showroom Wall Image */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE0DiuWjTutveYsezf5C1KSsHp2hujsgEb12iGpOXKvMX4dQPJBcx6omxgLFmkb2RvgVoTiuk7RfuGuzQXsAiua9e1yDy7p3G0mFLy-Rac2TKF0ZWAbn1I0JyVREgnK9Ug3RoT5VPAOB2haTqdQ73mB_xbiZg-KyHlh5XcZJNFNPgAnu4hJ5WDWaOESSfzvf1Y_ZqPduwNmPllyJng_SHXErQ6YWeG2ColbN6z9gzQMqo5xz_tQvWuQTDjx4cdviInGCY"
                alt="Showroom ELBOX — Scénographie Vases Noirs et Flore Dorée"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Editorial Provenance Tag Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#fdf9f1]/90 backdrop-blur-md p-3.5 rounded-lg shadow-sm flex items-center justify-between border border-[#e6e2da]/70">
                <div>
                  <p className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                    VIGNETTE 01 — AMBRE CANNELÉ &amp; NŒUD CÉRAMIQUE
                  </p>
                  <p className="font-body-sm text-xs text-[#50453c] mt-0.5">
                    Composition Verre Fumé &amp; Grès Noir • Showroom La Marsa
                  </p>
                </div>
                <span className="font-label-caps text-[11px] text-[#1c1c17] font-semibold uppercase">
                  FIG. 01
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Vignette Card matching Image_1 */}
            <div className="absolute -bottom-6 -left-6 w-52 sm:w-60 bg-[#fdf9f1] p-3 rounded-xl border border-[#d4c3b8] shadow-2xl hidden sm:block z-10 animate-fadeIn">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-[#f1ede5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPH91FV-Cinkmz654uLvJjRqN8p9_YZBixcXHNbqCu2pbBabYExqgvMPDI3-maO_dTYLssLzVm2uq5qkQbZPPtKqrLkCruZK99of3pZilYUAYOWSdEZKG1m1Ri9C3U5T3BE-nmUInjDYM0PIuKq96kF2cSWGmtPVqBtkspzp7mzFLI1xQW8vpiF6m4j_0ia6puCOABbBC4uBVfZau6IH0HCSoLmHHdzP2Poy2rTLHyETUwbsTwUJw_j-5MMJ0BwrNtFlo"
                  alt="Vignette 02 - Obélisque Ambré"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-label-caps text-[9px] uppercase tracking-wider text-[#795434] font-semibold">
                VIGNETTE 02 — OBÉLISQUE AMBRÉ
              </p>
              <p className="font-body-sm text-[11px] text-[#50453c]">
                Ensemble Verre Fumé &amp; Bougeoirs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CURATED DISCIPLINES / SPATIAL TAXONOMY */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#f7f3eb] border-y border-[#e6e2da]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-label-caps text-xs text-[#795434] uppercase tracking-widest block mb-1 font-semibold">
                Taxonomie Spatiale
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#1c1c17]">
                Disciplines Curatées
              </h2>
            </div>
            <p className="font-body-md text-sm text-[#50453c] max-w-md">
              La matérialité tactile s'accorde à la pureté architecturale. Chaque médium est calibré pour capter la lumière méditerranéenne côtière.
            </p>
          </div>

          {/* Grid of Disciplines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Featured Large Discipline: Vases & Sculptural Glass */}
            <div
              onClick={() => navigateTo('catalog')}
              className="lg:col-span-7 bg-[#fdf9f1] rounded-xl overflow-hidden border border-[#e6e2da] shadow-sm cursor-pointer group flex flex-col md:flex-row hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={DISCIPLINES[0].image}
                  alt="Vases & Verrerie Sculpturale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                    {DISCIPLINES[0].number}
                  </span>
                  <h3 className="font-title-editorial text-xl text-[#1c1c17] mt-1 group-hover:text-[#795434] transition-colors">
                    Vases &amp; Verrerie Sculpturale
                  </h3>
                  <p className="font-body-sm text-xs text-[#50453c] mt-2 leading-relaxed">
                    Amphores soufflées à la bouche aux reflets d'ondulation, et piédestaux en verre fumé sculptés pour prismatiser la lumière naturelle.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-[#e6e2da] text-xs font-label-caps text-[#795434]">
                  <span>{DISCIPLINES[0].count}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    DÉCOUVRIR <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Discipline 2: Botanical & Artificial Flora */}
            <div
              onClick={() => navigateTo('catalog')}
              className="lg:col-span-5 bg-[#fdf9f1] rounded-xl overflow-hidden border border-[#e6e2da] shadow-sm cursor-pointer group flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={DISCIPLINES[1].image}
                  alt="Flore & Végétaux d'Art"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                    {DISCIPLINES[1].number}
                  </span>
                  <span className="font-label-caps text-[10px] text-[#50453c] uppercase">
                    {DISCIPLINES[1].count}
                  </span>
                </div>
                <h3 className="font-title-editorial text-lg text-[#1c1c17] mt-1 group-hover:text-[#795434] transition-colors">
                  Flore &amp; Végétaux d'Art
                </h3>
                <p className="font-body-sm text-xs text-[#50453c] mt-1.5 leading-relaxed">
                  Magnolias givrés au réalisme saisissant, pivoines en soie cuite et rameaux architecturaux à la tenue pérenne.
                </p>
              </div>
            </div>

            {/* Discipline 3: Monochrome Accents */}
            <div
              onClick={() => navigateTo('catalog')}
              className="lg:col-span-4 bg-[#fdf9f1] rounded-xl overflow-hidden border border-[#e6e2da] shadow-sm cursor-pointer group hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={DISCIPLINES[2].image}
                  alt="Accents Monochromes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                  {DISCIPLINES[2].number}
                </span>
                <h3 className="font-title-editorial text-base text-[#1c1c17] mt-0.5 group-hover:text-[#795434] transition-colors">
                  Accents Monochromes
                </h3>
                <p className="font-body-sm text-xs text-[#50453c] mt-1 leading-relaxed">
                  Rubans sculpturaux en résine, serre-livres architecturaux Paris-Londres et muses en porcelaine contemplative.
                </p>
              </div>
            </div>

            {/* Discipline 4: Vessels of Brass & Earth */}
            <div
              onClick={() => navigateTo('catalog')}
              className="lg:col-span-4 bg-[#fdf9f1] rounded-xl overflow-hidden border border-[#e6e2da] shadow-sm cursor-pointer group hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={DISCIPLINES[3].image}
                  alt="Récipients de Laiton & Terres Cuites"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                  {DISCIPLINES[3].number}
                </span>
                <h3 className="font-title-editorial text-base text-[#1c1c17] mt-0.5 group-hover:text-[#795434] transition-colors">
                  Récipients de Laiton &amp; Terres Cuites
                </h3>
                <p className="font-body-sm text-xs text-[#50453c] mt-1 leading-relaxed">
                  Surfaces métalliques chaleureuses martelées à la main dialoguant avec des branchages floraux structurés.
                </p>
              </div>
            </div>

            {/* Discipline 5: Forest Glass & Table Accents */}
            <div
              onClick={() => navigateTo('catalog')}
              className="lg:col-span-4 bg-[#fdf9f1] rounded-xl overflow-hidden border border-[#e6e2da] shadow-sm cursor-pointer group hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={DISCIPLINES[4].image}
                  alt="Verre Forêt & Accents de Table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                  {DISCIPLINES[4].number}
                </span>
                <h3 className="font-title-editorial text-base text-[#1c1c17] mt-0.5 group-hover:text-[#795434] transition-colors">
                  Verre Forêt &amp; Accents de Table
                </h3>
                <p className="font-body-sm text-xs text-[#50453c] mt-1 leading-relaxed">
                  Cylindres cannelés vert sylvestre profond, chapelets de marbre et calices immaculés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS OF THE ATELIER */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="font-label-caps text-xs text-[#795434] uppercase tracking-widest font-semibold">
              Archives Saisonnières
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#1c1c17]">
              Sélection de l'Atelier
            </h2>
            <p className="font-body-md text-sm text-[#50453c]">
              Chaque composition est stylisée et photographiée au showroom ELBOX. Chaque pièce est assortie d'une référence d'inventaire pour toute commande privée.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#31302b] text-[#f4f0e8] shadow-sm'
                    : 'bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17]'
                }`}
              >
                Toutes les Œuvres
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('amber')}
                className={`px-4 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'amber'
                    ? 'bg-[#31302b] text-[#f4f0e8] shadow-sm'
                    : 'bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17]'
                }`}
              >
                Verre Ambré &amp; Fumé
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cerulean')}
                className={`px-4 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'cerulean'
                    ? 'bg-[#31302b] text-[#f4f0e8] shadow-sm'
                    : 'bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17]'
                }`}
              >
                Céruléen &amp; Émeraude
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sculptural')}
                className={`px-4 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'sculptural'
                    ? 'bg-[#31302b] text-[#f4f0e8] shadow-sm'
                    : 'bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17]'
                }`}
              >
                Accents Sculpturaux
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('flora')}
                className={`px-4 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'flora'
                    ? 'bg-[#31302b] text-[#f4f0e8] shadow-sm'
                    : 'bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17]'
                }`}
              >
                Flore Botanique
              </button>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredShowcase.map((product) => (
              <article
                key={product.id}
                className="bg-[#fdf9f1] rounded-xl overflow-hidden border border-[#e6e2da] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                {/* Product Visual Container */}
                <div className="relative aspect-[4/5] bg-[#ece8e0] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Ref identifier badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#fdf9f1]/90 backdrop-blur-sm rounded text-[10px] font-label-caps uppercase tracking-widest text-[#795434] font-semibold border border-[#d4c3b8]/40">
                    {product.ref}
                  </div>

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      type="button"
                      onClick={() => openQuickView(product)}
                      className="w-full py-2.5 bg-[#fdf9f1]/95 backdrop-blur-md text-[#1c1c17] rounded font-label-nav text-xs uppercase tracking-widest hover:bg-[#31302b] hover:text-white transition-colors shadow-sm cursor-pointer"
                    >
                      Aperçu Rapide
                    </button>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-label-caps text-[10px] text-[#795434] uppercase tracking-widest font-semibold">
                        {product.badge}
                      </span>
                      <span className="font-label-price text-sm text-[#1c1c17] font-semibold">
                        {product.price > 0 ? `${product.price} TND` : 'Sur demande'}
                      </span>
                    </div>

                    <h3
                      onClick={() => navigateTo('product', product.id)}
                      className="font-title-editorial text-base text-[#1c1c17] mt-1 group-hover:text-[#795434] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.title}
                    </h3>

                    <p className="font-body-sm text-xs text-[#50453c] mt-1 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#e6e2da] flex items-center justify-between text-xs font-label-nav">
                    <span className="text-[#82756b] text-[11px]">{product.ref}</span>
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product, 1);
                      }}
                      className="text-[#1c1c17] hover:text-[#795434] font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Commander</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center pt-10">
            <button
              type="button"
              onClick={() => navigateTo('catalog')}
              className="px-8 py-3.5 bg-[#31302b] hover:bg-[#795434] text-white font-label-nav text-xs uppercase tracking-widest rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explorer l'Ensemble du Répertoire</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. STYLING JOURNAL / EDITORIAL ESSAY SECTION */}
      <section id="styling-journal-section" className="w-full px-4 sm:px-8 lg:px-12 py-20 bg-[#31302b] text-[#f4f0e8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Staging Gallery */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-[#50453c] aspect-[3/4] shadow-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYy7pt4-2e6voWD5qSKpYWbVLQcKRnYuSr4ZqTgWyATVmeEVfWslmgm2FZeMIQ9lsWdKJ4ZqEHDvGkrRIb_A73JMwVK9HJNBCX2tRRZiJD6gNI7Ie_abxT73u5JRLVfZy1PRwZ7mboQuCOV4svQFto_UjtrVeluvWjeMC9IUg9L-mGXWkhgE2X4ygEYVnad9bf_5wMuKzi_6XAimFN8WBQZJOH5Azz_GMFmWxiay-Z8Lhu19gj9_rR1v9YfTnWWuA9agY"
                  alt="Étude de Style - Réflexions ambrées"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden bg-[#50453c] aspect-square shadow-lg">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBTaoQ0rxyspPnh832KM8EsAeNsHhVe_XQ-FAX9uaMORF0VgTEAgNba2qolLmb8oTLof9ncwupHMAVdAFqf_kLlgbEjO-jBfipsCpN5q2PYYfIhbyoYWMjQgnfvE8_NNiVVe34pkdGWHHWrzR87dBv9LSu44y74EdSx0nswhkEbvuBQhEd0WJIXBOlj1HHDodIuH-vhAzioptSxF_Vv7dBBt9V-zLiJL7J0-9yXN5t9jozEuQQ7tRK0qo-tF0bUb9DsRg"
                    alt="Détail floral givré"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#1c1c17]/60 rounded-xl border border-[#82756b]/30">
                  <p className="font-label-caps text-[10px] text-[#edbd95] uppercase tracking-widest font-semibold">
                    ÉTUDE DE TEXTURE
                  </p>
                  <p className="font-body-sm text-xs text-[#f4f0e8]/80 mt-1 leading-relaxed">
                    Pétales givrés dialoguant avec les reflets chauds du bronze martelé à la main.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-xs text-[#edbd95] uppercase tracking-widest font-semibold">
                Journal • Vol. IV • Notes de Curation
              </span>

              <h2 className="font-headline-lg text-3xl md:text-5xl text-[#f4f0e8] leading-tight">
                Ancrer l'Espace : La Poésie du Poids &amp; du Vide
              </h2>

              <p className="font-body-lg text-sm md:text-base text-[#f4f0e8]/80 leading-relaxed">
                Un dialogue intime entre vide, masse et réfraction de la lumière dans l'architecture méditerranéenne contemporaine. Le véritable luxe ne crie pas ; il instaure le silence.
              </p>

              {/* 3 Principles */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-[#1c1c17]/40 border border-[#82756b]/20 flex items-start gap-3">
                  <span className="font-title-editorial text-lg text-[#edbd95] font-semibold">01</span>
                  <div>
                    <h4 className="font-title-editorial text-sm font-semibold text-[#f4f0e8]">
                      Travertin &amp; Lumière Ambrée Rasante
                    </h4>
                    <p className="font-body-sm text-xs text-[#f4f0e8]/75 mt-0.5 leading-relaxed">
                      Associer le verre soufflé ambré au travertin poreux ou au chêne mat pour capter les lueurs dorées de fin d'après-midi sans éblouissement.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#1c1c17]/40 border border-[#82756b]/20 flex items-start gap-3">
                  <span className="font-title-editorial text-lg text-[#edbd95] font-semibold">02</span>
                  <div>
                    <h4 className="font-title-editorial text-sm font-semibold text-[#f4f0e8]">
                      La Règle des Silhouettes Asymétriques
                    </h4>
                    <p className="font-body-sm text-xs text-[#f4f0e8]/75 mt-0.5 leading-relaxed">
                      Composer en triades : une tige verticale élancée, un volume au sol ancré, et un élément tactile horizontal tel qu'un nœud en céramique.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#1c1c17]/40 border border-[#82756b]/20 flex items-start gap-3">
                  <span className="font-title-editorial text-lg text-[#edbd95] font-semibold">03</span>
                  <div>
                    <h4 className="font-title-editorial text-sm font-semibold text-[#f4f0e8]">
                      Flore Botanique Perpétuelle
                    </h4>
                    <p className="font-body-sm text-xs text-[#f4f0e8]/75 mt-0.5 leading-relaxed">
                      Des végétaux pérennes qui dispensent une sérénité constante au fil des saisons, sans aucune humidité dommageable pour le bois et les marbres nobles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="font-label-nav text-xs text-[#edbd95] hover:text-white uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Lire l'Essai de Curation</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UNCOMPROMISING CARE & WHITE-GLOVE LOGISTICS */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 bg-[#f7f3eb] rounded-xl border border-[#e6e2da] space-y-3">
            <span className="material-symbols-outlined text-[28px] text-[#795434]">local_shipping</span>
            <h4 className="font-title-editorial text-base text-[#1c1c17] font-semibold">
              Logistique Fragile Nationale
            </h4>
            <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
              Conditionnement sous caisses sur-mesure absorbantes à travers Tunis, La Marsa, Sousse, Sfax et tous les gouvernorats.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-[#f7f3eb] rounded-xl border border-[#e6e2da] space-y-3">
            <span className="material-symbols-outlined text-[28px] text-[#795434]">handyman</span>
            <h4 className="font-title-editorial text-base text-[#1c1c17] font-semibold">
              Installation en Gants Blancs
            </h4>
            <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
              Équipe de livraison dédiée pour le déballage soigné, la mise en scène dans vos espaces et la reprise des emballages.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-[#f7f3eb] rounded-xl border border-[#e6e2da] space-y-3">
            <span className="material-symbols-outlined text-[28px] text-[#795434]">storefront</span>
            <h4 className="font-title-editorial text-base text-[#1c1c17] font-semibold">
              Présentation Privée en Showroom
            </h4>
            <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
              Ressentez le poids tactile, la luminosité du cristal et les proportions en personne à notre atelier de La Marsa sur rendez-vous.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 bg-[#f7f3eb] rounded-xl border border-[#e6e2da] space-y-3">
            <span className="material-symbols-outlined text-[28px] text-[#795434]">architecture</span>
            <h4 className="font-title-editorial text-base text-[#1c1c17] font-semibold">
              Programme Architectes &amp; Décorateurs
            </h4>
            <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
              Conditions préférentielles pour projets résidentiels et hôteliers, sourcing floral sur-mesure et prêts de mise en scène 48h.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BESPOKE VIGNETTE CALLOUT BANNER */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto p-8 md:p-12 bg-[#ece8e0] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#d4c3b8]/60">
          <div className="space-y-2 max-w-xl">
            <span className="font-label-caps text-xs text-[#795434] uppercase tracking-widest font-semibold">
              Service de Curation Sur-Mesure
            </span>
            <h3 className="font-headline-md text-2xl md:text-3xl text-[#1c1c17]">
              Un projet de scénographie pour votre intérieur ?
            </h3>
            <p className="font-body-sm text-xs md:text-sm text-[#50453c] leading-relaxed">
              Nos stylistes conçoivent des ensembles complets adaptés aux dimensions de vos volumes, aux nuances de vos marbres et à l'orientation de votre lumière naturelle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setIsAppointmentModalOpen(true)}
              className="px-6 py-3.5 bg-[#31302b] text-white rounded font-label-nav text-xs uppercase tracking-widest hover:bg-[#795434] transition-colors whitespace-nowrap shadow-sm text-center cursor-pointer"
            >
              Réserver une Consultation
            </button>
            <button
              type="button"
              onClick={() => navigateTo('catalog')}
              className="px-6 py-3.5 bg-[#fdf9f1] text-[#1c1c17] rounded font-label-nav text-xs uppercase tracking-widest hover:bg-[#e6e2da] transition-colors whitespace-nowrap text-center border border-[#d4c3b8] cursor-pointer"
            >
              Parcourir le Répertoire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
