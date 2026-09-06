import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Activity, ArrowUpRight } from 'lucide-react';

export const OperationalReliability: React.FC = () => {
  const pillars = [
    {
      title: 'DISPONIBILIDADE',
      subtitle: 'Sistemas Ativos e Operações Sem Interrupção',
      description:
        'Monitoramento 24/7 com Zabbix e Grafana, prevenção contínua de gargalos e atendimento rápido N1/N2 a incidentes para garantir continuidade de negócio ininterrupta.',
      icon: Activity,
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/60',
    },
    {
      title: 'INTEGRIDADE',
      subtitle: 'Preservação de Dados e Rotinas de Backup',
      description:
        'Acompanhamento e validação diária de rotinas de backup com Veritas NetBackup, gestão de storages corporativos e suporte contínuo a bancos Oracle, MSSQL e MySQL.',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/60',
    },
    {
      title: 'SEGURANÇA',
      subtitle: 'Proteção em Camadas e Controle de Acesso',
      description:
        'Administração de identidades e permissões via Active Directory e Azure SaaS, observância aos princípios de Zero Trust, proteção perimetral e conformidade com a LGPD.',
      icon: Lock,
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-500/60',
    },
  ];

  return (
    <section id="confiabilidade" className="py-24 bg-[#090e1a] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Padrão Operacional Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CONFIABILIDADE OPERACIONAL
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-200">
            &ldquo;Infraestrutura confiável começa com monitoramento, prevenção e resposta.&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A garantia de sistemas corporativos seguros decorre de disciplina técnica, conformidade com runbooks e monitoramento preventivo diário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-8 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all duration-300 flex flex-col justify-between group ${pillar.borderColor} hover:bg-slate-900/95`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-slate-800/80 ${pillar.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold">PILAR CORP</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 font-medium mt-1 mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span>Prática Diária</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
