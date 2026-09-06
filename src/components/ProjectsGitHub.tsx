import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, Star, GitBranch, FolderGit2, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { GitHubRepo } from '../types';

export const ProjectsGitHub: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fallbackRepos: GitHubRepo[] = [
    {
      id: 1279155195,
      name: 'whatsapp',
      description: 'Automação para disparo e tratamento de mensagens via Python e integração com serviços.',
      html_url: 'https://github.com/samuel-RLprog/whatsapp',
      language: 'Python',
      stargazers_count: 0,
      updated_at: '2026-06-28T08:13:39Z',
    },
    {
      id: 1279155196,
      name: 'site',
      description: 'Repositório de infraestrutura web e código corporativo.',
      html_url: 'https://github.com/samuel-RLprog/site',
      language: 'TypeScript',
      stargazers_count: 0,
      updated_at: '2026-09-04T21:15:57Z',
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUser}/repos?sort=updated`);
        if (!res.ok) throw new Error('Falha ao carregar repositórios do GitHub');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.warn('Usando repositórios locais para demonstração resiliente:', err);
        setRepos(fallbackRepos);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projetos" className="py-24 bg-[#090e1a] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Código, Scripts & Automação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            PROJETOS E GITHUB
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Repositórios públicos com rotinas de automação, scripts Python e iniciativas de desenvolvimento.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 hover:text-white hover:border-cyan-400 text-xs sm:text-sm font-mono font-bold transition-all shadow-md"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>VER TODOS OS REPOSITÓRIOS NO GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repositories Cards */}
        {loading ? (
          <div className="flex items-center justify-center py-12 text-slate-400 font-mono text-sm gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
            <span>Consultando GitHub API...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="p-2 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800">
                      <Terminal className="w-4 h-4" />
                    </span>
                    {repo.language && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-950 text-cyan-300 border border-blue-800">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {repo.description || 'Repositório de automação e desenvolvimento de Samuel Rodrigues Lopes.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>main</span>
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                  >
                    <span>ACESSAR CÓDIGO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
