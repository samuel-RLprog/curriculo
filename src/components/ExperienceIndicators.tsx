import React from 'react';
import { EXPERIENCE_INDICATORS } from '../data';
import { Clock, ShieldAlert, Activity, Cloud, Server } from 'lucide-react';

export const ExperienceIndicators: React.FC = () => {
  const icons = [Clock, ShieldAlert, Activity, Cloud, Server];

  return (
    <section
      id="indicadores-experiencia"
      className="relative z-10 py-8 bg-[#090e1a] border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {EXPERIENCE_INDICATORS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-blue-950/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-300 tracking-wide mt-1">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
