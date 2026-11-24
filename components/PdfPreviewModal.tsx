"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileDown, Eye } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface PdfPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const emptySubscribe = () => () => {};

export default function PdfPreviewModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
}: PdfPreviewModalProps) {
  const { lang } = useLanguage();
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);

  // Safe client-side mount check without cascading render warnings
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Lock body scroll while open and restore cleanly on close/unmount
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  const filename = pdfUrl.split("/").pop() || "document.pdf";
  const isLoaded = loadedUrl === pdfUrl;

  if (!isClient || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Full-viewport Backdrop Dimming (covers sticky navbar) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F17]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl bg-[#111827] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="bg-[#0B0F17] border-b border-[#1E293B] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 truncate">
                <div className="w-7 h-7 rounded bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Eye size={14} />
                </div>
                <div className="truncate">
                  <h3 className="text-sm sm:text-base font-semibold text-[#F8FAFC] truncate">
                    {title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#64748B] truncate">
                    {filename}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`${pdfUrl}#navpanes=0&view=FitH`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111827] hover:bg-[#1E293B] border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  title={lang === "id" ? "Buka di Tab Baru" : "Open in New Tab"}
                >
                  <span>{lang === "id" ? "Buka di Tab Baru" : "Open in Tab"}</span>
                  <ExternalLink size={12} className="text-[#38BDF8]" />
                </a>

                <a
                  href={pdfUrl}
                  download={filename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#0B0F17] text-xs font-mono font-semibold transition-colors"
                  title={lang === "id" ? "Download PDF" : "Download PDF"}
                >
                  <FileDown size={13} />
                  <span>Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors ml-1"
                  aria-label="Close PDF preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF Preview with collapsed navpanes */}
            <div className="relative w-full h-[72vh] sm:h-[75vh] bg-[#0B0F17] overflow-hidden flex flex-col">
              {/* Fallback & Helper Bar for Mobile / Non-inline PDF browsers */}
              <div className="sm:hidden bg-[#111827] border-b border-[#1E293B] px-4 py-2 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>{lang === "id" ? "Pratinjau Dokumen" : "Document Preview"}</span>
                <a
                  href={`${pdfUrl}#navpanes=0&view=FitH`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38BDF8] underline font-medium"
                >
                  {lang === "id" ? "Buka di Tab Baru ↗" : "Open in Tab ↗"}
                </a>
              </div>

              <div className="relative flex-1 w-full h-full bg-[#0B0F17]">
                <iframe
                  key={pdfUrl}
                  src={`${pdfUrl}#navpanes=0&view=FitH`}
                  className="w-full h-full border-0"
                  title={title}
                  onLoad={() => setLoadedUrl(pdfUrl)}
                />

                {/* Loading indicator */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F17] text-xs font-mono text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                      <span>{lang === "id" ? "Memuat PDF..." : "Loading PDF..."}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#0B0F17] border-t border-[#1E293B] px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span className="truncate">
                {lang === "id" ? "Tekan ESC atau klik luar untuk menutup" : "Press ESC or click backdrop to close"}
              </span>
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-[#111827] hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
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
