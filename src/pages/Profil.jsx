'use client';
import React from 'react';
import { motion } from 'framer-motion';


// Note: Using placeholder images since we don't have access to the actual assets
const desaImage = '/assets/images/candi.jpg';
const tapeImage = '/assets/images/es-tape.jpg';

export default function ProfilDesa() {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 font-sans scroll-smooth">

      {/* Hero Section - Enhanced responsiveness */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-[#2c3e50] via-[#4b6cb7] to-[#2c3e50] text-white rounded-b-2xl sm:rounded-b-3xl shadow-xl mx-2 sm:mx-4 lg:mx-0">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 lg:mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Profil Desa Candi Binangun
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Menjelajahi sejarah, potensi, dan budaya lokal — Kampung Tape yang kaya tradisi dan semangat kolaboratif.
          </motion.p>
        </div>
      </section>

      {/* Tentang Desa - Improved mobile layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <motion.div
              className="order-1 lg:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={desaImage}
                alt="Tentang Desa"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              className="order-2 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-indigo-800 text-center lg:text-left">
                Candi Binangun : Dari Rubuh ke Bangun
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 text-justify">
                Candi Binangun tidak hanya berdiri sebagai sebuah nama desa, tetapi juga sebagai simbol harapan dan kebangkitan. Dahulu, wilayah ini dikenal dengan nama Candirubuh – sebuah nama yang lahir dari kisah runtuhnya sebuah candi di perbatasan Kalirejo. Meski reruntuhannya tak meninggalkan artefak yang dapat dibuktikan secara arkeologis, kisah itu tetap hidup dalam ingatan kolektif masyarakat. Pada tahun 1970-1971, nama baru "Candibinangun" diresmikan sebagai penanda semangat membangun kembali, bukan dalam bentuk candi fisik, melainkan nilai-nilai: budaya, moral, dan persatuan.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 sm:mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-justify">
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 mb-4 sm:mb-6">
                Pemukiman awal bermula dari Dusun Krajan I, tempat di mana kini berdiri petilasan leluhur. Wilayah desa awalnya terdiri dari enam dusun, termasuk Montok Atas dan Montok Bawah, namun kini menjadi lima: Krajan I, Krajan II, Montok, Kedung Likit, dan Kedung Banteng.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 mb-4 sm:mb-6">
                Kepemimpinan desa mengalami beberapa transisi penting, dimulai dari Pak Rohani (1937-1950) hingga Pak Wawan Sugianto (2020-sekarang). Perubahan administratif seperti pergantian istilah dari "petinggi" ke "kepala desa" mulai berlaku setelah masa Haji Toyib, dan baru benar-benar diadopsi sekitar 1989, sepuluh tahun setelah UUD baru.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 mb-4 sm:mb-6">
                Dulu, pusat kegiatan warga berada di rumah para tokoh, seperti semacam joglo rakyat. Barulah seiring berkembangnya desa, fasilitas seperti balai desa, jalan beraspal, dan listrik mulai masuk. Paving jalan dimulai tahun 2002 di Dusun Montok, dan infrastruktur mulai lengkap hingga tahun 2013. Sebelum listrik masuk pada tahun 1990, warga menggunakan lampu cempluk. Pos ronda (gardu) dari bambu dibangun tahun 1998-2000 karena desa rawan pencurian. Namun, sejak 2003, desa mulai bangkit dengan semangat ekonomi kreatif yang digagas Pak Usman.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800">
                Tradisi juga menjadi bagian penting dari identitas Candibinangun. Dulu, pencak silat menjadi warisan budaya, namun kini lebih banyak warga mengikuti tren luar seperti grup Al-Banjari dan Al-Habsyi. Salah satu tradisi unik yang masih bertahan adalah gebluk bantal, alat musik dari bantal yang masih dimainkan. Interaksi warga terus berkembang: dari pertanian, bisnis tape, hingga kegiatan keagamaan seperti tahlil dan manaqib. Namun, warga juga menyadari bahwa rasa guyub yang dahulu kuat kini mulai memudar. Meski demikian, jejak semangat kolektif itu masih hidup – tersimpan dalam sejarah dan harapan baru generasi muda Candibinangun.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kampung Tape - Enhanced mobile layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <motion.div
              className="order-1 lg:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={tapeImage}
                alt="Kampung Tape"
                className="w-full h-[250px] sm:h-[300px] lg:h-[420px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              className="order-2 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-indigo-800 text-center lg:text-left">
                Tape Candi Binangun: Jejak Tradisi, Napas Ekonomi
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 text-justify">
                Dibalik aroma manis tape yang menyeruak dari sudut-sudut Dusun Krajan I, tersimpan kisah panjang perjalanan ekonomi masyarakat Desa Candibinangun. Tape bukan hanya produk, tapi hasil dari keteguhan dan inovasi lokal. Sejak tahun 1950-an, warga desa mulai memproduksi tape dari ketan hitam, yang kemudian secara bertahap beralih ke tape singkong karena lebih mudah diproduksi dan disukai pasar. Peralihan besar terjadi sekitar tahun 1965, ditandai dengan munculnya tokoh-tokoh kunci seperti Pak Rahmani dan Pak Jalil. Mereka menjadi pelopor dalam membangun ekonomi berbasis tape yang berlanjut hingga 2000-an.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 sm:mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-justify">
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 mb-4 sm:mb-6">
                Pada masa itu, kelompok pedagang tape mulai tumbuh, hingga akhirnya tape Candibinangun mencapai masa kejayaan pada tahun 2001 dan menguat pada 2003 dengan fokus pada promosi serta pemasaran.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 mb-4 sm:mb-6">
                Dusun Krajan I kini diakui sebagai sentra tape, dengan pasokan singkong mencapai 25-30 ton per hari. Berbeda dari tape Bondowoso yang dikukus dan tahan lama, tape dari Candibinangun direbus agar proses lebih cepat dan produk bisa langsung diedarkan. Dalam 2-3 hari, tape dalam kemasan kresek biasanya sudah habis terjual di pasar tradisional.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800 mb-4 sm:mb-6">
                Kemasan menjadi salah satu bentuk inovasi: dari kresek tradisional (disebut "manohara"), hingga mika dan kardus untuk segmen premium. Setidaknya ada 20 pelaku usaha menggunakan mika dan sudah memiliki izin resmi. Kardus digunakan untuk oleh-oleh dan dapat bertahan hingga 10 hari tanpa pengawet.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-800">
                Menariknya, meski proses produksi masih tradisional, sistem pemasaran telah berkembang. Penjualan dilakukan secara langsung, via agen pasar, hingga ke platform online seperti TikTok, Facebook, dan website milik kemitraan. Sampel tape kerap dikirim ke toko atau pasar untuk menarik pelanggan baru. Bahkan limbah kulit singkong tidak terbuang sia-sia, namun digunakan sebagai pakan ternak karena masih mengandung sisa tepung tapioka. Tape bukan hanya sumber penghasilan, tapi juga simbol ketekunan, keterhubungan antar warga, dan ketahanan sosial Candibinangun. Dari yang semula petani, kini warga bertransformasi menjadi pelaku usaha rumahan yang menjaga warisan, sekaligus membuka peluang baru bagi generasi muda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi - Enhanced mobile layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center text-indigo-900">
          Visi dan Misi
        </h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-indigo-700 text-center md:text-left">
              Visi
            </h3>
            <p className="text-gray-700 italic text-base sm:text-lg lg:text-xl leading-relaxed text-center md:text-left">
              "Mewujudkan Desa Candibinangun yang Mandiri, Sejahtera, dan Berbudaya."
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-indigo-700 text-center md:text-left">
              Misi
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
              <li>Mendorong pertumbuhan ekonomi lokal berbasis UMKM tape.</li>
              <li>Melestarikan budaya dan tradisi desa.</li>
              <li>Meningkatkan kualitas pendidikan dan kesehatan masyarakat.</li>
              <li>Memperkuat pemerintahan desa yang transparan dan akuntabel.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Lokasi - Enhanced mobile layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center text-indigo-900">
          Letak Geografis
        </h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed px-2">
          Desa Candibinangun terletak di Kecamatan Sukorejo, Kabupaten Pasuruan. Wilayah yang subur ini mendukung pertanian, perkebunan, dan pengolahan pangan lokal seperti tape.
        </p>
        <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border mx-auto max-w-5xl">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13283.074549145655!2d112.74735378426759!3d-7.679763012015077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d08604b271df%3A0x463f39f6403ab022!2sCandi%20Binangun%2C%20Kec.%20Sukorejo%2C%20Pasuruan%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1753510631610!5m2!1sid!2sid"
            loading="lazy"
            allowFullScreen
            title="Lokasi Desa Candibinangun"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}