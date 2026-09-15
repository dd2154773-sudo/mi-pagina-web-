import React, { useState } from 'react';
import { ScreenId } from '../types';
import { APP_IMAGES } from '../data/gothicData';
import { soundEngine } from './AudioSynthesizer';

interface GothicHeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const GothicHeader: React.FC<GothicHeaderProps> = ({ currentScreen, onNavigate }) => {
  const [isAudioOn, setIsAudioOn] = useState(false);

  const getScreenLabel = (id: ScreenId) => {
    switch (id) {
      case 'inicio': return 'Inicio';
      case 'sobre-mi': return 'Sobre Mí';
      case 'proyectos-y-codigo': return 'Proyectos';
      case 'maternidad-y-vida': return 'Maternidad';
      case 'contacto': return 'Contacto';
    }
  };

  const handleAudioToggle = () => {
    const active = soundEngine.toggleAmbientDrone();
    setIsAudioOn(active);
    if (!active) {
      soundEngine.playHarmonicChime(330);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pt-safe bg-[#0e0e11]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.65)] border-b border-[#584141]/30">
      <div className="max-w-md mx-auto h-16 px-5 flex items-center justify-between">
        {/* Left branding */}
        <button
          onClick={() => onNavigate('inicio')}
          className="flex items-center space-x-3 text-left group transition-transform active:scale-95 focus:outline-none"
        >
          <img
            alt="Emblema Ciber-Gótico"
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,179,181,0.4)] group-hover:scale-105 transition-transform"
            src={APP_IMAGES.logoEmblem}
          />
          <div className="flex flex-col">
            <span className="font-serif text-[19px] font-semibold text-[#ffb3b5] tracking-wide leading-tight">
              Nocturna &amp; Code
            </span>
            <span className="font-mono text-[11px] text-[#e0bfbf] flex items-center gap-1.5 leading-tight tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ffb3ac] animate-pulse"></span>
              {getScreenLabel(currentScreen)}
            </span>
          </div>
        </button>

        {/* Right actions: Audio Drone Toggle + Profile Avatar */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleAudioToggle}
            title={isAudioOn ? "Silenciar atmósfera darkwave" : "Activar drone sonoro darkwave"}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all text-xs border ${
              isAudioOn 
                ? 'bg-[#800020] text-[#ffdea5] border-[#e9c176] shadow-[0_0_12px_rgba(128,0,32,0.8)]' 
                : 'bg-[#1f1f22] text-[#e0bfbf] border-[#584141]/40 hover:text-[#ffb3b5]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isAudioOn ? 'graphic_eq' : 'volume_mute'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('sobre-mi')}
            title="Ver perfil de Elena Vance"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center p-0.5 rounded-full border border-[#800020] shadow-[0_0_10px_rgba(128,0,32,0.4)] transition-transform active:scale-95 hover:border-[#ffb3b5]"
          >
            <img
              alt="Elena Vance"
              className="w-8 h-8 rounded-full object-cover"
              src={APP_IMAGES.portrait}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
