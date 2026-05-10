"use client";

import { useState } from "react";

interface ProjectIframeProps {
  url: string;
  title: string;
  description: string;
}

export default function ProjectIframe({ url, title, description }: ProjectIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* View Normal (Preview Kecil) */}
      <div className="flex flex-col gap-6 animate-fade-in w-full" style={{ animationDelay: "0.2s" }}>
        
        {/* Browser Mockup Area */}
        <div className="glass-panel overflow-hidden border border-[var(--glass-border)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full rounded-[16px] xl:rounded-[24px]">
          {/* Header Mockup */}
          <div className="bg-[rgba(255,255,255,0.05)] flex items-center gap-2 border-b border-[var(--glass-border)] py-3 px-5">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <div className="ml-4 flex-1">
              <div className="bg-[rgba(0,0,0,0.3)] rounded-md text-xs text-center py-2 text-[var(--text-secondary)] font-mono truncate px-3 max-w-lg mx-auto border border-[rgba(255,255,255,0.05)] shadow-inner">
                {url}
              </div>
            </div>
            {/* Tombol Expand */}
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-[var(--text-secondary)] hover:text-white transition-colors p-1"
              title="Perbesar Preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
            </button>
          </div>
          
          {/* Iframe Container - Tingginya dibatasi "dikit aja" biar nggak kebesaran */}
          <div className="relative bg-[#000] w-full h-[320px] md:h-[420px] group">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#121016]">
                <div className="flex flex-col items-center gap-3">
                  <svg className="animate-spin h-8 w-8 text-[var(--accent-color)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-xs tracking-wide text-[var(--text-secondary)]">Memuat...</span>
                </div>
              </div>
            )}
            <iframe 
              src={url} 
              className="w-full h-full border-none pointer-events-none" // pointer-events-none agar tidak mengganggu scroll user
              onLoad={() => setIsLoading(false)}
              title={title}
              sandbox="allow-scripts allow-same-origin"
            />
            {/* Overlay klik untuk perbesar */}
            <div 
              className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300"
              onClick={() => setIsExpanded(true)}
            >
              <div className="opacity-0 group-hover:opacity-100 px-6 py-3 rounded-full bg-black/60 text-white font-medium border border-[rgba(255,255,255,0.2)] backdrop-blur-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                Perbesar Layar
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="px-2 mt-1 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="max-w-3xl text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">{title}</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              {description}
            </p>
          </div>
          <div className="shrink-0 flex items-start mt-2">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-7 py-3 rounded-full border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-black hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all duration-300"
            >
              Buka Tab Baru
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Expanded View (Modal Layar Penuh) */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="w-full h-full flex flex-col glass-panel border border-[rgba(255,255,255,0.1)] rounded-[16px] xl:rounded-[24px] overflow-hidden bg-black shadow-2xl">
            {/* Modal Header */}
            <div className="bg-[rgba(255,255,255,0.05)] flex items-center justify-between border-b border-[var(--glass-border)] py-3 px-5 pr-4">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-[var(--text-secondary)] truncate max-w-[200px] md:max-w-md">{url}</span>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-red-500 hover:text-white text-[var(--text-secondary)] transition-all text-sm font-bold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Perkecil / Tutup
              </button>
            </div>
            
            {/* Modal Iframe Content */}
            <div className="w-full flex-1 bg-black relative">
              <iframe 
                src={url} 
                className="absolute inset-0 w-full h-full border-none"
                title={title + " - Mode Layar Penuh"}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
