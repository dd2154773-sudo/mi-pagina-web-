import React, { useState } from 'react';
import { ScreenId } from '../types';
import { SpineDivider } from './SpineDivider';
import { GOTHIC_QUOTES } from '../data/gothicData';
import { soundEngine } from './AudioSynthesizer';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  const nextQuote = () => {
    soundEngine.playHarmonicChime(587.33);
    setQuoteIdx((prev) => (prev + 1) % GOTHIC_QUOTES.length);
  };

  const currentQuote = GOTHIC_QUOTES[quoteIdx];

  return (
    <div className="flex flex-col w-full px-5 sm:px-6 space-y-6 pb-12">
      {/* Gothic Hero Banner */}
      <section className="relative pt-4 flex flex-col items-center text-center">
        {/* Glow halos */}
        <div className="absolute top-2 w-64 h-64 bg-[#800020]/25 blur-3xl rounded-full pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1b1e] border border-[#e9c176]/30 text-[#e9c176] mb-3">
          <span className="material-symbols-outlined text-[14px]">terminal</span>
          <span className="font-mono text-[11px] tracking-widest uppercase">
            Sistemas // Estética // Maternidad
          </span>
        </div>

        <h1 className="font-serif text-[30px] sm:text-[36px] font-bold text-[#e5e1e6] tracking-tight leading-tight">
          La Poética del Kernel <br />
          <span className="text-[#ffb3b5] italic font-serif">y la Cuna</span>
        </h1>

        <p className="font-sans text-[14px] text-[#e0bfbf] max-w-sm mt-2 leading-relaxed">
          Bitácora interactiva de una estudiante de ingeniería en sistemas, madre dedicada y devota de la estética victoriana.
        </p>

        {/* Quick telemetry chips */}
        <div className="grid grid-cols-2 gap-2 mt-4 w-full max-w-xs">
          <div className="p-2 rounded-lg bg-[#1b1b1e] border border-[#584141]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffb3ac] animate-pulse"></span>
            <div className="text-left">
              <span className="font-mono text-[10px] text-[#e0bfbf] block">ESTADO</span>
              <span className="font-mono text-[11px] font-semibold text-[#ffdada]">En línea // STEM</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[#1b1b1e] border border-[#584141]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
            <div className="text-left">
              <span className="font-mono text-[10px] text-[#e0bfbf] block">ENFOQUE</span>
              <span className="font-mono text-[11px] font-semibold text-[#ffdada]">Backend &amp; OS</span>
            </div>
          </div>
        </div>
      </section>

      <SpineDivider icon="auto_awesome" />

      {/* Gothic Oracle / Quote Generator */}
      <section className="p-4 rounded-xl bg-[#0e0e11] border border-[#800020]/40 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#584141]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e9c176] text-[18px]">
              auto_stories
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#e9c176]">
              Oráculo Literario &amp; Filosofía
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#e0bfbf]">
            0{quoteIdx + 1} / 0{GOTHIC_QUOTES.length}
          </span>
        </div>

        <blockquote className="font-serif text-[16px] italic text-[#ffdada] leading-relaxed my-3 pl-3 border-l-2 border-[#800020]">
          "{currentQuote.quote}"
        </blockquote>

        <div className="flex items-center justify-between pt-1">
          <span className="font-mono text-[11px] text-[#e0bfbf]">
            — {currentQuote.author} <span className="opacity-70">({currentQuote.work})</span>
          </span>
          <button
            onClick={nextQuote}
            className="px-2.5 py-1 rounded bg-[#2a2a2d] hover:bg-[#800020] text-[#ffdada] font-mono text-[11px] flex items-center gap-1 transition-colors"
          >
            <span>Siguiente</span>
            <span className="material-symbols-outlined text-[13px]">refresh</span>
          </button>
        </div>
      </section>

      {/* Manifiesto Nocturno */}
      <section className="space-y-3">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
            Principios Inquebrantables
          </span>
          <h2 className="font-serif text-[22px] font-semibold text-[#e5e1e6]">
            Manifiesto Nocturno
          </h2>
        </div>

        <div className="space-y-2.5">
          <div className="p-3.5 rounded-xl bg-[#1b1b1e] border border-[#584141]/20 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#800020]/40 text-[#ffb3b5] flex items-center justify-center font-mono text-xs shrink-0">
              I
            </div>
            <div>
              <h3 className="font-serif text-[15px] font-medium text-[#ffdada]">
                El Rigor de la Lógica
              </h3>
              <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5 leading-relaxed">
                Cada byte y cada ciclo de reloj tienen propósito. No construyo código descuidado; edificar arquitecturas limpias es un tributo a la claridad de pensamiento.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1b1b1e] border border-[#584141]/20 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#513900]/40 text-[#e9c176] flex items-center justify-center font-mono text-xs shrink-0">
              II
            </div>
            <div>
              <h3 className="font-serif text-[15px] font-medium text-[#ffdada]">
                La Ternura de la Cuna
              </h3>
              <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5 leading-relaxed">
                La maternidad no es una desventaja en STEM; es una forja de resiliencia, empatía profunda y resolución de problemas bajo presión extrema.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1b1b1e] border border-[#584141]/20 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#9b0212]/30 text-[#ffb3ac] flex items-center justify-center font-mono text-xs shrink-0">
              III
            </div>
            <div>
              <h3 className="font-serif text-[15px] font-medium text-[#ffdada]">
                Devoción al Arte Sombrío
              </h3>
              <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5 leading-relaxed">
                La estética victoriana y la música darkwave proveen la serenidad meditativa para programar con devoción durante la vigilia nocturna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SpineDivider icon="alt_route" />

      {/* Navigation Gateway cards */}
      <section className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onNavigate('sobre-mi')}
          className="p-3.5 rounded-xl bg-[#1b1b1e] hover:bg-[#2a2a2d] border border-[#800020]/30 text-left transition-all group"
        >
          <span className="material-symbols-outlined text-[#ffb3b5] text-[24px] group-hover:scale-110 transition-transform">
            menu_book
          </span>
          <h4 className="font-serif text-[15px] font-semibold text-[#e5e1e6] mt-1.5">
            Sobre Mí
          </h4>
          <p className="font-sans text-[11px] text-[#e0bfbf] mt-0.5">
            Arquetipos, cronograma litúrgico y biografía.
          </p>
        </button>

        <button
          onClick={() => onNavigate('proyectos-y-codigo')}
          className="p-3.5 rounded-xl bg-[#1b1b1e] hover:bg-[#2a2a2d] border border-[#584141]/30 text-left transition-all group"
        >
          <span className="material-symbols-outlined text-[#e9c176] text-[24px] group-hover:scale-110 transition-transform">
            terminal
          </span>
          <h4 className="font-serif text-[15px] font-semibold text-[#e5e1e6] mt-1.5">
            Proyectos
          </h4>
          <p className="font-sans text-[11px] text-[#e0bfbf] mt-0.5">
            Kernel tracer, normalizador SQL y terminal interactiva.
          </p>
        </button>

        <button
          onClick={() => onNavigate('maternidad-y-vida')}
          className="p-3.5 rounded-xl bg-[#1b1b1e] hover:bg-[#2a2a2d] border border-[#584141]/30 text-left transition-all group"
        >
          <span className="material-symbols-outlined text-[#ffb3ac] text-[24px] group-hover:scale-110 transition-transform">
            favorite
          </span>
          <h4 className="font-serif text-[15px] font-semibold text-[#e5e1e6] mt-1.5">
            Maternidad
          </h4>
          <p className="font-sans text-[11px] text-[#e0bfbf] mt-0.5">
            Matriz de resiliencia y reflexiones epistolares.
          </p>
        </button>

        <button
          onClick={() => onNavigate('contacto')}
          className="p-3.5 rounded-xl bg-[#1b1b1e] hover:bg-[#2a2a2d] border border-[#800020]/30 text-left transition-all group"
        >
          <span className="material-symbols-outlined text-[#ffdada] text-[24px] group-hover:scale-110 transition-transform">
            mail
          </span>
          <h4 className="font-serif text-[15px] font-semibold text-[#e5e1e6] mt-1.5">
            Contacto
          </h4>
          <p className="font-sans text-[11px] text-[#e0bfbf] mt-0.5">
            Lacre epistolar, huella PGP y canales directos.
          </p>
        </button>
      </section>
    </div>
  );
};
