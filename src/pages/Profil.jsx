'use client';
import React from 'react';
import { motion } from 'framer-motion';
import desaImage from '../assets/images/candi.jpg';
import tapeImage from '../assets/images/es-tape.jpg';

export default function ProfilDesa() {
  return (
    <div className="pt-24 bg-gradient-to-br from-[#f3f4f600] via-[#e5e7eb00] to-[#d1d5db00] text-gray-900 font-[Poppins] scroll-smooth">

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#2c3e50] via-[#4b6cb7] to-[#2c3e50] text-white rounded-b-3xl shadow-xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Profil Desa Candi Binangun
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Menjelajahi sejarah, potensi, dan budaya lokal — Kampung Tape yang kaya tradisi dan semangat kolaboratif.
        </motion.p>
      </section>

      {/* Tentang Desa */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.img
            src={desaImage}
            alt="Tentang Desa"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-indigo-800">
              Candi Binangun : Dari Rubuh ke Bangun
            </h2>
            <p className="text-lg leading-8 text-gray-800">
              Candi Binangun tidak hanya berdiri sebagai sebuah nama desa, tetapi juga sebagai simbol harapan dan kebangkitan. Dahulu, wilayah ini dikenal dengan nama Candirubuh – sebuah nama yang lahir dari kisah runtuhnya sebuah candi di perbatasan Kalirejo. Meski reruntuhannya tak meninggalkan artefak yang dapat dibuktikan secara arkeologis, kisah itu tetap hidup dalam ingatan kolektif masyarakat. Pada tahun 1970-1971, nama baru “Candibinangun” diresmikan sebagai penanda semangat membangun kembali, bukan dalam bentuk candi fisik, melainkan nilai-nilai: budaya, moral, dan persatuan.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg leading-8 text-gray-800">
            Pemukiman awal bermula dari Dusun Krajan I, tempat di mana kini berdiri petilasan leluhur. Wilayah desa awalnya terdiri dari enam dusun, termasuk Montok Atas dan Montok Bawah, namun kini menjadi lima: Krajan I, Krajan II, Montok, Kedung Likit, dan Kedung Banteng.
            <br /><br />
            Kepemimpinan desa mengalami beberapa transisi penting, dimulai dari Pak Rohani (1937-1950) hingga Pak Wawan Sugianto (2020-sekarang). Perubahan administratif seperti pergantian istilah dari “petinggi” ke “kepala desa” mulai berlaku setelah masa Haji Toyib, dan baru benar-benar diadopsi sekitar 1989, sepuluh tahun setelah UUD baru.
            <br /><br />
            Dulu, pusat kegiatan warga berada di rumah para tokoh, seperti semacam joglo rakyat. Barulah seiring berkembangnya desa, fasilitas seperti balai desa, jalan beraspal, dan listrik mulai masuk. Paving jalan dimulai tahun 2002 di Dusun Montok, dan infrastruktur mulai lengkap hingga tahun 2013. Sebelum listrik masuk pada tahun 1990, warga menggunakan lampu cempluk. Pos ronda (gardu) dari bambu dibangun tahun 1998-2000 karena desa rawan pencurian. Namun, sejak 2003, desa mulai bangkit dengan semangat ekonomi kreatif yang digagas Pak Usman.
            <br /><br />
            Tradisi juga menjadi bagian penting dari identitas Candibinangun. Dulu, pencak silat menjadi warisan budaya, namun kini lebih banyak warga mengikuti tren luar seperti grup Al-Banjari dan Al-Habsyi. Salah satu tradisi unik yang masih bertahan adalah gebluk bantal, alat musik dari bantal yang masih dimainkan.
            <br /><br />
            Interaksi warga terus berkembang: dari pertanian, bisnis tape, hingga kegiatan keagamaan seperti tahlil dan manaqib. Namun, warga juga menyadari bahwa rasa guyub yang dahulu kuat kini mulai memudar. Meski demikian, jejak semangat kolektif itu masih hidup – tersimpan dalam sejarah dan harapan baru generasi muda Candibinangun.
          </p>
        </motion.div>
      </section>

      {/* Kampung Tape */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.img
            src={tapeImage}
            alt="Kampung Tape"
            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-indigo-800">
              Tape Candi Binangun: Jejak Tradisi, Napas Ekonomi
            </h2>
            <p className="text-lg leading-8 text-gray-800">
              Dibalik aroma manis tape yang menyeruak dari sudut-sudut Dusun Krajan I, tersimpan kisah panjang perjalanan ekonomi masyarakat Desa Candibinangun. Tape bukan hanya produk, tapi hasil dari keteguhan dan inovasi lokal. Sejak tahun 1950-an, warga desa mulai memproduksi tape dari ketan hitam, yang kemudian secara bertahap beralih ke tape singkong karena lebih mudah diproduksi dan disukai pasar. Peralihan besar terjadi sekitar tahun 1965, ditandai dengan munculnya tokoh-tokoh kunci seperti Pak Rahmani dan Pak Jalil.  Mereka menjadi pelopor dalam membangun ekonomi berbasis tape yang berlanjut hingga 2000-an
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg leading-8 text-gray-800">
           Pada masa itu, kelompok pedagang tape mulai tumbuh, hingga akhirnya tape Candibinangun mencapai masa kejayaan pada tahun 2001 dan menguat pada 2003 dengan fokus pada promosi serta pemasaran.
           <br /><br />
           Dusun Krajan I kini diakui sebagai sentra tape, dengan pasokan singkong mencapai 25-30 ton per hari. Berbeda dari tape Bondowoso yang dikukus dan tahan lama, tape dari Candibinangun direbus agar proses lebih cepat dan produk bisa langsung diedarkan. Dalam 2-3 hari, tape dalam kemasan kresek biasanya sudah habis terjual di pasar tradisional
           <br /><br />
           Kemasan menjadi salah satu bentuk inovasi: dari kresek tradisional (disebut “manohara”), hingga mika dan kardus untuk segmen premium. Setidaknya ada 20 pelaku usaha menggunakan mika dan sudah memiliki izin resmi. Kardus digunakan untuk oleh-oleh dan dapat bertahan hingga 10 hari tanpa pengawet.
           <br /><br />
           Menariknya, meski proses produksi masih tradisional, sistem pemasaran telah berkembang. Penjualan dilakukan secara langsung, via agen pasar, hingga ke platform online seperti TikTok, Facebook, dan website milik kemitraan. Sampel tape kerap dikirim ke toko atau pasar untuk menarik pelanggan baru. Bahkan limbah kulit singkong tidak terbuang sia-sia, namun digunakan sebagai pakan ternak karena masih mengandung sisa tepung tapioka.
           <br /><br />
           Tape bukan hanya sumber pengahsilan, tapi juga simbol ketekunan, keterhubungan antar warga, dan ketahanan sosial Candibinangun. Dari yang semula petani, kini warga bertransformasi menjadi pelaku usaha rumahan yang menjaga warisan, sekaligus membuka peluang baru bagi generasi muda.
          </p>
        </motion.div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-900">Visi dan Misi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Visi</h3>
            <p className="text-gray-700 italic text-lg">
              “Mewujudkan Desa Candibinangun yang Mandiri, Sejahtera, dan Berbudaya.”
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Misi</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
              <li>Mendorong pertumbuhan ekonomi lokal berbasis UMKM tape.</li>
              <li>Melestarikan budaya dan tradisi desa.</li>
              <li>Meningkatkan kualitas pendidikan dan kesehatan masyarakat.</li>
              <li>Memperkuat pemerintahan desa yang transparan dan akuntabel.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Lokasi */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-900">Letak Geografis</h2>
        <p className="text-gray-700 text-lg mb-6 text-center max-w-3xl mx-auto">
          Desa Candibinangun terletak di Kecamatan Sukorejo, Kabupaten Pasuruan. Wilayah yang subur ini mendukung pertanian, perkebunan, dan pengolahan pangan lokal seperti tape.
        </p>
        <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-xl border">
          <iframe
            className="w-full h-full"
            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13283.074549145655!2d112.74735378426759!3d-7.679763012015077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d08604b271df%3A0x463f39f6403ab022!2sCandi%20Binangun%2C%20Kec.%20Sukorejo%2C%20Pasuruan%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1753510631610!5m2!1sid!2sid%22"
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
