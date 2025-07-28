import { motion } from "framer-motion";
import React from "react";

const organisasi = [
  {
    title: "Fatayat NU",
    image: "/assets/images/fatayat.jpg",
    description:
      "Fatayat NU merupakan organisasi perempuan muda Nahdlatul Ulama yang aktif dalam kegiatan sosial, keagamaan, dan pemberdayaan masyarakat desa.",
  },
  {
    title: "PKK",
    image: "/assets/images/pkk.jpg",
    description:
      "PKK (Pemberdayaan dan Kesejahteraan Keluarga) adalah organisasi kemasyarakatan yang berfokus pada kesejahteraan keluarga dan pemberdayaan perempuan di desa.",
  },
  {
    title: "BUMDes",
    image: "/assets/images/bumdes.jpg",
    description:
      "BUMDes (Badan Usaha Milik Desa) adalah lembaga usaha desa yang dibentuk untuk mengelola potensi ekonomi lokal dan meningkatkan kesejahteraan masyarakat desa.",
  },
];

const OrganisasiCard = React.memo(({ title, image, description, index }) => (
  <motion.div
    className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-indigo-100 hover:-translate-y-2"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.15,
      ease: "easeOut"
    }}
    whileHover={{ scale: 1.02 }}
  >
    {/* Image Container */}
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 lg:p-6">
      <div className="mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-700 mb-2 group-hover:text-indigo-800 transition-colors duration-300">
          {title}
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.div>
));

export default function OrganisasiDesa() {
  return (
    <section
      id="organisasi"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ORGANISASI DI DESA CANDI BINANGUN
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Berbagai organisasi yang aktif berperan dalam memajukan dan mengembangkan 
            kehidupan masyarakat Desa Candi Binangun
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {organisasi.map((item, index) => (
            <OrganisasiCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
}