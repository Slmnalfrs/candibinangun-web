// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white/70 backdrop-blur-md border-t border-gray-200 mt-12 shadow-inner"
    >
      <div className="container mx-auto px-6 py-8 text-center space-y-3">
        <h2 className="text-lg font-bold text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Desa Candibinangun
        </h2>
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Semua hak cipta dilindungi.
        </p>
        <p className="text-sm font-medium text-indigo-600">
          KKN UYP 2025 – Kampung Tape
        </p>
      </div>
    </motion.footer>
  );
}
