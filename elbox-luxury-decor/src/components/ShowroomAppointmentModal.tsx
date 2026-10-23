import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const ShowroomAppointmentModal: React.FC = () => {
  const { isAppointmentModalOpen, setIsAppointmentModalOpen, showToast } = useCart();
  const [salon, setSalon] = useState<'Sidi Bou Saïd' | 'La Marsa'>('La Marsa');
  const [patronName, setPatronName] = useState('');
  const [patronPhone, setPatronPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('2025-11-04');
  const [preferredTime, setPreferredTime] = useState('15:30');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isAppointmentModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
    showToast(`Rendez-vous réservé à l'Atelier ${salon}`);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#31302b]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="fixed inset-0" onClick={() => setIsAppointmentModalOpen(false)} />

      <div className="relative bg-[#fdf9f1] max-w-lg w-full rounded-xl overflow-hidden shadow-2xl z-10 p-6 md:p-8 border border-[#d4c3b8]">
        <button
          type="button"
          onClick={() => setIsAppointmentModalOpen(false)}
          aria-label="Fermer la fenêtre"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f1ede5] flex items-center justify-center text-[#50453c] hover:text-[#1c1c17] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!isConfirmed ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#795434] font-semibold">
                Présentation Privée en Showroom
              </span>
              <h3 className="font-headline-md text-2xl text-[#1c1c17]">
                Réserver Votre Séance à l'Atelier
              </h3>
              <p className="font-body-sm text-xs text-[#50453c]">
                Découvrez le poids tactile, la réfraction de la lumière et nos scénographies sur-mesure aux côtés d'un curateur d'intérieur ELBOX.
              </p>
            </div>

            {/* Atelier Location Choice */}
            <div className="space-y-2">
              <label className="font-label-caps text-xs text-[#50453c] uppercase tracking-wider block font-semibold">
                Sélectionner le Showroom
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSalon('La Marsa')}
                  className={`p-3 rounded text-left border transition-all cursor-pointer ${
                    salon === 'La Marsa'
                      ? 'border-[#795434] bg-[#f1ede5] ring-1 ring-[#795434]'
                      : 'border-[#e6e2da] bg-[#f7f3eb] hover:bg-[#f1ede5]'
                  }`}
                >
                  <p className="font-title-editorial text-sm font-semibold text-[#1c1c17]">La Marsa</p>
                  <p className="font-body-sm text-[11px] text-[#50453c]">Atelier Principal &amp; Réserve</p>
                </button>
                <button
                  type="button"
                  onClick={() => setSalon('Sidi Bou Saïd')}
                  className={`p-3 rounded text-left border transition-all cursor-pointer ${
                    salon === 'Sidi Bou Saïd'
                      ? 'border-[#795434] bg-[#f1ede5] ring-1 ring-[#795434]'
                      : 'border-[#e6e2da] bg-[#f7f3eb] hover:bg-[#f1ede5]'
                  }`}
                >
                  <p className="font-title-editorial text-sm font-semibold text-[#1c1c17]">Sidi Bou Saïd</p>
                  <p className="font-body-sm text-[11px] text-[#50453c]">Galerie de Lumière Côtière</p>
                </button>
              </div>
            </div>

            {/* Patron Name */}
            <div className="space-y-1.5">
              <label className="font-label-caps text-xs text-[#50453c] uppercase tracking-wider block font-semibold">
                Nom &amp; Prénom
              </label>
              <input
                type="text"
                required
                value={patronName}
                onChange={(e) => setPatronName(e.target.value)}
                placeholder="Ex. Selim Mansour"
                className="w-full px-3.5 py-2.5 bg-[#f7f3eb] rounded border border-[#d4c3b8] text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434]"
              />
            </div>

            {/* Mobile Contact */}
            <div className="space-y-1.5">
              <label className="font-label-caps text-xs text-[#50453c] uppercase tracking-wider block font-semibold">
                Numéro de Téléphone (+216)
              </label>
              <input
                type="tel"
                required
                value={patronPhone}
                onChange={(e) => setPatronPhone(e.target.value)}
                placeholder="55 412 890"
                className="w-full px-3.5 py-2.5 bg-[#f7f3eb] rounded border border-[#d4c3b8] text-sm text-[#1c1c17] focus:outline-none focus:border-[#795434]"
              />
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="font-label-caps text-[11px] text-[#50453c] uppercase tracking-wider block font-semibold">
                  Date Souhaitée
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 bg-[#f7f3eb] rounded border border-[#d4c3b8] text-xs text-[#1c1c17] focus:outline-none focus:border-[#795434]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-label-caps text-[11px] text-[#50453c] uppercase tracking-wider block font-semibold">
                  Créneau Horaire
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 bg-[#f7f3eb] rounded border border-[#d4c3b8] text-xs text-[#1c1c17] focus:outline-none focus:border-[#795434]"
                >
                  <option value="11:00">11h00 (Lumière Matinale)</option>
                  <option value="14:00">14h00 (Plein Zénith)</option>
                  <option value="15:30">15h30 (Heure Dorée)</option>
                  <option value="17:00">17h00 (Réfraction Crépusculaire)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#31302b] text-white hover:bg-[#795434] font-label-nav text-xs uppercase tracking-widest rounded transition-colors shadow-sm cursor-pointer"
            >
              Confirmer la Demande de Consultation
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f1ede5] text-[#795434] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#1c1c17]">Séance Réservée</h3>
            <p className="font-body-sm text-sm text-[#50453c] leading-relaxed max-w-sm mx-auto">
              Merci, {patronName || 'Cher Client'}. Votre séance privée à l'atelier de {salon} est confirmée pour le {preferredDate} à {preferredTime}. Notre conciergerie vous contactera avec l'itinéraire et les accès réservés.
            </p>
            <div className="p-3 bg-[#f1ede5] rounded text-xs font-label-caps text-[#795434] tracking-widest uppercase">
              RÉFÉRENCE D'INVITATION : #ELB-SALON-8821
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#31302b] text-white rounded text-xs font-label-nav uppercase tracking-widest hover:bg-[#795434] transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
