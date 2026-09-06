import React from 'react';
import {
  Server,
  Database,
  Shield,
  Activity,
  Cloud,
  HardDrive,
  Lock,
  Radio,
} from 'lucide-react';

export const CriticalEnvironments: React.FC = () => {
  const pillars = [
    { title: 'DATA CENTER', desc: 'Supervisão em sala cofre e racks de missão crítica', icon: Server },
    { title: 'SERVIDORES', desc: 'Sustentação de ambientes Linux, Unix e Windows', icon: CpuIcon },
    { title: 'STORAGE', desc: 'Volumes corporativos, arrays e armazenamento seguro', icon: HardDrive },
    { title: 'BACKUP', desc: 'Rotinas com NetBackup, replicação e restauração ágil', icon: Database },
    { title: 'MONITORAMENTO', desc: 'Detecção de anomalias com Zabbix e Control-M', icon: Radio },
    { title: 'OBSERVABILIDADE', desc: 'Visibilidade unificada de serviços via Grafana', icon: Activity },
    { title: 'SEGURANÇA', desc: 'Controle rigoroso de acessos e mitigação de riscos', icon: Lock },
    { title: 'CLOUD', desc: 'Azure SaaS, máquinas virtuais e nuvem híbrida', icon: Cloud },
  ];

  function CpuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    );
  }

  return (
    <section id="ambientes-criticos" className="py-24 bg-[#090e1a] border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Infraestrutura de Alto Padrão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AMBIENTES CRÍTICOS EXIGEM CONFIABILIDADE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            &ldquo;Atuação em ambientes onde disponibilidade, integridade dos dados, segurança e rápida resposta a incidentes são essenciais.&rdquo;
          </p>
        </div>

        {/* Panoramic Data Center Visual with Overlaid Monitoring Telemetry */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl mb-12 group">
          {/* Panoramic Image */}
          <div className="h-80 sm:h-96 w-full relative">
            <img
              src="/cyber-datacenter.png"
              alt="Data Center Moderno e Sala de Servidores"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090e1a]/80 via-transparent to-[#090e1a]/80" />
          </div>

          {/* Overlaid Discreet Monitoring HUD Elements */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SALA COFRE • MONITORAMENTO ATIVO</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300">
              <span>SSH VERIFIED</span>
              <span>•</span>
              <span className="text-emerald-400">BACKUP JOBS OK</span>
            </div>
          </div>

          {/* Floating Data Center Caption */}
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl p-4 rounded-xl bg-[#070b14]/90 backdrop-blur-md border border-slate-700/80">
            <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">
              EXPERIÊNCIA PRÁTICA EM DATA CENTERS CORPORATIVOS
            </span>
            <p className="text-xs sm:text-sm text-slate-200">
              Supervisão in-loco e remota de infraestruturas onde a continuidade operacional é mandatória, englobando controle de temperatura, energia, rotas redundantes e confidencialidade.
            </p>
          </div>
        </div>

        {/* 8 Connected Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-blue-950/60 transition-colors inline-block mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {p.desc}
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
