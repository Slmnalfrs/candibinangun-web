"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Beranda() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    links.forEach(link => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="font-sans scroll-smooth overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">

      {/* Hero Section - Ultra Responsive */}
      <section
  id="hero"
  className="min-h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
>
  {/* Background Image with Mobile Optimization */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-cover sm:bg-center md:bg-cover md:bg-center"
    style={{ 
      backgroundImage: `url('/assets/images/KKN.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'scroll'
    }}
  >
    {/* Mobile-specific background adjustments */}
    <style jsx>{`
      @media (max-width: 640px) {
        div {
          background-size: cover !important;
          background-position: center 30% !important;
          background-attachment: scroll !important;
        }
      }
      
      @media (max-width: 480px) {
        div {
          background-size: 120% auto !important;
          background-position: center 25% !important;
        }
      }
    `}</style>
  </div>

  {/* Enhanced Mobile Gradient */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>
  
  {/* Responsive Particles */}
  <div className="absolute inset-0 hidden sm:block">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 md:w-2 md:h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full animate-ping"></div>
    <div className="absolute top-1/2 right-1/3 w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-300/20 rounded-full animate-bounce"></div>
  </div>
  
  {/* Main Content - Mobile Optimized */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full max-w-7xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-6 sm:mb-8"
    >
      <div className="inline-flex items-center px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-400/60 to-teal-400/60 backdrop-blur-xl border border-emerald-300/60 rounded-full mb-6 sm:mb-8">
       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-300 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
        <span className="text-white font-semibold tracking-wide text-xs sm:text-sm">SELAMAT DATANG DI</span>
      </div>
    </motion.div>
    
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none mb-4 sm:mb-6"
    >
      <span className="block bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
        DESA CANDI BINANGUN
      </span>
    </motion.h1>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-8 sm:mb-10 lg:mb-12"
    >
      <div className="h-0.5 sm:h-1 mb-4 sm:mb-6 lg:mb-8 invisible"></div>
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-200 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-2">
        Kampung Tape yang Kaya Akan <span className="text-emerald-300 font-medium">Tradisi</span> dan <span className="text-teal-300 font-medium">Budaya</span>
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6"
    >
      <motion.a
        href="/profil"
        whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -3 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl shadow-2xl shadow-emerald-900/50 transition-all duration-300 overflow-hidden touch-manipulation"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">Jelajahi Desa</span>
        <svg className="relative z-10 ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.a>
      
      <motion.a
        href="#profil"
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 touch-manipulation"
      >
        <span>Pelajari Lebih Lanjut</span>
        <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </motion.div>
  </div>
</section>

      {/* Profil Desa - Mobile-First Design */}
      <section id="profil" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-slate-50 to-white text-slate-800 relative overflow-hidden">
        {/* Responsive Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Mobile-Optimized Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <div className="inline-block px-4 sm:px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium text-sm sm:text-base mb-4 sm:mb-6">
              Tentang Desa
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
              Sejarah Singkat
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </motion.div>

          {/* Mobile-First Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Text Content - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-200/50">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 break-words">Desa Candi Binangun</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                  Candibinangun tidak hanya berdiri sebagai sebuah nama desa, tetapi juga sebagai simbol harapan dan kebangkitan. Dahulu, wilayah ini dikenal dengan nama Candirubuh – sebuah nama yang lahir dari kisah runtuhnya sebuah candi di perbatasan Kalirejo. Meski reruntuhannya tak meninggalkan artefak yang dapat dibuktikan secara arkeologis, kisah itu tetap hidup dalam ingatan kolektif masyarakat. 
                </p>
              </div>

              {/* Mobile-Optimized Stats Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center"
                >
                  <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">Dusun</div>
                  <div className="text-emerald-100 font-medium text-xs sm:text-sm">Terdiri dari 5</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center"
                >
                  <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">1970</div>
                  <div className="text-slate-300 font-medium text-xs sm:text-sm">Diresmikan Pada Tahun</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile-Optimized Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white to-slate-100 rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-xl sm:shadow-2xl">
                  <img
                    src="/assets/images/candibinangun.jpeg"
                    alt="Candi Bersejarah"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-3 sm:inset-6 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wirausaha Section - Ultra Mobile Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900 text-white relative overflow-hidden">
        {/* Mobile-Optimized Background Pattern */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.3)_0%,transparent_50%)] bg-[length:80px_80px] sm:bg-[length:100px_100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Mobile Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <div className="inline-block px-4 sm:px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full font-medium text-sm sm:text-base mb-4 sm:mb-6">
              Ekonomi Kreatif
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                Wirausaha Lokal
              </span>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto"></div>
          </motion.div>

          {/* Mobile-First Content Layout */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Mobile Image First */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative order-1 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-700/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-emerald-500/20">
                  <img
                    src="/assets/images/wirausaha.jpeg"
                    alt="Pelaku UMKM"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Mobile-Optimized Image Overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 right-4 sm:right-6 lg:right-10">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="text-white font-bold text-sm sm:text-base truncate">Pelaku UMKM Tape</div>
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-emerald-500 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-2"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">Pemberdayaan UMKM</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-4 sm:mb-6">
                  Mahasiswa KKN Universitas Yudharta Pasuruan menggali potensi ekonomi lokal melalui kunjungan ke pelaku UMKM tape di Dusun Krajan, Desa Candibinangun. Terlihat antusiasme peserta saat berdialog langsung dengan produsen tape tradisional dan inovatif.
                </p>
              </div>

              {/* Mobile CTA Button */}
              <motion.a
                href="/inovasi"
                whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-emerald-900/50 transition-all duration-300 touch-manipulation"
              >
                <span className="text-sm sm:text-base">Lihat Inovasi Kemasan</span>
                <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Mobile Navigation Dots - Optional */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-3">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.2 }}
          className="w-3 h-3 rounded-full bg-white/30 hover:bg-emerald-400 transition-colors duration-300 border border-white/50"
        ></motion.a>
        <motion.a
          href="#profil"
          whileHover={{ scale: 1.2 }}
          className="w-3 h-3 rounded-full bg-white/30 hover:bg-emerald-400 transition-colors duration-300 border border-white/50"
        ></motion.a>
        <motion.a
          href="#wirausaha"
          whileHover={{ scale: 1.2 }}
          className="w-3 h-3 rounded-full bg-white/30 hover:bg-emerald-400 transition-colors duration-300 border border-white/50"
        ></motion.a>
      </div>

      {/* Back to Top Button - Mobile Friendly */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: isMobile ? 1 : 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 touch-manipulation"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

    </div>
  );
}