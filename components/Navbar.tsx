"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, FileDown, Eye } from "lucide-react";
import PdfPreviewModal from "./PdfPreviewModal";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Top Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top 2px Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#38BDF8] origin-left z-[100] pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
          scrolled
            ? "bg-[#0B0F17]/90 backdrop-blur-md border-[#1E293B]"
            : "bg-[#0B0F17]/70 backdrop-blur-sm border-[#1E293B]/60"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left: Brand mark */}
          <a
            href="#"
            className="group flex items-center text-xl font-bold tracking-tight text-slate-50 transition-opacity hover:opacity-90"
            aria-label="GMS Home"
          >
            <span>GMS</span>
            <span className="text-[#38BDF8] transition-all duration-300 group-hover:text-sky-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.85)]">
              .
            </span>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] px-3 py-1.5 rounded transition-colors hover:bg-[#111827]"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Right: Language Switcher + CV Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle with Spring Pill layoutId */}
            <div className="relative flex items-center bg-[#111827] border border-[#1E293B] rounded p-0.5 font-mono text-xs">
              <button
                onClick={() => setLang("id")}
                className={`relative px-2.5 py-1 rounded transition-colors z-10 ${
                  lang === "id"
                    ? "text-[#38BDF8] font-bold"
                    : "text-[#64748B] hover:text-[#94A3B8]"
                }`}
                title="Bahasa Indonesia"
              >
                {lang === "id" && (
                  <motion.div
                    layoutId="activeLangIndicator"
                    className="absolute inset-0 bg-[#1E293B] rounded"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">ID</span>
              </button>

              <button
                onClick={() => setLang("en")}
                className={`relative px-2.5 py-1 rounded transition-colors z-10 ${
                  lang === "en"
                    ? "text-[#38BDF8] font-bold"
                    : "text-[#64748B] hover:text-[#94A3B8]"
                }`}
                title="English"
              >
                {lang === "en" && (
                  <motion.div
                    layoutId="activeLangIndicator"
                    className="absolute inset-0 bg-[#1E293B] rounded"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">EN</span>
              </button>
            </div>

            {/* View CV Trigger */}
            <button
              onClick={() => setCvModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111827] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/40 text-xs font-mono text-[#F8FAFC] hover:text-[#38BDF8] transition-all"
            >
              <Eye size={13} className="text-[#38BDF8]" />
              <span>{lang === "id" ? "Lihat CV" : "View CV"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Toggle */}
            <div className="relative flex items-center bg-[#111827] border border-[#1E293B] rounded p-0.5 font-mono text-xs">
              <button
                onClick={() => setLang("id")}
                className={`relative px-2 py-0.5 rounded transition-colors z-10 ${
                  lang === "id"
                    ? "text-[#38BDF8] font-bold"
                    : "text-[#64748B]"
                }`}
              >
                {lang === "id" && (
                  <motion.div
                    layoutId="activeLangIndicatorMobile"
                    className="absolute inset-0 bg-[#1E293B] rounded"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">ID</span>
              </button>

              <button
                onClick={() => setLang("en")}
                className={`relative px-2 py-0.5 rounded transition-colors z-10 ${
                  lang === "en"
                    ? "text-[#38BDF8] font-bold"
                    : "text-[#64748B]"
                }`}
              >
                {lang === "en" && (
                  <motion.div
                    layoutId="activeLangIndicatorMobile"
                    className="absolute inset-0 bg-[#1E293B] rounded"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">EN</span>
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] rounded bg-[#111827] border border-[#1E293B]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#1E293B] bg-[#0B0F17]/98 px-4 py-4 space-y-2 backdrop-blur-xl">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-sm text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#111827] px-3 py-2 rounded transition-colors"
              >
                {t(link.label)}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1E293B] flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCvModalOpen(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded bg-[#111827] border border-[#1E293B] font-mono text-xs text-[#F8FAFC] hover:text-[#38BDF8]"
              >
                <Eye size={14} className="text-[#38BDF8]" />
                <span>{lang === "id" ? "Lihat CV" : "View CV"}</span>
              </button>

              <a
                href={portfolioData.socials.cvPdf}
                download="CV-Galang-Maruf-Sherinian.pdf"
                className="p-2.5 rounded bg-[#111827] border border-[#1E293B] text-[#38BDF8] hover:text-[#F8FAFC]"
                title="Download CV"
              >
                <FileDown size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Reusable PDF Preview Modal for CV */}
      <PdfPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        pdfUrl={portfolioData.socials.cvPdf}
        title={lang === "id" ? "Curriculum Vitae — Galang Ma'ruf Sherinian" : "Curriculum Vitae — Galang Ma'ruf Sherinian"}
      />
    </>
  );
}
