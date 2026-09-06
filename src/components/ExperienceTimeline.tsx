import React, { useState } from 'react';
import { EXPERIENCES } from '../data';
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle2,
  ChevronRight,
  Server,
  Cloud,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<number>(0);

  const categoryImages: Record<string, { url: string; title: string }> = {
    sonda: {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      title: 'Data Center & Observabilidade de Missão Crítica',
    },
    oi: {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      title: 'NOC / Monitoramento / Segurança da Informação',
    },
    globalweb: {
      url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      title: 'Sustentação de Infraestrutura & Backup Corporativo',
    },
    politec: {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      title: 'Suporte a Sistemas Corporativos e Operações',
    },
  };

  return (
    <section id="experiencia" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajetória Corporativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MINHA EXPERIÊNCIA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            &ldquo;Experiência construída em ambientes corporativos e de missão crítica.&rdquo;
          </p>
        </div>

        {/* Company Quick Nav Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {EXPERIENCES.map((exp, idx) => {
            const isCurrent = selectedExp === idx;
            return (
              <button
                key={exp.company}
                type="button"
                onClick={() => setSelectedExp(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-r from-blue-900/50 to-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    {exp.period.split('–')[0].trim()}
                  </span>
                  <span className="text-lg font-extrabold text-white block mt-0.5">
                    {exp.company}
                  </span>
                </div>
                <span className="text-xs text-slate-400 mt-2 truncate block">
                  {exp.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Experience Card — Premium Large Container */}
        {(() => {
          const exp = EXPERIENCES[selectedExp];
          const imgInfo = categoryImages[exp.visualCategory];
          return (
            <div className="rounded-2xl bg-[#0b1222] border border-slate-700/80 shadow-2xl overflow-hidden">
              {/* Header Bar with company, dates, and allocation */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0e172e] to-slate-900 border-b border-slate-800">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600/20 text-cyan-300 border border-blue-500/30">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-cyan-400 mt-1">
                      {exp.role}
                    </div>
                    {exp.allocation && (
                      <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-md bg-slate-800/90 text-xs font-mono text-amber-300 border border-amber-500/30">
                        <Building className="w-3.5 h-3.5" />
                        <span>{exp.allocation}</span>
                      </div>
                    )}
                  </div>

                  {/* Visual Category Label */}
                  <div className="text-left lg:text-right">
                    <span className="text-xs font-mono text-slate-400 block">
                      AMBIENTE OPERACIONAL
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {imgInfo.title}
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body: Two Columns (Responsibilities List & High-Tech Supporting Visual) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
                {/* Left: Detailed responsibilities */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    <span>Atividades e Responsabilidades Chave</span>
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed p-2.5 rounded-lg bg-slate-900/50 hover:bg-slate-900/90 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Thematic Supporting Image & Environmental Telemetry */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="rounded-xl overflow-hidden border border-slate-800 relative aspect-video sm:aspect-[4/3] group">
                    <img
                      src={imgInfo.url}
                      alt={imgInfo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-[#0b1222]/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#070b14]/90 backdrop-blur-md border border-slate-800">
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase block">
                        Cenário de Atuação
                      </span>
                      <span className="text-xs font-bold text-white block">
                        {imgInfo.title}
                      </span>
                    </div>
                  </div>

                  {/* Context note */}
                  <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-[11px] font-mono text-slate-400">
                    <span className="text-emerald-400 font-bold block mb-1">
                      ✓ CONFORMIDADE & MISSÃO CRÍTICA
                    </span>
                    Atuação pautada em conformidade com ITIL, SLAs rígidos e continuidade de negócios.
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
