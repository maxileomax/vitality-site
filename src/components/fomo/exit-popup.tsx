"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ExitPopup() {
  const t = useTranslations("exit_popup");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("exit_popup_shown", "1");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("exit_popup_shown")) return;

    // Desktop: mouse leaves toward top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setVisible(true);
      }
    };

    // Mobile: 60s inactivity
    let mobileTimer: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      clearTimeout(mobileTimer);
      mobileTimer = setTimeout(() => setVisible(true), 60000);
    };

    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      resetTimer();
      window.addEventListener("touchstart", resetTimer);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", resetTimer);
      clearTimeout(mobileTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-warm-950/40 backdrop-blur-sm z-50"
            onClick={dismiss}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center hover:bg-warm-200 transition-colors"
              aria-label={t("close")}
            >
              <X size={16} />
            </button>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "linear-gradient(135deg, rgba(139,26,74,0.12), rgba(196,86,106,0.12))" }}
              >
                <span className="text-2xl">💡</span>
              </div>
              <h2
                id="exit-popup-title"
                className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-950 mb-2"
              >
                {t("title")}
              </h2>
              <p className="font-[family-name:var(--font-playfair)] text-lg italic text-accent mb-2">
                {t("subtitle")}
              </p>
              <p className="text-warm-600 text-sm mb-6">{t("description")}</p>

              <Link
                href={`/${locale}/quiz`}
                onClick={dismiss}
                className="block w-full py-3.5 rounded-full text-white font-semibold mb-3"
                style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
              >
                {t("cta")}
              </Link>
              <p className="text-xs text-warm-500">
                {t("counter", { count: "3,247" })}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
