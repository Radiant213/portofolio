"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Prestasi", href: "#achievements" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-auto`}
    >
      <div className={`px-6 md:px-8 py-3 rounded-full flex items-center gap-8 transition-all duration-500 ${
        scrolled 
          ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-2xl border border-[rgba(255,255,255,0.06)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
          : "bg-[rgba(10,10,10,0.5)] backdrop-blur-xl border border-[rgba(255,255,255,0.04)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      }`}>
        {/* Logo / Name */}
        <a href="#hero" className="text-sm font-bold tracking-wider text-white whitespace-nowrap hidden md:block hover:text-[var(--accent-color)] transition-colors">
          GMS<span className="text-[var(--accent-color)]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-white px-3 py-1.5 rounded-full hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <a href="#hero" className="text-sm font-bold tracking-wider text-white whitespace-nowrap hover:text-[var(--accent-color)] transition-colors">
            GMS<span className="text-[var(--accent-color)]">.</span>
          </a>
          <button 
            className="text-[var(--text-secondary)] hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-3 rounded-2xl px-5 py-5 flex flex-col gap-1 bg-[rgba(10,10,10,0.95)] backdrop-blur-2xl border border-[rgba(255,255,255,0.06)] shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
        >
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] px-4 py-2.5 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
