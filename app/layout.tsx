import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galang Ma'ruf Sherinian | Portofolio",
  description: "Web portofolio Full Stack Developer & Next.js/Laravel Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} antialiased`}
    >
      <body>
        <div className="ambient-layer-1" />
        <div className="ambient-layer-2" />
        {children}
      </body>
    </html>
  );
}
