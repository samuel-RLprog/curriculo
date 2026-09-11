import React from 'react';
import { PROFESSIONAL_PILLARS } from '../data';
import {
  Clock,
  CheckCircle2,
  Search,
  Shield,
  Users,
  Award,
  UserCheck,
} from 'lucide-react';

export const ProfessionalProfile: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Clock,
    CheckCircle2,
    Search,
    Shield,
    Users,
    Award,
  };

  return (
    <section id="perfil" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Valores e Postura Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O QUE VOCÊ PODE ESPERAR SOBRE MINHAS HABILIDADES?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Competências comportamentais e atitude profissional para equipes de alto desempenho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_PILLARS.map((p) => {
            const Icon = iconMap[p.iconName] || Award;
            return (
              <div
                key={p.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 group-hover:scale-110 transition-transform inline-block mb-4 border border-slate-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {p.detail}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                  Compromisso Profissional
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
