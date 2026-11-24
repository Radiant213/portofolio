"use client";

import { useLanguage } from "./LanguageContext";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 bg-[#0B0F17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#64748B]">
        {/* Left: Brand mark & Copyright */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex items-center text-base font-bold tracking-tight text-slate-50 transition-opacity hover:opacity-90"
            aria-label="GMS Home"
          >
            <span>GMS</span>
            <span className="text-[#38BDF8] transition-all duration-300 group-hover:text-sky-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.85)]">
              .
            </span>
          </a>
          <span className="text-[#334155]">•</span>
          <span>{portfolioData.footer.copyright}</span>
        </div>

        {/* Center: Tech note */}
        <div className="text-center sm:text-left text-[11px] text-[#475569]">
          {portfolioData.footer.designedWith}
        </div>

        {/* Right: Anchor links */}
        <div className="flex items-center gap-4 text-xs">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[#64748B] hover:text-[#38BDF8] transition-colors"
            >
              {t(link.label)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
