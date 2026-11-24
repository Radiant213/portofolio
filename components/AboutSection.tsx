"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { MapPin, GraduationCap, Cpu, CalendarCheck, Layers } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();
  const { about } = portfolioData;

  const getMetaIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MapPin size={16} className="text-[#38BDF8]" />;
      case 1:
        return <GraduationCap size={16} className="text-[#38BDF8]" />;
      case 2:
        return <Cpu size={16} className="text-[#38BDF8]" />;
      case 3:
        return <CalendarCheck size={16} className="text-[#10B981]" />;
      default:
        return <Layers size={16} className="text-[#38BDF8]" />;
    }
  };

  return (
    <section id="about" className="py-20 border-b border-[#1E293B]">
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
            {about.sectionIndex}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            {t(about.sectionTitle)}
          </h2>
          <div className="flex-1 h-px bg-[#1E293B] ml-4"></div>
        </motion.div>

        {/* Overview & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Overview prose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="text-base sm:text-lg text-[#F8FAFC] leading-relaxed font-normal">
              {t(about.leadBio)}
            </p>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              {t(about.subBio)}
            </p>
          </motion.div>

          {/* Right: Structured metadata grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {about.metaGrid.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111827] border border-[#1E293B] p-4 rounded-lg flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#64748B]">
                  {getMetaIcon(idx)}
                  <span>{t(item.label)}</span>
                </div>
                <div className="text-sm font-medium text-[#F8FAFC]">
                  {t(item.value)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grouped Tech Stack */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 mb-6"
          >
            <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
              {"// " + t(about.techStackTitle)}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {about.techStack.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: catIdx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/40 rounded-xl p-5 transition-all hover:-translate-y-1"
              >
                <h4 className="font-mono text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-4 pb-2 border-b border-[#1E293B] flex items-center justify-between">
                  <span>{t(category.title)}</span>
                  <span className="text-[10px] text-[#64748B] font-mono">[{category.items.length}]</span>
                </h4>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] hover:border-[#38BDF8]/40 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
