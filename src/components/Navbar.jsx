import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Calendar, Lightbulb, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", href: "/", icon: Home },
    { label: "Profil Desa", href: "/profil", icon: User },
    { label: "Kegiatan", href: "/kegiatan", icon: Calendar },
    { label: "Inovasi", href: "/inovasi", icon: Lightbulb },
    { label: "Organisasi", href: "/organisasi", icon: Building },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-slate-900/80 backdrop-blur-md shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="group relative cursor-pointer">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Desa Candibinangun
                </h1>
                <p className="text-xs text-slate-400 hidden sm:block">KKN 14 Universitas Yudharta</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation - Fixed */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative" // Pindahkan relative ke sini
                >
                  <Link 
                    to={item.href} 
                    className="group relative flex items-center px-4 py-2 rounded-xl transition-all duration-300"
                  >
                    <div
                      className={`flex items-center relative ${
                        isActive 
                          ? "bg-white/10 text-white shadow-lg backdrop-blur-sm" 
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      } px-4 py-2 rounded-xl`}
                    >
                      <Icon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                    
                    {/* Garis bawah dipindahkan ke posisi yang benar */}
                    <motion.div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300 ${
                        isActive ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                      }`}
                      layoutId="activeIndicator"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <motion.button
            className="lg:hidden p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link 
                      to={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="group flex items-center w-full px-4 py-3 rounded-xl transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg" 
                          : "bg-white/5 group-hover:bg-white/10"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <span className="font-medium text-white">{item.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "2rem" }}
                            className="h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-1"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}