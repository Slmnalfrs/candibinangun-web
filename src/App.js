import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Beranda";
import Profil from "./pages/Profil";
import Inovasi from "./pages/Inovasi";
import Kegiatan from "./pages/Kegiatan";
import Organisasi from "./pages/Organisasi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/inovasi" element={<Inovasi />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/organisasi" element={<Organisasi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
