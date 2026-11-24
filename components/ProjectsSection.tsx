"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData, ClientProject } from "@/data/portfolio";
import CaseStudyModal from "./CaseStudyModal";
import { ExternalLink, Lock, Terminal } from "lucide-react";

export default function ProjectsSection() {
  const { lang, t } = useLanguage();
  const { projects } = portfolioData;
  const [selectedClientProject, setSelectedClientProject] = useState<ClientProject | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-[#1E293B]">
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
            {projects.sectionIndex}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            {t(projects.sectionTitle)}
          </h2>
          <div className="flex-1 h-px bg-[#1E293B] ml-4"></div>
        </motion.div>

        {/* ======================================================== */}
        {/* SUBSECTION A: Live Web Applications (16:9 screenshots, NO iframes) */}
        {/* ======================================================== */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              A // {t(projects.liveSubtitle)}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.liveProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Minimal Terminal Frame Bar */}
                  <div className="bg-[#0B0F17] border-b border-[#1E293B] px-3.5 py-2 flex items-center justify-between font-mono text-[11px] text-[#64748B]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ef4444]/60"></span>
                      <span className="w-2 h-2 rounded-full bg-[#eab308]/60"></span>
                      <span className="w-2 h-2 rounded-full bg-[#10B981]/60"></span>
                      <span className="ml-1 text-[#94A3B8] truncate max-w-[150px]">
                        {new URL(project.liveUrl).hostname}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                      <span className="text-[#10B981] font-medium">{t(project.badge)}</span>
                    </div>
                  </div>

                  {/* 16:9 Clean Screenshot Frame (Fixed object positioning so headlines are not cut off) */}
                  <div className="relative w-full aspect-video bg-[#0B0F17] overflow-hidden border-b border-[#1E293B]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover ${
                        project.id === "kantin-smekon"
                          ? "object-left-top"
                          : "object-top"
                      } group-hover:scale-105 transition-transform duration-300`}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                        {project.title}
                      </h3>
                      {project.repoTypeBadge && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#64748B] bg-[#0B0F17] px-2 py-0.5 rounded border border-[#1E293B]">
                          <Lock size={10} />
                          {t(project.repoTypeBadge)}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">
                      {t(project.description)}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.stack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-0.5 rounded bg-[#0B0F17] border border-[#1E293B] text-[11px] font-mono text-[#94A3B8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#0B0F17] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs font-mono text-[#F8FAFC] hover:text-[#38BDF8] transition-all"
                  >
                    <span>{t(project.buttonLabel)}</span>
                    <ExternalLink size={12} className="text-[#38BDF8]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SUBSECTION B: Client & Internal Systems — PT YES */}
        {/* ======================================================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              B // {t(projects.clientSubtitle)}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.clientProjects.map((clientProject, idx) => (
              <motion.div
                key={clientProject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Header badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-[#38BDF8] bg-[#0B0F17] px-2.5 py-1 rounded border border-[#1E293B] flex items-center gap-1.5">
                      <Lock size={12} />
                      {t(clientProject.badge)}
                    </span>
                    <span className="font-mono text-xs text-[#64748B]">
                      {t(clientProject.period)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">
                    {t(clientProject.title)}
                  </h3>

                  <div className="text-xs font-mono text-[#94A3B8] mb-4">
                    Klien: <strong className="text-[#F8FAFC]">{clientProject.client}</strong>
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {t(clientProject.summary)}
                  </p>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {clientProject.stack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 rounded bg-[#0B0F17] border border-[#1E293B] text-[11px] font-mono text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: Case study button + optional sandbox button */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1E293B]/70">
                  <button
                    onClick={() => setSelectedClientProject(clientProject)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#0B0F17] hover:bg-[#131A26] border border-[#1E293B] hover:border-[#38BDF8]/40 text-xs font-mono text-[#F8FAFC] hover:text-[#38BDF8] transition-all"
                  >
                    <Terminal size={13} className="text-[#38BDF8]" />
                    <span>{lang === "id" ? "Detail Sistem / Case Study" : "System Details / Case Study"}</span>
                  </button>

                  {/* Render sandbox button only if non-empty */}
                  {clientProject.sandboxUrl && (
                    <a
                      href={clientProject.sandboxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 py-2 px-3 rounded-lg bg-[#38BDF8] text-[#0B0F17] hover:bg-[#7dd3fc] text-xs font-mono font-semibold transition-colors"
                    >
                      <span>Sandbox</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedClientProject}
        onClose={() => setSelectedClientProject(null)}
      />
    </section>
  );
}
