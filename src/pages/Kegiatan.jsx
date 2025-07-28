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
  const [clickPosition, setClickPosition] = useState(null);

  const handleItemClick = (item, event) => {
    // Get click position relative to viewport
    const rect = event.currentTarget.getBoundingClientRect();
    const clickPos = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2 + window.scrollY
    };
    
    setClickPosition(clickPos);
    setSelected(item);
  };

  const handleCloseModal = () => {
    setSelected(null);
    setTimeout(() => setClickPosition(null), 400);
  };

  // Calculate initial position based on click position
  const getInitialTransform = () => {
    if (!clickPosition) return { x: 0, y: 50 };
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    return {
      x: (clickPosition.x - centerX) * 0.3,
      y: (clickPosition.y - centerY) * 0.3
    };
  };

  const initialTransform = getInitialTransform();

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
                        onClick={(e) => handleItemClick(item, e)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                            }}
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
                    onClick={(e) => handleItemClick(item, e)}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
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
          <Dialog 
            open={!!selected} 
            onClose={handleCloseModal} 
            className="relative z-50"
          >
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true" 
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel>
                <motion.div
                  className="w-full max-w-4xl lg:max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col relative"
                  initial={{ 
                    opacity: 0, 
                    scale: 0.4, 
                    x: initialTransform.x, 
                    y: initialTransform.y,
                    rotateY: 15
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0, 
                    y: 0,
                    rotateY: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.4, 
                    x: initialTransform.x, 
                    y: initialTransform.y,
                    rotateY: -15
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    opacity: { duration: 0.3 }
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white hover:text-red-600 flex items-center justify-center transition-all duration-200 shadow-lg border border-gray-200"
                    aria-label="Close modal"
                  >
                    <span className="text-xl sm:text-2xl font-light">&times;</span>
                  </button>

                  {/* Content Container */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
                    {/* Image */}
                    <motion.div 
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <img
                        src={selected.images[0]}
                        alt={selected.title}
                        className="w-full max-h-[40vh] sm:max-h-[50vh] lg:max-h-[65vh] object-contain rounded-lg sm:rounded-xl shadow-lg bg-gray-50"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </motion.div>
                    
                    {/* Title and Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <Dialog.Title className="text-2xl sm:text-3xl font-extrabold text-purple-800 mb-4">
                        {selected.title}
                      </Dialog.Title>
                      <Dialog.Description className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                        {selected.description}
                      </Dialog.Description>
                    </motion.div>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}