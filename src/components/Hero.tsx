import React from 'react';
import {
  FileText,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Server,
  Activity,
  CheckCircle2,
  Cpu,
  Radio,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenCurriculum: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCurriculum }) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800/80"
    >
      {/* Background High-Tech Atmospheric Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Subtle Horizontal Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070b14]/50 to-[#070b14]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Identity & Statements */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Mission Critical Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-[11px] font-mono tracking-wider font-semibold text-cyan-300 uppercase">
                MISSÃO CRÍTICA • ALTA DISPONIBILIDADE • 10+ ANOS
              </span>
            </div>

            {/* Name Hierarchy */}
            <div>
              <h1
                id="hero-name-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                SAMUEL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                  RODRIGUES LOPES
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-semibold text-cyan-400 tracking-tight">
                {PERSONAL_INFO.headline}
              </p>
              <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wide mt-1">
                {PERSONAL_INFO.subheadline}
              </p>
            </div>

            {/* Main Phrase with highlighted keywords */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm relative">
              <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-400 border border-slate-700 uppercase tracking-wider">
                Diretriz Operacional
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                &ldquo;
                <span className="text-white font-bold tracking-wide border-b border-cyan-500/80 pb-0.5 mr-1">
                  EXPERIÊNCIA
                </span>{' '}
                para ambientes críticos.{' '}
                <span className="text-white font-bold tracking-wide border-b border-blue-500/80 pb-0.5 mx-1">
                  CONFIABILIDADE
                </span>{' '}
                para operações de TI.{' '}
                <span className="text-white font-bold tracking-wide border-b border-emerald-500/80 pb-0.5 mx-1">
                  OBSERVABILIDADE
                </span>{' '}
                para decisões mais eficientes.&rdquo;
              </blockquote>
            </div>

            {/* Brief Executive Presentation */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#experiencia"
                id="btn-hero-conheca-experiencia"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 group focus:outline-none"
              >
                <span>CONHEÇA MINHA EXPERIÊNCIA</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                type="button"
                id="btn-hero-baixar-curriculo"
                onClick={onOpenCurriculum}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-500/70 hover:text-white transition-all duration-200 shadow-sm group"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>BAIXAR CURRÍCULO</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-hero-linkedin"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-colors"
                  title="Abrir perfil no LinkedIn"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-hero-github"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  title="Ver repositórios no GitHub"
                >
                  <span>GITHUB</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Data Centers & Sala Cofre</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zabbix • Grafana • Control-M</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>ITSM & Resolução N1/N2</span>
              </div>
            </div>
          </div>

          {/* Right Column: Samuel's Professional Photo with High-Tech Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Tech Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/10 to-indigo-600/30 blur-md opacity-70" />

              {/* Main Container */}
              <div className="relative rounded-2xl bg-[#0b1222] border border-slate-700/80 p-3 shadow-2xl overflow-hidden group">
                {/* Circuit lines / Header HUD */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 font-semibold">SYS.INFRA.MONITOR</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                    24/7 ACTIVE
                  </span>
                </div>

                {/* Professional Photo */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center">
                  <img
                    src="/samuel-hero.png"
                    alt="Samuel Rodrigues Lopes - Profissional de Infraestrutura de TI e Observabilidade"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to github avatar if needed
                      (e.target as HTMLImageElement).src = '/samuel-github.png';
                    }}
                  />

                  {/* Subtle Gradient Overlay at bottom for clean label integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-80" />

                  {/* Corner Tech Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/80" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/80" />

                  {/* HUD Overlay Pill on bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0b1222]/90 backdrop-blur-md border border-slate-700/80 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">
                          SAMUEL R. LOPES
                        </div>
                        <div className="text-[10px] font-mono text-cyan-400">
                          ESPECIALISTA EM INFRAESTRUTURA CRÍTICA
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-mono text-emerald-400 font-semibold">
                          CONFIABILIDADE
                        </div>
                        <div className="text-[9px] font-mono text-slate-400">
                          OBSERVABILIDADE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Telemetry Bar below photo */}
                <div className="mt-3 pt-2 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="block text-slate-400">EXPERIÊNCIA</span>
                    <span className="font-bold text-cyan-400">10+ ANOS</span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="block text-slate-400">NÍVEL</span>
                    <span className="font-bold text-blue-400">SÊNIOR / CORP</span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="block text-slate-400">STATUS</span>
                    <span className="font-bold text-emerald-400">DISPONÍVEL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
