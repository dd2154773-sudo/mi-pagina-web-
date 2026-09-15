import React, { useState } from 'react';
import { ScreenId } from '../types';
import { APP_IMAGES, ARCHETYPES, LITURGIC_TIMELINE, TECH_STACK } from '../data/gothicData';
import { SpineDivider } from './SpineDivider';
import { soundEngine } from './AudioSynthesizer';

interface AboutScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  const [activeFacet, setActiveFacet] = useState<string | null>(null);
  const [activeTimeItem, setActiveTimeItem] = useState<string | null>(null);
  const [latency, setLatency] = useState<number>(0);

  const toggleFacet = (id: string) => {
    soundEngine.playHarmonicChime(520);
    setActiveFacet(prev => (prev === id ? null : id));
  };

  const toggleTimeline = (id: string) => {
    soundEngine.playHarmonicChime(440);
    setActiveTimeItem(prev => (prev === id ? null : id));
    // micro fluctuation in latency
    setLatency(Math.floor(Math.random() * 4));
  };

  return (
    <div className="flex flex-col w-full px-5 sm:px-6 space-y-6 pb-12">
      {/* Gothic Arch Portrait Visual Hero */}
      <section className="relative pt-4 flex flex-col items-center text-center">
        {/* Ambient Blood Crimson Backlight Glow */}
        <div className="absolute top-6 w-56 h-72 bg-[#800020]/35 blur-3xl rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-12 w-40 h-52 bg-[#9b0212]/20 blur-2xl rounded-full pointer-events-none -z-10"></div>

        {/* Cathedral Arch Image Container */}
        <div className="relative group p-1.5 rounded-t-[100px] rounded-b-xl bg-gradient-to-b from-[#800020] via-[#2a2a2d] to-[#1b1b1e] shadow-[0_16px_36px_-6px_rgba(0,0,0,0.85),0_0_24px_rgba(128,0,32,0.35)]">
          <div className="relative overflow-hidden rounded-t-[94px] rounded-b-lg w-64 h-80 bg-[#0e0e11]">
            <img
              alt="Elena Vance abrazando a su hija en una atmósfera victoriana y solemne"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={APP_IMAGES.portrait}
            />
            {/* Inner Vignette Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-[#800020]/10 pointer-events-none"></div>
          </div>

          {/* Gothic Filigree Corner Medallion */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2a2a2d] border border-[#e9c176]/30 text-[#e9c176] px-3.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-md">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span className="font-mono text-[11px] font-semibold tracking-widest uppercase">
              Matriarca &amp; Dev
            </span>
          </div>
        </div>

        {/* Identity & Epithet */}
        <div className="mt-5 flex flex-col items-center">
          <h1 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#e5e1e6] tracking-tight leading-tight">
            Elena Vance
          </h1>
          <p className="font-serif text-[20px] text-[#ffb3b5] italic mt-1">
            "Entre el Algoritmo y el Terciopelo"
          </p>

          {/* Monospaced Telemetry Bar */}
          <div className="mt-3 flex items-center gap-2 px-3.5 py-1 bg-[#1b1b1e] border border-[#584141]/30 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#ffb3ac] animate-pulse"></span>
            <span className="font-mono text-[12px] text-[#e0bfbf] tracking-wider">
              KERNEL: 6.2 // MTRN: L1-ACTIVE // LATENCY: {latency}ms
            </span>
          </div>
        </div>
      </section>

      {/* Ornamental Spine Divider */}
      <SpineDivider icon="filter_vintage" />

      {/* Section 1: Las Tres Facetas de Mi Ser */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
              Arquetipos
            </span>
            <h2 className="font-serif text-[24px] font-semibold text-[#e5e1e6]">
              Las Tres Facetas de Mi Ser
            </h2>
          </div>
          <span className="font-mono text-[13px] text-[#ffb3b5] font-medium">03 / 03</span>
        </div>

        <div className="space-y-3">
          {ARCHETYPES.map((facet) => {
            const isExpanded = activeFacet === facet.id;
            return (
              <article
                key={facet.id}
                onClick={() => toggleFacet(facet.id)}
                className="p-4 rounded-xl bg-[#1b1b1e]/90 border border-[#584141]/20 shadow-md relative overflow-hidden transition-all duration-300 hover:bg-[#1f1f22] cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      facet.id === 'maternidad'
                        ? 'bg-[#800020] text-[#ffdada] shadow-[0_0_12px_rgba(128,0,32,0.4)]'
                        : facet.id === 'sistemas'
                        ? 'bg-[#2a2a2d] text-[#ffb3ac]'
                        : 'bg-[#2a2a2d] text-[#ffb3b5]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {facet.icon}
                    </span>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-[19px] font-medium text-[#e5e1e6]">
                        {facet.title}
                      </h3>
                      <span
                        className={`font-mono text-[11px] px-2 py-0.5 rounded font-medium ${
                          facet.id === 'maternidad'
                            ? 'text-[#e9c176] bg-[#513900]/40'
                            : facet.id === 'sistemas'
                            ? 'text-[#ffb3ac] bg-[#9b0212]/30'
                            : 'text-[#ffdada] bg-[#800020]/40'
                        }`}
                      >
                        {facet.badge}
                      </span>
                    </div>

                    <p className="font-sans text-[14px] text-[#e0bfbf] leading-relaxed">
                      {facet.description}
                    </p>

                    {facet.quote && (
                      <div className="mt-2 pl-3 py-1.5 bg-[#0e0e11]/60 border-l-2 border-[#800020] rounded-r-lg">
                        <p className="font-serif text-[13px] italic text-[#ffb3b5]">
                          {facet.quote}
                        </p>
                      </div>
                    )}

                    {facet.id === 'sistemas' && (
                      <div className="flex items-center gap-2 pt-1 text-[#e0bfbf] font-mono text-[12px]">
                        <span className="material-symbols-outlined text-[16px] text-[#e9c176]">
                          memory
                        </span>
                        <span>Concurrencia, arquitecturas distribuidas &amp; SO</span>
                      </div>
                    )}

                    {/* Expandable details */}
                    {isExpanded && facet.details && (
                      <div className="pt-2 mt-2 border-t border-[#584141]/30 text-[13px] text-[#e5e1e6]/90 font-sans leading-relaxed animate-fadeIn">
                        {facet.details}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Ornamental Spine Divider */}
      <SpineDivider icon="schedule" />

      {/* Section 2: Un Día en Mi Vida (Timeline) */}
      <section className="space-y-4">
        <div className="flex flex-col">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
            Cronograma Litúrgico
          </span>
          <h2 className="font-serif text-[24px] font-semibold text-[#e5e1e6]">
            Un Día en Mi Vida
          </h2>
          <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5">
            El equilibrio perpetuo entre código compilado y el calor del hogar.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 space-y-3.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#800020] before:via-[#513900] before:to-[#ffb3b5]">
          {LITURGIC_TIMELINE.map((item) => {
            const isSelected = activeTimeItem === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleTimeline(item.id)}
                className="relative group cursor-pointer"
              >
                {/* Timeline node */}
                <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-[#0e0e11] border border-[#584141] flex items-center justify-center">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.id === 't-0630'
                        ? 'bg-[#e9c176]'
                        : item.id === 't-0900'
                        ? 'bg-[#ffb3b5] animate-pulse'
                        : item.id === 't-1500'
                        ? 'bg-[#ffb3ac]'
                        : item.id === 't-2000'
                        ? 'bg-[#e9c176]'
                        : 'bg-[#800020] shadow-[0_0_8px_rgba(128,0,32,0.8)]'
                    }`}
                  ></span>
                </div>

                <div
                  className={`p-3 rounded-lg transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#2a2a2d] border-[#800020] shadow-[0_0_12px_rgba(128,0,32,0.3)]'
                      : item.id === 't-2130'
                      ? 'bg-[#2a2a2d] border-[#584141]/40'
                      : 'bg-[#1b1b1e] border-transparent hover:bg-[#1f1f22]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[13px] font-bold ${
                        item.id === 't-0900' || item.id === 't-2130'
                          ? 'text-[#ffb3b5]'
                          : item.id === 't-1500'
                          ? 'text-[#ffb3ac]'
                          : 'text-[#e9c176]'
                      }`}
                    >
                      {item.time}
                    </span>
                    <span className="font-mono text-[11px] text-[#e0bfbf]">
                      {item.tag}
                    </span>
                  </div>

                  <p className="font-sans text-[14px] text-[#e5e1e6] mt-1 leading-snug">
                    {item.description}
                  </p>

                  {isSelected && item.extendedNotes && (
                    <div className="mt-2 pt-2 border-t border-[#584141]/30 font-serif italic text-[12px] text-[#ffb3b5]">
                      {item.extendedNotes}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ornamental Spine Divider */}
      <SpineDivider icon="insights" />

      {/* Section 3: Skills & Pasiones (Bento Mosaic) */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
            Competencias &amp; Alquimia
          </span>
          <h2 className="font-serif text-[24px] font-semibold text-[#e5e1e6]">
            Skills &amp; Pasiones
          </h2>
        </div>

        {/* Tech Arsenal Console Card */}
        <div className="rounded-xl bg-[#0e0e11] border border-[#584141]/40 p-4 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-3 bg-[#1f1f22]/50 -mx-4 -mt-4 px-4 pt-2.5 border-b border-[#584141]/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#800020]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#353438]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#513900]"></span>
              <span className="font-mono text-[12px] text-[#e0bfbf] ml-2">
                stack.sys_manifest
              </span>
            </div>
            <span className="font-mono text-xs text-[#e9c176]">v4.1.0</span>
          </div>

          <p className="font-sans text-[13px] text-[#e0bfbf] mb-3">
            Fundamentos rigurosos orientados al rendimiento y arquitecturas escalables.
          </p>

          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className="font-mono text-[12px] px-2.5 py-1 rounded bg-[#1f1f22] text-[#e5e1e6] flex items-center gap-1.5 border border-[#584141]/30 shadow-sm"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    tech.name === 'Java'
                      ? 'bg-[#ffb3b5]'
                      : tech.name === 'Python'
                      ? 'bg-[#e9c176]'
                      : tech.name === 'Git / GitHub'
                      ? 'bg-[#ffb3ac]'
                      : tech.name === 'SQL / Relacional'
                      ? 'bg-[#ffdada]'
                      : tech.name === 'Linux & Bash'
                      ? 'bg-[#800020]'
                      : 'bg-[#c8a35b]'
                  }`}
                ></span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Soft / Maternal Superpowers Grid */}
        <div className="grid grid-cols-1 gap-3">
          <div className="p-4 rounded-xl bg-[#1b1b1e] border border-[#584141]/20 shadow-sm flex items-start gap-3.5">
            <div className="p-2 rounded bg-[#513900]/30 text-[#e9c176] shrink-0">
              <span className="material-symbols-outlined text-[20px]">psychology</span>
            </div>
            <div>
              <h4 className="font-serif text-[16px] text-[#e5e1e6] font-semibold">
                Crianza &amp; Habilidades Humanas
              </h4>
              <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5 leading-relaxed">
                Paciencia infinita forjada en desvelos, capacidad de multitasking crítico bajo presión, empatía profunda y pedagogía lúdico-creativa diaria.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1b1b1e] border border-[#584141]/20 shadow-sm flex items-start gap-3.5">
            <div className="p-2 rounded bg-[#800020]/40 text-[#ffdada] shrink-0">
              <span className="material-symbols-outlined text-[20px]">magic_button</span>
            </div>
            <div>
              <h4 className="font-serif text-[16px] text-[#e5e1e6] font-semibold">
                Pasiones &amp; Reliquias
              </h4>
              <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5 leading-relaxed">
                Lectura devota de Edgar Allan Poe &amp; Mary Shelley, patronaje y costura gótica en terciopelo, té negro ahumado y diseño sonoro en sintetizadores análogos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Micro-Interactive Relic Prompt */}
      <section className="mt-4 p-5 rounded-xl bg-[#1f1f22] border border-[#800020]/40 text-center relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#800020]/20 via-transparent to-transparent pointer-events-none"></div>
        <span className="material-symbols-outlined text-[#ffb3b5] text-[28px] mb-1">
          mark_email_unread
        </span>
        <h3 className="font-serif text-[20px] font-semibold text-[#e5e1e6]">
          ¿Iniciamos una conversación?
        </h3>
        <p className="font-sans text-[13px] text-[#e0bfbf] max-w-xs mx-auto mt-1 mb-4 leading-relaxed">
          Abierta a proyectos de backend, colaboraciones académicas o un intercambio sobre literatura oscura y tecnología.
        </p>

        <button
          onClick={() => onNavigate('contacto')}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#800020] text-[#ffdada] font-mono text-[12px] font-semibold tracking-wider uppercase shadow-[0_0_16px_rgba(128,0,32,0.6)] transition-all duration-200 active:scale-95 hover:bg-[#9b0212] hover:shadow-[0_0_20px_rgba(128,0,32,0.8)]"
        >
          <span>Escribir Mensaje</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </section>
    </div>
  );
};
