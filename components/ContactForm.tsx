"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    
    // API Submit ke FormSubmit menggunakan AJAX / JSON fetch
    try {
      const response = await fetch("https://formsubmit.co/ajax/galangmaruff1@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: data
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
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden"
    >
      {/* Dekorasi Cahaya Blur di Backgorund Panel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-color)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="text-center mb-10 relative z-10">
        <h3 className="text-3xl font-bold mb-4 text-white">Pesan - Pesan</h3>
        <p className="text-[var(--text-secondary)] text-lg">Ada ide-ide atau ingin bekerja sama membuat proyek, atau sekadar mau say hello? Jangan ragu buat ngobrol langsung ke inbox saya lewat kotak di bawah ini!</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Nama Lengkap</label>
            <input type="text" id="name" name="name" required className="w-full bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-[rgba(255,255,255,0.02)] transition-all shadow-inner placeholder:text-gray-600" placeholder="Masukkan Nama Anda" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Email Aktif</label>
            <input type="email" id="email" name="email" required className="w-full bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-[rgba(255,255,255,0.02)] transition-all shadow-inner placeholder:text-gray-600" placeholder="Masukkan Email Anda" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Pesan Anda</label>
          <textarea id="message" name="message" required rows={5} className="w-full bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.05)] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-[rgba(255,255,255,0.02)] transition-all resize-none shadow-inner placeholder:text-gray-600" placeholder="Berikan pesan-pesan atau ceritakan detail proyek Anda di sini..."></textarea>
        </div>

        {/* Konfigurasi Rahasia FormSubmit */}
        <input type="hidden" name="_subject" value="🔔 Ada Pesan Masuk dari Web Portofolio!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <button 
          type="submit" 
          disabled={status === "submitting"}
          className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-[var(--accent-color)] to-[#ff9800] text-black font-extrabold uppercase tracking-widest hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,193,7,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "submitting" ? "Mengirim Pesan..." : "Kirim Pesan"}
        </button>

        {/* Kotak Feedback Animasi */}
        {status === "success" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-[rgba(34,197,94,0.1)] border border-green-500 text-green-400 text-center text-sm font-medium mt-2">
            Pesan berhasil meluncur ke email Galang! Terima kasih sudah menghubungi.
          </motion.div>
        )}
        
        {status === "error" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-[rgba(239,68,68,0.1)] border border-red-500 text-red-400 text-center text-sm font-medium mt-2">
            Waduh, terjadi kesalahan saat mengirim pesan. Coba lagi atau hubungi via ikon Email di bawah.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
