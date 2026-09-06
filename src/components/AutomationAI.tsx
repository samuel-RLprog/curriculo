import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Sparkles,
  Database,
  Code2,
  Layers,
  ArrowRight,
  CheckCircle2,
  Workflow,
} from 'lucide-react';

export const AutomationAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'equation' | 'script' | 'gemini'>('equation');

  const capabilities = [
    {
      title: 'Scripts em Python',
      desc: 'Desenvolvimento de rotinas para automação de tarefas repetitivas, rotinas de saúde operacional e relatórios técnicos.',
      icon: Terminal,
    },
    {
      title: 'Tratamento de Dados',
      desc: 'Leitura, parsing, validação e transformação estruturada em formatos JSON, XML, CSV e conexão a bancos relacionais.',
      icon: Database,
    },
    {
      title: 'Integração de APIs REST',
      desc: 'Consumo e disparo de webhooks, autenticação segura e integração de serviços entre plataformas corporativas.',
      icon: Workflow,
    },
    {
      title: 'Google Gemini & AI Studio',
      desc: 'Emprego de modelos avançados de Inteligência Artificial Generativa para aceleração analítica e produtividade técnica.',
      icon: Sparkles,
    },
    {
      title: 'Engenharia de Prompt',
      desc: 'Estruturação de prompts contextualizados, few-shot prompts e saídas padronizadas em JSON para fluxos automatizados.',
      icon: Code2,
    },
    {
      title: 'IA Multimodal',
      desc: 'Análise integrada combinando logs textuais, capturas de telas de telemetria e documentações técnicas em tempo real.',
      icon: Layers,
    },
  ];

  return (
    <section id="automacao-ia" className="py-24 bg-[#090e1a] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inovação & Produtividade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AUTOMAÇÃO E INTELIGÊNCIA ARTIFICIAL
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400 font-mono">
            &ldquo;Transformando tarefas, dados e processos em soluções mais eficientes.&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A convergência entre a robustez de scripts em Python e a versatilidade de modelos generativos de IA para potencializar a operação de TI.
          </p>
        </div>

        {/* Visual Formula Display:
            PYTHON + APIs + DADOS + IA GENERATIVA = AUTOMAÇÃO */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1222] via-[#0d172e] to-[#0b1222] border border-slate-700/80 shadow-2xl">
          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-4 text-center sm:text-left">
            FÓRMULA DE EFICIÊNCIA OPERACIONAL
          </span>

          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3 text-center sm:text-left">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex-1 min-w-[140px]">
              <span className="text-xs font-mono text-slate-400 block">LINGUAGEM</span>
              <span className="text-base sm:text-lg font-black text-white">PYTHON</span>
            </div>

            <span className="text-xl font-black text-cyan-400 font-mono">+</span>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex-1 min-w-[140px]">
              <span className="text-xs font-mono text-slate-400 block">CONECTIVIDADE</span>
              <span className="text-base sm:text-lg font-black text-white">APIs REST</span>
            </div>

            <span className="text-xl font-black text-cyan-400 font-mono">+</span>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex-1 min-w-[140px]">
              <span className="text-xs font-mono text-slate-400 block">ESTRUTURAS</span>
              <span className="text-base sm:text-lg font-black text-white">DADOS (JSON/SQL)</span>
            </div>

            <span className="text-xl font-black text-cyan-400 font-mono">+</span>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex-1 min-w-[140px]">
              <span className="text-xs font-mono text-slate-400 block">MODELOS IA</span>
              <span className="text-base sm:text-lg font-black text-white">IA GENERATIVA</span>
            </div>

            <span className="text-2xl font-black text-emerald-400 font-mono">=</span>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex-1 min-w-[170px] shadow-lg shadow-blue-500/25">
              <span className="text-xs font-mono text-blue-100 block">RESULTADO</span>
              <span className="text-base sm:text-lg font-black tracking-wide">AUTOMAÇÃO</span>
            </div>
          </div>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-blue-950/60 group-hover:text-cyan-300 transition-colors inline-block mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aplicação Prática em TI</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
