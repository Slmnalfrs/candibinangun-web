"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, MapPin, Award, Play, Pause } from "lucide-react";
import { desc } from "framer-motion/client";

// Updated data structure with nested sub-programs
const programData = {
  "Program Kerja Utama": [
    {
      title: "Pembukaan KKN",
      images: ["/assets/images/pembukaan.jpeg"],
      description: "Kegiatan pembukaan KKN Universitas Yudharta Pasuruan di Balai Desa Candibinangun pada 14 Juli 2025. Mengangkat tema MEMBANGUN DESA WIRAUSAHA MELALUI INOVASI EKONOMI KREATIF, acara berlangsung khidmat dengan partisipasi mahasiswa, perangkat desa, dan pelaku UMKM lokal. Tampak momen simbolis pengukuhan mahasiswa KKN serta antusiasme peserta yang terekam dalam sesi dokumentasi.",
      location: "Balai Desa Candibinangun",
    },
    {
      title: "SOP (Standar Operasional Prosedur)",
      images: ["/assets/images/SOP.jpeg"],
      description: "Dalam semangat melestarikan warisan kuliner lokal, mahasiswa KKN Kelompok 14 Universitas Yudharta Pasuruan mengikuti proses pembuatan tape tradisional bersama Pak Imron, pelaku usaha tape yang telah puluhan tahun berkarya di Dusun Krajan. Kegiatan ini menjadi ruang belajar yang sarat nilai—dari teknik pengolahan hingga makna ketekunan dalam menjaga cita rasa khas desa. Mahasiswa terlibat langsung dari awal hingga akhir proses, menjadikan pengalaman ini bukan hanya praktik, tapi juga bentuk penghormatan terhadap budaya lokal.",
      location: "Rumah Bapak Imron",
      participants: "Tim KKN 14"
    },
    {
      title: "Inovasi Kemasan & Uji Sampling",
      images: ["/assets/images/inovasi.jpeg"],
      description: "Tim KKN Kelompok 14 Universitas Yudharta Pasuruan menghadirkan inovasi kemasan produk tape sebagai upaya meningkatkan daya tarik dan nilai jual tape Candibinangun. Dengan desain label sederhana namun informatif, serta penggunaan kemasan mika yang higienis, produk tape tampil lebih profesional tanpa meninggalkan nuansa lokal. tanpa meninggalkan ciri khas tradisionalnya. Inovasi ini diharapkan mampu membuka peluang pemasaran yang lebih luas bagi UMKM setempat.",
      location: "Basecamp KKN",
    },
    {
      title: "Pelepasan dan Penutupan  KKN",
      images: ["/assets/images/pelepasan.jpeg"],
      description: "Pelepasan KKN Kelompok 14 Universitas Yudharta Pasuruan di Balai Desa Candibinangun pada 7 Agustus 2025. Acara ini menandai berakhirnya program kerja yang telah dilaksanakan selama sebulan penuh. Team KKN 14 menggelar lomba face art dan lomba pidato sebagai acara pra pelepasan KKN yang dilaksanakan pada hari Rabu, 06 Agustus 2025, hal ini direalisasikan sebagai bentuk partisipasi dan kontribusi masyarakat dalam memeriahkan pelepasan KKN 14 desa Candibinangun. Momen ini dihadiri oleh perangkat desa, warga, dan mahasiswa KKN, Ucapan terima kasih dari perangkat desa dan warga menjadi penutup yang hangat bagi rangkaian kegiatan KKN.",
      location: "Balai Desa Candibinangun",
    },
  ],
  "Program Isidental": [
    {
      title: "Pendidikan",
      icon: "📚",
      children: [
        {
          title: "SDN Candi Binangun II",
          images: ["/assets/images/pendidikan.jpeg"],
          description: "Sebagai bentuk kontribusi di bidang pendidikan, Tim KKN Kelompok 14 Universitas Yudharta Pasuruan melaksanakan program mengajar di SDN Candibinangun. Kegiatan ini meliputi pembelajaran interaktif, pendampingan belajar, hingga edukasi karakter dan lingkungan. Antusiasme siswa dan kedekatan emosional yang terjalin menjadi bukti keberhasilan program ini dalam membangun semangat belajar dan inspirasi bagi generasi muda desa.",
          location: "SDN Candibinangun II",
        },
        {
          title: "Bimbel Berdampak",
          images: ["/assets/images/bimbel.jpeg"],
          description: "Tim KKN 14 Universitas Yudharta Pasuruan mengadakan bimbingan belajar (bimbel) gratis bagi anak-anak di sekitar posko pada malam hari pukul 19.00, yang dilaksanakan tiap beberapa hari dalam seminggu. Kegiatan ini berlangsung dengan suasana santai namun tetap edukatif, membantu siswa memahami pelajaran sekolah sekaligus menumbuhkan semangat belajar. Antusiasme dan keceriaan anak-anak menjadi motivasi tersendiri bagi mahasiswa untuk terus berbagi ilmu.",
          time: "19.00 WIB",
          location: "Basecamp KKN",
        },
        {
          title: "Penutupan Program Pendidikan",
          images: ["/assets/images/penutupan pendidikan.jpeg"],
          description: "Sebagai penutup rangkaian kegiatan insidental di bidang pendidikan, Tim KKN 14 Universitas Yudharta Pasuruan menggelar acara pelepasan di SDN Candibinangun II. Momen ini menjadi simbol berakhirnya kegiatan belajar bersama yang telah berjalan dengan penuh semangat dan kehangatan. Ucapan terima kasih dan kesan mendalam dari guru serta siswa menjadi bukti bahwa kehadiran mahasiswa telah memberi warna tersendiri dalam proses pembelajaran di sekolah.",
          location: "SDN Candi Binangun II",
          participants: "Seluruh Anggota KKN",
        },
         {
          title: "Cindramata Pendidikan",
          images: ["/assets/images/cindramata.jpeg"],
          description: "Sebagai penutup rangkaian kegiatan insidental di bidang pendidikan, Tim KKN 14 Universitas Yudharta Pasuruan menggelar acara pelepasan di SDN Candibinangun II. Momen ini menjadi simbol berakhirnya kegiatan belajar bersama yang telah berjalan dengan penuh semangat dan kehangatan. Ucapan terima kasih dan kesan mendalam dari guru serta siswa menjadi bukti bahwa kehadiran mahasiswa telah memberi warna tersendiri dalam proses pembelajaran di sekolah.",
          location: "SDN Candi Binangun II",
          participants: "Seluruh Anggota KKN",
        },
      ],
    },
    {
      title: "Keagamaan",
      icon: "🕌",
      children: [
        {
          title: "Tahlilan",
          images: ["/assets/images/tahlil.jpeg"],
          description: "Setiap hari Kamis setelah salat Magrib, Di Basecamp Kelompok KKN 14 Universitas Yudharta Pasuruan menggelar tahlil rutin sebagai bagian dari kegiatan spiritual harian. Dalam suasana tenang dan sederhana, kegiatan ini menjadi ruang untuk menenangkan hati, memperkuat ikatan tim, serta memohon keberkahan selama menjalankan program pengabdian di desa. Doa-doa yang dilantunkan mencerminkan nilai kekompakan dan keikhlasan dalam melayani masyarakat.",
          institution: "Basecamp KKN",
        },
        {
          title: "Madrasah",
          images: ["/assets/images/madrasah.jpeg"],
          description: "Madrasah Al-Ikhlas merupakan lembaga pendidikan nonformal di Desa Candibinangun yang berfokus pada pengajaran ilmu agama Islam bagi anak-anak. Setiap sore, para santri belajar membaca Al-Qur'an, fiqih, akidah-akhlak, serta sejarah Islam dalam suasana yang khidmat namun menyenangkan. Dengan bimbingan ustadz-ustadzah yang berpengalaman, madrasah ini menjadi garda terdepan dalam membentuk generasi yang berilmu dan berakhlak mulia.",
          institution: "Madrasah Al-Ikhlas",
        },
        {
          title: "TPQ",
          images: ["/assets/images/TPQ.jpeg"],
          description: "TPQ Al-Ikhlas menjadi pusat pembelajaran Al-Qur'an dan nilai-nilai keislaman bagi anak-anak di Desa Candibinangun. Dalam suasana yang hangat dan penuh semangat, para santri belajar mengaji, menghafal surah pendek, serta menanamkan akhlak mulia sejak dini. Kegiatan rutin ini didampingi oleh para ustadz dan ustadzah yang sabar dan berdedikasi tinggi.",
          institution: "TPQ Al-Ikhlas",
        },
        {
          title: "Istighosah",
          images: ["/assets/images/istighosah.jpeg"],
          description: "Kegiatan istighosah rutin yang diselenggarakan sebagai sarana spiritual dan kebersamaan umat. Acara ini menjadi momentum untuk memperkuat silaturahmi antarwarga sekaligus memohon keberkahan dan perlindungan Allah SWT untuk desa dan segenap penghuninya.",
          type: "Kegiatan Keagamaan",
          community: "Warga Desa"
        },
        {
          title: "Penutupan Program Keagamaan",
          images: ["/assets/images/penutupan keagamaan.jpeg"],
          description: "Kegiatan istighosah rutin yang diselenggarakan sebagai sarana spiritual dan kebersamaan umat. Acara ini menjadi momentum untuk memperkuat silaturahmi antarwarga sekaligus memohon keberkahan dan perlindungan Allah SWT untuk desa dan segenap penghuninya.",
          type: "Pelepasan Keagamaan",
          location: "TPQ & Madrasah Al-Ikhlas",
        },
      ],
    },
    {
      title: "Sosial",
      icon: "🤝",
      children: [
        {
          title: "Posyandu",
          images: ["/assets/images/posyandu.jpeg"],
          description: "Posyandu di Desa Candibinangun menjadi garda terdepan dalam pelayanan kesehatan dasar masyarakat, khususnya ibu hamil, balita, dan lansia. Kegiatan rutin seperti penimbangan, imunisasi, dan penyuluhan gizi dilaksanakan oleh kader desa dengan penuh dedikasi. Kehadiran mahasiswa KKN juga menambah semangat melalui dukungan edukatif dan dokumentasi kegiatan yang memperkuat peran Posyandu dalam membangun generasi sehat.",
          service: "Pelayanan Kesehatan",
          target: "Ibu & Balita"
        },
        {
          title: "Bersih-Bersih Gedung Olahraga",
          images: ["/assets/images/kerja bakti.jpeg"],
          description: "Mahasiswa KKN 14 Universitas Yudharta Pasuruan bersama warga Desa Candibinangun melaksanakan kegiatan bersih-bersih di gedung olahraga desa. Kegiatan ini bertujuan menciptakan lingkungan yang bersih, sehat, dan nyaman untuk mendukung aktivitas olahraga. Kolaborasi ini juga menjadi momen mempererat semangat gotong royong dan kepedulian terhadap fasilitas umum.",
          location: "Gedung Olahraga Desa",
          activity: "Pembersihan Fasilitas"
        },
        {
          title: "Kerja Bakti Bersama Warga",
          images: ["/assets/images/kerja bakti warga.jpeg"],
          description: "Warga Desa Candibinangun bersama mahasiswa KKN Universitas Yudharta Pasuruan melaksanakan kerja bakti sebagai wujud kepedulian terhadap lingkungan. Kegiatan ini mencakup pembersihan jalan desa, fasilitas umum, dan tempat ibadah. Dengan semangat gotong royong, kebersamaan terjalin erat, sekaligus memperkuat nilai sosial dan kebersihan lingkungan sekitar.",
          spirit: "Gotong Royong",
          location: "Lingkungan Desa"
        },
        {
          title: "Senam Pagi Bersama",
          images: ["/assets/images/senam.jpeg"],
          description: "Senam rutin yang digelar setiap hari Minggu oleh Tim KKN 14 Universitas Yudharta Pasuruan di Balai Dusun Krajan menjadi wujud nyata komitmen terhadap gaya hidup sehat selama masa pengabdian. Kegiatan ini tidak hanya bermanfaat untuk kebugaran, tetapi juga menciptakan atmosfer positif dan semangat baru di tengah aktivitas KKN. Gerakan energik dan suasana ceria menjadikan Minggu pagi lebih produktif dan bermakna.",
          spirit: "Senam Bersama",
          location: "Balai Dusun"
        },
        {
          title: "Senam Bersama Ibu-Ibu",
          images: ["/assets/images/senam2.jpeg"],
          description: "Senam bersama antara Tim KKN 14 Universitas Yudharta Pasuruan dan ibu-ibu Desa Candibinangun berlangsung di gedung olahraga yang terletak di sebelah Balai Desa. Kegiatan ini menjadi salah satu bentuk interaksi positif yang mendorong gaya hidup sehat sekaligus mempererat hubungan sosial antara mahasiswa dan warga. Dengan iringan musik yang enerjik dan suasana yang santai, senam pagi ini membawa keceriaan, kebugaran, dan semangat kebersamaan di tengah kesibukan program pengabdian",
          spirit: "Senam Bersama",
          location: "Gedung Olahraga"
        },
        {
          title: "Green Movement",
          images: ["/assets/images/green movement.jpeg"],
          description: "Program Green Movement yang digagas oleh tim KKN 14 diwujudkan lewat aksi nyata berupa penanaman pohon pucuk merah di area Balai Dusun dan Balai Desa. Kegiatan ini bukan hanya sekadar mempercantik lingkungan, tapi juga sebagai langkah awal untuk mengajak masyarakat lebih peduli terhadap penghijauan. Dengan menanam pohon bersama, diharapkan tumbuh kesadaran akan pentingnya menjaga alam dan menciptakan ruang hijau yang asri serta nyaman bagi semua.",
          location: "Balai Dusun & Balai Desa",
          participants: "Seluruh Anggota KKN",
        },
        {
          title: "Cindramata Sosial",
          images: ["/assets/images/cindramata sosial.jpeg"],
          description: "Sebagai bentuk apresiasi sekaligus dukungan terhadap pelaku usaha lokal, tim KKN 14 memberikan cinderamata berupa pohon pucuk merah kepada pengusaha tape di Desa Candibinangun. Selain sebagai simbol penghargaan, pemberian ini juga menjadi bagian dari semangat Green Movement yang ingin mendorong masyarakat untuk ikut menjaga kelestarian lingkungan melalui langkah sederhana seperti menanam pohon di sekitar tempat tinggal atau usahanya",
          location: "Balai Dusun & Balai Desa",
          participants: "Seluruh Anggota KKN",
        }
      ],
    },
  ],
  "Program Unggulan": [
    {
      title: "MoU",
      images: ["/assets/images/mou.jpeg"],
      description: "Sebagai bagian dari program pemberdayaan UMKM, tim KKN 14 melakukan penyerahan MoU inovasi kemasan kepada pelaku usaha tape di Desa Candibinangun. Kegiatan ini menjadi langkah awal dalam mendukung peningkatan kualitas produk lokal melalui desain kemasan yang lebih menarik dan sesuai dengan kebutuhan pasar. Penandatanganan MoU ini juga menandai komitmen bersama antara mahasiswa dan pelaku usaha untuk terus berinovasi serta mengembangkan potensi ekonomi desa secara berkelanjutan.",
    },
    {
      title: "Mitigasi Stunting",
      videos: ["/assets/videos/mitigasi-stunting.mp4"],
      thumbnail: "/assets/images/mitigasi-stunting-thumbnail.jpeg",
      type: "video",
      description: "Mitigasi stunting di Desa Candibinangun dilakukan oleh Ibu-Ibu dan Tim KKN 14 Universitas Yudharta Pasuruan melalui video edukasi gizi dan kesehatan kepada ibu dan anak. Kegiatan ini bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya nutrisi yang baik dalam mencegah stunting. Dengan pendekatan yang interaktif, diharapkan informasi yang disampaikan dapat diterima dengan baik dan diterapkan dalam kehidupan sehari-hari.",
    },
    /*{
      title: "Company Profile",
      videos: ["/assets/videos/.mp4"],
      thumbnail: "/assets/images/company-profile-thumbnail.jpeg", 
      type: "video",
      description: "Company Profile Desa Candibinangun yang dibuat oleh Tim KKN 14 Universitas Yudharta Pasuruan. Video ini bertujuan untuk memperkenalkan potensi desa, budaya, dan kegiatan masyarakat kepada khalayak luas. Dengan visual yang menarik dan narasi yang informatif, diharapkan video ini dapat menjadi media promosi yang efektif untuk menarik perhatian.",
      location: "Desa Candibinangun",
    },*/
  ],
};


// Video Player Component
const VideoPlayer = ({ src, thumbnail, title, className = "Play" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [videoRef, setVideoRef] = useState(null);

  const togglePlay = (event) => {
    event.stopPropagation();
    if (videoRef) {
      if (videoRef.paused) {
        videoRef.play().then(() => {
          setIsPlaying(true);
          setShowControls(false);
        }).catch((error) => {
          console.error('Error playing video:', error);
        });
      } else {
        videoRef.pause();
        setIsPlaying(false);
        setShowControls(true);
      }
    }
  };

  const handleVideoClick = (event) => {
    event.stopPropagation();
    togglePlay(event);
  };

  return (
    <div className={`relative video-container ${className}`}>
      <video
        ref={setVideoRef}
        className="w-full h-full object-cover rounded-xl cursor-pointer"
        poster={thumbnail}
        onPlay={() => {
          setIsPlaying(true);
          setShowControls(false);
        }}
        onPause={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        onClick={handleVideoClick}
        controls={false}
        preload="metadata"
        playsInline
        muted={false}
        onError={(e) => {
          console.error('Video failed to load:', e);
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Controls */}
      {showControls && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl cursor-pointer transition-opacity duration-300"
          onClick={handleVideoClick}
        >
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-slate-800" />
            ) : (
              <Play className="w-8 h-8 text-slate-800 ml-1" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

// Media Display Component
const MediaDisplay = ({ item, className = "" }) => {
  if (item.type === "video") {
    return (
      <VideoPlayer
        src={item.videos[0]}
        thumbnail={item.thumbnail}
        title={item.title}
        className={className}
      />
    );
  } else {
    return (
      <img
        src={item.images[0]}
        alt={item.title}
        className={`${className} object-cover group-hover:scale-110 transition-transform duration-700`}
        onError={(e) => {
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
        }}
      />
    );
  }
};

// Modal Media Display Component
const ModalMediaDisplay = ({ item, className = "" }) => {
  const [videoRef, setVideoRef] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (item.type === "video") {
    return (
      <div className="relative">
        <video
          ref={setVideoRef}
          className={`${className} object-contain rounded-xl shadow-2xl bg-gradient-to-br from-slate-700 to-slate-600`}
          poster={item.thumbnail}
          controls
          preload="metadata"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onError={(e) => {
            console.error('Video failed to load in modal:', e);
          }}
        >
          <source src={item.videos[0]} type="video/mp4" />
          <source src={item.videos[0].replace('.mp4', '.webm')} type="video/webm" />
          <source src={item.videos[0].replace('.mp4', '.ogg')} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        {item.duration && (
          <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center">
            <Play className="w-4 h-4 mr-1" />
            {item.duration}
          </div>
        )}
        
        {/* Fallback message if video fails */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 rounded-xl" style={{ display: 'none' }} id="video-fallback">
          <div className="text-center text-white p-8">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium mb-2">Video tidak dapat dimuat</p>
            <p className="text-sm text-slate-300">Periksa koneksi internet atau format video</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <img
        src={item.images[0]}
        alt={item.title}
        className={`${className} object-contain rounded-xl shadow-2xl bg-gradient-to-br from-slate-700 to-slate-600`}
        onError={(e) => {
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
        }}
      />
    );
  }
};

export default function Kegiatan() {
  const [selected, setSelected] = useState(null);
  const [clickPosition, setClickPosition] = useState(null);

  const handleItemClick = (item, event) => {
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
              <span className="px-4 sm:px-6 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 text-sm font-medium border border-emerald-500/30 break-words whitespace-normal max-w-xs sm:max-w-md w-full block mx-auto">
                KKN 14 UNIVERSITAS YUDHARTA PASURUAN
              </span>

            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-200 bg-clip-text text-transparent">
                KEGIATAN MAHASISWA
              </span>
              <br />
              <span className="text-white">KKN KELOMPOK 14</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Dokumentasi program kerja dan kegiatan KKN dalam membangun desa wirausaha melalui ekonomi kreatif
            </p>
          </motion.div>

          {/* Program Sections */}
          {Object.entries(programData).map(([kategori, items], idx) => (
            <motion.div 
              key={idx} 
              className="mb-16 sm:mb-20 lg:mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <div className="text-center mb-12 sm:mb-16">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-4">
                    {kategori}
                  </h2>
                  <div className="h-1 w-24 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                </motion.div>
              </div>

              {/* Render Subprogram (Program Isidental) */}
              {kategori === "Program Isidental" ? (
                items.map((sub, subIdx) => (
                  <motion.div 
                    key={subIdx} 
                    className="mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: subIdx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Subprogram Header */}
                    <div className="flex items-center justify-center mb-8 sm:mb-12">
                      <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
                        <span className="text-2xl mr-3">{sub.icon}</span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                          {sub.title}
                        </h3>
                      </div>
                    </div>

                    {/* Subprogram Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                      {sub.children.map((item, i) => (
                        <motion.div
                          key={i}
                          className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-500"
                          onClick={(e) => handleItemClick(item, e)}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Image Container */}
                          <div className="relative overflow-hidden">
                            <MediaDisplay 
                              item={item} 
                              className="w-full h-48 sm:h-52 lg:h-56"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Content */}
                          <div className="p-5 sm:p-6">
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                              {item.description.slice(0, 120)}...
                            </p>
                            
                            {/* Meta Info */}
                            <div className="space-y-2">
                              {item.location && (
                                <div className="flex items-center text-xs text-emerald-300">
                                  <MapPin className="w-3 h-3 mr-2" />
                                  {item.location}
                                </div>
                              )}
                              {item.participants && (
                                <div className="flex items-center text-xs text-teal-300">
                                  <Users className="w-3 h-3 mr-2" />
                                  {item.participants}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                // Render Normal Items (Program Kerja Utama & Program Unggulan)
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-500"
                      onClick={(e) => handleItemClick(item, e)}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Media Container */}
                      <div className="relative overflow-hidden">
                        <MediaDisplay 
                          item={item} 
                          className="w-full h-52 sm:h-56 lg:h-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Video Indicator */}
                        {item.type === "video" && (
                          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            VIDEO
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                          {item.description.slice(0, 150)}...
                        </p>
                        
                        {/* Meta Info */}
                        <div className="space-y-2">
                          {item.duration && (
                            <div className="flex items-center text-xs text-red-300">
                              <Play className="w-3 h-3 mr-2" />
                              {item.duration}
                            </div>
                          )}
                          {item.date && (
                            <div className="flex items-center text-xs text-emerald-300">
                              <Calendar className="w-3 h-3 mr-2" />
                              {item.date}
                            </div>
                          )}
                          {item.participants && (
                            <div className="flex items-center text-xs text-teal-300">
                              <Users className="w-3 h-3 mr-2" />
                              {item.participants}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal Dialog */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl lg:max-w-6xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-white/10"
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
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-red-400 text-white flex items-center justify-center transition-all duration-200 border border-white/20"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Content Container */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12">
                {/* Media */}
                <motion.div 
                  className="mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <ModalMediaDisplay 
                    item={selected} 
                    className="w-full max-h-[40vh] sm:max-h-[50vh] lg:max-h-[65vh]"
                  />
                </motion.div>
                
                {/* Title and Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-6">
                    {selected.title}
                  </h2>
                  
                  {/* Meta Information Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {selected.duration && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Play className="w-4 h-4 text-red-400 mr-2" />
                        <span className="text-sm text-slate-300">Durasi: {selected.duration}</span>
                      </div>
                    )}
                    {selected.date && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Calendar className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.date}</span>
                      </div>
                    )}
                    {selected.location && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <MapPin className="w-4 h-4 text-teal-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.location}</span>
                      </div>
                    )}
                    {selected.participants && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Users className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.participants}</span>
                      </div>
                    )}
                    {selected.impact && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.impact}</span>
                      </div>
                    )}
                    {selected.time && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Calendar className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.time}</span>
                      </div>
                    )}
                    {selected.frequency && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Award className="w-4 h-4 text-teal-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.frequency}</span>
                      </div>
                    )}
                    {selected.institution && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <MapPin className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.institution}</span>
                      </div>
                    )}
                    {selected.focus && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.focus}</span>
                      </div>
                    )}
                    {selected.activity && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Users className="w-4 h-4 text-teal-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.activity}</span>
                      </div>
                    )}
                    {selected.type && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Award className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.type}</span>
                      </div>
                    )}
                    {selected.community && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Users className="w-4 h-4 text-teal-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.community}</span>
                      </div>
                    )}
                    {selected.service && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Award className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.service}</span>
                      </div>
                    )}
                    {selected.target && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Users className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.target}</span>
                      </div>
                    )}
                    {selected.facility && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <MapPin className="w-4 h-4 text-teal-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.facility}</span>
                      </div>
                    )}
                    {selected.spirit && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <Award className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.spirit}</span>
                      </div>
                    )}
                    {selected.scope && (
                      <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <MapPin className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-slate-300">{selected.scope}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                      {selected.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}