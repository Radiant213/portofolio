import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LivingBackground from "@/components/LivingBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-[#F8FAFC]">
      <LivingBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
