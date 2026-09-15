import React, { useState } from 'react';
import { SpineDivider } from './SpineDivider';
import { soundEngine } from './AudioSynthesizer';

export const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Propuesta Laboral Backend');
  const [message, setMessage] = useState('');
  const [isSealed, setIsSealed] = useState(false);
  const [copiedPgp, setCopiedPgp] = useState(false);

  const pgpKey = "9F82 4B11 C3D7 00AE 5521 88DA 7E2B 630A E140 BFBF";

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    soundEngine.playHarmonicChime(659.25);
    setIsSealed(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  const copyPgp = () => {
    soundEngine.playHarmonicChime(587.33);
    navigator.clipboard?.writeText(pgpKey);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2500);
  };

  return (
    <div className="flex flex-col w-full px-5 sm:px-6 space-y-6 pb-12">
      {/* Header */}
      <section className="pt-4 text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
          Correspondencia &amp; Redes
        </span>
        <h1 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#e5e1e6] tracking-tight">
          Despacho Epistolar
        </h1>
        <p className="font-sans text-[13px] text-[#e0bfbf] max-w-sm mx-auto mt-1 leading-relaxed">
          Abierta a proyectos de backend, colaboraciones académicas o un intercambio sobre literatura oscura y tecnología.
        </p>
      </section>

      {/* Gothic Letter Composer */}
      <section className="rounded-xl bg-[#1b1b1e] border border-[#584141]/40 shadow-xl p-5 relative overflow-hidden">
        {/* Subtle decorative stamp */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#584141]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb3b5] text-[20px]">
              mark_email_read
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#ffdada]">
              Carta Cifrada // Elena Vance
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#e9c176]">SELLO NO. 248</span>
        </div>

        {isSealed ? (
          <div className="py-8 flex flex-col items-center text-center space-y-3 animate-fadeIn">
            {/* Wax seal simulation */}
            <div className="w-16 h-16 rounded-full bg-[#800020] text-[#ffdada] border-2 border-[#ffb3b5] flex items-center justify-center shadow-[0_0_24px_rgba(128,0,32,0.8)]">
              <span className="font-serif text-2xl font-bold">EV</span>
            </div>
            <h3 className="font-serif text-[20px] font-bold text-[#e5e1e6]">
              Mensaje Sellado con Cera Carmesí
            </h3>
            <p className="font-sans text-[13px] text-[#e0bfbf] max-w-xs">
              Tu mensaje ha sido grabado en la memoria del templo. Responderé con prontitud durante la vigilia nocturna.
            </p>
            <button
              onClick={() => setIsSealed(false)}
              className="mt-2 px-4 py-1.5 rounded-full bg-[#2a2a2d] hover:bg-[#800020] font-mono text-[11px] text-[#ffdada] transition-colors"
            >
              Escribir otra carta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-3.5">
            <div>
              <label className="block font-mono text-[11px] text-[#e0bfbf] mb-1">
                TU NOMBRE O IDENTIFICADOR
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lord Byron / Dev anónimo"
                className="w-full px-3 py-2 rounded-lg bg-[#0e0e11] border border-[#584141]/40 text-[#e5e1e6] font-sans text-[13px] focus:outline-none focus:border-[#ffb3b5] transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#e0bfbf] mb-1">
                CORREO ELECTRÓNICO
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.correo@dominio.com"
                className="w-full px-3 py-2 rounded-lg bg-[#0e0e11] border border-[#584141]/40 text-[#e5e1e6] font-sans text-[13px] focus:outline-none focus:border-[#ffb3b5] transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#e0bfbf] mb-1">
                ASUNTO LITÚRGICO
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0e0e11] border border-[#584141]/40 text-[#e5e1e6] font-sans text-[13px] focus:outline-none focus:border-[#ffb3b5] transition-colors"
              >
                <option value="Propuesta Laboral Backend">Propuesta Laboral Backend / Arquitectura</option>
                <option value="Colaboración STEM">Colaboración Académica STEM &amp; Concurrencia</option>
                <option value="Intercambio Literario Gótico">Intercambio de Literatura Oscura &amp; Música</option>
                <option value="Comunidad Madres en Tecnología">Comunidad de Madres en Tecnología</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#e0bfbf] mb-1">
                MENSAJE EN EL TERCIOPELO
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe aquí tu misiva..."
                className="w-full px-3 py-2 rounded-lg bg-[#0e0e11] border border-[#584141]/40 text-[#e5e1e6] font-sans text-[13px] focus:outline-none focus:border-[#ffb3b5] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-[#800020] text-[#ffdada] font-mono text-[12px] font-semibold tracking-wider uppercase shadow-[0_0_16px_rgba(128,0,32,0.5)] hover:bg-[#9b0212] transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Sellar con Cera Carmesí</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </form>
        )}
      </section>

      <SpineDivider icon="key" />

      {/* PGP Key Card */}
      <section className="p-4 rounded-xl bg-[#0e0e11] border border-[#584141]/40 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e9c176] text-[18px]">
              lock
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#e9c176]">
              Huella Digital PGP (Cifrado GPG)
            </span>
          </div>
          <button
            onClick={copyPgp}
            className="px-2 py-0.5 rounded bg-[#1f1f22] hover:bg-[#800020] text-[#ffdada] font-mono text-[10px] transition-colors flex items-center gap-1"
          >
            <span>{copiedPgp ? '¡Copiada!' : 'Copiar'}</span>
            <span className="material-symbols-outlined text-[12px]">
              {copiedPgp ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>

        <code className="block font-mono text-[11px] text-[#ffb3ac] break-all bg-[#131316] p-2 rounded border border-[#584141]/20">
          {pgpKey}
        </code>
      </section>

      {/* Direct Social Channels */}
      <section className="grid grid-cols-2 gap-2.5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 hover:border-[#ffb3b5] flex items-center gap-2.5 transition-colors"
        >
          <span className="material-symbols-outlined text-[#ffb3b5] text-[20px]">
            code_blocks
          </span>
          <div className="text-left">
            <span className="font-mono text-[10px] text-[#e0bfbf] block">REPOSITORIOS</span>
            <span className="font-sans text-[12px] font-semibold text-[#ffdada]">GitHub</span>
          </div>
        </a>

        <a
          href="mailto:elena.vance@nocturna.dev"
          className="p-3 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 hover:border-[#ffb3b5] flex items-center gap-2.5 transition-colors"
        >
          <span className="material-symbols-outlined text-[#e9c176] text-[20px]">
            alternate_email
          </span>
          <div className="text-left">
            <span className="font-mono text-[10px] text-[#e0bfbf] block">CORREO DIRECTO</span>
            <span className="font-sans text-[12px] font-semibold text-[#ffdada]">elena.vance@dev</span>
          </div>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 hover:border-[#ffb3b5] flex items-center gap-2.5 transition-colors"
        >
          <span className="material-symbols-outlined text-[#ffb3ac] text-[20px]">
            badge
          </span>
          <div className="text-left">
            <span className="font-mono text-[10px] text-[#e0bfbf] block">ACADEMIA STEM</span>
            <span className="font-sans text-[12px] font-semibold text-[#ffdada]">LinkedIn</span>
          </div>
        </a>

        <div className="p-3 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#ffb3b5] text-[20px]">
            music_note
          </span>
          <div className="text-left">
            <span className="font-mono text-[10px] text-[#e0bfbf] block">SOUNDTRACK</span>
            <span className="font-sans text-[12px] font-semibold text-[#ffdada]">Darkwave / Poe</span>
          </div>
        </div>
      </section>
    </div>
  );
};
