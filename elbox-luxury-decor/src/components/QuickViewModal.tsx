import React from 'react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    navigateTo,
    setIsCartDrawerOpen
  } = useCart();

  if (!quickViewProduct) return null;

  const isConfirmedPrice = quickViewProduct.price > 0;

  return (
    <div className="fixed inset-0 z-50 bg-[#31302b]/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={closeQuickView} />

      <div className="relative bg-[#fdf9f1] max-w-2xl w-full rounded-[2px] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] border border-[#d4c3b8]">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuickView}
          aria-label="Fermer la vue rapide"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#fdf9f1]/90 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Product Visual */}
        <div className="md:w-1/2 bg-[#f5f1ea] aspect-[4/5] md:aspect-auto relative overflow-hidden flex items-center justify-center p-3">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#795434]">
              <span>{quickViewProduct.material}</span>
              <span className="text-[#605e56]">{quickViewProduct.ref}</span>
            </div>

            <h3 className="font-display-hero text-xl text-[#1c1c17] leading-snug">
              {quickViewProduct.title}
            </h3>

            <p className="font-label-price text-lg text-[#1c1c17] font-medium">
              {isConfirmedPrice ? `${quickViewProduct.price} TND` : 'Sur demande auprès de l\'Atelier'}
            </p>

            <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
              {quickViewProduct.shortDesc || quickViewProduct.fullDesc}
            </p>

            <div className="space-y-1.5 pt-3 border-t border-[#e6e2da] text-xs">
              <div className="flex items-center justify-between text-[#50453c]">
                <span>Dimensions</span>
                <span className="text-[#1c1c17] font-medium">
                  {quickViewProduct.dimensions.diameter} • {quickViewProduct.dimensions.height}
                </span>
              </div>
              <div className="flex items-center justify-between text-[#50453c]">
                <span>Provenance</span>
                <span className="text-[#1c1c17] font-medium">{quickViewProduct.origin}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-2">
            {isConfirmedPrice ? (
              <button
                type="button"
                onClick={() => {
                  addToCart(quickViewProduct, 1);
                  closeQuickView();
                  setIsCartDrawerOpen(true);
                }}
                className="w-full py-3 bg-[#31302b] hover:bg-[#795434] text-[#fdf9f1] font-label-nav text-xs uppercase tracking-widest rounded-[2px] transition-colors cursor-pointer"
              >
                Ajouter au Panier
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  closeQuickView();
                  navigateTo('product', quickViewProduct.id);
                }}
                className="w-full py-3 bg-[#31302b] hover:bg-[#795434] text-[#fdf9f1] font-label-nav text-xs uppercase tracking-widest rounded-[2px] transition-colors cursor-pointer"
              >
                Demander une Consultation
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                navigateTo('product', quickViewProduct.id);
                closeQuickView();
              }}
              className="w-full py-2.5 bg-[#f1ede5] hover:bg-[#ece8e0] text-[#1c1c17] font-label-nav text-xs uppercase tracking-widest rounded-[2px] transition-colors cursor-pointer"
            >
              Consulter la Fiche Complète →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
