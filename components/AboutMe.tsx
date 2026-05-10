"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Crosshair, Globe, Building2, Rocket } from "lucide-react";

const facts = [
  {
    icon: <MapPin size={16} className="text-[var(--accent-color)]" />,
    label: "Lokasi",
    value: "Purwokerto, Jawa Tengah",
  },
  {
    icon: <GraduationCap size={16} className="text-[var(--accent-color)]" />,
    label: "Sekolah",
    value: "SMK N 1 Purwokerto — RPL/PPLG",
  },
  {
    icon: <Crosshair size={16} className="text-[var(--accent-color)]" />,
    label: "Fokus",
    value: "Full Stack Web & Mobile Development",
  },
  {
    icon: <Globe size={16} className="text-[var(--accent-color)]" />,
    label: "Bahasa",
    value: "Indonesia, Inggris, Jepang (JLPT N4)",
  },
  {
    icon: <Building2 size={16} className="text-[var(--accent-color)]" />,
    label: "Pengalaman",
    value: "PT Yaksa Ersada Solusindo",
  },
  {
    icon: <Rocket size={16} className="text-[var(--accent-color)]" />,
    label: "Aspirasi",
    value: "IDN Academy — Intensif 1 Tahun",
  },
];

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-32"
    >
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
        <span className="section-accent-line"></span>
        Tentang Saya
      </h2>

      <div className="about-grid">
        {/* Narasi */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          <p className="text-[var(--text-secondary)] leading-[1.8] text-[15px]">
            Saya adalah siswa RPL di <span className="text-white font-semibold">SMK N 1 Purwokerto</span> yang tidak hanya 
            belajar secara teori, tetapi sudah terjun langsung ke proyek profesional. Saya telah membangun{" "}
            <span className="text-white font-semibold">Website Inventaris</span> dan{" "}
            <span className="text-white font-semibold">Web Ticketing</span> untuk{" "}
            <span className="accent-text font-semibold">PT Yaksa Ersada Solusindo</span>.
          </p>

          <p className="text-[var(--text-secondary)] leading-[1.8] text-[15px]">
            Selain keterampilan teknis, saya memiliki rekam jejak kedisiplinan dan daya juang melalui 
            berbagai prestasi bahasa — <span className="text-white font-semibold">Juara 1 IMSC Bahasa Inggris</span>,{" "}
            <span className="text-white font-semibold">Juara 1 Pidato</span>, dan{" "}
            <span className="accent-text font-semibold">Sertifikasi JLPT N4 Bahasa Jepang</span>. 
            Kemampuan bahasa asing ini sangat membantu saya dalam membaca dokumentasi teknis secara global 
            dan belajar secara mandiri.
          </p>

          <p className="text-[var(--text-secondary)] leading-[1.8] text-[15px]">
            Saya juga memiliki semangat eksplorasi yang tinggi, dibuktikan dengan keikutsertaan di event{" "}
            <span className="text-white font-semibold">JuaraVibeCoding</span> dari Google Community Indonesia 
            dan pengembangan game berbasis <span className="text-white font-semibold">Unity</span>. 
            Harapan besar saya ke depannya adalah bisa bergabung dengan program intensif 1 tahun di <span className="accent-text font-semibold">IDN Academy</span>, yang saya yakini bisa menjadi jembatan untuk mengubah fondasi yang sudah saya miliki menjadi keahlian level profesional.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel p-6 md:p-8 h-fit"
        >
          <h3 className="text-base font-bold mb-5 text-white flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] shadow-[0_0_6px_rgba(255,193,7,0.5)]"></span>
            Quick Facts
          </h3>
          <div className="flex flex-col gap-2.5">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="fact-item"
              >
                <div className="fact-icon">
                  {fact.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--text-secondary)] mb-0.5">
                    {fact.label}
                  </span>
                  <span className="text-[13px] font-medium text-white leading-snug">
                    {fact.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
