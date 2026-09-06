import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Server, Activity, Shield, Terminal, Cpu, CheckCircle2, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-[#090e1a] border-y border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo in an operational NOC / Monitoring composition */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-indigo-600/20 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl bg-[#0b1222] border border-slate-700/80 p-3 shadow-2xl overflow-hidden group">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Activity className="w-3.5 h-3.5" />
                    ATUAÇÃO EM DATA CENTER
                  </span>
                  <span className="text-slate-400">BRASÍLIA - DF</span>
                </div>

                {/* Secondary Composition of Samuel */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[4/4.5]">
                  <img
                    src="/samuel-monitors.png"
                    alt="Samuel Rodrigues Lopes - Atuação Operacional e Observabilidade"
                    className="w-full h-full object-cover object-center filter contrast-[1.04] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/samuel-github.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#0b1222]/90 backdrop-blur-md border border-slate-700/70 text-left">
                    <div className="text-xs font-bold text-white">
                      Samuel Rodrigues Lopes
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400">
                      Monitoramento Proativo & Observabilidade Contínua
                    </div>
                  </div>
                </div>

                {/* Quick Indicators below photo */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-slate-300">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    <span>Linux & Windows</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-slate-300">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Segurança & Backup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Curricular Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Perfil Profissional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                SOBRE SAMUEL
              </h2>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                Dedicação à estabilidade e resiliência de operações críticas de tecnologia
              </p>
            </div>

            {/* Paragraph 1 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-base text-slate-200 leading-relaxed">
                &ldquo;Com mais de 10 anos de experiência em ambientes de TI, possuo atuação em ambientes de missão crítica e data centers de alta complexidade.&rdquo;
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-base text-slate-200 leading-relaxed">
                &ldquo;Minha experiência envolve monitoramento de sistemas corporativos, administração e manutenção de servidores Linux e Windows, storage, backup, observabilidade, gestão de incidentes, controle de acessos e infraestrutura.&rdquo;
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-base text-slate-200 leading-relaxed">
                &ldquo;Também venho ampliando minha atuação em Cloud Computing, automação com Python, APIs e Inteligência Artificial Generativa.&rdquo;
              </p>
            </div>

            {/* Curricular Highlights Pills */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Sala Cofre e Data Centers</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Zabbix, Grafana & Control-M</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Veritas NetBackup & Storage</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Automação Python & IA Generativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
