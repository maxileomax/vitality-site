"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#080810]/90 backdrop-blur-md border-b border-[#C9A84C]/20" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-[#C9A84C] font-serif text-xl tracking-widest uppercase">
          Vitality
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wider text-[#f0ece4]/70">
          <a href="#problem" className="hover:text-[#C9A84C] transition-colors">The Problem</a>
          <a href="#method" className="hover:text-[#C9A84C] transition-colors">The Method</a>
          <a href="#expert" className="hover:text-[#C9A84C] transition-colors">Expert</a>
          <a href="#test" className="bg-[#C9A84C] text-[#080810] px-5 py-2 rounded-full font-semibold hover:bg-[#E8C96A] transition-colors">
            Take the Test
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
