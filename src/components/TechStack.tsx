import React, { useState } from 'react';
import { TECH_STACK } from '../data';
import {
  Activity,
  Server,
  Cloud,
  Network,
  Database,
  Cpu,
  ShieldCheck,
  Search,
  Check,
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Activity,
    Server,
    Cloud,
    Network,
    Database,
    Cpu,
    ShieldCheck,
  };

  const filteredCategories = TECH_STACK.filter((category) => {
    if (selectedCategory !== 'ALL' && category.title !== selectedCategory) {
      return false;
    }
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    const titleMatches = category.title.toLowerCase().includes(term);
    const itemMatches = category.items.some((item) => item.toLowerCase().includes(term));
    return titleMatches || itemMatches;
  });

  return (
    <section id="tecnologias" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema Técnico Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            STACK TECNOLÓGICA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Competências estruturadas e aplicadas ativamente em ambientes corporativos de produção.
          </p>
        </div>

        {/* Filter controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="tech-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar tecnologia (ex: Zabbix, Azure, Python)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                selectedCategory === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              TODAS
            </button>
            {TECH_STACK.map((cat) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors truncate max-w-[200px] ${
                  selectedCategory === cat.title
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Server;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white tracking-wide uppercase">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">
                        {category.items.length} Tecnologias
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-cyan-300 transition-colors"
                      >
                        <Check className="w-3 h-3 text-cyan-400" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
