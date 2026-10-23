import React from 'react';
import { useCart } from '../context/CartContext';

export const MobileBottomNav: React.FC = () => {
  const { currentScreen, navigateTo, setIsAppointmentModalOpen } = useCart();

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#fdf9f1]/95 backdrop-blur-xl border-t border-[#e6e2da] shadow-[0_-4px_20px_rgba(41,40,33,0.04)] pb-safe">
      <div className="flex justify-around items-center h-16 px-4">
        {/* Home */}
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors ${
            currentScreen === 'home' ? 'text-[#795434] font-semibold' : 'text-[#50453c]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">villa</span>
          <span className="font-label-nav text-[9px] uppercase tracking-wider">Accueil</span>
        </button>

        {/* Catalog */}
        <button
          type="button"
          onClick={() => navigateTo('catalog')}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors ${
            currentScreen === 'catalog' ? 'text-[#795434] font-semibold' : 'text-[#50453c]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">dashboard</span>
          <span className="font-label-nav text-[9px] uppercase tracking-wider">Boutique</span>
        </button>

        {/* Sets */}
        <button
          type="button"
          onClick={() => navigateTo('catalog')}
          className="flex flex-col items-center justify-center gap-1 w-16 h-12 text-[#50453c] hover:text-[#795434] transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">auto_awesome_motion</span>
          <span className="font-label-nav text-[9px] uppercase tracking-wider">Ensembles</span>
        </button>

        {/* Journal */}
        <button
          type="button"
          onClick={() => {
            if (currentScreen !== 'home') {
              navigateTo('home');
            }
            setTimeout(() => {
              document.getElementById('styling-journal-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          }}
          className="flex flex-col items-center justify-center gap-1 w-16 h-12 text-[#50453c] hover:text-[#795434] transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">auto_stories</span>
          <span className="font-label-nav text-[9px] uppercase tracking-wider">Journal</span>
        </button>

        {/* Atelier Consultation */}
        <button
          type="button"
          onClick={() => setIsAppointmentModalOpen(true)}
          className="flex flex-col items-center justify-center gap-1 w-16 h-12 text-[#50453c] hover:text-[#795434] transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">calendar_today</span>
          <span className="font-label-nav text-[9px] uppercase tracking-wider">L'Atelier</span>
        </button>
      </div>
    </nav>
  );
};
