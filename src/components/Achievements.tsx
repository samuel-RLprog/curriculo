import React from 'react';
import { ACHIEVEMENTS } from '../data';
import { Eye, Terminal, AlertTriangle, Sparkles, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Eye,
    Terminal,
    AlertTriangle,
    Sparkles,
  };

  return (
    <section id="realizacoes" className="py-24 bg-[#090e1a] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Impacto Operacional Comprovado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            PRINCIPAIS REALIZAÇÕES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Resultados construídos com dedicação, rigor técnico e foco na estabilidade corporativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => {
            const Icon = iconMap[item.iconName] || Trophy;
            return (
              <div
                key={item.category}
                className="p-8 rounded-2xl bg-[#0b1222] border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 group-hover:scale-110 transition-transform border border-slate-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                      {item.category}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Atuação Corporativa</span>
                  <span className="text-emerald-400 font-bold">Comprovado em Produção</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
