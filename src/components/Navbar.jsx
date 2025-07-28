import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Profil Desa", href: "/profil" },
    { label: "Kegiatan", href: "/kegiatan" },
    { label: "Inovasi", href: "/Inovasi" },
    { label: "Organisasi", href: "/organisasi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-white/70 via-purple-50/70 to-indigo-100/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-indigo-700 font-serif tracking-wide"
        >
          Desa Candibinangun
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative transition duration-300 ${
                  isActive ? "text-indigo-700 font-semibold" : "text-gray-800"
                } hover:text-indigo-600`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full transition-transform duration-300 transform ${
                    isActive ? "bg-indigo-600 scale-x-100" : "bg-indigo-400 scale-x-0"
                  } group-hover:scale-x-100 origin-left`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gradient-to-br from-white/80 via-purple-50/80 to-indigo-100/80 backdrop-blur-lg border-t border-gray-200 shadow-md rounded-b-xl"
          >
            <div className="flex flex-col px-6 py-4 space-y-3 font-medium">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition duration-300 ${
                      isActive
                        ? "text-indigo-700 font-semibold"
                        : "text-gray-800 hover:text-indigo-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
