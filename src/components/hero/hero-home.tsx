"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FloatingBlobs } from "@/src/components/ui/floating-blobs";
import { AnimatedCounter } from "@/src/components/ui/animated-counter";
import { TextReveal } from "./text-reveal";
import { MagneticButton } from "@/src/components/ui/magnetic-button";

export function HeroHome() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-50 pt-20">
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,26,74,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(196,86,106,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <FloatingBlobs />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h1
          className="font-[family-name:var(--font-playfair)] font-bold text-warm-950 mb-4 leading-[1.1]"
          style={{
            fontSize: "clamp(2.375rem, 5vw + 1rem, 4.1875rem)",
            letterSpacing: "-0.02em",
          }}
        >
          <TextReveal text={t("line1")} delay={0} />
          <br />
          <TextReveal text={t("line2")} delay={0.3} className="text-primary" />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-accent italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {t("subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-warm-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {t("description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <MagneticButton
            className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" } as React.CSSProperties}
            onClick={() => (window.location.href = `/${locale}/quiz`)}
          >
            {t("cta_primary")}
          </MagneticButton>

          <Link
            href={`/${locale}/program`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary/30 text-primary font-medium text-lg hover:border-primary hover:bg-primary/5 transition-all"
          >
            {t("cta_secondary")}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary mb-1">
              <AnimatedCounter to={1} suffix="M+" />
            </div>
            <div className="text-sm text-warm-600">{t("stats.subscribers")}</div>
          </div>
          <div className="text-center">
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary mb-1">
              <AnimatedCounter to={5000} suffix="+" />
            </div>
            <div className="text-sm text-warm-600">{t("stats.clients")}</div>
          </div>
          <div className="text-center">
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary mb-1">
              1
            </div>
            <div className="text-sm text-warm-600">{t("stats.book")}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-warm-400" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
