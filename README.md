Live Production at : portofolio.radiantcode.web.id

# Radiant Code Portfolio - Premium Glassmorphism Web

Repositori ini berisi kode sumber untuk website portofolio pribadi Galang Ma'ruf Sherinian. Proyek ini dibangun bukan sekadar untuk menampilkan riwayat hidup, melainkan untuk mendemonstrasikan keahlian teknis tulen dalam membangun antarmuka web yang modern, interaktif, dan berstandar pameran (showcase).

## Latar Belakang Proyek

Dalam ekosistem antarmuka web modern, kesan pertama bagi pengguna (*recruiter*) sangatlah krusial. Oleh karena itu, saya memutuskan untuk merancang web portofolio ini menggunakan gaya arsitektur "Dark Glassmorphism". Alih-alih sekadar menggunakan gaya minimalis statis pada umumnya, web ini memaksimalkan potensi rendering browser tingkat lanjut untuk menghasilkan lapisan kaca buram semi-transparan di atas elemen cahaya (ambient) yang dikonfigurasikan agar terus bergerak.

Visi utamanya adalah untuk menciptakan sensasi web yang terasa elegan dan hidup, di mana pengunjung dapat menikmati transisi objek yang mulus dan sentuhan efek mikro (micro-interactions) pada setiap inci halamannya.

## Fitur Utama dan Penjelasan Implementasi

### 1. Ambient Breathing Background (Latar Belakang Dinamis)
Latar belakang pada portofolio ini tidak menggunakan fail gambar statis atau video format MP4 yang cenderung membebani memori (*bandwidth*). Sebagai gantinya, estetika gelap ini murni dirender melalui manipulasi Vanilla CSS. Cahaya berbentuk gradien diatur agar secara otomatis mensimulasikan pergerakan di sepanjang area terlihat (Viewport Screen) menggunakan algoritma *Keyframes* presisi. Kombinasi radius pergeseran yang ekstrim dengan *blur* pekat menciptakan efek ilusi cahaya menyala (seperti *lava lamp* / aurora) yang terus menjelajahi layar tanpa mengorbankan performa aplikasi.

### 2. Animasi Terenkapsulasi Berbasis Scroll (Framer Motion)
Untuk menghindari kejenuhan navigasi, seluruh blok konten dalam repositori ini dirancang berbasis intersepsi guliran layar pengguna. Mengimplementasikan pustaka `framer-motion` sebagai penengah, setiap kartu riwayat *timeline*, daftar keahlian, hingga profil proyek disuntik dengan animasi pelacakan yang menunda elemen agar *fade-up* di momen logis—yakni hanya saat mereka muncul di bidang pandang baca pengguna. Hal ini menciptakan pengalaman sekuensial (*cinematic browsing*).

### 3. Integrasi Formulir Komunikasi AJAX Tanpa Server
Aplikasi front-end ini juga meniadakan keharusan memiliki rute Server Node/Laravel mandiri khusus untuk fungsionalitas email. Dengan merekayasa lalu lintas tipe *FormData* sebagai abstraksi antarmuka untuk Web API eksternal (FormSubmit), pengunjung dapat seketika mengirim penawaran, konsultasi proyek, atau pertanyaan langsung ke inbox *Gmail* utama saya langsung di bawah proyek unggulan. Sistem interaksi asinkron ini memastikan halaman tidak harus di-refresh atau dialihkan saat pengiriman komunikasi berhasil.

### 4. Isolasi Komponen dan Struktur Berulang
Proyek ini mengutamakan keterbacaan baris instruksi (clean code). File raksasa dipisahkan menjadi modul komponen unik, mencakup `<Timeline />` untuk membungkus susunan historis pendidikan dan `<ContactForm />` untuk membungkus logika state pesan. Pemanfaatan reusabilitas kerangka React meminimalkan kode redudansi, melestarikan kemudahan pemeliharaan (*maintainability*).

## Susunan Tumpukan Teknologi (Tech Stack)

Ekosistem kode utama yang menopang skalabilitas portofolio mencakup:

- Pemasok Kerangka Kerja: Next.js (Konvensi App Router)
- Bahasa Struktur Inti: TypeScript bersama React.js
- Pendekatan Desain Utilitas: Modul gabungan antara Tailwind CSS (penempatan, dimensi grid) dan Vanilla CSS murni (manipulasi Glassmorphism dan Keyframes).
- Logika Animasi Lanjutan: Framer Motion API
- Pengiriman Konten & Logika formulir: Vercel Cloud dan REST API FormSubmit.

## Panduan Instalasi Repositori di Perangkat Lokal

Bagi Anda yang sekiranya berminat mengeksplorasi susunan kode atau ingin mencoba langsung hasil akhirnya di lingkungan komputer (*localhost*), tahapan eksekusinya telah disiapkan sebagai berikut:

1. Kloning Repositori
Tarik salinan kode sumber dari server GitHub melalui baris perintah Git:
`git clone https://github.com/Radiant213/portofolio.git`

2. Navigasi menuju Direktori
Lakukan penetapan lokasi pekerjaan:
`cd portofolio`

3. Pengunduhan Paket Dependensi Inti
Kumpulkan dan instal modul NPM wajib penopang aplikasi:
`npm install`

4. Aktifkan Rantai Server Pengembangan
Berikan instruksi penyalaan simulasi server Next.js:
`npm run dev`

5. Verifikasi Peluncuran
Sebagai langkah terakhir, akses peramban favorit Anda lalu masuk ke rute port pengujian standar: `http://localhost:3000`. Pastikan animasi pergerakan cahaya merespons guliran tetikus Anda.

## Identitas Pengembang

Seluruh infrastruktur dan rancangan antarmuka ditulis serta diaplikasikan penuh oleh **Galang Ma'ruf Sherinian**. Saat pengembangan proyek ini dilangsungkan, saya adalah seorang analis muda pada jurusan Pengembangan Perangkat Lunak dan Gim di SMKN 1 Purwokerto. Antusiasme murni terhadap efisiensi server (seperti Next.js, Laravel) berdampingan kuat selaras dengan kepekaan saya menyusun logika halaman antarmuka pengguna sekelas agensi premium. 

*(Dipersilakan menyelami berkas-berkas `app/` untuk pembuktian dedikasi pengkodean ini!)*


