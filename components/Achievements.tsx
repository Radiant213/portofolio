"use client";

import { motion } from "framer-motion";
import { Trophy, Mic, Languages, Code2, Building2, Gamepad2 } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={22} />,
    title: "Juara 1 IMSC Bahasa Inggris",
    description: "Meraih juara pertama dalam kompetisi International Math Science Competition kategori Bahasa Inggris, membuktikan kemampuan berbahasa asing tingkat kompetitif.",
    badge: "Kompetisi",
    accentClass: "text-amber-400",
    bgAccent: "rgba(251,191,36,0.08)",
    borderAccent: "rgba(251,191,36,0.15)",
  },
  {
    icon: <Mic size={22} />,
    title: "Juara 1 Pidato Bahasa Inggris",
    description: "Meraih posisi pertama dalam lomba pidato Bahasa Inggris, mengasah kemampuan public speaking dan komunikasi profesional.",
    badge: "Kompetisi",
    accentClass: "text-orange-400",
    bgAccent: "rgba(251,146,60,0.08)",
    borderAccent: "rgba(251,146,60,0.15)",
  },
  {
    icon: <Languages size={22} />,
    title: "Sertifikasi JLPT N4",
    description: "Memperoleh sertifikasi Japanese Language Proficiency Test level N4, menunjukkan kemampuan membaca dokumentasi teknis dari sumber berbahasa Jepang.",
    badge: "Sertifikasi",
    accentClass: "text-rose-400",
    bgAccent: "rgba(251,113,133,0.08)",
    borderAccent: "rgba(251,113,133,0.15)",
  },
  {
    icon: <Code2 size={22} />,
    title: "Peserta JuaraVibeCoding",
    description: "Berpartisipasi dalam event JuaraVibeCoding yang diselenggarakan oleh Google Community Indonesia, mengeksplorasi paradigma baru AI-assisted development.",
    badge: "Event Google",
    accentClass: "text-sky-400",
    bgAccent: "rgba(56,189,248,0.08)",
    borderAccent: "rgba(56,189,248,0.15)",
  },
  {
    icon: <Building2 size={22} />,
    title: "Proyek PT Yaksa Ersada Solusindo",
    description: "Membangun Website Inventaris dan Web Ticketing secara profesional untuk perusahaan PT Yaksa Ersada Solusindo — pengalaman kerja nyata di industri.",
    badge: "Profesional",
    accentClass: "text-emerald-400",
    bgAccent: "rgba(52,211,153,0.08)",
    borderAccent: "rgba(52,211,153,0.15)",
  },
  {
    icon: <Gamepad2 size={22} />,
    title: "Game Development — Unity",
    description: "Mengeksplorasi pengembangan game menggunakan Unity Engine dan C#, memperluas cakupan keahlian dari Web ke Game Development.",
    badge: "Eksplorasi",
    accentClass: "text-violet-400",
    bgAccent: "rgba(167,139,250,0.08)",
    borderAccent: "rgba(167,139,250,0.15)",
  },
];

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-32"
    >
      <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
        <span className="section-accent-line"></span>
        Prestasi & Sertifikasi
      </h2>
      <p className="text-[var(--text-secondary)] text-sm ml-[60px] mb-10">
        Rekam jejak di luar coding — kompetisi, sertifikasi, dan pengalaman profesional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="achievement-card group"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div 
                  className={`achievement-icon ${item.accentClass}`}
                  style={{ background: item.bgAccent, borderColor: item.borderAccent }}
                >
                  {item.icon}
                </div>
                <span 
                  className="text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full"
                  style={{ background: item.bgAccent, color: 'inherit', border: `1px solid ${item.borderAccent}` }}
                >
                  <span className={item.accentClass}>{item.badge}</span>
                </span>
              </div>
              
              <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[var(--accent-color)] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
