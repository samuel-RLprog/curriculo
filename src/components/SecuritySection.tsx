import React from 'react';
import { Shield, Lock, Eye, CheckCircle2, ShieldAlert, Key, FileCheck, Layers } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const ciaTriad = [
    {
      title: 'CONFIDENCIALIDADE',
      desc: 'Restrição estrita do acesso à informação somente para usuários, processos e identidades devidamente autorizadas.',
      icon: Lock,
    },
    {
      title: 'INTEGRIDADE',
      desc: 'Salvaguarda da exatidão e completude das informações, bancos de dados corporativos e rotinas de backup.',
      icon: CheckCircle2,
    },
    {
      title: 'DISPONIBILIDADE',
      desc: 'Garantia de que os sistemas, redes e storages estejam operacionais e acessíveis pontualmente quando demandados.',
      icon: Eye,
    },
  ];

  const securityPractices = [
    { title: 'Controle de Acessos', desc: 'Active Directory, permissões RBAC e Azure SaaS' },
    { title: 'Firewall & Perímetro', desc: 'Políticas de tráfego, VPN corporativa e NAT' },
    { title: 'IPS & Detecção', desc: 'Prevenção de intrusões e anomalias de rede' },
    { title: 'Antivírus & EDR', desc: 'Proteção de endpoints em servidores físicos e virtuais' },
    { title: 'SIEM & Eventos', desc: 'Centralização e auditoria de logs de segurança' },
    { title: 'Zero Trust', desc: 'Arquitetura de verificação explícita e privilégio mínimo' },
    { title: 'LGPD & Conformidade', desc: 'Proteção de dados sensíveis e respeito à privacidade' },
    { title: 'Rotinas de Contingência', desc: 'Veritas NetBackup e restauração rápida de dados' },
  ];

  return (
    <section id="seguranca" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Postura de Defesa & Conformidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SEGURANÇA DA INFORMAÇÃO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A proteção de ativos digitais aliada à operação de data centers de alta complexidade.
          </p>
        </div>

        {/* CIA Triad Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {ciaTriad.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[#0b1222] border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 inline-block mb-4 border border-slate-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-cyan-400">
                  Fundamento CIA
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Practices Grid */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-bold mb-6 text-center sm:text-left">
            Elementos de Defesa e Governança Operados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityPractices.map((practice) => (
              <div
                key={practice.title}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-sm font-bold text-white">{practice.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">
                  {practice.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
