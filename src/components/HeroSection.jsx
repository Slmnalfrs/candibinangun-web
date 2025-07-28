export default function Beranda() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/assets/images/candi.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
            Selamat Datang di Desa Candibinangun
          </h1>
          <p className="text-lg md:text-xl text-white/90 animate-slideUp">
            Kampung Tape yang Kaya Akan Tradisi
          </p>
          <a
            href="/profil"
            className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out animate-slideUp"
          >
            Tentang Kami
          </a>
        </div>
      </section>

      {/* Candi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Candibinangun</h2>
            <p className="text-gray-700 leading-relaxed">
              Candi ini merupakan salah satu situs budaya yang menjadi kebanggaan masyarakat Desa Candibinangun.
              Warisan sejarah ini menunjukkan kekayaan budaya dan nilai-nilai spiritual yang dijaga turun-temurun.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/candii.jpg"
              alt="Candi Bersejarah di Candibinangun"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Wirausaha Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Wirausaha Lokal</h2>
            <p className="text-gray-700 leading-relaxed">
              Produk tape dan olahan lainnya merupakan hasil kerja keras para pelaku UMKM lokal.
              Inovasi, semangat, dan kearifan lokal mendorong mereka untuk terus berkembang.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/pelaku.jpg"
              alt="Pelaku Wirausaha Lokal"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
