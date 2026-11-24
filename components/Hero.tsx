"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileDown, Eye } from "lucide-react";
import PdfPreviewModal from "./PdfPreviewModal";

const GitHubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
  </svg>
);

const CredlyIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 3.18l6 3.33v4.49c0 4.23-2.74 8.16-6 9.17-3.26-1.01-6-4.94-6-9.17V8.51l6-3.33zm-1 5.82v5h2v-5h-2zm0-3v2h2V8h-2z" />
  </svg>
);

export default function Hero() {
  const { lang, t } = useLanguage();
  const { personal, socials } = portfolioData;
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Easing curve for high-craft entrance
  const easeOutExpo = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="hero" className="relative pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 md:pb-20 border-b border-[#1E293B] overflow-hidden">
      {/* Subtle background architectural grid texture */}
      <div className="absolute inset-0 architectural-grid opacity-100 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (~60% = 7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Badge with Emerald Dot */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#1E293B] mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                {t(personal.statusBadge)}
              </span>
            </motion.div>

            {/* Heading (h1) */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: easeOutExpo }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12] mb-4"
            >
              {personal.name}
            </motion.h1>

            {/* Monospace Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: easeOutExpo }}
              className="flex items-center gap-2 mb-6 text-sm sm:text-base font-mono text-[#38BDF8] bg-[#111827]/70 border border-[#1E293B] px-3.5 py-1.5 rounded"
            >
              <span className="text-[#64748B]">$</span>
              <span>{t(personal.tagline)}</span>
            </motion.div>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: easeOutExpo }}
              className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mb-8"
            >
              {t(personal.shortBio)}
            </motion.p>

            {/* CTAs and Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: easeOutExpo }}
              className="flex flex-wrap items-center gap-3.5"
            >
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38BDF8] text-[#0B0F17] font-semibold text-sm hover:bg-[#7dd3fc] transition-colors shadow-sm"
              >
                <span>{lang === "id" ? "Lihat Proyek" : "View Projects"}</span>
                <ArrowRight size={15} />
              </a>

              {/* Secondary CTA: Preview & Download CV */}
              <button
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111827] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-[#F8FAFC] font-medium text-sm transition-all"
              >
                <Eye size={15} className="text-[#38BDF8]" />
                <span>{lang === "id" ? "Lihat CV" : "View CV"}</span>
              </button>

              <a
                href={socials.cvPdf}
                download="CV-Galang-Maruf-Sherinian.pdf"
                className="p-2.5 rounded-lg bg-[#111827] hover:bg-[#131A26] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] transition-all"
                title={lang === "id" ? "Download PDF" : "Download PDF"}
                aria-label="Download CV"
              >
                <FileDown size={16} />
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pl-2 border-l border-[#1E293B] ml-1">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#334155] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GitHubIcon size={16} />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#334155] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedInIcon size={16} />
                </a>

                <a
                  href={socials.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#334155] transition-all"
                  aria-label="Credly Profile"
                  title="Credly Profile"
                >
                  <CredlyIcon size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (~40% = 5 cols on lg) - Clean Redesigned Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeOutExpo }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-end relative"
          >
            {/* Subtle Radial Cyan/Slate Backlight aligned dead-center behind head */}
            <div className="absolute top-[20%] sm:top-[24%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none z-0" />

            {/* Minimal Editorial Geometric Accent: Circular horizontal-striped SVG centered behind head */}
            <div className="absolute -top-1 sm:-top-2 lg:-top-3 left-[48%] -translate-x-1/2 flex items-start justify-center pointer-events-none select-none z-0">
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-center justify-center"
              >
                <svg
                  width="440"
                  height="440"
                  viewBox="0 0 440 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
                >
                  <defs>
                    <clipPath id="hero-stripe-circle-clip">
                      <circle cx="220" cy="220" r="160" />
                    </clipPath>
                    <radialGradient id="hero-portal-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.09" />
                      <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.02" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Soft Radial Backing */}
                  <circle cx="220" cy="220" r="160" fill="url(#hero-portal-glow)" />

                  {/* Horizontal Stripes (Clipped to circle, 14% opacity #38BDF8) */}
                  <g clipPath="url(#hero-stripe-circle-clip)" stroke="#38BDF8" strokeWidth="1.25" opacity="0.14">
                    <line x1="40" y1="70" x2="400" y2="70" />
                    <line x1="40" y1="84" x2="400" y2="84" />
                    <line x1="40" y1="98" x2="400" y2="98" />
                    <line x1="40" y1="112" x2="400" y2="112" />
                    <line x1="40" y1="126" x2="400" y2="126" />
                    <line x1="40" y1="140" x2="400" y2="140" />
                    <line x1="40" y1="154" x2="400" y2="154" />
                    <line x1="40" y1="168" x2="400" y2="168" />
                    <line x1="40" y1="182" x2="400" y2="182" />
                    <line x1="40" y1="196" x2="400" y2="196" />
                    <line x1="40" y1="210" x2="400" y2="210" />
                    <line x1="40" y1="224" x2="400" y2="224" />
                    <line x1="40" y1="238" x2="400" y2="238" />
                    <line x1="40" y1="252" x2="400" y2="252" />
                    <line x1="40" y1="266" x2="400" y2="266" />
                    <line x1="40" y1="280" x2="400" y2="280" />
                    <line x1="40" y1="294" x2="400" y2="294" />
                    <line x1="40" y1="308" x2="400" y2="308" />
                    <line x1="40" y1="322" x2="400" y2="322" />
                    <line x1="40" y1="336" x2="400" y2="336" />
                    <line x1="40" y1="350" x2="400" y2="350" />
                    <line x1="40" y1="364" x2="400" y2="364" />
                  </g>

                  {/* Concentric Minimalist Editorial Rings */}
                  <circle cx="220" cy="220" r="160" stroke="#38BDF8" strokeWidth="1" opacity="0.15" />
                  <circle cx="220" cy="220" r="185" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 6" opacity="0.10" />
                  <circle cx="220" cy="220" r="210" stroke="#1E293B" strokeWidth="1" opacity="0.45" />
                </svg>
              </motion.div>
            </div>

            {/* Transparent Half-Body Portrait nudged left to compensate for empty left margin in PNG */}
            {/* Outer wrapper: Bottom fade (black 85% -> transparent 100%) so hands & blazer stay solid */}
            <div
              className="relative w-full max-w-[370px] sm:max-w-[440px] lg:max-w-[500px] aspect-[3/4] -mt-4 sm:-mt-6 lg:-mt-8 -translate-x-4 sm:-translate-x-6 lg:-translate-x-8 flex items-end justify-center z-10 bg-transparent border-0 shadow-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            >
              {/* Inner wrapper: Extreme right edge fade (black 88% -> transparent 100%) so cropped sleeve blends naturally into #0B0F17 */}
              <div
                className="relative w-full h-full flex items-end justify-center bg-transparent border-0 shadow-none"
                style={{
                  maskImage: "linear-gradient(to right, black 88%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, black 88%, transparent 100%)",
                }}
              >
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 370px, (max-width: 1024px) 440px, 500px"
                  className="object-contain object-bottom select-none pointer-events-none bg-transparent border-0 shadow-none contrast-[1.03] saturate-[0.95]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Reusable PDF Preview Modal for CV */}
      <PdfPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        pdfUrl={socials.cvPdf}
        title={lang === "id" ? "Curriculum Vitae — Galang Ma'ruf Sherinian" : "Curriculum Vitae — Galang Ma'ruf Sherinian"}
      />
    </section>
  );
}
