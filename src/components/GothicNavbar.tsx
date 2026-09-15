import React from 'react';
import { ScreenId } from '../types';
import { soundEngine } from './AudioSynthesizer';

interface GothicNavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

interface NavItem {
  id: ScreenId;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: 'auto_awesome' },
  { id: 'sobre-mi', label: 'Sobre Mí', icon: 'menu_book' },
  { id: 'proyectos-y-codigo', label: 'Proyectos', icon: 'terminal' },
  { id: 'maternidad-y-vida', label: 'Maternidad', icon: 'favorite' },
  { id: 'contacto', label: 'Contacto', icon: 'mail' },
];

export const GothicNavbar: React.FC<GothicNavbarProps> = ({ currentScreen, onNavigate }) => {
  const handleNavClick = (id: ScreenId) => {
    soundEngine.playHarmonicChime(id === 'sobre-mi' ? 440 : id === 'proyectos-y-codigo' ? 523.25 : 392);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-50 pb-safe bg-[#0e0e11]/95 backdrop-blur-xl shadow-[0_-4px_24px_rgba(128,0,32,0.25)] border-t border-[#584141]/35">
      <div className="max-w-md mx-auto h-16 px-1 flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center min-w-[54px] min-h-[44px] flex-1 py-1 transition-all duration-200 relative ${
                isActive
                  ? 'text-[#ffb3b5]'
                  : 'text-[#e0bfbf]/70 hover:text-[#ffb3b5]/90'
              }`}
            >
              {/* Subtle top indicator glow for active tab */}
              {isActive && (
                <span className="absolute -top-1 w-6 h-[2px] bg-[#e9c176] shadow-[0_0_8px_#e9c176] rounded-full"></span>
              )}

              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,179,181,0.5)]' : ''
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`font-mono text-[10px] tracking-wider mt-0.5 transition-all ${
                  isActive ? 'font-semibold text-[#ffdada]' : 'font-normal'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
