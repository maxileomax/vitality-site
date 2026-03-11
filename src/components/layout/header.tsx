"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setVisible(currentY < lastY || currentY < 100);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const navItems = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/program`, label: t("program") },
    { href: `/${locale}/quiz`, label: t("quiz") },
    { href: `/${locale}/results`, label: t("results") },
    { href: `/${locale}/faq`, label: t("faq") },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-warm-200/40"
              : "bg-transparent"
          }`}
          role="banner"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link
                href={`/${locale}`}
                className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-warm-950 hover:text-primary transition-colors"
              >
                Наталья Музыка
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-warm-950/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <Link
                  href={`/${locale}/quiz`}
                  className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
                >
                  {t("cta")}
                </Link>

                {/* Mobile menu button */}
                <button
                  className="lg:hidden p-2 rounded-xl hover:bg-warm-100 transition-colors"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-warm-200/40"
              >
                <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-4 rounded-xl text-sm font-medium text-warm-950/80 hover:bg-warm-50 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href={`/${locale}/quiz`}
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 py-3 px-4 rounded-full text-sm font-medium text-white text-center"
                    style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
                  >
                    {t("cta")}
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
