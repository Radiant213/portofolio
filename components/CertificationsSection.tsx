"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData, Certificate } from "@/data/portfolio";
import PdfPreviewModal from "./PdfPreviewModal";
import {
  ExternalLink,
  ShieldCheck,
  Languages,
  Trophy,
  CheckCircle,
  Eye,
} from "lucide-react";

export default function CertificationsSection() {
  const { lang, t } = useLanguage();
  const { certifications } = portfolioData;
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const getIssuerBadge = (type: Certificate["issuerType"]) => {
    switch (type) {
      case "aws":
        return {
          label: "AWS / Komdigi",
          color: "border-[#eab308]/40 text-[#facc15] bg-[#eab308]/10",
        };
      case "dicoding":
        return {
          label: "Dicoding Indonesia",
          color: "border-[#38BDF8]/40 text-[#38BDF8] bg-[#38BDF8]/10",
        };
      case "ets":
        return {
          label: "ETS / PT ITC",
          color: "border-[#10B981]/40 text-[#10B981] bg-[#10B981]/10",
        };
      case "jlpt":
        return {
          label: "Japan Foundation / JEES",
          color: "border-[#f43f5e]/40 text-[#fb7185] bg-[#f43f5e]/10",
        };
      default:
        return {
          label: "Certified",
          color: "border-[#1E293B] text-[#94A3B8] bg-[#111827]",
        };
    }
  };

  return (
    <section id="certifications" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-sm text-[#38BDF8] font-semibold tracking-wider">
            {certifications.sectionIndex}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            {t(certifications.sectionTitle)}
          </h2>
          <div className="flex-1 h-px bg-[#1E293B] ml-4"></div>
        </motion.div>

        {/* Credly Digital Badges Banner / Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
        >
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0B0F17] border border-[#1E293B] flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-[#38BDF8]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                <span>{t(certifications.credlyBadge.title)}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              </h3>
              <p className="text-xs text-[#94A3B8]">
                {t(certifications.credlyBadge.description)}
              </p>
            </div>
          </div>

          <a
            href={certifications.credlyBadge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B0F17] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs font-mono text-[#F8FAFC] hover:text-[#38BDF8] transition-all self-start sm:self-auto shrink-0"
          >
            <span>{t(certifications.credlyBadge.buttonText)}</span>
            <ExternalLink size={12} className="text-[#38BDF8]" />
          </a>
        </motion.div>

        {/* 5 Certifications Grid with Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.items.map((cert, idx) => {
            const badge = getIssuerBadge(cert.issuerType);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Top Thumbnail Preview */}
                  <div
                    onClick={() => setSelectedPdf({ url: cert.file, title: t(cert.title) })}
                    className="relative w-full aspect-[16/10] bg-[#0B0F17] overflow-hidden cursor-pointer border-b border-[#1E293B] group-hover:border-[#334155] transition-colors"
                  >
                    <Image
                      src={cert.thumb}
                      alt={t(cert.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Hover Overlay with Preview Icon */}
                    <div className="absolute inset-0 bg-[#0B0F17]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-[#F8FAFC]">
                      <div className="px-3 py-1.5 rounded-full bg-[#111827]/90 border border-[#38BDF8]/40 flex items-center gap-2">
                        <Eye size={13} className="text-[#38BDF8]" />
                        <span>{t(certifications.previewPdfButton)}</span>
                      </div>
                    </div>

                    {/* Issuer Pill on thumbnail top-right */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur-md ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Date */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-2">
                      <span className="text-[#94A3B8] font-medium">{cert.issuer}</span>
                      <span>{t(cert.date)}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-2.5 leading-snug">
                      {t(cert.title)}
                    </h4>

                    {/* Score or Weight */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-[11px] font-mono text-[#38BDF8] mb-3">
                      <CheckCircle size={11} className="text-[#10B981]" />
                      <span>{t(cert.scoreOrWeight)}</span>
                    </div>

                    {/* Credential ID */}
                    <div className="font-mono text-[11px] text-[#64748B] truncate" title={cert.credentialId}>
                      <span className="text-[#475569]">ID: </span>
                      <span className="text-[#94A3B8]">{cert.credentialId}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons: Preview PDF + Open in New Tab */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPdf({ url: cert.file, title: t(cert.title) })}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0B0F17] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs font-mono text-[#F8FAFC] hover:text-[#38BDF8] transition-all"
                  >
                    <Eye size={12} className="text-[#38BDF8]" />
                    <span>{t(certifications.previewPdfButton)}</span>
                  </button>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0B0F17] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/40 text-[#94A3B8] hover:text-[#38BDF8] transition-all"
                    title={lang === "id" ? "Buka di Tab Baru ↗" : "Open in New Tab ↗"}
                    aria-label="Open PDF in new tab"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Highlights Strip (Compact 2-item list) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] border border-[#1E293B] rounded-xl p-5"
        >
          <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-3">
            {"// " + t(certifications.additionalHighlights.title)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Languages */}
            <div className="flex items-start gap-3 bg-[#0B0F17] border border-[#1E293B] p-3.5 rounded-lg">
              <div className="p-2 rounded bg-[#111827] text-[#38BDF8] shrink-0">
                <Languages size={16} />
              </div>
              <div>
                <div className="font-mono text-xs text-[#64748B] mb-0.5">
                  {t(certifications.additionalHighlights.languages.label)}
                </div>
                <div className="text-sm font-medium text-[#F8FAFC]">
                  {t(certifications.additionalHighlights.languages.value)}
                </div>
              </div>
            </div>

            {/* Honours */}
            <div className="flex items-start gap-3 bg-[#0B0F17] border border-[#1E293B] p-3.5 rounded-lg">
              <div className="p-2 rounded bg-[#111827] text-[#38BDF8] shrink-0">
                <Trophy size={16} />
              </div>
              <div>
                <div className="font-mono text-xs text-[#64748B] mb-0.5">
                  {t(certifications.additionalHighlights.achievements.label)}
                </div>
                <div className="text-sm font-medium text-[#F8FAFC]">
                  {t(certifications.additionalHighlights.achievements.value)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Reusable PDF Preview Modal */}
      <PdfPreviewModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf?.url || ""}
        title={selectedPdf?.title || ""}
      />
    </section>
  );
}
