"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Beranda() {
  // Smooth scroll saat user klik anchor
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

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url('/assets/images/candi.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
        <div className="relative z-10 px-4 py-20 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          >
            Selamat Datang di Desa Candi Binangun
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-gray-200 mb-6"
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
            className="inline-block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Tentang Kami
          </motion.a>
        </div>
      </section>

      {/* Section: Candi */}
      <section id="profil" className="py-20 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Desa Candi Binangun
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Candibinangun berasal dari nama Candirubuh, kisah runtuhnya candi di Kalirejo. Tahun 1970–1971, nama Candibinangun diresmikan sebagai simbol kebangkitan nilai budaya dan persatuan. Pemukiman awal ada di Krajan I, kini terdiri dari lima dusun.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           <img
            src="/assets/images/candibinangun.jpeg"
            alt="Candi Bersejarah"
            className="rounded-3xl shadow-2xl max-w-md w-full mx-auto hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Section: Wirausaha Lokal */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Wirausaha Lokal
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Produk tape dan olahan lainnya merupakan hasil kerja keras para pelaku UMKM lokal.
              Inovasi, semangat, dan kearifan lokal mendorong mereka untuk terus berkembang.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/images/wirausaha.jpeg"
              alt="Pelaku UMKM"
             className="rounded-3xl shadow-2xl max-w-md w-full mx-auto hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
