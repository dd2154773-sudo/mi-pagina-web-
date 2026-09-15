import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS, TECH_STACK } from '../data/gothicData';
import { SpineDivider } from './SpineDivider';
import { soundEngine } from './AudioSynthesizer';

export const ProjectsScreen: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('Todos');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'uname -a',
      output: 'Linux nocturna-station 6.2.0-gothic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux'
    },
    {
      cmd: 'status',
      output: 'All services nominal. MTRN: L1-ACTIVE. Vigil candle: Burning.'
    }
  ]);

  const handleCommand = (cmdText: string) => {
    soundEngine.playHarmonicChime(523.25);
    const cleanCmd = cmdText.trim().toLowerCase();
    let res = '';

    if (cleanCmd === 'help') {
      res = 'Available commands: help, stack, projects, kernel, synth, clear, date';
    } else if (cleanCmd === 'stack') {
      res = TECH_STACK.map(s => `• ${s.name} [${s.level}]: ${s.note}`).join('\n');
    } else if (cleanCmd === 'projects') {
      res = PROJECTS.map(p => `[${p.status}] ${p.title} (${p.category})`).join('\n');
    } else if (cleanCmd === 'kernel') {
      res = 'Nocturna Kernel Module: tracing context switches & mutex locks. 0 dropped packets.';
    } else if (cleanCmd === 'synth') {
      soundEngine.playHarmonicChime(440);
      soundEngine.playHarmonicChime(554.37);
      res = 'Crimson Velvet chord triggered: Dm9 [73Hz - 174Hz].';
    } else if (cleanCmd === 'date') {
      res = new Date().toLocaleString('es-ES');
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cleanCmd === '') {
      return;
    } else {
      res = `bash: ${cleanCmd}: comando no encontrado. Escribe 'help' para ver opciones.`;
    }

    setTerminalHistory(prev => [...prev, { cmd: cmdText, output: res }]);
    setTerminalInput('');
  };

  const categories = ['Todos', 'Sistemas & Kernel', 'Bases de Datos', 'Audio & Web', 'Algoritmos'];
  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="flex flex-col w-full px-5 sm:px-6 space-y-6 pb-12">
      {/* Header */}
      <section className="pt-4 text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
          Repositorios &amp; Arquitectura
        </span>
        <h1 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#e5e1e6] tracking-tight">
          Proyectos &amp; Código
        </h1>
        <p className="font-sans text-[13px] text-[#e0bfbf] max-w-sm mx-auto mt-1">
          Sistemas operativos, bases de datos relacionales y experimentos de audio web concebidos durante la vigilia nocturna.
        </p>
      </section>

      {/* Interactive Gothic Terminal */}
      <section className="rounded-xl bg-[#0a0a0d] border border-[#584141]/50 shadow-2xl overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#1b1b1e] border-b border-[#584141]/30">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#800020]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#e9c176]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#353438]"></span>
            <span className="font-mono text-[11px] text-[#e0bfbf] ml-2">
              elena@nocturna: ~/dev/workspace
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#ffb3b5]">bash 5.2</span>
        </div>

        {/* Terminal Content */}
        <div className="p-3 font-mono text-[12px] space-y-2 max-h-48 overflow-y-auto bg-[#0a0a0d] text-[#e5e1e6]">
          <p className="text-[#e0bfbf]/70">
            Bienvenida/o a la terminal interactiva. Escribe un comando o toca una sugerencia:
          </p>

          {terminalHistory.map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex items-center gap-1 text-[#e9c176]">
                <span className="text-[#800020] font-bold">&gt;</span>
                <span className="text-[#ffdada]">{item.cmd}</span>
              </div>
              <pre className="text-[#e0bfbf] text-[11px] whitespace-pre-wrap pl-2.5 font-mono">
                {item.output}
              </pre>
            </div>
          ))}

          {/* Prompt line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(terminalInput);
            }}
            className="flex items-center gap-1 text-[#e9c176] pt-1"
          >
            <span className="text-[#800020] font-bold">&gt;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="escribe un comando..."
              className="bg-transparent border-none outline-none font-mono text-[12px] text-[#ffdada] flex-1 focus:ring-0 placeholder:text-[#584141]"
            />
          </form>
        </div>

        {/* Quick Command Pills */}
        <div className="px-3 py-2 bg-[#131316] border-t border-[#584141]/30 flex flex-wrap gap-1.5">
          {['help', 'stack', 'projects', 'kernel', 'synth', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1f1f22] text-[#e9c176] hover:bg-[#800020] hover:text-[#ffdada] transition-colors border border-[#584141]/40"
            >
              ${cmd}
            </button>
          ))}
        </div>
      </section>

      <SpineDivider icon="terminal" />

      {/* Filter Tabs */}
      <section className="flex gap-1.5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full font-mono text-[11px] whitespace-nowrap transition-all ${
              filter === cat
                ? 'bg-[#800020] text-[#ffdada] shadow-[0_0_10px_rgba(128,0,32,0.5)]'
                : 'bg-[#1b1b1e] text-[#e0bfbf] hover:bg-[#2a2a2d]'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Projects List */}
      <section className="space-y-4">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="p-4 rounded-xl bg-[#1b1b1e] border border-[#584141]/30 shadow-lg relative overflow-hidden transition-all duration-300 hover:border-[#800020]"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#e9c176] tracking-wider font-semibold">
                  {project.category}
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-[#e5e1e6] mt-0.5">
                  {project.title}
                </h3>
              </div>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                  project.status === 'Producción'
                    ? 'bg-[#513900]/40 text-[#e9c176]'
                    : 'bg-[#800020]/30 text-[#ffb3b5]'
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="font-serif text-[13px] italic text-[#ffb3b5] mt-1">
              "{project.subtitle}"
            </p>

            <p className="font-sans text-[13px] text-[#e0bfbf] mt-2 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics bar */}
            <div className="mt-2.5 px-2.5 py-1 rounded bg-[#0e0e11] border border-[#584141]/30 font-mono text-[11px] text-[#ffb3ac]">
              {project.metrics}
            </div>

            {/* Tech Stack tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#2a2a2d] text-[#e5e1e6] border border-[#584141]/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interactive actions */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#584141]/30">
              <button
                onClick={() => {
                  soundEngine.playHarmonicChime(440);
                  setSelectedProject(project);
                }}
                className="font-mono text-[11px] text-[#ffb3b5] hover:text-[#ffdada] flex items-center gap-1"
              >
                <span>Inspeccionar Código</span>
                <span className="material-symbols-outlined text-[14px]">code</span>
              </button>

              {project.id === 'vampire-synth' && (
                <button
                  onClick={() => soundEngine.playHarmonicChime(220)}
                  className="px-2.5 py-1 rounded bg-[#800020] text-[#ffdada] font-mono text-[10px] flex items-center gap-1 hover:bg-[#9b0212] transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">graphic_eq</span>
                  <span>Tocar Acorde Dm</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Project Code Modal / Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#131316] border border-[#800020] rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-5 shadow-[0_0_30px_rgba(128,0,32,0.5)]">
            <div className="flex items-start justify-between pb-3 border-b border-[#584141]/30">
              <div>
                <span className="font-mono text-[10px] text-[#e9c176]">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-[20px] font-bold text-[#e5e1e6]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-[#1f1f22] text-[#e0bfbf] hover:text-[#ffb3b5] flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <p className="font-sans text-[13px] text-[#e0bfbf] mt-3">
              {selectedProject.description}
            </p>

            <div className="my-3">
              <span className="font-mono text-[11px] text-[#e9c176] block mb-1">
                // Fragmento de código fuente representativo:
              </span>
              <pre className="p-3 rounded-lg bg-[#0a0a0d] border border-[#584141]/40 text-[#ffdada] font-mono text-[11px] overflow-x-auto leading-relaxed">
                {selectedProject.demoSnippet}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-[#584141]/30 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-full bg-[#800020] text-[#ffdada] font-mono text-[12px]"
              >
                Cerrar Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
