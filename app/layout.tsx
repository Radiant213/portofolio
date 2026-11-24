import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galang Ma'ruf Sherinian | Backend & Full Stack Web Developer",
  description:
    "Siswa kelas XII PPLG SMK Negeri 1 Purwokerto yang fokus membangun sistem web backend & full stack dengan Laravel, React, Next.js, dan MySQL. Terbiasa mengelola deployment mandiri menggunakan Docker, reverse proxy, dan SSL pada VPS Ubuntu di Oracle Cloud dan AWS.",
  authors: [{ name: "Galang Ma'ruf Sherinian" }],
  keywords: [
    "Galang Ma'ruf Sherinian",
    "Backend Developer",
    "Full Stack Developer",
    "Laravel",
    "Next.js",
    "React",
    "MySQL",
    "Docker",
    "Ubuntu VPS",
    "Purwokerto",
  ],
  openGraph: {
    title: "Galang Ma'ruf Sherinian | Backend & Full Stack Web Developer",
    description:
      "Backend & Full Stack Web Developer • Linux Server & Cloud. Siswa XII PPLG SMKN 1 Purwokerto, open for PKL / Internship.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="bg-[#0B0F17] text-[#F8FAFC] min-h-screen selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
