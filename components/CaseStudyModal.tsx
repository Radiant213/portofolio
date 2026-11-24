"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { ClientProject } from "@/data/portfolio";
import { X, ExternalLink, Layers, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  project: ClientProject | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { lang, t } = useLanguage();

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const currentLang = lang;
  const features = project
    ? project.caseStudy.coreFeatures[currentLang] || project.caseStudy.coreFeatures.id
    : [];

  if (!isClient || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop (dims entire viewport including sticky navbar) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0B0F17]/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-[#111827] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#0B0F17] border-b border-[#1E293B] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8]">
                  <Layers size={13} />
                </div>
                <span className="font-mono text-xs text-[#94A3B8]">
                  {project.client}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Title & Metadata */}
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] font-mono text-[11px] text-[#38BDF8] mb-3">
                  <span>{t(project.badge)}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                  {t(project.title)}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#94A3B8]">
                  <span>Klien: <strong className="text-[#F8FAFC]">{project.client}</strong></span>
                  <span>•</span>
                  <span>Peran: <strong className="text-[#F8FAFC]">{t(project.role)}</strong></span>
                  <span>•</span>
                  <span>Periode: <strong className="text-[#F8FAFC]">{t(project.period)}</strong></span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-mono text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2">
                  {lang === "id" ? "Deskripsi Sistem" : "System Overview"}
                </h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {t(project.caseStudy.overview)}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="font-mono text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-3">
                  {lang === "id" ? "Fitur Utama" : "Core Features"}
                </h4>
                <ul className="space-y-2.5">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      <CheckCircle2 size={15} className="text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Details */}
              <div>
                <h4 className="font-mono text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.techStackDetails.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] font-mono text-xs text-[#F8FAFC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional Sandbox Button if sandboxUrl provided */}
              {project.sandboxUrl && (
                <div className="pt-4 border-t border-[#1E293B] flex justify-end">
                  <a
                    href={project.sandboxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#38BDF8] text-[#0B0F17] font-semibold text-xs font-mono hover:bg-[#7dd3fc] transition-colors"
                  >
                    <span>Live Sandbox</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#0B0F17] border-t border-[#1E293B] px-6 py-3 flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>Status: Internal Project</span>
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-[#111827] text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
              >
                {lang === "id" ? "Tutup" : "Close"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
