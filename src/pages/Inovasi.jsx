import { motion } from "framer-motion";

const inovasiList = [
  {
    nama: "Kemasan",
    deskripsi: "Tape singkong manis hasil fermentasi tradisional dengan cita rasa authentic yang telah diwariskan turun temurun.",
    img: "/assets/images/.jpg",
  },
  {
    nama: "Kemasan",
    deskripsi: "Kue bolu lembut berbahan dasar tape singkong dengan tekstur yang unik dan rasa manis alami yang khas.",
    img: "/assets/images/.jpg",
  },
  {
    nama: "Kemasan",
    deskripsi: "Tape digoreng renyah dengan lapisan tepung yang crispy, memberikan sensasi berbeda pada tape tradisional.",
    img: "/assets/images/.jpeg",
  },
];

export default function Inovasi() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            INOVASI KEMASAN
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Menghadirkan inovasi kemasan  tape untuk memenuhi selera modern 
            tanpa menghilangkan cita rasa tradisional yang autentik
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {inovasiList.map((inovasi, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-indigo-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={inovasi.img}
                  alt={inovasi.nama}
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-7">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors duration-300">
                    {inovasi.nama}
                  </h3>
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {inovasi.deskripsi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}