export type Language = 'id' | 'en';

export interface BilingualString {
  id: string;
  en: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  credly: string;
  whatsapp: string;
  email: string;
  cvPdf: string;
}

export interface TechStackCategory {
  title: BilingualString;
  items: string[];
}

export interface WorkExperience {
  role: BilingualString;
  company: string;
  period: BilingualString;
  location: BilingualString;
  type: BilingualString;
  achievements: {
    id: string[];
    en: string[];
  };
  technologies: string[];
}

export interface EducationItem {
  school: BilingualString;
  degree: BilingualString;
  period: string;
  details?: BilingualString;
}

export interface LiveProject {
  id: string;
  title: string;
  badge: BilingualString;
  statusType: 'live' | 'demo' | 'product';
  repoTypeBadge?: BilingualString;
  stack: string[];
  image: string;
  description: BilingualString;
  liveUrl: string;
  buttonLabel: BilingualString;
  repoUrl?: string;
}

export interface ClientProject {
  id: string;
  title: BilingualString;
  client: string;
  badge: BilingualString;
  role: BilingualString;
  period: BilingualString;
  stack: string[];
  summary: BilingualString;
  caseStudy: {
    overview: BilingualString;
    coreFeatures: {
      id: string[];
      en: string[];
    };
    techStackDetails: string[];
    image?: string;
  };
  sandboxUrl?: string;
}

export interface Certificate {
  title: BilingualString;
  issuer: string;
  issuerType: 'dicoding' | 'aws' | 'ets' | 'jlpt';
  date: BilingualString;
  scoreOrWeight: BilingualString;
  credentialId: string;
  file: string;
  thumb: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    brandMark: string;
    location: BilingualString;
    statusBadge: BilingualString;
    headline: BilingualString;
    tagline: BilingualString;
    shortBio: BilingualString;
    avatar: string;
    avatarFloatingTag: string;
  };
  socials: SocialLinks;
  navLinks: {
    key: string;
    label: BilingualString;
    href: string;
  }[];
  about: {
    sectionIndex: string;
    sectionTitle: BilingualString;
    leadBio: BilingualString;
    subBio: BilingualString;
    metaGrid: {
      label: BilingualString;
      value: BilingualString;
    }[];
    techStackTitle: BilingualString;
    techStack: TechStackCategory[];
  };
  experience: {
    sectionIndex: string;
    sectionTitle: BilingualString;
    workExperienceTitle: BilingualString;
    educationTitle: BilingualString;
    work: WorkExperience[];
    education: EducationItem[];
  };
  projects: {
    sectionIndex: string;
    sectionTitle: BilingualString;
    liveSubtitle: BilingualString;
    clientSubtitle: BilingualString;
    liveProjects: LiveProject[];
    clientProjects: ClientProject[];
  };
  certifications: {
    sectionIndex: string;
    sectionTitle: BilingualString;
    previewPdfButton: BilingualString;
    viewPdfButton: BilingualString;
    credlyBadge: {
      title: BilingualString;
      description: BilingualString;
      url: string;
      buttonText: BilingualString;
    };
    items: Certificate[];
    additionalHighlights: {
      title: BilingualString;
      languages: {
        label: BilingualString;
        value: BilingualString;
      };
      achievements: {
        label: BilingualString;
        value: BilingualString;
      };
    };
  };
  contact: {
    sectionIndex: string;
    sectionTitle: BilingualString;
    title: BilingualString;
    description: BilingualString;
    formHeaderTitle: BilingualString;
    copyEmailLabel: BilingualString;
    copiedLabel: BilingualString;
    form: {
      nameLabel: BilingualString;
      namePlaceholder: BilingualString;
      emailLabel: BilingualString;
      emailPlaceholder: BilingualString;
      messageLabel: BilingualString;
      messagePlaceholder: BilingualString;
      submitButton: BilingualString;
      submittingButton: BilingualString;
      successMessage: BilingualString;
      errorMessage: BilingualString;
    };
  };
  footer: {
    copyright: string;
    designedWith: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Galang Ma'ruf Sherinian",
    brandMark: "galang.dev",
    location: {
      id: "Purwokerto, Jawa Tengah, Indonesia",
      en: "Purwokerto, Central Java, Indonesia"
    },
    statusBadge: {
      id: "Purwokerto, ID",
      en: "Purwokerto, ID"
    },
    headline: {
      id: "Galang Ma'ruf Sherinian",
      en: "Galang Ma'ruf Sherinian"
    },
    tagline: {
      id: "Backend & Full Stack Web Developer • Linux Server & Cloud",
      en: "Backend & Full Stack Web Developer • Linux Server & Cloud"
    },
    shortBio: {
      id: "Siswa kelas XII PPLG SMK Negeri 1 Purwokerto yang fokus membangun sistem web backend & full stack dengan Laravel, React, Next.js, dan MySQL. Terbiasa mengelola deployment mandiri menggunakan Docker, reverse proxy, dan SSL pada VPS Ubuntu di Oracle Cloud dan AWS.",
      en: "Final-year Software Engineering (PPLG) student at SMK Negeri 1 Purwokerto focused on building backend & full-stack web systems with Laravel, React, Next.js, and MySQL. Experienced in managing self-hosted deployments with Docker, reverse proxy, and SSL on Ubuntu VPS (Oracle Cloud & AWS)."
    },
    avatar: "/images/profile.png",
    avatarFloatingTag: "stack: laravel · next.js · docker · ubuntu"
  },

  socials: {
    github: "https://github.com/Radiant213",
    linkedin: "https://www.linkedin.com/in/galang-ma-ruf-sherinian-a201a63b1",
    credly: "https://www.credly.com/users/galang-m-sherinian",
    whatsapp: "https://wa.me/6287878444402",
    email: "galangmaruff1@gmail.com",
    cvPdf: "/cv/CV-Galang-Maruf-Sherinian.pdf"
  },

  navLinks: [
    { key: "about", label: { id: "Tentang", en: "About" }, href: "#about" },
    { key: "experience", label: { id: "Pengalaman", en: "Experience" }, href: "#experience" },
    { key: "projects", label: { id: "Proyek", en: "Projects" }, href: "#projects" },
    { key: "certifications", label: { id: "Sertifikasi", en: "Certifications" }, href: "#certifications" },
    { key: "contact", label: { id: "Kontak", en: "Contact" }, href: "#contact" }
  ],

  about: {
    sectionIndex: "01 //",
    sectionTitle: {
      id: "Tentang & Tech Stack",
      en: "About & Tech Stack"
    },
    leadBio: {
      id: "Pengembang web yang fokus pada backend dan full stack, terbiasa membangun aplikasi web yang andal dengan Laravel, React, Next.js, dan MySQL. Berpengalaman mengelola deployment server secara mandiri menggunakan VPS Linux (Ubuntu), Docker, dan platform cloud.",
      en: "Backend and full-stack web developer experienced in building reliable web applications with Laravel, React, Next.js, and MySQL. Experienced in handling self-hosted server deployments using Linux (Ubuntu) VPS, Docker, and cloud platforms."
    },
    subBio: {
      id: "Berpengalaman mengerjakan sistem web internal untuk operasional perusahaan, mulai dari perancangan database hingga deployment production pada cPanel dan Ubuntu VPS.",
      en: "Experienced in developing internal web systems for company operations, from database structuring to production deployment on cPanel and Ubuntu VPS."
    },
    metaGrid: [
      {
        label: { id: "Lokasi", en: "Location" },
        value: { id: "Purwokerto, Jawa Tengah", en: "Purwokerto, Central Java" }
      },
      {
        label: { id: "Pendidikan", en: "Education" },
        value: { id: "SMK Negeri 1 Purwokerto — PPLG", en: "SMK Negeri 1 Purwokerto — PPLG" }
      },
      {
        label: { id: "Fokus Utama", en: "Primary Focus" },
        value: { id: "Backend, Full Stack & Linux/Cloud", en: "Backend, Full Stack & Linux/Cloud" }
      },
      {
        label: { id: "Ketersediaan", en: "Availability" },
        value: { id: "Terbuka untuk PKL / Magang", en: "Open for PKL / Internship" }
      }
    ],
    techStackTitle: {
      id: "Tech Stack",
      en: "Tech Stack"
    },
    techStack: [
      {
        title: { id: "Bahasa Pemrograman Utama", en: "Primary Languages" },
        items: ["PHP", "JavaScript", "Python"]
      },
      {
        title: { id: "Bahasa Lainnya", en: "Familiar Languages" },
        items: ["SQL", "C++", "Java"]
      },
      {
        title: { id: "Frameworks & UI", en: "Frameworks & UI" },
        items: ["Laravel", "React", "Next.js", "Tailwind CSS"]
      },
      {
        title: { id: "Databases", en: "Databases" },
        items: ["MySQL", "MariaDB"]
      },
      {
        title: { id: "Server & Cloud", en: "Server & Cloud" },
        items: [
          "Ubuntu 24.04 Server",
          "Docker",
          "Reverse Proxy",
          "SSL (Certbot)",
          "Oracle Cloud VPS",
          "AWS",
          "cPanel VPS"
        ]
      },
      {
        title: { id: "Integrations & Tools", en: "Integrations & Tools" },
        items: [
          "REST API",
          "Midtrans API",
          "Google Drive API",
          "Google OAuth",
          "SMTP (Gmail)",
          "Git",
          "GitHub"
        ]
      }
    ]
  },

  experience: {
    sectionIndex: "02 //",
    sectionTitle: {
      id: "Pengalaman & Pendidikan",
      en: "Experience & Education"
    },
    workExperienceTitle: {
      id: "Pengalaman",
      en: "Experience"
    },
    educationTitle: {
      id: "Pendidikan & Organisasi",
      en: "Education & Leadership"
    },
    work: [
      {
        role: {
          id: "Freelance Full Stack Web Developer",
          en: "Freelance Full Stack Web Developer"
        },
        company: "PT Yaksa Ersada Solusindo (PT YES)",
        period: {
          id: "Apr 2026 – Sekarang",
          en: "Apr 2026 – Present"
        },
        location: {
          id: "Remote, Tangerang",
          en: "Remote, Tangerang"
        },
        type: {
          id: "Kontrak / Freelance",
          en: "Contract / Freelance"
        },
        achievements: {
          id: [
            "Membangun Sistem Inventaris Internal (Apr – Mei 2026) untuk pelacakan aset perusahaan multi-cabang (Jakarta, Bali, dan wilayah lainnya) menggunakan Laravel dan MySQL pada cPanel VPS perusahaan.",
            "Mengembangkan Sistem Ticketing & Monitoring (Jun – Jul 2026) menggunakan Laravel dan MySQL untuk pelaporan insiden operasional serta monitoring ISP/lokasi kerja operasional klien.",
            "Menangani pemeliharaan berkelanjutan dan penyesuaian fitur berkala untuk tim operasional klien (~3–4 pembaruan fitur setiap bulan)."
          ],
          en: [
            "Built an Internal Inventory System (Apr – May 2026) for multi-branch company asset tracking (Jakarta, Bali, and regional sites) using Laravel and MySQL on the company's cPanel VPS.",
            "Developed a Ticketing & Monitoring System (Jun – Jul 2026) using Laravel and MySQL for operational incident reporting and ISP/worksite monitoring.",
            "Handles ongoing maintenance and periodic feature adjustments for the client's operational team (~3–4 feature updates/month)."
          ]
        },
        technologies: ["Laravel", "MySQL", "cPanel VPS", "Tailwind CSS", "REST API", "SMTP"]
      }
    ],
    education: [
      {
        school: {
          id: "SMK Negeri 1 Purwokerto",
          en: "SMK Negeri 1 Purwokerto"
        },
        degree: {
          id: "Pengembangan Perangkat Lunak & Gim (PPLG)",
          en: "Software & Game Development (PPLG)"
        },
        period: "2024 – 2027 (Expected)",
        details: {
          id: "Fokus pada pemrograman web (Laravel, PHP, JavaScript), basis data relasional, dan administrasi server Linux.",
          en: "Focused on web programming (Laravel, PHP, JavaScript), relational databases, and Linux server administration."
        }
      },
      {
        school: {
          id: "SMECONE Technology Exhibition (STEX)",
          en: "SMECONE Technology Exhibition (STEX)"
        },
        degree: {
          id: "Koordinator Perlengkapan",
          en: "Equipment & Logistics Coordinator"
        },
        period: "2026",
        details: {
          id: "Mengelola kesiapan perlengkapan, perangkat, dan kebutuhan teknis lapangan selama acara pameran teknologi sekolah.",
          en: "Managed logistics, hardware equipment, and technical field requirements during the school technology exhibition."
        }
      },
      {
        school: {
          id: "SMP Negeri 1 Purwokerto",
          en: "SMP Negeri 1 Purwokerto"
        },
        degree: {
          id: "Pendidikan Menengah Pertama",
          en: "Junior High School Education"
        },
        period: "2021 – 2024",
        details: {
          id: "Latar belakang akademik yang kuat dengan prestasi kompetisi bahasa Inggris tingkat regional dan nasional.",
          en: "Solid academic foundation with achievements in regional and national English language competitions."
        }
      }
    ]
  },

  projects: {
    sectionIndex: "03 //",
    sectionTitle: {
      id: "Proyek Pilihan",
      en: "Selected Projects"
    },
    liveSubtitle: {
      id: "Aplikasi Web Produksi & Demo Langsung",
      en: "Production Web Applications & Live Demos"
    },
    clientSubtitle: {
      id: "Sistem Klien & Internal — PT YES",
      en: "Client & Internal Systems — PT YES"
    },
    liveProjects: [
      {
        id: "aws-simulator",
        title: "AWS Exam Simulator (RADIANT)",
        badge: {
          id: "Live Product",
          en: "Live Product"
        },
        statusType: "product",
        repoTypeBadge: {
          id: "Private Repo",
          en: "Private Repo"
        },
        stack: ["Next.js", "JavaScript", "Vercel", "Midtrans API"],
        image: "/images/projects/aws-simulator.png",
        description: {
          id: "Aplikasi web latihan dan simulasi ujian sertifikasi AWS dengan fitur sesi latihan berbatas waktu, evaluasi skor otomatis, dan integrasi pembayaran Midtrans.",
          en: "Web application for AWS certification exam practice and simulation featuring timed practice sessions, automated scoring, and integrated Midtrans payment."
        },
        liveUrl: "https://aws.radiantcode.web.id",
        buttonLabel: {
          id: "Kunjungi Website",
          en: "Visit Website"
        }
      },
      {
        id: "kantin-smekon",
        title: "Kantin Smekon",
        badge: {
          id: "Live Web",
          en: "Live Web"
        },
        statusType: "live",
        stack: ["Laravel", "MySQL", "Midtrans API", "Docker", "Ubuntu Server", "Oracle Cloud"],
        image: "/images/projects/kantin-smekon.png",
        description: {
          id: "Platform pemesanan kantin sekolah multi-vendor dengan manajemen akun per-stan, integrasi payment gateway, dashboard monitoring admin, dan ekspor laporan transaksi PDF/Excel.",
          en: "Multi-vendor school canteen ordering web platform featuring per-stall account management, payment gateway integration, admin monitoring dashboard, and PDF/Excel transaction report exports."
        },
        liveUrl: "https://kantin.radiantcode.web.id",
        buttonLabel: {
          id: "Kunjungi Website",
          en: "Visit Website"
        }
      },
      {
        id: "ecommerce-platform",
        title: "Platform E-Commerce",
        badge: {
          id: "Live Demo",
          en: "Live Demo"
        },
        statusType: "demo",
        stack: ["Laravel", "React", "MySQL", "Midtrans API", "Docker"],
        image: "/images/projects/ecommerce.png",
        description: {
          id: "Aplikasi toko online yang dibangun dengan arsitektur terpisah antara backend REST API Laravel dan frontend React, dilengkapi katalog produk, alur checkout, dan integrasi payment gateway Midtrans.",
          en: "Online store web application built with a decoupled Laravel REST API backend and React frontend, featuring product catalog management, checkout flow, and Midtrans payment gateway integration."
        },
        liveUrl: "https://demo1-ecommerce.radiantcode.web.id",
        buttonLabel: {
          id: "Live Demo",
          en: "Live Demo"
        }
      }
    ],
    clientProjects: [
      {
        id: "ptyes-inventaris",
        title: {
          id: "Sistem Inventaris Internal",
          en: "Internal Inventory System"
        },
        client: "PT Yaksa Ersada Solusindo (PT YES)",
        badge: {
          id: "Client Work • Private Repo",
          en: "Client Work • Private Repo"
        },
        role: {
          id: "Freelance Full Stack Developer",
          en: "Freelance Full Stack Developer"
        },
        period: {
          id: "Apr 2026 – Mei 2026",
          en: "Apr 2026 – May 2026"
        },
        stack: ["Laravel", "MySQL", "Tailwind CSS", "cPanel VPS"],
        summary: {
          id: "Sistem web inventaris internal untuk pencatatan dan pelacakan aset kantor multi-cabang (Jakarta, Bali, dan daerah lainnya) dengan pembagian hak akses pengguna.",
          en: "Internal inventory web system for multi-branch asset tracking (Jakarta, Bali, and regional sites) with role-based access management."
        },
        caseStudy: {
          overview: {
            id: "Sistem web inventaris internal untuk PT Yaksa Ersada Solusindo yang mempermudah pencatatan dan pelacakan aset fisik kantor di berbagai cabang secara terpusat.",
            en: "Internal inventory web system for PT Yaksa Ersada Solusindo to track and manage physical company assets across branches centrally."
          },
          coreFeatures: {
            id: [
              "Pencatatan & pelacakan aset lintas cabang (Jakarta, Bali, dan wilayah lain).",
              "Pembagian hak akses pengguna sesuai peran (Admin, Supervisor Cabang, Staf).",
              "Riwayat mutasi dan penyesuaian stok aset yang tercatat rapi.",
              "Laporan data inventaris berkala yang dapat diekspor ke format Excel dan PDF."
            ],
            en: [
              "Multi-branch asset tracking across Jakarta, Bali, and regional sites.",
              "Role-based access control (Admin, Branch Supervisor, Staff).",
              "Structured audit history for stock adjustments and asset transfers.",
              "Periodic inventory reports exportable to Excel and PDF formats."
            ]
          },
          techStackDetails: ["Laravel", "MySQL", "Tailwind CSS", "cPanel VPS"],
          image: "/images/projects/ptyes-inventaris.png"
        },
        sandboxUrl: ""
      },
      {
        id: "ptyes-ticketing",
        title: {
          id: "Sistem Ticketing & Monitoring",
          en: "Ticketing & Monitoring System"
        },
        client: "PT Yaksa Ersada Solusindo (PT YES)",
        badge: {
          id: "Client Work • Private Repo",
          en: "Client Work • Private Repo"
        },
        role: {
          id: "Freelance Full Stack Developer",
          en: "Freelance Full Stack Developer"
        },
        period: {
          id: "Jun 2026 – Jul 2026",
          en: "Jun 2026 – Jul 2026"
        },
        stack: ["Laravel", "MySQL", "REST API", "SMTP (Gmail)", "cPanel VPS"],
        summary: {
          id: "Platform pelaporan insiden operasional dan monitoring status layanan jaringan ISP serta lokasi kerja klien dengan notifikasi email otomatis.",
          en: "Operational ticketing and monitoring platform for logging incidents and tracking ISP network service status with email alerts."
        },
        caseStudy: {
          overview: {
            id: "Sistem pencatatan tiket dan monitoring operasional untuk memfasilitasi pelaporan gangguan teknis serta memantau status link jaringan di lokasi kerja klien.",
            en: "Operational ticketing and monitoring system designed to log technical incidents and monitor network link status across client worksites."
          },
          coreFeatures: {
            id: [
              "Pelaporan dan pelacakan tiket gangguan operasional dari awal dibuat hingga selesai.",
              "Pemantauan status layanan link ISP dan infrastruktur lokasi kerja secara terpusat.",
              "Notifikasi email otomatis via SMTP Gmail saat ada pembaruan status tiket.",
              "Pemeliharaan rutin dan pembaruan fitur sesuai kebutuhan operasional tim klien."
            ],
            en: [
              "Incident lifecycle tracking from ticket creation to resolution.",
              "Centralized monitoring of ISP link status and client worksite infrastructure.",
              "Automated email alerts via Gmail SMTP on ticket status updates.",
              "Ongoing maintenance and periodic feature updates aligned with client operations."
            ]
          },
          techStackDetails: ["Laravel", "MySQL", "REST API", "SMTP (Gmail)", "cPanel VPS"],
          image: "/images/projects/ptyes-ticketing.png"
        },
        sandboxUrl: ""
      }
    ]
  },

  certifications: {
    sectionIndex: "04 //",
    sectionTitle: {
      id: "Sertifikasi & Kredensial",
      en: "Certifications & Credentials"
    },
    previewPdfButton: {
      id: "Pratinjau PDF",
      en: "Preview PDF"
    },
    viewPdfButton: {
      id: "Buka di Tab Baru ↗",
      en: "Open in New Tab ↗"
    },
    credlyBadge: {
      title: {
        id: "Lencana Digital Terverifikasi Credly",
        en: "Verified Credly Digital Badges"
      },
      description: {
        id: "Verifikasi lencana digital resmi untuk sertifikasi AWS Cloud dan kompetensi teknis terakreditasi.",
        en: "Inspect verified digital badges for AWS Cloud certifications and accredited technical proficiencies."
      },
      url: "https://www.credly.com/users/galang-m-sherinian",
      buttonText: {
        id: "Buka Profil Credly ↗",
        en: "Open Credly Profile ↗"
      }
    },
    items: [
      {
        title: {
          id: "Junior React Developer",
          en: "Junior React Developer"
        },
        issuer: "Dicoding Indonesia",
        issuerType: "dicoding",
        date: {
          id: "Okt 2026 (Berlaku s.d. Okt 2029)",
          en: "Oct 2026 (Valid until Oct 2029)"
        },
        scoreOrWeight: {
          id: "Predikat: Sangat Kompeten",
          en: "Grade: Very Competent"
        },
        credentialId: "DCD-SMK/2026/X/096",
        file: "/certificates/dicoding-react.pdf",
        thumb: "/certificates/thumbs/dicoding-react.png"
      },
      {
        title: {
          id: "AWS Cloud Developing (57 JP)",
          en: "AWS Cloud Developing (57 JP)"
        },
        issuer: "DTS Komdigi x AWS",
        issuerType: "aws",
        date: {
          id: "Nov 2026",
          en: "Nov 2026"
        },
        scoreOrWeight: {
          id: "Kurikulum: 57 Jam Pelajaran",
          en: "Curriculum: 57 Hours of Training"
        },
        credentialId: "21212376840-27/DTA/BLSDM.Komdigi/2026",
        file: "/certificates/aws-developing.pdf",
        thumb: "/certificates/thumbs/aws-developing.png"
      },
      {
        title: {
          id: "AWS Cloud Foundations (27 JP)",
          en: "AWS Cloud Foundations (27 JP)"
        },
        issuer: "DTS Komdigi x AWS",
        issuerType: "aws",
        date: {
          id: "Okt 2026",
          en: "Oct 2026"
        },
        scoreOrWeight: {
          id: "Kurikulum: 27 Jam Pelajaran",
          en: "Curriculum: 27 Hours of Training"
        },
        credentialId: "21212375840-320/DTA/BLSDM.Komdigi/2026",
        file: "/certificates/aws-foundations.pdf",
        thumb: "/certificates/thumbs/aws-foundations.png"
      },
      {
        title: {
          id: "TOEIC Listening & Reading — Score 775",
          en: "TOEIC Listening & Reading — Score 775"
        },
        issuer: "ETS / PT ITC",
        issuerType: "ets",
        date: {
          id: "Agu 2026",
          en: "Aug 2026"
        },
        scoreOrWeight: {
          id: "Skor: 775 (L: 435, R: 340)",
          en: "Score: 775 (L: 435, R: 340)"
        },
        credentialId: "2296613",
        file: "/certificates/toeic-775.pdf",
        thumb: "/certificates/thumbs/toeic-775.png"
      },
      {
        title: {
          id: "JLPT N4 — Passed (108/180)",
          en: "JLPT N4 — Passed (108/180)"
        },
        issuer: "The Japan Foundation / JEES",
        issuerType: "jlpt",
        date: {
          id: "Des 2024",
          en: "Dec 2024"
        },
        scoreOrWeight: {
          id: "Status: Lulus (Skor 108/180)",
          en: "Status: Passed (Score 108/180)"
        },
        credentialId: "24B2010101-41879",
        file: "/certificates/jlpt-n4.pdf",
        thumb: "/certificates/thumbs/jlpt-n4.png"
      }
    ],
    additionalHighlights: {
      title: {
        id: "Kemampuan Bahasa & Prestasi Lainnya",
        en: "Language Proficiency & Additional Honours"
      },
      languages: {
        label: {
          id: "Bahasa",
          en: "Languages"
        },
        value: {
          id: "Indonesia (Penutur Asli), English (TOEIC 775), Japanese (JLPT N4)",
          en: "Indonesian (Native), English (TOEIC 775), Japanese (JLPT N4)"
        }
      },
      achievements: {
        label: {
          id: "Prestasi",
          en: "Honours & Awards"
        },
        value: {
          id: "Juara 1 IMSC Bahasa Inggris • Juara 1 Pidato Bahasa Inggris",
          en: "1st Place IMSC English Competition • 1st Place English Speech Contest"
        }
      }
    }
  },

  contact: {
    sectionIndex: "05 //",
    sectionTitle: {
      id: "Kontak",
      en: "Contact"
    },
    title: {
      id: "Mari Terhubung",
      en: "Let's Connect"
    },
    description: {
      id: "Tertarik berdiskusi tentang peluang magang/PKL, proyek web, atau sekadar bertukar kabar? Silakan kirimkan pesan melalui formulir di bawah atau hubungi saya langsung.",
      en: "Interested in discussing internship / PKL opportunities, web projects, or saying hello? Feel free to send a message through the form or reach out directly."
    },
    formHeaderTitle: {
      id: "Kirim Pesan",
      en: "Send Message"
    },
    copyEmailLabel: {
      id: "Salin Email",
      en: "Copy Email"
    },
    copiedLabel: {
      id: "Disalin!",
      en: "Copied!"
    },
    form: {
      nameLabel: {
        id: "Nama Lengkap",
        en: "Full Name"
      },
      namePlaceholder: {
        id: "Nama Anda",
        en: "Your name"
      },
      emailLabel: {
        id: "Alamat Email",
        en: "Email Address"
      },
      emailPlaceholder: {
        id: "email@contoh.com",
        en: "email@example.com"
      },
      messageLabel: {
        id: "Pesan",
        en: "Message"
      },
      messagePlaceholder: {
        id: "Tuliskan pesan Anda di sini...",
        en: "Write your message here..."
      },
      submitButton: {
        id: "Kirim Pesan",
        en: "Send Message"
      },
      submittingButton: {
        id: "Mengirim...",
        en: "Sending..."
      },
      successMessage: {
        id: "Pesan berhasil terkirim ke galangmaruff1@gmail.com. Terima kasih!",
        en: "Message successfully sent to galangmaruff1@gmail.com. Thank you!"
      },
      errorMessage: {
        id: "Terjadi kendala saat mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp / Email langsung.",
        en: "Failed to send message. Please try again or reach out via WhatsApp / Email."
      }
    }
  },

  footer: {
    copyright: "© 2026 Galang Ma'ruf Sherinian. All rights reserved.",
    designedWith: "Next.js, TypeScript & Tailwind CSS"
  }
};
