import { motion } from "framer-motion";

const inovasiList = [
  {
    nama: "Tape Original",
    deskripsi: "Tape singkong manis hasil fermentasi tradisional.",
    img: "/assets/images/tape ketan.jpg",
  },
  {
    nama: "Bolu Tape",
    deskripsi: "Kue bolu lembut berbahan dasar tape singkong.",
    img: "/assets/images/bolu tape.jpg",
  },
  {
    nama: "Tape Goreng",
    deskripsi: "Tape digoreng renyah dengan cita rasa khas.",
    img: "/assets/images/tape goreng.jpg",
  },
];

export default function Inovasi() {
  return (
    <div className="bg-transparent px-6 py-16 sm:px-12">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        INOVASI KEMASAN 
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {inovasiList.map((inovasi, index) => (
          <motion.div
            key={index}
            className="bg-white border border-indigo-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={inovasi.img}
              alt={inovasi.nama}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-2">
                {inovasi.nama}
              </h3>
              <p className="text-gray-600 text-sm">{inovasi.deskripsi}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
