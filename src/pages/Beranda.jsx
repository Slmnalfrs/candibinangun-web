"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Beranda() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section - Improved responsiveness */}
      <section
        id="hero"
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url('/assets/images/candi.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40 max-w-6xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 drop-shadow-lg"
          >
            Selamat Datang di Desa Candi Binangun
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto"
          >
            Kampung Tape yang Kaya Akan Tradisi dan Budaya
          </motion.p>
          <motion.a
            href="/profil"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full shadow-lg transition duration-300 text-sm sm:text-base md:text-lg"
          >
            Tentang Kami
          </motion.a>
        </div>
      </section>

      {/* Section: Profil Desa - Enhanced mobile layout */}
      <section id="profil" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-800 mb-3 sm:mb-4 text-center lg:text-left">
                Desa Candi Binangun
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify sm:text-left">
                Candibinangun berasal dari nama Candirubuh, kisah runtuhnya candi di Kalirejo. Tahun 1970–1971, nama Candibinangun diresmikan sebagai simbol kebangkitan nilai budaya dan persatuan. Pemukiman awal ada di Krajan I, kini terdiri dari lima dusun.
              </p>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/assets/images/candibinangun.jpeg"
                  alt="Candi Bersejarah"
                  className="rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto hover:scale-105 transition-transform duration-500 object-cover aspect-square sm:aspect-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Wirausaha Lokal - Enhanced mobile layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 lg:gap-12">
            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-800 mb-3 sm:mb-4 text-center lg:text-left">
                Wirausaha Lokal
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify sm:text-left">
                Mahasiswa KKN Universitas Yudharta Pasuruan menggali potensi ekonomi lokal melalui kunjungan ke pelaku UMKM tape di Dusun Krajan, Desa Candibinangun. Terlihat antusiasme peserta saat berdialog langsung dengan produsen tape tradisional dan inovatif, sembari mendokumentasikan proses produksi serta tantangan yang mereka hadapi di era digital. Dokumentasi ini menjadi bukti nyata dedikasi mahasiswa dalam memberdayakan potensi desa secara berkelanjutan.
              </p>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/assets/images/wirausaha.jpeg"
                  alt="Pelaku UMKM"
                  className="rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto hover:scale-105 transition-transform duration-500 object-cover aspect-square sm:aspect-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}