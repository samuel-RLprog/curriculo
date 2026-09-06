import React, { useState } from 'react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data';
import {
  GraduationCap,
  Award,
  Globe2,
  Calendar,
  Shield,
  Cloud,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  const getIssuerBadge = (issuer: string) => {
    switch (issuer) {
      case 'Fortinet':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Cisco':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Microsoft':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="formacao" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Qualificação Técnica & Acadêmica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            FORMAÇÃO E CERTIFICAÇÕES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Aperfeiçoamento contínuo em cibersegurança, computação em nuvem, governança e desenvolvimento.
          </p>
        </div>

        {/* Education & Language Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Degree Card */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    ENSINO SUPERIOR
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                </div>
              </div>
              <p className="text-base text-slate-300 mt-3">
                Instituição:{' '}
                <strong className="text-white">{PERSONAL_INFO.education.institution}</strong>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.education.status}</span>
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                EM ANDAMENTO
              </span>
            </div>
          </div>

          {/* Language Card */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 inline-block mb-3">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                IDIOMA
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                INGLÊS
              </h3>
              <div className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800 text-cyan-300 text-sm font-mono font-bold">
                {PERSONAL_INFO.englishLevel}
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Leitura técnica fluente de manuais, documentação internacional, logs de sistemas e interfaces corporativas.
            </p>
          </div>
        </div>

        {/* Certifications Subsection */}
        <div id="certificacoes" className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
                <Award className="w-6 h-6 text-cyan-400" />
                <span>Cursos e Certificações Oficiais</span>
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {CERTIFICATIONS.length} Certificações e Treinamentos Concluídos
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Todas' },
                { id: 'cybersecurity', label: 'Cibersegurança' },
                { id: 'cloud', label: 'Cloud' },
                { id: 'programming', label: 'Python / Dev' },
                { id: 'infra', label: 'Infra & Zabbix' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    filter === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Certifications Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCerts.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${getIssuerBadge(
                        cert.issuer
                      )}`}
                    >
                      {cert.issuer}
                    </span>
                    {cert.year && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.year}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Certificado Concluído</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
