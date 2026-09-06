import React, { useEffect } from 'react';
import { X, Printer, Download, FileText, CheckCircle2, Building, Calendar, Mail, Phone, MapPin, Globe2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS, TECH_STACK, ACHIEVEMENTS } from '../data';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = `
===================================================================
CURRÍCULO PROFISSIONAL: ${PERSONAL_INFO.name}
===================================================================
${PERSONAL_INFO.headline}
${PERSONAL_INFO.subheadline}

Localização: ${PERSONAL_INFO.location}
Telefone: ${PERSONAL_INFO.phone}
E-mail: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

RESUMO PROFISSIONAL:
${PERSONAL_INFO.summary}

FORMAÇÃO ACADÊMICA:
- ${PERSONAL_INFO.education.degree} | ${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.status})

IDIOMA:
- Inglês: ${PERSONAL_INFO.englishLevel}

EXPERIÊNCIA PROFISSIONAL:
${EXPERIENCES.map(
  (exp) => `
-------------------------------------------------------------------
Empresa: ${exp.company}
Cargo: ${exp.role}
Período: ${exp.period}
${exp.allocation ? `Alocação: ${exp.allocation}` : ''}
Competências: ${exp.badges.join(', ')}

Atividades:
${exp.description.map((d) => `  * ${d}`).join('\n')}
`
).join('\n')}

CERTIFICAÇÕES E CURSOS:
${CERTIFICATIONS.map((c) => `- [${c.issuer}] ${c.title} ${c.year ? `(${c.year})` : ''}`).join('\n')}

STACK TECNOLÓGICA:
${TECH_STACK.map((t) => `* ${t.title}: ${t.items.join(', ')}`).join('\n')}
===================================================================
`.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Curriculo_Samuel_Rodrigues_Lopes.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="curriculum-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0b1222] border border-slate-700/90 rounded-2xl shadow-2xl my-8 overflow-hidden text-left flex flex-col max-h-[92vh]">
        {/* Modal Action Header (Excluded in print) */}
        <div className="p-4 sm:p-5 bg-[#0e162c] border-b border-slate-800 flex items-center justify-between gap-4 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold text-white tracking-wide">
              CURRÍCULO EXECUTIVO • {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              title="Imprimir ou salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Baixar arquivo de texto"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Baixar (.txt)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b1222] text-slate-200 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-bold text-cyan-400 print:text-black mt-1">
              {PERSONAL_INFO.headline}
            </p>
            <p className="text-xs font-mono text-slate-400 print:text-gray-600 mt-1">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Contacts Bar */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-300 print:text-gray-800">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          {/* Resumo */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 print:text-black">
              Resumo Profissional
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-gray-900">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experiência */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 print:text-black">
              Experiência Profissional
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company} className="border-l-2 border-slate-800 pl-4 print:border-gray-400">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-white print:text-black">
                      {exp.company} — <span className="text-cyan-400 print:text-gray-800">{exp.role}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                      {exp.period}
                    </span>
                  </div>
                  {exp.allocation && (
                    <div className="text-xs font-mono text-amber-300 print:text-gray-700 mt-0.5">
                      {exp.allocation}
                    </div>
                  )}
                  <ul className="mt-2 space-y-1 text-xs text-slate-300 print:text-gray-800">
                    {exp.description.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 print:text-black">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formação e Idioma */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 print:text-black">
                Formação Acadêmica
              </h2>
              <div className="text-xs text-slate-300 print:text-gray-900">
                <div className="font-bold text-white print:text-black">{PERSONAL_INFO.education.degree}</div>
                <div>{PERSONAL_INFO.education.institution}</div>
                <div className="text-slate-400 print:text-gray-600 font-mono mt-0.5">{PERSONAL_INFO.education.status}</div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 print:text-black">
                Idioma
              </h2>
              <div className="text-xs text-slate-300 print:text-gray-900">
                <span className="font-bold text-white print:text-black">Inglês:</span> {PERSONAL_INFO.englishLevel}
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 print:text-black">
              Cursos e Certificações
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-900">
              {CERTIFICATIONS.map((c) => (
                <div key={c.title} className="flex items-center gap-2 p-1.5 rounded bg-slate-900/60 print:bg-gray-50">
                  <span className="font-mono text-[10px] font-bold text-cyan-400 print:text-black px-1.5 py-0.5 rounded bg-slate-800 print:bg-gray-200">
                    {c.issuer}
                  </span>
                  <span className="truncate">{c.title} {c.year ? `(${c.year})` : ''}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Tecnológica */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 print:text-black">
              Competências Técnicas
            </h2>
            <div className="space-y-2 text-xs text-slate-300 print:text-gray-900">
              {TECH_STACK.map((t) => (
                <div key={t.title}>
                  <strong className="text-white print:text-black">{t.title}:</strong>{' '}
                  <span className="text-slate-300 print:text-gray-800">{t.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
