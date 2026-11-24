"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { MapPin, Mail, Check, Copy, Send, Phone, ArrowUpRight } from "lucide-react";

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

export default function ContactSection() {
  const { t } = useLanguage();
  const { contact, socials, personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // PRESERVED WORKING SUBMISSION LOGIC:
  // Submits to https://formsubmit.co/ajax/galangmaruff1@gmail.com with exact payload structure
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/galangmaruff1@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-sm text-[#38BDF8] font-semibold tracking-wider">
            {contact.sectionIndex}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            {t(contact.sectionTitle)}
          </h2>
          <div className="flex-1 h-px bg-[#1E293B] ml-4"></div>
        </motion.div>

        {/* 2-Column Layout: Direct Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (5 cols): Direct Info & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-3">
                {t(contact.title)}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {t(contact.description)}
              </p>
            </div>

            {/* Direct Details Box */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 space-y-4 shadow-lg">
              {/* Location */}
              <div className="flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
                <div className="p-2 rounded-lg bg-[#0B0F17] border border-[#1E293B] text-[#38BDF8]">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-[#64748B]">LOKASI</div>
                  <div className="text-[#F8FAFC] font-medium">{t(personal.location)}</div>
                </div>
              </div>

              {/* Email with Copy Action */}
              <div className="flex items-center justify-between gap-2 p-3 bg-[#0B0F17] border border-[#1E293B] rounded-lg">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={15} className="text-[#38BDF8] shrink-0" />
                  <span className="font-mono text-xs text-[#F8FAFC] truncate">
                    {socials.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111827] hover:bg-[#1E293B] border border-[#1E293B] text-xs font-mono text-[#38BDF8] transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-[#10B981]" />
                      <span className="text-[#10B981]">{t(contact.copiedLabel)}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>{t(contact.copyEmailLabel)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp direct link */}
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#0B0F17] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#10B981]/50 rounded-lg text-xs font-mono text-[#F8FAFC] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-[#10B981]" />
                  <span>WhatsApp (+62 878-7844-4402)</span>
                </div>
                <ArrowUpRight size={13} className="text-[#64748B] group-hover:text-[#10B981] transition-colors" />
              </a>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-3">
                {"// Media Sosial & Portofolio"}
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111827] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
                >
                  <GitHubIcon size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111827] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-all"
                >
                  <LinkedInIcon size={14} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={socials.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111827] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-all"
                >
                  <CredlyIcon size={14} />
                  <span>Credly</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Preserved Contact Form with Clean Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 shadow-xl">
              {/* Clean Humanized Header (Replaced overly nerdy labels) */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B] font-mono text-xs text-[#64748B]">
                <span className="flex items-center gap-2 text-[#F8FAFC] font-semibold text-sm">
                  <Send size={14} className="text-[#38BDF8]" />
                  <span>{t(contact.formHeaderTitle)}</span>
                </span>
                <span className="text-[#64748B] text-[11px]">inbox@galang</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email inputs in 2 columns on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-[#94A3B8] uppercase tracking-wider"
                    >
                      {t(contact.form.nameLabel)} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t(contact.form.namePlaceholder)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder:text-[#475569] focus:outline-none focus:border-[#38BDF8] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-[#94A3B8] uppercase tracking-wider"
                    >
                      {t(contact.form.emailLabel)} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={t(contact.form.emailPlaceholder)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder:text-[#475569] focus:outline-none focus:border-[#38BDF8] transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Message input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-[#94A3B8] uppercase tracking-wider"
                  >
                    {t(contact.form.messageLabel)} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t(contact.form.messagePlaceholder)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder:text-[#475569] focus:outline-none focus:border-[#38BDF8] transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {/* PRESERVED Hidden Config Fields for FormSubmit */}
                <input
                  type="hidden"
                  name="_subject"
                  value="🔔 Ada Pesan Masuk dari Web Portofolio!"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#0B0F17] font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  <span>
                    {status === "submitting"
                      ? t(contact.form.submittingButton)
                      : t(contact.form.submitButton)}
                  </span>
                </button>

                {/* Feedback states */}
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-[#10B981]/10 border border-[#10B981]/40 text-xs font-mono text-[#10B981]">
                    ✓ {t(contact.form.successMessage)}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/40 text-xs font-mono text-[#ef4444]">
                    ✕ {t(contact.form.errorMessage)}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
