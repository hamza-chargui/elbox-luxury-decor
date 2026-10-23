import React, { useState, useMemo, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CATALOG_ITEMS, CatalogItem } from '../data/catalog';

export const ProductDetailScreen: React.FC = () => {
  const {
    selectedProductId,
    navigateTo,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setIsAppointmentModalOpen
  } = useCart();

  // Find product by selected ID or fallback to first item
  const product: CatalogItem = useMemo(() => {
    return (
      CATALOG_ITEMS.find((item) => item.id === selectedProductId) ||
      CATALOG_ITEMS.find((item) => item.ref === 'REF-ELB-0104') ||
      CATALOG_ITEMS[0]
    );
  }, [selectedProductId]);

  // Extract ONLY authentic images belonging strictly to this product
  const productImages = useMemo(() => {
    const images: string[] = [product.image];
    if (product.gallery && Array.isArray(product.gallery)) {
      product.gallery.forEach((img) => {
        if (img && !images.includes(img)) {
          images.push(img);
        }
      });
    }
    return images;
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants && product.variants.length > 0 ? product.variants[0].name : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('dimensions');

  // Reset image index and variant when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0].name);
    } else {
      setSelectedVariant('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const currentImage = productImages[activeImageIndex] || product.image;
  const wishlisted = isWishlisted(product.id);
  const isConfirmedPrice = product.price > 0;

  // Harmonizing complementary pieces
  const complementaryPieces = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => item.id !== product.id).slice(0, 3);
  }, [product.id]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const handleAction = () => {
    if (isConfirmedPrice) {
      addToCart(product, quantity, selectedVariant || undefined);
    } else {
      setIsAppointmentModalOpen(true);
    }
  };

  return (
    <div className="w-full bg-[#fdf9f1] min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#605e56] font-label-caps uppercase tracking-wider py-3.5 border-b border-[#e6e2da]/70 mb-5 sm:mb-6">
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="hover:text-[#795434] transition-colors cursor-pointer"
          >
            Accueil
          </button>
          <span className="text-[#d4c3b8]">/</span>
          <button
            type="button"
            onClick={() => navigateTo('catalog')}
            className="hover:text-[#795434] transition-colors cursor-pointer"
          >
            Boutique
          </button>
          <span className="text-[#d4c3b8]">/</span>
          <span className="text-[#1c1c17] font-medium truncate max-w-[220px] sm:max-w-none">
            {product.title}
          </span>
        </nav>

        {/* Main 2-Column Product Stage (Constrained so full image is visible without scrolling) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Product Image Gallery (Balanced & compact) */}
          <div className="lg:col-span-5 flex flex-col-reverse sm:flex-row gap-3 sm:gap-3.5 sticky lg:top-24">
            
            {/* Thumbnail Strip (Rendered ONLY if genuine alternate views exist) */}
            {productImages.length > 1 && (
              <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible shrink-0 no-scrollbar pb-1 sm:pb-0">
                {productImages.map((imgUrl, idx) => {
                  const isSelected = activeImageIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Perspective 0${idx + 1}`}
                      className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-[2px] bg-[#f5f1ea] overflow-hidden transition-all cursor-pointer border ${
                        isSelected
                          ? 'border-[#795434] ring-1 ring-[#795434] opacity-100 shadow-sm'
                          : 'border-[#e6e2da] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.title} vue ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Primary Image Stage (Height constrained so user sees entire vase and botanical without scrolling) */}
            <div className="relative flex-1 h-[360px] sm:h-[420px] lg:h-[470px] max-h-[58vh] bg-[#f5f1ea] rounded-[2px] border border-[#e6e2da]/80 overflow-hidden group flex items-center justify-center p-3 sm:p-4">
              <img
                src={currentImage}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                aria-label="Coup de cœur"
                className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                  wishlisted
                    ? 'bg-[#795434] text-white shadow-sm'
                    : 'bg-[#fdf9f1]/80 text-[#50453c] hover:text-[#795434] hover:bg-white'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={wishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </span>
              </button>

              {/* Multiple Images Dots on Mobile */}
              {productImages.length > 1 && (
                <div className="sm:hidden absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none">
                  {productImages.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeImageIndex === idx ? 'w-4 bg-[#795434]' : 'w-1 bg-[#1c1c17]/30'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Product Information & Acquisition */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            
            {/* Title, Category & Verified Price */}
            <div className="space-y-2 border-b border-[#e6e2da] pb-4">
              <div className="flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#795434]">
                <span>{product.material}</span>
                <span className="text-[#605e56]">{product.ref}</span>
              </div>

              <h1 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-[#1c1c17] font-normal leading-tight">
                {product.title}
              </h1>

              <div className="pt-1">
                {isConfirmedPrice ? (
                  <p className="font-label-price text-xl sm:text-2xl text-[#1c1c17] font-medium">
                    {product.price} TND
                    <span className="text-xs font-normal text-[#605e56] ml-2.5 font-body-sm">
                      TTC • Livraison Sécurisée sur toute la Tunisie
                    </span>
                  </p>
                ) : (
                  <p className="font-title-editorial text-lg text-[#795434] italic">
                    Tarif sur demande auprès de l'Atelier
                  </p>
                )}
              </div>
            </div>

            {/* Concise Editorial Description */}
            <p className="font-body-md text-sm sm:text-base text-[#50453c] leading-relaxed">
              {product.fullDesc || product.shortDesc}
            </p>

            {/* Available Finish Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-label-caps uppercase tracking-wider text-[#605e56]">
                    Finition :
                  </span>
                  <span className="font-medium text-[#1c1c17]">
                    {selectedVariant}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant === v.name;
                    return (
                      <button
                        key={v.name}
                        type="button"
                        onClick={() => setSelectedVariant(v.name)}
                        className={`px-3 py-2 rounded-[2px] text-xs font-label-nav uppercase tracking-wider border transition-colors cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'border-[#795434] bg-[#f1ede5] text-[#1c1c17] font-medium'
                            : 'border-[#e6e2da] bg-transparent text-[#50453c] hover:border-[#82756b]'
                        }`}
                      >
                        {v.colors && v.colors.length > 0 && (
                          <span
                            className="w-3 h-3 rounded-full border border-black/10 inline-block"
                            style={{ backgroundColor: v.colors[0] }}
                          />
                        )}
                        <span>{v.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Procurement Controls */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                {isConfirmedPrice && (
                  <div className="flex items-center border border-[#d4c3b8] rounded-[2px] bg-[#fdf9f1] px-2 py-2">
                    <button
                      type="button"
                      aria-label="Diminuer la quantité"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] font-medium text-sm cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-label-price text-sm text-[#1c1c17] px-3 font-medium">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Augmenter la quantité"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] font-medium text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                )}

                {/* Primary Button */}
                <button
                  type="button"
                  onClick={handleAction}
                  className="flex-1 py-3.5 px-6 rounded-[2px] bg-[#31302b] text-[#fdf9f1] font-label-nav text-xs uppercase tracking-widest hover:bg-[#795434] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[17px]">
                    {isConfirmedPrice ? 'shopping_bag' : 'mail'}
                  </span>
                  <span>
                    {isConfirmedPrice ? 'Ajouter au Panier' : 'Prendre Rendez-vous'}
                  </span>
                </button>
              </div>

              {/* Secondary Atelier Action */}
              <button
                type="button"
                onClick={() => setIsAppointmentModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-[2px] border border-[#d4c3b8] hover:bg-[#f1ede5] text-[#50453c] hover:text-[#1c1c17] font-label-nav text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-[#795434]">calendar_today</span>
                <span>Demander une Présentation Privée à l'Atelier</span>
              </button>
            </div>

            {/* Technical & Care Accordions */}
            <div className="border-t border-[#e6e2da] divide-y divide-[#e6e2da] pt-1">
              
              {/* Accordion 1: Dimensions & Matérialité */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('dimensions')}
                  className="w-full flex items-center justify-between text-left text-xs font-label-caps uppercase tracking-wider text-[#1c1c17] cursor-pointer"
                >
                  <span className="font-medium">Dimensions &amp; Spécifications</span>
                  <span className="material-symbols-outlined text-[16px] text-[#795434]">
                    {openAccordion === 'dimensions' ? 'remove' : 'add'}
                  </span>
                </button>
                {openAccordion === 'dimensions' && (
                  <div className="mt-2.5 text-xs text-[#50453c] space-y-1.5 font-body-sm leading-relaxed">
                    <p>
                      <strong className="text-[#1c1c17] font-medium">Dimensions :</strong>{' '}
                      {product.dimensions.diameter} • {product.dimensions.height}
                    </p>
                    <p>
                      <strong className="text-[#1c1c17] font-medium">Poids net :</strong>{' '}
                      {product.dimensions.mass}
                    </p>
                    <p>
                      <strong className="text-[#1c1c17] font-medium">Matière principale :</strong>{' '}
                      {product.material} ({product.provenance})
                    </p>
                    <p>
                      <strong className="text-[#1c1c17] font-medium">Origine :</strong>{' '}
                      {product.origin}
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Entretien & Préservation */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('care')}
                  className="w-full flex items-center justify-between text-left text-xs font-label-caps uppercase tracking-wider text-[#1c1c17] cursor-pointer"
                >
                  <span className="font-medium">Conseils d'Entretien</span>
                  <span className="material-symbols-outlined text-[16px] text-[#795434]">
                    {openAccordion === 'care' ? 'remove' : 'add'}
                  </span>
                </button>
                {openAccordion === 'care' && (
                  <div className="mt-2.5 text-xs text-[#50453c] font-body-sm leading-relaxed">
                    <p>{product.handling || 'Dépoussiérer délicatement à l\'aide d\'un chiffon microfibre sec ou d\'un plumeau soyeux. Les récipients en verre sont étanches pour accueillir des tiges fraîches ou des compositions séchées. Éviter tout produit abrasif.'}</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Livraison en Gants Blancs */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between text-left text-xs font-label-caps uppercase tracking-wider text-[#1c1c17] cursor-pointer"
                >
                  <span className="font-medium">Livraison en Gants Blancs &amp; Installation</span>
                  <span className="material-symbols-outlined text-[16px] text-[#795434]">
                    {openAccordion === 'shipping' ? 'remove' : 'add'}
                  </span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="mt-2.5 text-xs text-[#50453c] font-body-sm leading-relaxed space-y-1">
                    <p>
                      Conditionnement sous caisse en bois renforcée avec mousse sur-mesure. Expédition assurée via transporteur dédié à travers les 24 gouvernorats tunisiens sous 48 à 72 heures.
                    </p>
                    <p className="text-[#795434]">
                      Service de déballage et mise en scène dans votre espace offert sur demande lors de la livraison.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Harmonizing Vignette Objects */}
        <section className="mt-16 pt-10 border-t border-[#e6e2da]">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="font-display-hero text-xl sm:text-2xl text-[#1c1c17]">
              Compléments Harmonieux
            </h3>
            <button
              type="button"
              onClick={() => navigateTo('catalog')}
              className="text-xs font-label-nav uppercase tracking-wider text-[#795434] hover:underline cursor-pointer"
            >
              Voir Tout le Répertoire →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {complementaryPieces.map((piece) => (
              <article
                key={piece.id}
                onClick={() => navigateTo('product', piece.id)}
                className="group cursor-pointer flex flex-col bg-transparent"
              >
                <div className="relative aspect-[4/5] bg-[#f5f1ea] rounded-[2px] overflow-hidden border border-[#e6e2da]/70">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-2.5 flex flex-col">
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-label-caps text-[10px] uppercase text-[#795434]">
                      {piece.material}
                    </span>
                    <span className="font-label-price text-xs text-[#1c1c17] font-medium">
                      {piece.price > 0 ? `${piece.price} TND` : 'Sur demande'}
                    </span>
                  </div>
                  <h4 className="font-title-editorial text-sm text-[#1c1c17] mt-0.5 group-hover:text-[#795434] transition-colors leading-snug line-clamp-1">
                    {piece.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
