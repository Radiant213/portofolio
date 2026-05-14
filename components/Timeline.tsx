"use client";

import { motion } from "framer-motion";
import { Gamepad2, Rocket, Building2, UtensilsCrossed, Bot, Target } from "lucide-react";

const timelineData = [
  {
    year: "2020 - 2021",
    title: "Awal Mula Menyentuh Kode",
    subtitle: "Minecraft Era",
    description: "Saat SMP kelas 9 (usia 14), jujur mulai pertama kali kenalan dengan bahasa Java gara-gara terlalu suka main Minecraft dan ngulik logika Command Blocks. Di sinilah momen saya sadar kalau 'merakit instruksi' dari nol itu seru banget.",
    icon: <Gamepad2 size={16} />,
  },
  {
    year: "Awal 2025",
    title: "Eksplorasi Framework",
    subtitle: "SMK N 1 Purwokerto",
    description: "Lanjut ke jurusan PPLG (Pengembangan Perangkat Lunak dan Gim) di SMKN 1 Purwokerto. Kebetulan ada materi awal sekolah soal Laravel. Tapi karena suka penasaran, akhirnya ngulik Next.js sendiri dan bener-bener jadi ketagihan sama Full Stack Web Development.",
    icon: <Rocket size={16} />,
  },
  {
    year: "2026",
    title: "Proyek Profesional",
    subtitle: "PT Yaksa Ersada Solusindo",
    description: "Dipercaya membangun Website Inventaris dan Web Ticketing untuk PT Yaksa Ersada Solusindo. Ini pengalaman pertama kerja proyek nyata di industri, dari analisis kebutuhan sampai deployment.",
    icon: <Building2 size={16} />,
  },
  {
    year: "2025",
    title: "Realisasi Problem-Solving",
    subtitle: "Web E-Kantin",
    description: "Berawal murni dari tugas bengkel project sekolahan, saya menganalisis masalah antrian kantin yang kelamaan, lalu merombaknya jadi sistem E-Kantin digital. Langkah awal memecahkan masalah nyata lewat kode.",
    icon: <UtensilsCrossed size={16} />,
  },
  {
    year: "2026",
    title: "JuaraVibeCoding",
    subtitle: "Google Community Indonesia",
    description: "Ikut serta dalam event JuaraVibeCoding dari Google Community Indonesia. Eksplorasi paradigma baru AI-assisted development dan membuktikan bahwa AI bisa jadi partner yang powerful buat development.",
    icon: <Bot size={16} />,
  },
  {
    year: "Aspirasi",
    title: "Mimpi ke IDN Academy",
    subtitle: "Menuju Level Profesional",
    description: "Harapan terbesar saya selanjutnya adalah bisa diterima di program intensif 1 tahun IDN Academy untuk mendalami Web & Mobile Development. Saya sangat siap secara mental dan fisik untuk ditempa menjadi talenta yang siap terjun ke industri.",
    icon: <Target size={16} />,
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l border-[rgba(255,255,255,0.06)] ml-4 md:ml-6 mt-8 space-y-12">
      {timelineData.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12 group"
        >
          {/* Icon Dot */}
          <div className="absolute -left-[15px] top-2 w-[30px] h-[30px] rounded-full bg-[var(--bg-primary)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--text-secondary)] group-hover:border-[var(--accent-color)] group-hover:text-[var(--accent-color)] shadow-[0_0_12px_rgba(0,0,0,0.5)] z-10 transition-all duration-300">
            {item.icon}
          </div>

          <div className="glass-panel p-6 md:p-7 group-hover:border-[rgba(255,193,7,0.15)] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-[11px] font-bold text-[var(--accent-color)] tracking-[0.12em] uppercase">
                {item.year}
              </span>
              {item.subtitle && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)] opacity-40"></span>
                  <span className="text-[11px] font-medium text-[var(--text-secondary)] tracking-wide">
                    {item.subtitle}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-lg font-bold mb-2.5 text-white">{item.title}</h3>
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
