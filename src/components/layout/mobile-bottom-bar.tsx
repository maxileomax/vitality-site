"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function MobileBottomBar() {
  const t = useTranslations("mobile_bar");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.5;
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/90 backdrop-blur-xl border-t border-warm-200/40 p-4 safe-area-pb"
        >
          <Link
            href={`/${locale}/quiz`}
            className="flex items-center justify-center w-full py-3.5 rounded-full text-white font-medium text-base"
            style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
          >
            {t("cta")}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
