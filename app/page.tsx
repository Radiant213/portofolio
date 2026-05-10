"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Package, Ticket, Lock } from "lucide-react";

const GitHubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import ProjectIframe from "../components/ProjectIframe";
import Timeline from "../components/Timeline";
import Achievements from "../components/Achievements";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const stats = [
    { number: "2+", label: "Proyek Profesional" },
    { number: "3+", label: "Prestasi Kompetisi" },
    { number: "N4", label: "JLPT Jepang" },
    { number: "3", label: "Bahasa Dikuasai" },
  ];

  const skills = [
    "Next.js & React",
    "Laravel & PHP",
    "Node.js & C#",
    "PostgreSQL & MySQL",
    "Supabase & MongoDB",
    "Aiven Cloud & AWS",
    "Tailwind CSS",
    "Unity Game Engine",
    "English & Japanese",
    "Vibe Coding dengan AI",
  ];

  const professionalProjects = [
    {
      icon: <Package size={24} />,
      title: "Website Inventaris",
      company: "PT Yaksa Ersada Solusindo",
      description:
        "Sistem manajemen inventaris barang berbasis web untuk kebutuhan internal perusahaan. Mencakup fitur CRUD lengkap, tracking stok, laporan, dan manajemen multi-gudang dengan antarmuka modern dan responsif.",
      tags: ["Laravel", "MySQL", "Tailwind CSS", "Internal Tool"],
      githubUrl: "https://github.com/Radiant213/WEB-INVENTARIS-YAKSA",
    },
    {
      icon: <Ticket size={24} />,
      title: "Web Ticketing System",
      company: "PT Yaksa Ersada Solusindo",
      description:
        "Sistem tiket digital untuk manajemen request dan issue tracking internal perusahaan. Dilengkapi dengan dashboard monitoring, assignment workflow, dan notifikasi real-time.",
      tags: ["Laravel", "MySQL", "REST API", "Internal Tool"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-32 min-h-screen overflow-hidden">

        {/* Hero Section */}
        <motion.section 
          id="hero"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-36 flex flex-col items-start gap-6 relative"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[13px] font-medium text-[var(--text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            Peserta JuaraVibeCoding — Google Community Indonesia
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-4 leading-[1.1]">
            Halo, Saya <br />
            <span className="text-gradient cursor-default">Galang Ma&apos;ruf Sherinian.</span>
          </h1>

          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mt-2">
            Full Stack Developer & Next.js/Laravel Enthusiast. Berpengalaman membangun 
            sistem profesional untuk <span className="text-white font-semibold">PT Yaksa Ersada Solusindo</span>, 
            serta memaksimalkan efisiensi ngoding dengan Vibe Coding AI. Siap menuju level internasional.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-[15px] hover:bg-[var(--accent-color)] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_24px_rgba(255,193,7,0.3)]">
              Lihat Karya Saya
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="https://github.com/Radiant213" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 font-medium text-[15px]">
              <GitHubIcon size={18} />
              GitHub
            </a>
          </div>

          {/* Stats Counter Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center mt-10 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] px-2 py-4 w-fit"
          >
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* About Me Section */}
        <AboutMe />

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="section-accent-line"></span>
            Keahlian & Teknologi
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {skills.map((skill, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="text-center py-4 px-3 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[var(--text-secondary)] hover:text-white cursor-pointer hover:border-[rgba(255,193,7,0.2)] hover:bg-[rgba(255,193,7,0.04)] transition-all duration-300"
              >
                <span className="font-medium tracking-wide text-[13px]">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section 
          id="journey"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <span className="section-accent-line"></span>
            Perjalanan Saya
          </h2>
          <p className="text-[var(--text-secondary)] text-sm ml-[60px] mb-8">Kilasan balik dari era bermain-main sampai bisa mendesain Web App profesional.</p>
          
          <Timeline />
        </motion.section>

        {/* Achievements Section */}
        <Achievements />

        {/* Featured Projects Section */}
        <motion.section 
          id="projects" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <span className="section-accent-line"></span>
            Karya & Proyek Terkini
          </h2>
          <p className="text-[var(--text-secondary)] text-sm ml-[60px] mb-12">Proyek nyata yang sudah saya bangun — dari sekolah sampai industri.</p>

          <div className="flex flex-col gap-20">
            {/* Live Project: E-Kantin */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.1em]">Live Project</span>
              </div>
              <ProjectIframe
                url="https://kantin.radiantcode.web.id"
                title="Sistem E-Kantin Sekolah"
                description="Sistem manajemen pemesanan makanan untuk kantin sekolah dengan antarmuka yang dinamis. Dibangun menggunakan arsitektur kuat (Next.js & Laravel) dengan integrasi API database Cloud dari Aiven."
              />
            </div>

            {/* Professional Projects */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] shadow-[0_0_8px_rgba(255,193,7,0.4)]"></span>
                <span className="text-[11px] font-bold text-[var(--accent-color)] uppercase tracking-[0.1em]">Proyek Profesional — PT Yaksa Ersada Solusindo</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {professionalProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="project-card group"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(255,193,7,0.06)] border border-[rgba(255,193,7,0.1)] flex items-center justify-center text-[var(--accent-color)] group-hover:bg-[rgba(255,193,7,0.12)] group-hover:shadow-[0_0_16px_rgba(255,193,7,0.08)] transition-all">
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-all">
                            <GitHubIcon size={10} />
                            Repo
                          </a>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[var(--text-secondary)]">
                          <Lock size={10} />
                          Internal
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--accent-color)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[var(--accent-color)] mb-3 uppercase tracking-[0.08em]">
                      {project.company}
                    </p>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <section id="contact" className="mb-20 pt-10">
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 pb-12 border-t border-[rgba(255,255,255,0.04)] text-[var(--text-secondary)] relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white tracking-wider">GMS<span className="text-[var(--accent-color)]">.</span></span>
              <span className="text-[12px] text-[var(--text-secondary)]">
                &copy; {currentYear} All rights reserved.
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 text-[13px] font-medium">
              <a href="#projects" className="hover:text-white transition-colors">
                Proyek
              </a>
              <a href="https://github.com/Radiant213" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                <GitHubIcon size={14} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/galang-m-sherinian-a201a63b1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com/radofdiant" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="mailto:galangmaruff1@gmail.com" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                <ExternalLink size={12} />
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
   );
}
