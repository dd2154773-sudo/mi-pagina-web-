import React, { useState } from 'react';
import { RESILIENCE_MATRIX, MOTHERHOOD_REFLECTIONS, APP_IMAGES } from '../data/gothicData';
import { SpineDivider } from './SpineDivider';
import { soundEngine } from './AudioSynthesizer';

export const MotherhoodScreen: React.FC = () => {
  const [expandedReflection, setExpandedReflection] = useState<string | null>('ref-1');

  const toggleReflection = (id: string) => {
    soundEngine.playHarmonicChime(493.88);
    setExpandedReflection(prev => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col w-full px-5 sm:px-6 space-y-6 pb-12">
      {/* Header Banner */}
      <section className="pt-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800020]/30 border border-[#800020] text-[#ffb3b5] mb-2.5">
          <span className="material-symbols-outlined text-[15px]">favorite</span>
          <span className="font-mono text-[11px] tracking-wider uppercase">
            Maternidad &amp; STEM
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#e5e1e6] tracking-tight">
          El Algoritmo de la Crianza
        </h1>
        <p className="font-serif text-[15px] italic text-[#ffb3b5] max-w-sm mx-auto mt-1">
          "Criar a mi hija no pausó mis metas técnicas; les dio un propósito inquebrantable."
        </p>
      </section>

      {/* Maternal Visual Card */}
      <section className="p-4 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 flex items-center gap-3.5 shadow-lg">
        <img
          alt="Elena y su hija"
          className="w-16 h-16 rounded-full object-cover border-2 border-[#800020] shadow-[0_0_12px_rgba(128,0,32,0.4)] shrink-0"
          src={APP_IMAGES.portrait}
        />
        <div>
          <h3 className="font-serif text-[16px] font-semibold text-[#e5e1e6]">
            Elena &amp; Su Pequeña Flor Nocturna
          </h3>
          <p className="font-sans text-[12px] text-[#e0bfbf] mt-0.5 leading-snug">
            Caminando juntas entre apuntes de memoria virtual, cuentos de hadas melancólicos y tardes de risas.
          </p>
        </div>
      </section>

      <SpineDivider icon="psychology" />

      {/* Section 1: Matriz de Resiliencia */}
      <section className="space-y-3.5">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
            Competencias Transferibles
          </span>
          <h2 className="font-serif text-[22px] font-semibold text-[#e5e1e6]">
            Matriz de Resiliencia
          </h2>
          <p className="font-sans text-[13px] text-[#e0bfbf] mt-0.5">
            Cómo la crianza moldea aptitudes críticas para la ingeniería de alto rendimiento.
          </p>
        </div>

        <div className="space-y-3">
          {RESILIENCE_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#1b1b1e] border border-[#584141]/25 hover:border-[#800020] transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-[#e9c176] font-medium">
                  {item.engineeringSkill}
                </span>
                <span className="material-symbols-outlined text-[#ffb3ac] text-[16px]">
                  sync_alt
                </span>
              </div>

              <h4 className="font-serif text-[14px] text-[#ffdada] font-medium mt-1">
                {item.maternalSkill}
              </h4>

              <p className="font-sans text-[12px] text-[#e0bfbf] mt-1 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SpineDivider icon="menu_book" />

      {/* Section 2: Bitácora Epistolar */}
      <section className="space-y-3.5">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
            Crónicas Íntimas
          </span>
          <h2 className="font-serif text-[22px] font-semibold text-[#e5e1e6]">
            Cartas a Mi Pequeña Flor
          </h2>
        </div>

        <div className="space-y-3">
          {MOTHERHOOD_REFLECTIONS.map((ref) => {
            const isExpanded = expandedReflection === ref.id;
            return (
              <article
                key={ref.id}
                onClick={() => toggleReflection(ref.id)}
                className="p-4 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 cursor-pointer transition-all hover:bg-[#1f1f22]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#e9c176]">
                    {ref.date}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-[#ffb3b5]">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </div>

                <h3 className="font-serif text-[17px] font-semibold text-[#e5e1e6] mt-1">
                  {ref.title}
                </h3>

                <p className="font-sans text-[13px] text-[#e0bfbf] mt-1 leading-relaxed">
                  {ref.excerpt}
                </p>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-[#584141]/30 space-y-2.5 animate-fadeIn">
                    <p className="font-sans text-[13px] text-[#e5e1e6] leading-relaxed italic">
                      "{ref.fullText}"
                    </p>

                    <div className="p-2.5 rounded-lg bg-[#0e0e11] border border-[#800020]/40 flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0">
                        lightbulb
                      </span>
                      <p className="font-serif text-[12px] text-[#ffdada]">
                        <strong className="text-[#e9c176] font-mono">Lección:</strong> {ref.lesson}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Sacred Sanctuary closing */}
      <section className="p-4 rounded-xl bg-[#0e0e11] border border-[#800020]/40 text-center">
        <span className="material-symbols-outlined text-[#ffb3ac] text-[24px]">
          spa
        </span>
        <h4 className="font-serif text-[16px] font-semibold text-[#e5e1e6] mt-1">
          A todas las madres en el camino de la ciencia
        </h4>
        <p className="font-sans text-[12px] text-[#e0bfbf] mt-1 max-w-xs mx-auto leading-relaxed">
          No hay contradicción entre acunar un sueño infantil y descifrar la arquitectura de un procesador. Somos la prueba viva de esa síntesis.
        </p>
      </section>
    </div>
  );
};
