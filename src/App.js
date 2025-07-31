import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Beranda";
import Profil from "./pages/Profil";
import Inovasi from "./pages/Inovasi";
import Kegiatan from "./pages/Kegiatan";
import Organisasi from "./pages/Organisasi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('header');
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height);
        
        // Update CSS custom property untuk digunakan di seluruh aplikasi
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    // Update height on load
    const timer = setTimeout(updateNavbarHeight, 100);
    
    // Update height on resize
    window.addEventListener('resize', updateNavbarHeight);
    
    // Observer untuk mendeteksi perubahan tinggi navbar (mobile menu)
    const observer = new MutationObserver(updateNavbarHeight);
    const navbar = document.querySelector('header');
    if (navbar) {
      observer.observe(navbar, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['class', 'style']
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateNavbarHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        
        {/* Main content dengan padding dinamis */}
        <main 
          className="flex-grow transition-all duration-300 ease-in-out"
          style={{ 
            paddingTop: `${navbarHeight}px`,
            minHeight: `calc(100vh - ${navbarHeight}px)`
          }}
        >
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