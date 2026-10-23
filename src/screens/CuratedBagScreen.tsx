import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const CuratedBagScreen: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingTierUnlocked,
    navigateTo,
    setIsCartDrawerOpen,
    setIsAppointmentModalOpen,
    showToast
  } = useCart();

  const [patronName, setPatronName] = useState('Leïla Ben Mansour');
  const [patronPhone, setPatronPhone] = useState('+216 98 420 119');
  const [selectedGovernorate, setSelectedGovernorate] = useState('Tunis');
  const [address, setAddress] = useState('Villa Les Oliviers, 14 Rue de la Falaise, Sidi Bou Saïd');
  const [deliveryNotes, setDeliveryNotes] = useState('Vases fragiles, installation souhaitée dans le salon au rez-de-chaussée.');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'wire'>('cod');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const governorates = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Nabeul', 'Zaghouan',
    'Bizerte', 'Béja', 'Jendouba', 'Le Kef', 'Siliana', 'Sousse',
    'Monastir', 'Mahdia', 'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid',
    'Gabès', 'Médenine', 'Tataouine', 'Gafsa', 'Tozeur', 'Kébili'
  ];

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patronName || !patronPhone) {
      showToast('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setIsOrderPlaced(true);
    showToast('Réservation #ELB-9482 enregistrée auprès de l\'Atelier.');
  };

  return (
    <div className="w-full bg-[#fdf9f1] min-h-screen pt-20">
      <div className="flex flex-col w-full">
        {/* Top Notification & Bag Summary Header */}
        <section className="w-full px-4 md:px-margin-desktop py-4 bg-[#f7f3eb] border-b border-[#e6e2da] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-body-sm text-[#50453c]">
            <span className="material-symbols-outlined text-[#795434] text-[18px]">package_2</span>
            <p>
              Réservation Dossier #ELB-9482 •{' '}
              <span className="text-[#1c1c17] font-semibold">Atelier La Marsa</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fdf9f1] text-[#1c1c17] rounded text-xs font-label-nav uppercase tracking-wider hover:bg-[#ece8e0] border border-[#d4c3b8] transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#795434]">view_sidebar</span>
              <span>Volet Rapide du Panier</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 font-label-caps text-[11px] text-[#795434] uppercase tracking-widest bg-[#e6e2da]/70 px-3 py-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-[#795434] animate-pulse"></span>
              <span>{cart.length} {cart.length === 1 ? 'Création Réservée' : 'Créations Réservées'}</span>
            </div>
          </div>
        </section>

        {/* Order Confirmed Lightbox / Dossier Receipt */}
        {isOrderPlaced && (
          <div className="fixed inset-0 z-50 bg-[#31302b]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#fdf9f1] max-w-xl w-full rounded p-6 sm:p-8 space-y-6 shadow-2xl border border-[#d4c3b8] animate-in fade-in zoom-in-95 duration-200">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#ffdcc1] flex items-center justify-center text-[#795434]">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <span className="font-label-caps text-xs text-[#795434] uppercase tracking-widest font-semibold block">
                  Réservation Atelier Certifiée
                </span>
                <h2 className="font-display-hero text-2xl sm:text-3xl text-[#1c1c17]">
                  Commande Validée
                </h2>
                <p className="font-body-sm text-xs text-[#50453c] max-w-md mx-auto">
                  Le dossier <strong className="text-[#1c1c17]">ELB-9482</strong> est désormais réservé à notre atelier de La Marsa. Un concierge d'art prendra contact avec vous dans la journée pour planifier la livraison assurée.
                </p>
              </div>

              <div className="p-4 bg-[#f7f3eb] rounded space-y-2 text-xs border border-[#e6e2da]">
                <div className="flex justify-between py-1 border-b border-[#e6e2da]">
                  <span className="text-[#605e56]">Client</span>
                  <span className="font-semibold text-[#1c1c17]">{patronName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e6e2da]">
                  <span className="text-[#605e56]">Téléphone</span>
                  <span className="font-semibold text-[#1c1c17]">{patronPhone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e6e2da]">
                  <span className="text-[#605e56]">Destination</span>
                  <span className="font-semibold text-[#1c1c17]">{selectedGovernorate}, Tunisie</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e6e2da]">
                  <span className="text-[#605e56]">Protocole d'Emballage</span>
                  <span className="font-semibold text-[#795434]">Caisse en Bois Archival (Offert)</span>
                </div>
                <div className="flex justify-between py-1 pt-2">
                  <span className="font-semibold text-[#1c1c17]">Valeur Certifiée</span>
                  <span className="font-label-price text-base font-bold text-[#795434]">{subtotal} TND</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsOrderPlaced(false)}
                  className="flex-1 py-3 bg-[#31302b] text-[#f4f0e8] hover:bg-[#795434] transition-colors rounded font-label-nav text-xs uppercase tracking-widest cursor-pointer"
                >
                  Retour au Panier
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOrderPlaced(false);
                    navigateTo('catalog');
                  }}
                  className="flex-1 py-3 bg-[#f7f3eb] hover:bg-[#ece8e0] border border-[#d4c3b8] text-[#1c1c17] rounded font-label-nav text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Explorer d'Autres Pièces
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Bag Exhibition & Breakdown Layout */}
        <section className="w-full px-4 sm:px-8 lg:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Curated Items Table */}
            <div className="lg:col-span-8 space-y-8">
              {/* Section Title */}
              <div className="flex flex-col gap-1 pb-3 border-b border-[#e6e2da]">
                <span className="font-label-caps text-xs uppercase tracking-widest text-[#795434] font-semibold">
                  Réservation Atelier • Sélection Saisonnière
                </span>
                <h1 className="font-display-hero text-3xl sm:text-4xl text-[#1c1c17] tracking-tight">
                  Votre Panier Curaté
                </h1>
                <p className="font-body-md text-sm text-[#50453c]">
                  Chaque pièce est méticuleusement inspectée, enregistrée dans nos archives de La Marsa et conditionnée sous caisse en bois sur-mesure.
                </p>
              </div>

              {/* Complimentary White Glove Logistics Status */}
              <div className="p-5 bg-[#f1ede5] rounded space-y-3 shadow-sm border border-[#e6e2da]">
                <div className="flex items-center justify-between font-label-nav text-xs uppercase tracking-wider text-[#1c1c17]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#795434] text-[18px]">workspace_premium</span>
                    Livraison en Gants Blancs Offerte
                  </span>
                  <span className="text-[#795434] font-semibold">
                    {freeShippingTierUnlocked
                      ? `Palier Débloqué (${subtotal} / 400 TND)`
                      : `Palier en Cours (${subtotal} / 400 TND)`}
                  </span>
                </div>

                {/* Progress Bar Metric */}
                <div className="w-full bg-[#fdf9f1] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#795434] h-full rounded-full transition-all duration-700"
                    style={{ width: `${Math.min(100, (subtotal / 400) * 100)}%` }}
                  ></div>
                </div>

                <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
                  Éligible pour un emballage renforcé sous caisse en bois, un transport dédié assuré et une mise en scène dans vos espaces sur les 24 gouvernorats tunisiens.
                </p>
              </div>

              {/* Curated Bag Items List */}
              {cart.length === 0 ? (
                <div className="p-12 bg-[#f7f3eb] rounded text-center space-y-4 border border-[#e6e2da]">
                  <span className="material-symbols-outlined text-[44px] text-[#82756b]">hourglass_empty</span>
                  <h3 className="font-title-editorial text-2xl text-[#1c1c17]">
                    Votre Panier est Actuellement Vide
                  </h3>
                  <p className="font-body-md text-sm text-[#50453c] max-w-md mx-auto">
                    Découvrez nos séries limitées, nos vases en verre soufflé et nos créations botaniques pérennes.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigateTo('catalog')}
                    className="inline-block px-8 py-3 bg-[#31302b] text-[#f4f0e8] font-label-nav text-xs uppercase tracking-widest rounded hover:bg-[#795434] transition-colors cursor-pointer"
                  >
                    Explorer la Boutique
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((entry, index) => (
                    <div
                      key={entry.item.id}
                      className="p-5 bg-[#f7f3eb] rounded transition-all duration-300 hover:bg-[#f1ede5] flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-sm border border-[#e6e2da]"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Thumbnail */}
                        <div
                          onClick={() => navigateTo('product', entry.item.id)}
                          className="relative w-24 h-32 flex-shrink-0 bg-[#e6e2da] rounded overflow-hidden cursor-pointer"
                        >
                          <img
                            src={entry.item.image}
                            alt={entry.item.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-1.5 left-1.5 bg-[#31302b]/80 text-[#f4f0e8] font-label-caps text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                            No. 0{index + 1}
                          </span>
                        </div>

                        {/* Specs */}
                        <div className="space-y-1 min-w-0">
                          <span className="font-label-caps text-[10px] uppercase tracking-wider text-[#795434] font-semibold">
                            {entry.item.material} • {entry.item.ref}
                          </span>
                          <h3
                            onClick={() => navigateTo('product', entry.item.id)}
                            className="font-title-editorial text-base text-[#1c1c17] leading-tight truncate hover:text-[#795434] cursor-pointer"
                          >
                            {entry.item.title}
                          </h3>
                          {entry.variant && (
                            <p className="font-body-sm text-xs text-[#50453c]">
                              Finition : <span className="text-[#1c1c17] font-medium">{entry.variant}</span>
                            </p>
                          )}
                          <p className="font-body-sm text-xs text-[#50453c]">
                            Dimensions : <span className="text-[#1c1c17]">{entry.item.dimensions ? `${entry.item.dimensions.diameter} • ${entry.item.dimensions.height}` : 'Ø 24cm • H 28cm'}</span>
                          </p>

                          {/* Live Quantity Adjuster */}
                          <div className="pt-2 flex items-center gap-3">
                            <div className="flex items-center rounded bg-[#fdf9f1] px-2 py-0.5 border border-[#d4c3b8]">
                              <button
                                type="button"
                                onClick={() => updateQuantity(entry.item.id, -1)}
                                className="w-5 h-5 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] font-bold text-xs cursor-pointer"
                                aria-label="Diminuer"
                              >
                                -
                              </button>
                              <span className="font-label-price text-xs text-[#1c1c17] px-2 font-semibold">
                                {entry.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(entry.item.id, 1)}
                                className="w-5 h-5 flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] font-bold text-xs cursor-pointer"
                                aria-label="Augmenter"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-[#d4c3b8]">•</span>
                            <button
                              type="button"
                              onClick={() => removeFromCart(entry.item.id)}
                              className="font-label-nav text-[11px] text-[#ba1a1a] hover:underline uppercase tracking-wider cursor-pointer"
                            >
                              Retirer
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Line Value */}
                      <div className="flex sm:flex-col items-baseline sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0">
                        <span className="font-label-caps text-xs uppercase tracking-wider text-[#50453c] sm:hidden">
                          Valeur
                        </span>
                        <div className="text-right">
                          <span className="font-label-price text-base text-[#1c1c17] font-semibold">
                            {entry.item.price * entry.quantity} TND
                          </span>
                          <span className="block font-body-sm text-[11px] text-[#50453c]">
                            TTC • Certifié par l'Atelier
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Patron & Destination Formulation */}
              {cart.length > 0 && (
                <div className="p-6 bg-[#f7f3eb] rounded border border-[#e6e2da] space-y-5">
                  <div className="border-b border-[#e6e2da] pb-3">
                    <span className="font-label-caps text-xs text-[#795434] uppercase tracking-widest font-semibold block">
                      Livraison en Gants Blancs
                    </span>
                    <h3 className="font-title-editorial text-xl text-[#1c1c17]">
                      Coordonnées de Livraison
                    </h3>
                  </div>

                  <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-label-caps uppercase tracking-wider text-[#50453c] mb-1">
                          Nom &amp; Prénom
                        </label>
                        <input
                          type="text"
                          required
                          value={patronName}
                          onChange={(e) => setPatronName(e.target.value)}
                          className="w-full bg-[#fdf9f1] border border-[#d4c3b8] rounded px-3 py-2 text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434]"
                          placeholder="Ex. Leïla Ben Mansour"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-label-caps uppercase tracking-wider text-[#50453c] mb-1">
                          Téléphone Portable (+216)
                        </label>
                        <input
                          type="text"
                          required
                          value={patronPhone}
                          onChange={(e) => setPatronPhone(e.target.value)}
                          className="w-full bg-[#fdf9f1] border border-[#d4c3b8] rounded px-3 py-2 text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434]"
                          placeholder="+216 98 000 000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-label-caps uppercase tracking-wider text-[#50453c] mb-1">
                          Gouvernorat (24 Pris en Charge)
                        </label>
                        <div className="relative">
                          <select
                            value={selectedGovernorate}
                            onChange={(e) => setSelectedGovernorate(e.target.value)}
                            className="w-full appearance-none bg-[#fdf9f1] border border-[#d4c3b8] rounded px-3 py-2 text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434] cursor-pointer"
                          >
                            {governorates.map((gov) => (
                              <option key={gov} value={gov}>
                                {gov}
                              </option>
                            ))}
                          </select>
                          <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#50453c] text-[18px]">
                            expand_more
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-label-caps uppercase tracking-wider text-[#50453c] mb-1">
                          Adresse &amp; Résidence
                        </label>
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full bg-[#fdf9f1] border border-[#d4c3b8] rounded px-3 py-2 text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434]"
                          placeholder="Rue, Immeuble ou Villa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-label-caps uppercase tracking-wider text-[#50453c] mb-1">
                        Instructions de Mise en Scène &amp; Accès
                      </label>
                      <textarea
                        rows={2}
                        value={deliveryNotes}
                        onChange={(e) => setDeliveryNotes(e.target.value)}
                        className="w-full bg-[#fdf9f1] border border-[#d4c3b8] rounded px-3 py-2 text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434]"
                        placeholder="Étage, code d'accès ou préférences de déballage"
                      ></textarea>
                    </div>

                    {/* Payment Protocol Selection */}
                    <div className="space-y-2 pt-1">
                      <label className="block text-xs font-label-caps uppercase tracking-wider text-[#50453c]">
                        Mode de Règlement
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label
                          className={`p-3 rounded border flex items-center gap-3 cursor-pointer transition-colors ${
                            paymentMethod === 'cod'
                              ? 'bg-[#fdf9f1] border-[#795434]'
                              : 'bg-transparent border-[#e6e2da] hover:bg-[#f1ede5]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'cod'}
                            onChange={() => setPaymentMethod('cod')}
                            className="accent-[#795434]"
                          />
                          <div>
                            <p className="font-body-sm text-xs font-semibold text-[#1c1c17]">
                              Paiement à la Livraison
                            </p>
                            <p className="font-body-sm text-[11px] text-[#50453c]">
                              Inspection des pièces avant règlement
                            </p>
                          </div>
                        </label>

                        <label
                          className={`p-3 rounded border flex items-center gap-3 cursor-pointer transition-colors ${
                            paymentMethod === 'wire'
                              ? 'bg-[#fdf9f1] border-[#795434]'
                              : 'bg-transparent border-[#e6e2da] hover:bg-[#f1ede5]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'wire'}
                            onChange={() => setPaymentMethod('wire')}
                            className="accent-[#795434]"
                          />
                          <div>
                            <p className="font-body-sm text-xs font-semibold text-[#1c1c17]">
                              Virement Bancaire &amp; Pro-Forma
                            </p>
                            <p className="font-body-sm text-[11px] text-[#50453c]">
                              Facture officielle transmise par courriel
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Concierge & Assurance Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-[#f7f3eb] rounded border border-[#e6e2da] space-y-2">
                  <span className="material-symbols-outlined text-[#795434] text-[24px]">verified_user</span>
                  <h4 className="font-title-editorial text-sm text-[#1c1c17] font-semibold">Certificat d'Authenticité</h4>
                  <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
                    Chaque création en céramique ou verre soufflé s'accompagne d'un certificat d'authenticité signé.
                  </p>
                </div>
                <div className="p-4 bg-[#f7f3eb] rounded border border-[#e6e2da] space-y-2">
                  <span className="material-symbols-outlined text-[#795434] text-[24px]">home_pin</span>
                  <h4 className="font-title-editorial text-sm text-[#1c1c17] font-semibold">Mise en Scène Offerte</h4>
                  <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
                    Nos équipes assurent le déballage soigné, la disposition et l'évacuation immédiate des emballages.
                  </p>
                </div>
                <div className="p-4 bg-[#f7f3eb] rounded border border-[#e6e2da] space-y-2">
                  <span className="material-symbols-outlined text-[#795434] text-[24px]">contact_support</span>
                  <h4 className="font-title-editorial text-sm text-[#1c1c17] font-semibold">Conciergerie Dédiée</h4>
                  <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
                    À votre disposition pour socles en marbre sur-mesure, ajustements de branches ou dimensions spéciales.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4">
              <div className="p-6 bg-[#f7f3eb] rounded space-y-5 shadow-sm border border-[#e6e2da] sticky top-28">
                <div className="space-y-1 border-b border-[#e6e2da] pb-3">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-[#795434] font-semibold">
                    Dossier Récapitulatif
                  </span>
                  <h2 className="font-title-editorial text-xl text-[#1c1c17]">
                    Total de la Réservation
                  </h2>
                </div>

                {/* Calculation Lines */}
                <div className="space-y-3 pt-1 text-sm font-body-sm text-[#50453c]">
                  <div className="flex items-center justify-between">
                    <span>Sous-total des Pièces</span>
                    <span className="font-label-price text-sm text-[#1c1c17] font-semibold">
                      {subtotal} TND
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Caisse Bois en Gants Blancs</span>
                    <span className="font-label-caps text-xs text-[#795434] uppercase font-semibold">
                      Offerte
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Transport Assuré (Tunisie)</span>
                    <span className="font-label-caps text-xs text-[#795434] uppercase font-semibold">
                      Inclus
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Consultation Stylisme</span>
                    <span className="font-label-caps text-xs text-[#605e56] uppercase">
                      Sur Demande
                    </span>
                  </div>
                </div>

                {/* Total Box */}
                <div className="p-4 bg-[#fdf9f1] rounded space-y-2 border border-[#d4c3b8]">
                  <div className="flex items-center justify-between">
                    <span className="font-title-editorial text-base text-[#1c1c17]">
                      Total TTC
                    </span>
                    <span className="font-label-price text-xl text-[#795434] font-bold">
                      {subtotal} TND
                    </span>
                  </div>
                  <p className="font-body-sm text-[11px] text-[#50453c] leading-normal">
                    Facturation officielle et créneau de livraison validés par notre conciergerie suite à votre commande.
                  </p>
                </div>

                {/* Checkout & Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    disabled={cart.length === 0}
                    onClick={handleCheckoutSubmit}
                    className="w-full py-4 bg-[#31302b] text-[#f4f0e8] font-label-nav text-xs uppercase tracking-widest rounded hover:bg-[#795434] disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Finaliser la Commande</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsCartDrawerOpen(true)}
                    className="w-full py-3 bg-[#f1ede5] text-[#1c1c17] font-label-nav text-xs uppercase tracking-widest rounded hover:bg-[#ece8e0] transition-colors text-center border border-[#d4c3b8] cursor-pointer"
                  >
                    Afficher le Volet Panier
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateTo('catalog')}
                    className="w-full text-center pt-2 font-label-nav text-xs uppercase tracking-widest text-[#50453c] hover:text-[#1c1c17] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Poursuivre la Visite de l'Atelier
                  </button>
                </div>

                {/* Showroom Consultation Note */}
                <div className="bg-[#ece8e0]/70 p-4 rounded text-left space-y-1 border border-[#e6e2da]">
                  <div className="flex items-center gap-2 text-[#795434] font-label-caps text-[11px] uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                    Showroom Privé La Marsa
                  </div>
                  <p className="font-body-sm text-[12px] text-[#50453c] leading-relaxed">
                    Vous préférez contempler les pièces en direct ? Vous pouvez réserver une visite privée et admirer les reflets de la lumière avant confirmation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsAppointmentModalOpen(true)}
                    className="text-xs text-[#795434] font-semibold hover:underline mt-1 inline-block cursor-pointer font-label-caps uppercase"
                  >
                    Réserver une Visite Privée →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
