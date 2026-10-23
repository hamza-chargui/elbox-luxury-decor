import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { navigateTo, setIsAppointmentModalOpen, showToast } = useCart();
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      showToast('Bienvenue au Cercle Privé ELBOX.');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#f7f3eb] mt-16 pt-16 pb-12 text-[#50453c] border-t border-[#e6e2da] shadow-[0_-1px_12px_rgba(41,40,33,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Brand & Provenance */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-title-editorial text-2xl tracking-[0.22em] text-[#1c1c17] uppercase block font-semibold">
              E L B O X
            </span>
            <p className="font-body-md text-sm text-[#50453c] max-w-sm leading-relaxed">
              Atelier d'artisanat et de design curatant objets architecturaux tactiles, verrerie soufflée à la bouche et compositions florales pérennes pour résidences et intérieurs d'exception.
            </p>
            <div className="pt-2">
              <span className="font-label-caps text-[11px] uppercase tracking-widest text-[#795434] block mb-1 font-semibold">
                Showroom Privé
              </span>
              <p className="font-body-sm text-xs text-[#50453c]">
                La Marsa &amp; Sidi Bou Saïd • Sur Rendez-vous Privé
              </p>
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-caps text-xs text-[#1c1c17] uppercase tracking-widest font-semibold">
              Collections
            </h4>
            <ul className="space-y-2 font-body-sm text-xs text-[#50453c]">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Vases &amp; Verrerie
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Flore Botanique
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Récipients &amp; Vases
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Accents Monochromes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Séries Limitées 2025
                </button>
              </li>
            </ul>
          </div>

          {/* Bespoke Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-caps text-xs text-[#1c1c17] uppercase tracking-widest font-semibold">
              Services Atelier
            </h4>
            <ul className="space-y-2 font-body-sm text-xs text-[#50453c]">
              <li>
                <button
                  type="button"
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Conseil en Scénographie
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Présentation Showroom
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Commandes Spéciales
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Livraison en Gants Blancs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="hover:text-[#1c1c17] transition-colors cursor-pointer"
                >
                  Projets d'Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* VIP Private Previews Form */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-label-caps text-xs text-[#1c1c17] uppercase tracking-widest font-semibold">
              Cercle des Collectionneurs
            </h4>
            <p className="font-body-sm text-xs text-[#50453c] leading-relaxed">
              Recevez en avant-première nos monographies éditoriales, invitations aux vernissages de saison et accès réservés aux pièces uniques.
            </p>
            <form onSubmit={handleJoin} className="flex w-full max-w-md pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse courriel"
                className="w-full bg-[#fdf9f1] px-4 py-3 font-body-sm text-xs text-[#1c1c17] placeholder-[#82756b] focus:outline-none rounded-l border border-[#d4c3b8]"
              />
              <button
                type="submit"
                className="px-6 bg-[#31302b] text-[#f4f0e8] font-label-nav text-xs uppercase tracking-widest rounded-r hover:bg-[#795434] transition-colors shrink-0 cursor-pointer"
              >
                Rejoindre
              </button>
            </form>
            {joined && (
              <p className="text-xs text-[#795434] font-medium flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Vous êtes inscrit aux communications privées de l'Atelier.</span>
              </p>
            )}
            <div className="flex items-center gap-2 pt-2 text-[#50453c] font-label-caps text-[10px] tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px] text-[#795434]">verified</span>
              <span>Livraison en Gants Blancs • 24 Gouvernorats de Tunisie</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-[#e6e2da] flex flex-col md:flex-row items-center justify-between gap-4 text-[#50453c] font-body-sm text-xs">
          <p>© 2025 ELBOX. Façonné avec exigence et sérénité. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-label-caps text-[10px] uppercase tracking-wider">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#31302b] text-[#f4f0e8] hover:bg-[#795434] transition-colors shadow-sm cursor-pointer"
              title="Télécharger le projet complet (36.8 Mo) contenant le code source et toutes les photos"
            >
              <span className="material-symbols-outlined text-[15px]">download</span>
              <span>Télécharger le Projet (.ZIP — 36.8 Mo)</span>
            </button>
            <button
              type="button"
              onClick={() => showToast('Confidentialité ELBOX : Discrétion totale garantie.')}
              className="hover:text-[#1c1c17] transition-colors cursor-pointer"
            >
              Politique de Confidentialité
            </button>
            <button
              type="button"
              onClick={() => showToast('Conditions : Transport assuré et accompagnement sur-mesure.')}
              className="hover:text-[#1c1c17] transition-colors cursor-pointer"
            >
              Conditions de Vente
            </button>
            <button
              type="button"
              onClick={() => setIsAppointmentModalOpen(true)}
              className="hover:text-[#1c1c17] transition-colors cursor-pointer"
            >
              Conciergerie Privée
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
