"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Updated data structure with nested sub-programs
const programData = {
  "Program Kerja Utama": [
    {
      title: "Pembukaan KKN",
      images: ["/assets/images/pembukaan.jpeg"],
      description: "Kegiatan pembukaan program KKN sebagai tanda dimulainya pengabdian masyarakat.",
    },
    {
      title: "SOP",
      images: ["/assets/images/SOP.jpeg"],
      description: "Sosialisasi Standar Operasional Prosedur untuk pelaku wirausaha lokal.",
    },
    {
      title: "Inovasi Kemasan",
      images: ["/assets/images/website.jpeg"],
      description: "Pengembangan kemasan modern untuk produk tape agar lebih menarik dan aman dalam distribusi.",
    },
  ],
  "Program Isidental": [
    {
      title: "Pendidikan",
      children: [
        {
          title: "SDN",
          images: ["/assets/images/pendidikan.jpeg"],
          description: "Mengajar dan membantu proses belajar mengajar di Sekolah Dasar.",
        },
        {
          title: "Bimbel",
          images: ["/assets/images/sosialisasi.jpeg"],
          description: "Bimbingan belajar untuk anak-anak desa di luar jam sekolah.",
        },
      ],
    },
    {
      title: "Keagamaan",
      children: [
        {
          title: "Madrasah",
          images: ["/assets/images/sosialisasi.jpeg"],
          description: "Membantu kegiatan belajar di madrasah diniyah.",
        },
        {
          title: "TPQ",
          images: ["/assets/images/TPQ.jpeg"],
          description: "Mengajar dan mendampingi anak-anak dalam kegiatan Taman Pendidikan Quran.",
        },
      ],
    },
    {
      title: "Sosial",
      children: [
        {
          title: "Kerja Bakti",
          images: ["/assets/images/sosialisasi.jpeg"],
          description: "Membersihkan lingkungan dan fasilitas umum secara gotong royong.",
        },
      ],
    },
  ],
  "Program Unggulan": [
    {
      title: "Mitigasi Stunting",
      images: ["/assets/images/sosialisasi.jpeg"],
      description: "Penyuluhan dan pembagian makanan sehat untuk pencegahan stunting.",
    },
    {
      title: "Company Profile",
      images: ["/assets/images/sosialisasi.jpeg"],
      description: "Pembuatan video dan desain profil usaha tape yang siap untuk promosi.",
    },
  ],
};

// Modal Dialog Component
function Modal({ selected, onClose }) {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true" 
      />
      <motion.div
        className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 pr-4">
            {selected.title}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <span className="text-xl sm:text-2xl text-gray-600 font-light">×</span>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <img
              src={selected.images[0]}
              alt={selected.title}
              className="w-full max-h-[40vh] sm:max-h-[50vh] object-contain rounded-lg sm:rounded-xl shadow-lg bg-gray-50"
            />
          </div>
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-wrap">
              {selected.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Kegiatan() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white/90 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 backdrop-blur-sm min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-indigo-800 mb-12 sm:mb-16 lg:mb-20 text-center drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          KEGIATAN MAHASISWA KKN
        </motion.h1>

        {Object.entries(programData).map(([kategori, items], idx) => (
          <div key={idx} className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-800 mb-6 sm:mb-8 border-b-2 border-purple-300 pb-2 sm:pb-3 text-center">
              {kategori}
            </h2>

            {/* Render Subprogram (Program Isidental) */}
            {kategori === "Program Isidental" ? (
              items.map((sub, subIdx) => (
                <div key={subIdx} className="mb-8 sm:mb-10 lg:mb-12">
                  <h3 className="inline-block text-lg sm:text-xl lg:text-2xl font-bold text-purple-800 border-b-2 border-purple-300 pb-1 mb-4 sm:mb-6">
                    {sub.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {sub.children.map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group"
                        onClick={() => setSelected(item)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-3 sm:p-4 lg:p-5">
                          <h4 className="text-base sm:text-lg font-bold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors duration-200">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Render Normal Items
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group"
                    onClick={() => setSelected(item)}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-3 sm:p-4 lg:p-5">
                      <h3 className="text-base sm:text-lg font-bold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Dialog with AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <Modal 
            selected={selected} 
            onClose={() => setSelected(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}