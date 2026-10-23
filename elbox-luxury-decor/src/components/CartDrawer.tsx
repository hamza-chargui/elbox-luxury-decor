import React from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    subtotal,
    itemCount,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    removeFromCart,
    updateQuantity,
    navigateTo
  } = useCart();

  if (!isCartDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#31302b]/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      {/* Drawer Canvas */}
      <aside className="relative w-full max-w-md bg-[#fdf9f1] h-full shadow-2xl flex flex-col justify-between z-10 animate-slideInRight overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-5 bg-[#f1ede5] border-b border-[#e6e2da] flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#795434] font-semibold">
              Réservation Atelier
            </span>
            <h3 className="font-title-editorial text-lg text-[#1c1c17]">
              Votre Panier ({itemCount} {itemCount === 1 ? 'Création' : 'Créations'})
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsCartDrawerOpen(false)}
            aria-label="Fermer le panier"
            className="w-9 h-9 rounded-full bg-[#ece8e0] flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Complimentary Logistics Banner */}
        <div className="p-4 bg-[#ece8e0]/80 space-y-2 border-b border-[#e6e2da]/60">
          <div className="flex items-center justify-between font-label-caps text-[11px] tracking-wider text-[#1c1c17] uppercase">
            <span className="flex items-center gap-1.5 text-[#795434] font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Livraison Offerte Qualifiée
            </span>
            <span className="text-[#1c1c17] font-semibold">Tunisie Entière</span>
          </div>
          <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#795434] h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (subtotal / 400) * 100)}%` }}
            />
          </div>
          <p className="font-body-sm text-[11px] text-[#50453c] leading-snug">
            Emballage sécurisé sous caisse en bois et transport assuré sur tous les gouvernorats.
          </p>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="py-16 text-center text-[#50453c] space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#82756b]">hourglass_empty</span>
              <p className="font-title-editorial text-lg text-[#1c1c17]">Votre panier est vide</p>
              <p className="font-body-sm text-xs text-[#50453c] max-w-xs mx-auto">
                Explorez les séries limitées, la verrerie architecturale et les compositions florales de l'Atelier.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  navigateTo('catalog');
                }}
                className="mt-3 px-6 py-2.5 bg-[#31302b] text-white rounded text-xs font-label-nav uppercase tracking-widest hover:bg-[#795434] transition-colors cursor-pointer"
              >
                Parcourir la Boutique
              </button>
            </div>
          ) : (
            cart.map((cartItem) => (
              <div
                key={`${cartItem.item.id}-${cartItem.variant}`}
                className="flex gap-4 p-3.5 bg-[#f7f3eb] rounded border border-[#e6e2da]/70 relative group"
              >
                <div className="w-20 h-24 flex-shrink-0 bg-[#e6e2da] rounded overflow-hidden">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="font-label-caps text-[9px] uppercase tracking-wider text-[#795434] font-semibold truncate">
                        {cartItem.item.ref}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(cartItem.item.id)}
                        className="text-[#82756b] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                        title="Retirer"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                    <h4 className="font-title-editorial text-sm text-[#1c1c17] leading-snug line-clamp-1 mt-0.5">
                      {cartItem.item.title}
                    </h4>
                    {cartItem.variant && (
                      <p className="font-body-sm text-[11px] text-[#50453c] line-clamp-1">
                        {cartItem.variant}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center bg-[#ece8e0] rounded px-1.5 py-0.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(cartItem.item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-[#1c1c17] hover:text-[#795434] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-label-caps text-[11px] px-2 text-[#1c1c17]">
                        {cartItem.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(cartItem.item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-[#1c1c17] hover:text-[#795434] cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-label-price text-sm text-[#1c1c17] font-semibold">
                      {cartItem.item.price * cartItem.quantity} TND
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#f1ede5] border-t border-[#e6e2da] space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#50453c]">
                  Sous-total TTC
                </span>
                <span className="font-label-price text-lg text-[#1c1c17] font-semibold">
                  {subtotal} TND
                </span>
              </div>
              <p className="font-body-sm text-[11px] text-[#50453c] leading-relaxed">
                Facturation officielle et planification de la livraison en gants blancs confirmées lors de la commande.
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  navigateTo('bag');
                }}
                className="w-full py-3.5 bg-[#31302b] text-[#f4f0e8] font-label-nav text-xs uppercase tracking-widest rounded hover:bg-[#795434] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Finaliser la Commande</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCartDrawerOpen(false)}
                className="w-full py-2 bg-transparent text-[#50453c] hover:text-[#1c1c17] font-label-nav text-xs uppercase tracking-widest transition-colors text-center cursor-pointer"
              >
                Poursuivre la Visite
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
