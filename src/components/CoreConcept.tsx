import React, { useState, useEffect } from 'react';
import { CORE_FLOW_STEPS } from '../data';
import { ChevronRight, ArrowDown, Shield, CheckCircle } from 'lucide-react';

export const CoreConcept: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto-progress the discrete animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % CORE_FLOW_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="conceito-central" className="py-20 bg-[#070b14] relative overflow-hidden">
      {/* Subtle Background Circuit Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Princípio Operacional Fundamental</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            EXPERIÊNCIA QUE GERA CONFIABILIDADE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            &ldquo;Minha experiência profissional foi construída em ambientes onde disponibilidade,
            estabilidade, segurança e capacidade de resposta são fundamentais.&rdquo;
          </p>
        </div>

        {/* The 6-Step Pipeline Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {CORE_FLOW_STEPS.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={item.title}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 flex flex-col justify-between relative ${
                  isActive
                    ? 'bg-gradient-to-b from-slate-900 to-[#0d162b] border-cyan-500 shadow-lg shadow-cyan-500/10 scale-[1.03] z-10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.step}
                  </span>
                  {isActive ? (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-700" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`text-sm sm:text-base font-bold tracking-tight mb-2 ${
                      isActive ? 'text-cyan-400' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow to next item (Desktop right arrow, mobile down arrow) */}
                {index < CORE_FLOW_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 items-center justify-center text-cyan-400">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
                {index < CORE_FLOW_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-3 text-slate-600">
                    <ArrowDown className="w-4 h-4 text-cyan-500/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">
              Etapa Selecionada: <strong className="text-white">{CORE_FLOW_STEPS[activeStep].title}</strong> — {CORE_FLOW_STEPS[activeStep].desc}
            </span>
          </div>
          <div className="text-slate-400">
            Ciclo Operacional Contínuo
          </div>
        </div>
      </div>
    </section>
  );
};
