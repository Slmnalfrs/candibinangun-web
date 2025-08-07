import { motion } from "framer-motion";
import React from "react";
import { Users, Heart, Building, DollarSign,} from "lucide-react";

const organisasi = [
  {
    title: "Fatayat NU",
    image: "/assets/images/fatayat.jpeg",
    description: "Fatayat NU Candibinangun menjadi motor penggerak dalam kegiatan sosial, keagamaan, dan pemberdayaan perempuan muda di desa. Melalui berbagai kegiatan seperti pengajian rutin, pelatihan keterampilan, serta kolaborasi dengan mahasiswa KKN, Fatayat NU turut memperkuat peran perempuan dalam pembangunan desa berbasis nilai keislaman dan kebersamaan.",
    fokus: "Pemberdayaan Perempuan",
    kegiatan: "Pengajian & Pelatihan",
    color: "emerald"
  },
  {
    title: "PKK",
    image: "/assets/images/pkk.jpeg",
    description: "Tim Penggerak PKK Desa Candibinangun aktif menjalankan berbagai program pemberdayaan keluarga, mulai dari posyandu, pelatihan keterampilan, hingga edukasi gizi dan kesehatan. Kolaborasi dengan mahasiswa KKN juga turut memperkuat peran ibu-ibu PKK dalam membangun keluarga yang mandiri, sehat, dan berdaya. Semangat gotong royong dan solidaritas menjadi kunci keberhasilan setiap kegiatan yang digelar.",
    fokus: "Pemberdayaan Keluarga",
    kegiatan: "Posyandu & Edukasi",
    color: "teal"
  },
  {
    title: "BUMDES",
    image: "/assets/images/bumdes.jpeg",
    description: "Badan Usaha Milik Desa (BUMDES) Candibinangun berperan penting dalam menggerakkan roda perekonomian lokal melalui pengelolaan unit usaha desa yang berbasis potensi wilayah. Mulai dari pengembangan produk lokal hingga penyediaan layanan kebutuhan masyarakat, BUMDes hadir sebagai bentuk kemandirian dan inovasi desa. Kolaborasi dengan KKN turut membuka peluang baru dalam promosi dan pengembangan usaha secara lebih modern.",
    fokus: "Ekonomi Desa",
    kegiatan: "Pengembangan UMKM",
    color: "slate"
  },
  {
    title: "POLINDES",
    image: "/assets/images/polindes.jpeg",
    description: "Pondok Bersalin Desa (Polindes) Candibinangun hadir sebagai fasilitas kesehatan yang melayani kebutuhan ibu hamil, ibu menyusui, dan anak-anak secara cepat dan terjangkau. Didukung bidan desa dan kader kesehatan, Polindes menjadi tempat konsultasi dan pemeriksaan rutin yang penting bagi masyarakat. Kolaborasi dengan mahasiswa KKN turut memperkuat edukasi kesehatan dan sosialisasi pola hidup sehat di lingkungan desa",
    fokus: "Pondok Bersalin Desa",
    kegiatan: "Kesehatan Ibu & Anak",
    color: "slate"
  },
];

const OrganisasiCard = React.memo(({ title, image, description, color, index }) => {
  const colorClasses = {
    emerald: {
      gradient: "from-emerald-500 to-teal-500",
      text: "text-emerald-400",
      bg: "bg-emerald-500/20",
      border: "border-emerald-500/30",
      hover: "hover:text-emerald-300"
    },
    teal: {
      gradient: "from-teal-500 to-cyan-500",
      text: "text-teal-400",
      bg: "bg-teal-500/20",
      border: "border-teal-500/30",
      hover: "hover:text-teal-300"
    },
    slate: {
      gradient: "from-slate-500 to-gray-500",
      text: "text-slate-400",
      bg: "bg-slate-500/20",
      border: "border-slate-500/30",
      hover: "hover:text-slate-300"
    }
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      className="group bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-500"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk9yZ2FuaXNhc2kgRGVzYTwvdGV4dD48L3N2Zz4=';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-7">
        <div className="mb-4">
          <h2 className={`text-xl sm:text-2xl font-bold text-white mb-3 ${colors.hover} transition-colors duration-300`}>
            {title}
          </h2>
          <div className={`h-1 w-16 bg-gradient-to-r ${colors.gradient} rounded-full`} />
        </div>
        
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
});

export default function OrganisasiDesa() {
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

      <section id="organisasi" className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
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
                <Building className="inline w-4 h-4 mr-2" />
                ORGANISASI MASYARAKAT
              </span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="text-white">ORGANISASI</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-200 bg-clip-text text-transparent">
                DESA CANDIBINANGUN
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Kekuatan organisasi masyarakat yang aktif berperan dalam memajukan dan mengembangkan 
              kehidupan sosial, ekonomi, dan keagamaan di Desa Candibinangun
            </p>
          </motion.div>

          {/* Highlights Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
            {organisasi.map((item, index) => (
              <OrganisasiCard
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                icon={item.icon}
                fokus={item.fokus}
                anggota={item.anggota}
                kegiatan={item.kegiatan}
                color={item.color}
                index={index}
              />
            ))}
          </div>

          {/* Impact Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-slate-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Bersama Membangun Desa yang Maju dan Berkelanjutan
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Kolaborasi antar organisasi dan dukungan program KKN menciptakan sinergi positif 
                dalam pembangunan desa yang holistik dan berbasis masyarakat.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Sosial & Keagamaan</h4>
                  <p className="text-sm text-slate-300">Pemberdayaan masyarakat berbasis nilai</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Pemberdayaan Keluarga</h4>
                  <p className="text-sm text-slate-300">Kesehatan dan kesejahteraan keluarga</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Ekonomi Desa</h4>
                  <p className="text-sm text-slate-300">Pengembangan usaha dan UMKM lokal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}