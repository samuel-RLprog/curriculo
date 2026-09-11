import React from 'react';
import { Play, Video, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-24 bg-[#090e1a] border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Apresentação em Vídeo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MEU EM VÍDEO
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Conheça um pouco mais sobre minhas habilidades, nessa apresentação em vídeo.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-2xl bg-[#0b1222] border border-slate-700/80 p-3 sm:p-5 shadow-2xl overflow-hidden group">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-2xl blur-lg pointer-events-none opacity-50" />

          {/* 16:9 Aspect Ratio Video Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${PERSONAL_INFO.youtubeVideoId}?rel=0&modestbranding=1`}
              title="Samuel Rodrigues Lopes - Apresentação Profissional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>

          {/* Caption bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              <span>Apresentação Institucional & Carreira</span>
            </div>
            <a
              href={PERSONAL_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Abrir no YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
