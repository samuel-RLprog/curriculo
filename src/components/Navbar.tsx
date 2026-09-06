import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink, Shield, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  onOpenCurriculum: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCurriculum }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Observabilidade', href: '#observabilidade' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Realizações', href: '#realizacoes' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Certificações', href: '#certificacoes' },
    { label: 'Vídeo', href: '#video' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Identity */}
        <a
          href="#inicio"
          id="navbar-brand-link"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-[#0b1120] rounded-[7px] flex items-center justify-center group-hover:bg-[#0e162b] transition-colors">
              <span className="font-mono text-sm font-bold text-cyan-400">SRL</span>
            </div>
          </div>
          <div>
            <span className="block text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              SAMUEL RODRIGUES LOPES
            </span>
            <span className="block text-[11px] font-mono text-slate-400 tracking-wider uppercase">
              Infraestrutura • Observabilidade • Cloud
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            id="nav-curriculum-btn"
            onClick={onOpenCurriculum}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500/60 hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Currículo</span>
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/30"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            type="button"
            id="nav-mobile-cv-btn"
            onClick={onOpenCurriculum}
            className="sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium text-cyan-400 bg-slate-900 border border-slate-800"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="xl:hidden bg-[#070b14]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCurriculum();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Visualizar / Baixar Currículo</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800"
              >
                <span>GitHub</span>
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
