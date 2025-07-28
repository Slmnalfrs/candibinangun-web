"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
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

export default function Kegiatan() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white/90 px-6 py-16 sm:px-12 backdrop-blur-sm">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-indigo-800 mb-16 text-center drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        KEGIATAN MAHASISWA KKN
      </motion.h1>

      {Object.entries(programData).map(([kategori, items], idx) => (
        <div key={idx} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-6 border-b-2 border-purple-300 pb-2 text-center">
            {kategori}
          </h2>

          {/* Render Subprogram (Program Isidental) */}
          {kategori === "Program Isidental" ? (
            items.map((sub, subIdx) => (
              <div key={subIdx} className="mb-10">
                <h3 className="inline-block text-2xl font-bold text-purple-800 border-b-2 border-purple-300 pb-1 mb-4">
                  {sub.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sub.children.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                      onClick={() => setSelected(item)}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-purple-800">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  onClick={() => setSelected(item)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-purple-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Modal Dialog with AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center px-4 py-8">
              <motion.div
                className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10 overflow-y-auto max-h-[92vh] relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="sticky top-4 left-full transform -translate-x-6 z-10 text-gray-400 hover:text-gray-600 text-3xl font-bold"
                >
                  &times;
                </button>
                <div className="mb-6">
                  <img
                    src={selected.images[0]}
                    alt={selected.title}
                    className="w-full max-h-[65vh] object-contain rounded-xl shadow"
                  />
                </div>
                <h2 className="text-3xl font-extrabold text-purple-800 mb-4">
                  {selected.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                  {selected.description}
                </p>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
