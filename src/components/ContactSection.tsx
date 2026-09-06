import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
  FileText,
  Shield,
  Linkedin,
  Github,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface ContactSectionProps {
  onOpenCurriculum: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCurriculum }) => {
  return (
    <footer id="contato" className="py-24 bg-[#070b14] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LinkedIn Feature Card */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-[#0c162e] to-slate-900 border border-blue-800/60 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
              REDE PROFISSIONAL
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              CONECTE-SE COM SAMUEL
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Acompanhe minhas atualizações técnicas, discussões sobre infraestrutura de TI, computação em nuvem, observabilidade corporativa e segurança.
            </p>
            <div className="mt-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-footer-linkedin-direct"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>ACESSAR PERFIL NO LINKEDIN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Main Details */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
            CANAIS DIRETOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            VAMOS CONVERSAR?
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Estou à disposição para oportunidades corporativas, projetos de infraestrutura crítica, observabilidade e consultorias operacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone & WhatsApp */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 inline-block mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                TELEFONE & WHATSAPP
              </span>
              <div className="text-lg font-bold text-white mt-1">
                {PERSONAL_INFO.phone}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=Ol%C3%A1%20Samuel,%20vi%20seu%20portf%C3%B3lio%20profissional%20e%20gostaria%20de%20conversar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Iniciar conversa no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 inline-block mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                CORREIO ELETRÔNICO
              </span>
              <div className="text-lg font-bold text-white mt-1 break-all">
                {PERSONAL_INFO.email}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-mono font-bold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar e-mail direto</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 inline-block mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                LOCALIZAÇÃO
              </span>
              <div className="text-lg font-bold text-white mt-1">
                {PERSONAL_INFO.location}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
              Disponibilidade presencial e remota
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Currículo Profissional Completo</div>
              <div className="text-xs text-slate-400">Consulte ou baixe em formato PDF para processos seletivos.</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenCurriculum}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
          >
            VISUALIZAR CURRÍCULO COMPLETO
          </button>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>SAMUEL RODRIGUES LOPES • INFRAESTRUTURA & OBSERVABILIDADE</span>
          </div>
          <div>
            Brasília – DF • {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};
