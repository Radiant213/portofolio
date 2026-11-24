"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { lang, t } = useLanguage();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-[#1E293B]">
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
            {experience.sectionIndex}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            {t(experience.sectionTitle)}
          </h2>
          <div className="flex-1 h-px bg-[#1E293B] ml-4"></div>
        </motion.div>

        {/* 2-Column Split: Work Experience vs Education & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2 pb-3 border-b border-[#1E293B]"
            >
              <Briefcase size={16} className="text-[#38BDF8]" />
              <h3 className="font-mono text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
                {t(experience.workExperienceTitle)}
              </h3>
            </motion.div>

            <div className="space-y-6">
              {experience.work.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl p-6 transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                      {t(item.role)}
                    </h4>
                    <span className="font-mono text-xs text-[#38BDF8] bg-[#0B0F17] px-2.5 py-1 rounded border border-[#1E293B]">
                      {t(item.period)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#94A3B8] mb-5">
                    <span className="text-[#F8FAFC] font-semibold">{item.company}</span>
                    <span className="text-[#334155]">•</span>
                    <span>{t(item.location)}</span>
                    <span className="text-[#334155]">•</span>
                    <span className="text-[#64748B]">{t(item.type)}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {(lang === "id" ? item.achievements.id : item.achievements.en).map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-[#94A3B8] leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E293B]/70">
                    {item.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 rounded bg-[#0B0F17] border border-[#1E293B] text-[11px] font-mono text-[#64748B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Organization Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2 pb-3 border-b border-[#1E293B]"
            >
              <GraduationCap size={16} className="text-[#38BDF8]" />
              <h3 className="font-mono text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
                {t(experience.educationTitle)}
              </h3>
            </motion.div>

            <div className="space-y-4">
              {experience.education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl p-5 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-[#F8FAFC]">
                      {t(item.school)}
                    </h4>
                    <span className="font-mono text-[11px] text-[#64748B]">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#38BDF8] mb-2 font-medium">
                    {t(item.degree)}
                  </div>

                  {item.details && (
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {t(item.details)}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
