'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Using provided image paths
const desaImage = '/assets/images/candi.jpeg';
const tapeImage = '/assets/images/tape.jpeg';

export default function ProfilDesa() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="font-sans scroll-smooth overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">

      {/* Hero Section - Premium Dark Theme */}
      {/* Hero Section - Premium Dark Theme */}
<section className="min-h-screen w-full flex items-center justify-center text-white relative overflow-hidden pt-20">
  {/* Background with Enhanced Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-emerald-900/85 to-slate-800/90"></div>
  
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 md:w-2 md:h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full animate-ping"></div>
    <div className="absolute top-1/2 right-1/3 w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-300/20 rounded-full animate-bounce"></div>
  </div>

  <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full max-w-7xl mx-auto">
    {/* Hero Section */}
    <motion.div 
      className="text-center mb-16 sm:mb-20 lg:mb-24 -mt-32 sm:-mt-40 lg:-mt-48"
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
          <div className="inline w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
          PROFIL DESA
        </span>
      </motion.div>
      
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
        <span className="text-white">DESA</span>
        <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-200 bg-clip-text text-transparent">
          CANDI BINANGUN
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
        Menjelajahi sejarah, potensi, dan budaya lokal — <span className="text-emerald-300 font-medium">Kampung Tape</span> yang kaya <span className="text-teal-300 font-medium">tradisi</span> dan semangat kolaboratif.
      </p>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex flex-col items-center">
        <span className="text-xs sm:text-sm text-slate-300 mb-2">Scroll untuk membaca</span>
      </div>
    </motion.div>
  </div>
</section>

      {/* Tentang Desa Section - Modern Card Design */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white text-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium mb-6">
              Sejarah & Identitas
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent mb-6">
              Candi Binangun : Menjaga Akar, Menjemput Masa Depan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </motion.div>

          {/* Content Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white to-slate-100 rounded-3xl p-6 shadow-2xl">
                  <img
                    src={desaImage}
                    alt="Desa Candi Binangun"
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Candi Binangun</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Candibinangun tidak hanya berdiri sebagai sebuah nama desa, tetapi juga sebagai simbol harapan dan kebangkitan. Dahulu, wilayah ini dikenal dengan nama Candirubuh – sebuah nama yang lahir dari kisah runtuhnya sebuah candi di perbatasan Kalirejo. Meski reruntuhannya tak meninggalkan artefak yang dapat dibuktikan secara arkeologis, kisah itu tetap hidup dalam ingatan kolektif masyarakat. Pada tahun 1970-1971, nama baru “Candibinangun” diresmikan sebagai penanda semangat membangun kembali, bukan dalam bentuk candi fisik, melainkan nilai-nilai: budaya, moral, dan persatuan.
                </p>
                
              </div>
            </motion.div>
          </div>

          {/* Extended Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Nama itu juga menjadi pengingat bahwa sesuatu yang pernah runtuh pun bisa dibangun kembali menjadi lebih baik dari sebelumnya. Cerita mengenai asal-usul nama ini menjadi titik tolak penting dalam membentuk identitas desa. Masyarakat Candibinangun memaknai sejarah ini sebagai simbol kebangkitan, bahwa dari sesuatu yang runtuh, bisa tumbuh kekuatan baru yang membangun.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
               Pemukiman awal bermula dari Dusun Krajan I, tempat di mana kini berdiri petilasan leluhur yang menjadi titik awal kehidupan desa. Wilayah desa awalnya terdiri dari enam dusun, termasuk Montok Atas dan Montok Bawah, namun seiring waktu keduanya dilebur menjadi satu, menjadikan jumlah dusun saat ini menjadi lima: Krajan I, Krajan II, Montok, Kedung Likit, dan Kedung Banteng. Pembentukan dusun-dusun ini juga mencerminkan persebaran masyarakat yang mengikuti kontur wilayah dan sumber daya air. Masyarakat mempercayai bahwa petilasan leluhur Krajan I merupakan tempat berkumpulnya para pendiri desa di masa lampau. Hal ini membuat wilayah tersebut tidak hanya menjadi pusat pemukiman, tetapi juga pusat sejarah dan spiritualis warga.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
               Salah satu tokoh penting yang diyakini sebagai perintis penyebaran agama di wilayah ini adalah Mbah Bujuk Nasak, seorang murid dari Sunan Gunung Jati yang berasal dari Madura. Beliau datang ke Candibinangun pada masa masyarakat setempat masih memeluk agama Hindu. Menurut cerita tutur masyarakat, beliau merantau ke wilayah ini dengan menaiki seekor ikan raksasa yang kemudian menjelma menjadi batu dan dipercaya berada di area sekitar candi. Hingga kini, makam Mbah Bujuk Nasak masih menjadi tempat ziarah dan penghormatan warga. Bahkan, pada tahun 2025, tim KKN Universitas Yudharta Pasuruan turut melakukan ziarah dan dokumentasi ke makam tersebut sebagai upaya memperdalam pemahaman sejarah serta memperkuat hubungan generasi muda dengan akar budaya spiritual desa.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
               Kepemimpinan desa mengalami beberapa transisi penting, dimulai dari Pak Rohani (1937-1950) hingga Pak Wawan Sugianto (2020-sekarang). Nama-nama seperti Haji Toyib, Haji Abdul Mufti, dan Pak Usman menjadi bagian dari tonggak sejarah yang menandai perkembangan desa dari waktu ke waktu. Perubahan administratif seperti pergantian istilah dari “petinggi” ke “kepala desa” mulai berlaku setelah masa Haji Toyib, dan baru benar-benar diadopsi sekitar 1989, sepuluh tahun setelah UUD baru. Setiap masa kepemimpinan membawa pendekatan dan prioritas yang berbeda, tergantung pada tantangan zaman dan kebutuhan masyarakat. Kepemimpinan para tokoh ini juga mencerminkan perubahan cara pandang masyarakat terhadap pemerintahan desa. Dari yang sebelumnya bersifat kekeluargaan dan tradisional, kini lebih modern dan berbasis regulasi nasional
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
               Dulu, pusat kegiatan warga berada di rumah para tokoh, seperti semacam joglo rakyat, yang digunakan untuk musyawarah dan keputusan penting. Barulah seiring berkembangnya desa, fasilitas seperti balai desa, jalan beraspal, dan listrik mulai masuk secara bertahap. Paving jalan dimulai tahun 2002 di Dusun Montok, dan infrastruktur mulai lengkap hingga tahun 2013. Sebelum listrik masuk pada tahun 1990, warga menggunakan lampu cempluk sebagai penerangan malam. Pos ronda (gardu) dari bambu dibangun tahun 1998-2000 karena desa yang rawan pencurian. Namun, sejak 2003, desa mulai bangkit dengan semangat ekonomi kreatif yang digagas Pak Usman. Dengan adanya balai desa yang representatif, kegiatan administrasi, pelayanan masyarakat, dan pertemuan rutin kini bisa dilakukan secara terstruktur dan lebih profesional. Perubahan ini meningkatkan kepercayaan warga terhadap sistem pemerintahan desa
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Tradisi juga menjadi bagian penting dari identitas Candibinangun. Dulu, pencak silat menjadi warisan budaya yang diwariskan antargenerasi, namun kini lebih banyak warga mengikuti tren luar seperti grup Al-Banjari dan Al-Habsyi. Meskipun demikian, salah satu tradisi unik yang masih bertahan adalah gebluk bantal, alat musik dari bantal yang dimainkan dalam acara tertentu. Tradisi ini bukan hanya hiburan, tetapi juga sarana mempererat hubungan sosial dan menjaga rasa kebersamaan. Gebluk bantal ini biasanya dimainkan pada saat perayaan desa atau hajatan tertentu. Meski sederhana, tradisi ini mengandung makna kebersamaan dan kreativitas lokal yang patut dilestarikan.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Interaksi warga terus berkembang: dari kegiatan pertanian, usaha tape, hingga aktivitas keagamaan seperti tahlil, manaqib, dan pengajin rutin. Warga juga terlibat dalam kelompok Gapoktan, koperasi, dan kegiatan kemasyrakatan lainnya. Namun, warga juga menyadari bahwa rasa guyub yang dahulu kuat kini mulai memudar akibat pengaruh kehidupan modern dan kesibukan pribadi. Meski demikian, jejak semangat kolektif itu masih hidup – tersimpan dalam sejarah, nilai keluarga dan harapan baru yang perlahan muncul di kalangan generasi muda Candibinangun. Walaupun tantangan individualisme makin kuat, warga yang terlibat dalam kegiatan tahlil atau kelompok tani tetap merasa terikat oleh nilai kebersamaan. Ini menunjukkan bahwa akar sosial desa masih bertahan meski bentuknya mulai berubah.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Kini, Candibinangun buka hanya bertahan, tetapi telah tumbuh menjadi desa yang adaptif, produktif, dan reflektif terhadap sejarahnya. Semangat membangun dari reruntuhan candi telah menjelma menjadi semangat membangun desa dalam arti yang sesungguhnya: membangun kualitas hidup, relasi sosial, serta peradaban kecil yang penuh arti. Dengan dukungan teknologi dan pelatihan kewirausahaan, masyarakat semakin terbuka terhadap perubahan dan kolaborasi lintas sektor. Potensi ekonomi lokal, seperti produksi tape dan pertanian, diperkuat oleh semangat kolektif yang diwariskan dari generasi ke generasi. Candbinangun hari ini bukan sekedar cerminan masalalu yang tinggal cerita, melainkan masa depan yang sedang dibentuk melalui tekad, gotong royong, dan kesadaran akan pentingnya menjaga identitas budaya. Dengan kombinasi kekuatan sejarah dan semangat modern, desa ini siap menjadi ekosistem sosial-ekonomi yang berkelanjutan dan membanggakan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kampung Tape Section - Dark Theme */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.3)_0%,transparent_50%)] bg-[length:100px_100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full font-medium mb-6">
              Produk Unggulan
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                Tape Candi Binangun
              </span>
            </h2>
            <p className="text-xl text-slate-200 mb-6 max-w-3xl mx-auto">
              Jejak Tradisi, Napas Ekonomi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto"></div>
          </motion.div>

          {/* Content Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content First */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tradisi Turun Temurun</h3>
                </div>
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  Dibalik aroma manis tape yang menyeruak dari sudut-sudut Dusun Krajan I, tersimpan kisah panjang perjalanan ekonomi masyarakat Desa Candibinangun. Tape bukan hanya produk, tapi hasil dari keteguhan dan inovasi lokal. Sejak tahun 1950, warga desa mulai memproduksi tape dari ketan hitam, yang kemudian secara bertahap beralih ke tape singkong karena lebih mudah diproduksi dan disukai pasar. Pergeseran ini bukan semata-mata keputusan bisnis, tapi juga respons terhadap keterbatasan bahan baku dan perubahan selera konsumen.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-700/50 to-emerald-800/50 backdrop-blur-sm rounded-3xl p-6 border border-emerald-500/20">
                  <img
                    src={tapeImage}
                    alt="Tape Candi Binangun"
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-bold">Tape Premium</div>
                          <div className="text-emerald-300 text-sm">Kualitas Terbaik</div>
                        </div>
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Extended Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Tape singkong lebih cepat diproses, lebih murah, dan mampu menjangkau lebih banyak kalangan. Tape singkong lebih cepat diproses, lebih murah, dan mampu menjangkau lebih banyak kalangan. Peralihan besar terjadi sekitar tahun 1965, ditandai dengan munculnya tokoh-tokoh kunci seperti Pak Rahmani dan Pak Jalil. Mereka menjadi pelopor dalam membangun ekonomi berbasis tape yang berlanjut hingga tahun 2000. Pada masa itu, kelompok pedagang tape mulai tumbuh, hingga akhirnya tape Candibinangun mencapai masa kejayaan pada tahun 2001 dan menguat pada 2003 dengan fokus pada promosi serta pemasaran. Dari sistem penjualan tradisional seperti pikulan, usaha ini berkembang hingga mampu menggunakan kendaraan bermotor untuk distribusi. Pendekatan kolektif dalam usaha tape juga menciptakan jaringan sosial dan ekonomi yang saling mendukung di antara warga.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Dusun Krajan I kini diakui sebagai sentra tape, dengan pasokan singkong mencapai 25-30 ton per hari. Berbeda dari tape Bondowoso yang dikukus dan tahan lama, tape dari Candibinangun direbus agar proses lebih cepat dan produk bisa langsung diedarkan. Dalam 2-3 hari, tape dalam kemasan kresek biasanya sudah habis terjual di pasar tradisional. Proses perebusan juga dipilih karena lebih hemat energi, efisiensi waktu, dan cocok untuk memenuhi permintaan dalam jumlah besar, terutama saat musim liburan atau hari pasar. Kendati lebih cepat basi dibanding tape kukus, tape rebus dinilai lebih praktis dan sesuai dengan ritme konsumsi masyarakat.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Kemasan menjadi salah satu bentuk inovasi: dari kresek tradisional (disebut “manohara”), hingga mika dan kardus untuk segmen premium. Setidaknya ada 20 pelaku usaha menggunakan mika dan sudah memiliki izin resmi. Kardus digunakan untuk oleh-oleh dan dapat bertahan hingga 10 hari tanpa pengawet. Kemasan bukan hanya sekedar pelindung, tetapi juga simbol kualitas dan branding yang memengaruhi harga jual. Pilihan kemasan turut disesuaikan dengan target pasar, seperti kresek untuk pasar tradisional, mika untuk pasar wisata, dan kardus untuk keperluan khusus seperti hadiah atau oleh-oleh, kemasan kardus biasanya digunakan ketika ada pesanan untuk kalangan atas..
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Menariknya, meski proses produksi masih tradisional, sistem pemasaran telah berkembang. Penjualan dilakukan secara langsung, via agen pasar, hingga ke platform online seperti TikTok, Facebook, dan website milik kemitraan. Sampel tape kerap dikirim ke toko atau pasar untuk menarik pelanggan baru. Bahkan limbah kulit singkong tidak terbuang sia-sia, namun digunakan sebagai pakan ternak karena masih mengandung sisa tepung tapioka. Para produsen kini juga semakin sadar akan pentingnya pencatatan, pengemasan yang higienis, dan komunikasi aktif dengan konsumen
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Tak hanya bertahan di pasar lokal, tape Candibinangun juga mulai dikenal di luar wilayah Pasuruan. Beberapa produsen menjalin kemitraan dengan toko oleh-oleh di kota besar seperti Surabaya dan Malang, bahkan pernah menerima pesanan dalam jumlah besar untuk acara-acara pernikahan dan hajatan. Momentum ini menjadi peluang sekaligus tantangan, karena produsen dituntut untuk menjaga konsistensi rasa, kebersihan, serta ketepatan waktu pengiriman. Hal ini membuktikan bahwa tape bukan lagi sekedar makanan rumahan, melainkan telah menjadi produk ekonomi strategis desa
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Tape bukan hanya sumber penghasilan, tapi juga simbol ketekunan, keterhubungan antar warga, dan ketahanan sosial Candibinangun. Dari yang semula petani, kini warga bertransformasi menjadi pelaku usaha rumahan yang menjaga warisan, sekaligus membuka peluang baru bagi generasi muda. Usaha tape telah menjadi jalan untuk memperkuat ekonomi lokal, menyerap tenaga kerja, serta mempererat rasa kebersamaan daalm komunitas. Kisah tape Candibinangun adalah bukti nyata bahwa produk sederhana pun bisa menjadi kekuatan besar jika dikelola dengan tekun, kreatif, dan penuh semangat gotong royong
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Melalui sejarah panjang dan adaptasi yang terus berjalan, tape telah menjadi identitas kuliner khas Candibinangun. Setiap bungkus tape yang sampai ke tangan konsumen menyimpan cerita tentang kerja keras, perubahan sosial, dan kekuatan komunitas. Di tengah dunia yang terus bergerak cepat, tape Candibinangun mengajarkan kita bahwa mempertahankan tradisi bukan berarti berhenti berkembang, melainkan menjaga akar sambil tumbuh mengikuti zaman.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi Section - Modern Layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white text-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium mb-6">
              Komitmen Kami
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent mb-6">
              Visi & Misi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </motion.div>

          {/* Visi Misi Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Visi</h3>
                </div>
                <blockquote className="text-lg text-slate-700 italic leading-relaxed border-l-4 border-emerald-500 pl-6">
                  "Mewujudkan Desa Candibinangun yang Mandiri, Sejahtera, dan Berbudaya."
                </blockquote>
              </div>
            </motion.div>

            {/* Misi Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Misi</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Mendorong pertumbuhan ekonomi lokal berbasis UMKM tape.",
                    "Melestarikan budaya dan tradisi desa.",
                    "Meningkatkan kualitas pendidikan dan kesehatan masyarakat.",
                    "Memperkuat pemerintahan desa yang transparan dan akuntabel."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lokasi Section - Premium Map */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.3)_0%,transparent_50%)] bg-[length:120px_120px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full font-medium mb-6">
              Lokasi Strategis
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                Letak Geografis
              </span>
            </h2>
            <p className="text-lg text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed">
              Desa Candibinangun Terletak di Kecamatan Sukorejo, Kabupaten Pasuruan, Jawa Timur
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto"></div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13283.074549145655!2d112.74735378426759!3d-7.679763012015077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d08604b271df%3A0x463f39f6403ab022!2sCandi%20Binangun%2C%20Kec.%20Sukorejo%2C%20Pasuruan%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1753510631610!5m2!1sid!2sid"
                  loading="lazy"
                  allowFullScreen
                  title="Lokasi Desa Candibinangun"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Location Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-400/30">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lokasi Strategis</h3>
              <p className="text-slate-300 text-sm">Terletak di jalur yang mudah diakses</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-400/30">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.343 14.657L4.222 16.778A2 2 0 104.929 18.07l2.121-2.121" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.778 7.222L17.657 9.343A2 2 0 1016.93 8.929l2.121-2.121" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tanah Subur</h3>
              <p className="text-slate-300 text-sm">Mendukung pertanian dan perkebunan</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-slate-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-400/30">
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Terdiri Dari 5 Dusun</h3>
              <p className="text-slate-300 text-sm">Komunitas yang terhubung dengan baik</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Back to Top Button */}
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