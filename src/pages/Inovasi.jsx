import { motion } from "framer-motion";
import { Package, TrendingUp, Users, Award, CheckCircle, Lightbulb,} from "lucide-react";

const inovasiList = [
  {
    nama: "Inovasi Kemasan",
    deskripsi: "Tim KKN Kelompok 14 Universitas Yudharta Pasuruan menghadirkan inovasi kemasan produk tape sebagai upaya meningkatkan daya tarik dan nilai jual tape di Candibinangun.",
    img: "/assets/images/kemasan.jpeg",
    keunggulan: [
      "Praktis",
      "Kemasan Yang Higienis", 
      "Protek Yang Lebih Kuat",
      "Tampilan Modern dan Tradisional",
      "Desain Label Elegan"      
    ],
  },
];

const features = [
  {
    icon: Package,
    title: "Design Modern",
    description: "Kemasan dengan desain kontemporer yang menarik perhatian konsumen"
  },
  {
    icon: TrendingUp,
    title: "Peningkatan Nilai",
    description: "Meningkatkan perceived value dan daya saing produk di pasar"
  },
  {
    icon: Users,
    title: "UMKM Friendly",
    description: "Solusi kemasan yang terjangkau dan mudah diterapkan oleh UMKM"
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    description: "Material berkualitas yang menjaga kesegaran dan higienitas produk"
  }
];

export default function Inovasi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16 sm:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="px-6 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 text-sm font-medium border border-emerald-500/30">
                <Lightbulb className="inline w-4 h-4 mr-2" />
                INOVASI
              </span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="text-white">INOVASI</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-200 bg-clip-text text-transparent">
                KEMASAN & UJI SAMPLING
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Menghadirkan solusi kemasan inovatif untuk produk tape tradisional, 
              memadukan estetika modern dengan nilai-nilai lokal untuk meningkatkan daya saing UMKM
            </p>
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          </motion.div>

          {/* Main Product Card */}
          <div className="mb-16 sm:mb-20">
            {inovasiList.map((inovasi, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-10 lg:p-12">
                  {/* Image Section */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden rounded-2xl group">
                      <img
                        src={inovasi.img}
                        alt={inovasi.nama}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPktlbWFzYW4gSW5vdmF0aWY8L3RleHQ+PC9zdmc+';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {inovasi.kategori}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-4">
                        {inovasi.nama}
                      </h2>
                      <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    </div>

                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8">
                      {inovasi.deskripsi}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4">Keunggulan Utama:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {inovasi.keunggulan.map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center text-sm text-slate-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-4">
                Mengapa Inovasi Ini Penting?
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-slate-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Bersama Membangun UMKM yang Lebih Kuat
              </h3>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                Inovasi kemasan ini merupakan langkah nyata dalam mendukung perkembangan UMKM lokal 
                dan meningkatkan daya saing produk tradisional di era modern.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}