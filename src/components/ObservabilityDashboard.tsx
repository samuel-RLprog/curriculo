import React, { useState } from 'react';
import {
  Activity,
  AlertOctagon,
  CheckCircle,
  Clock,
  Layers,
  Search,
  Server,
  Zap,
  ChevronRight,
  TrendingUp,
  Cpu,
} from 'lucide-react';

export const ObservabilityDashboard: React.FC = () => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(2);

  const observabilityTools = [
    {
      name: 'ZABBIX',
      role: 'Coleta de métricas, agentes e triggers em servidores e redes',
      tag: 'Infra & Redes',
    },
    {
      name: 'GRAFANA',
      role: 'Dashboards analíticos, correlação visual e telemetria em tempo real',
      tag: 'Visualização',
    },
    {
      name: 'DYNATRACE',
      role: 'APM corporativo, rastreabilidade de transações e análise de impactos',
      tag: 'APM & Tracing',
    },
    {
      name: 'CONTROL-M',
      role: 'Gestão de jobs críticos, automação batch e fluxos de agendamento',
      tag: 'Workload Auto',
    },
    {
      name: 'ITSM / REMEDY',
      role: 'Gestão de incidentes, controle de SLAs, chamados e auditoria ITIL',
      tag: 'Governança',
    },
  ];

  const pipeline = [
    { step: 'MÉTRICAS', desc: 'Sinais brutos de CPU, memória, I/O, latência e conectividade' },
    { step: 'MONITORAMENTO', desc: 'Sistemas Zabbix e Control-M coletando e comparando limites' },
    { step: 'ALERTAS', desc: 'Disparo proativo de notificações antes do impacto ao usuário' },
    { step: 'ANÁLISE', desc: 'Investigação profunda de telemetria, logs e causa raiz' },
    { step: 'INCIDENTE', desc: 'Identificação e classificação por criticidade e impacto' },
    { step: 'ITSM', desc: 'Abertura, acompanhamento e registro formal em conformidade com ITIL' },
    { step: 'RESOLUÇÃO', desc: 'Execução de intervenção técnica N1/N2 e normalização do serviço' },
  ];

  return (
    <section id="observabilidade" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Engenharia de Monitoramento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            OBSERVABILIDADE
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400 font-mono">
            &ldquo;Monitorar é detectar. Observar é compreender.&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Redução consistente de falhas recorrentes em ambientes corporativos através de monitoramento proativo, correlação de dados e respostas imediatas.
          </p>
        </div>

        {/* 5 Main Observability Tools Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
          {observabilityTools.map((t) => (
            <div
              key={t.name}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                  {t.tag}
                </span>
                <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {t.name}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-snug">
                {t.role}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Simulated NOC Dashboard Container (Purely Visual Illustration) */}
        <div className="rounded-2xl bg-[#0b1222] border border-slate-700/80 p-6 sm:p-8 shadow-2xl mb-12 relative overflow-hidden">
          {/* Header bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold tracking-wide">
                NOC OBSERVABILITY CONSOLE [ESTRUTURA VISUAL]
              </span>
              <span className="text-slate-500 text-[10px]">(Simulação Ilustrativa de Painel)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-[11px]">
              <span>CLUSTER STATUS: HEALTHY</span>
              <span>•</span>
              <span className="text-cyan-400">GRAFANA & ZABBIX INTEGRATED</span>
            </div>
          </div>

          {/* Visual Grid: Simulated Telemetry Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {/* Tile 1: Simulated Metrics Flow */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>TELEMETRIA DE SERVIDORES</span>
                <TrendingUp className="w-4 h-4 text-cyan-400" />
              </div>
              {/* Synthetic decorative SVG wave */}
              <div className="h-20 w-full flex items-end">
                <svg className="w-full h-16 text-cyan-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path
                    d="M 0 30 Q 15 10, 30 25 T 60 15 T 85 20 T 100 8 L 100 40 L 0 40 Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M 0 30 Q 15 10, 30 25 T 60 15 T 85 20 T 100 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
                <span>Latência Média: Estável</span>
                <span className="text-emerald-400">Padrão Operacional</span>
              </div>
            </div>

            {/* Tile 2: Health Check & Proactive Alerts */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>DETECÇÃO ANTECIPADA</span>
                <AlertOctagon className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="space-y-2 py-1">
                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-200">Verificação Storage / Backup</span>
                  <span className="text-emerald-400 font-mono font-bold">100% OK</span>
                </div>
                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-200">Serviços Azure SaaS & VMs</span>
                  <span className="text-cyan-400 font-mono font-bold">OPERACIONAL</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
                <span>Prevenção de Incidentes</span>
                <span className="text-cyan-400">Ativa</span>
              </div>
            </div>

            {/* Tile 3: ITSM & Incident Lifecycle */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>RESOLUÇÃO & ITSM</span>
                <CheckCircle className="w-4 h-4 text-blue-400" />
              </div>
              <div className="space-y-2 py-1">
                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-200">Suporte N1/N2</span>
                  <span className="text-blue-400 font-mono font-bold">AGILIDADE</span>
                </div>
                <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-200">Conformidade ITIL</span>
                  <span className="text-emerald-400 font-mono font-bold">GARANTIDA</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
                <span>Tratamento de Causa Raiz</span>
                <span className="text-emerald-400">Eficaz</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Mandatory Step Flow:
            MÉTRICAS ↓ MONITORAMENTO ↓ ALERTAS ↓ ANÁLISE ↓ INCIDENTE ↓ ITSM ↓ RESOLUÇÃO */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Fluxo Operacional de Observabilidade
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Do Sinal Bruto à Resolução Definitiva
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
            {pipeline.map((item, idx) => {
              const isSelected = activePipelineStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`cursor-pointer p-3.5 rounded-xl border transition-all text-center flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-950/80 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 mb-1">
                      ETAPA 0{idx + 1}
                    </div>
                    <div className={`text-xs font-black tracking-wide ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                      {item.step}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2 leading-tight">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
