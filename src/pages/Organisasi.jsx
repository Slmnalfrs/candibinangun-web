import { motion } from "framer-motion";
import React from "react";

const organisasi = [
  {
    title: "Fatayat",
    image: "/assets/images/fatayat.jpg",
    description:
      "Fatayat NU merupakan organisasi perempuan muda Nahdlatul Ulama yang aktif dalam kegiatan sosial, keagamaan, dan pemberdayaan masyarakat.",
  },
  {
    title: "PKK",
    image: "/assets/images/pkk.jpg",
    description:
      "PKK (Pemberdayaan dan Kesejahteraan Keluarga) adalah organisasi kemasyarakatan yang berfokus pada kesejahteraan keluarga dan pemberdayaan perempuan di desa.",
  },
  {
    title: "BUMDES",
    image: "/assets/images/bumdes.jpg",
    description:
      "BUMDes (Badan Usaha Milik Desa) adalah lembaga usaha desa yang dibentuk untuk mengelola potensi ekonomi lokal dan meningkatkan kesejahteraan masyarakat desa.",
  },
];

const OrganisasiCard = React.memo(({ title, image, description, index }) => (
  <motion.div
    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-indigo-100"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
));

export default function OrganisasiDesa() {
  return (
    <section
  id="organisasi"
  className="py-20 bg-transparent"
>
  <div className="container mx-auto px-4">
    <motion.h1
      className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      ORGANISASI DI DESA CANDI BINANGUN
    </motion.h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
  </div>
</section>
  );
}
