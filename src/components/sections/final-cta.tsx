"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { FloatingBlobs } from "@/src/components/ui/floating-blobs";
import { MagneticButton } from "@/src/components/ui/magnetic-button";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

export function FinalCta() {
  const t = useTranslations("final_cta");
  const locale = useLocale();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-warm-50">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,26,74,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <FloatingBlobs />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-warm-950 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
          <p
            className="font-[family-name:var(--font-playfair)] italic text-2xl mb-10"
            style={{ color: "#C4566A" }}
          >
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              className="px-9 py-4 rounded-full text-white font-semibold text-lg shadow-lg"
              style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" } as React.CSSProperties}
              onClick={() => (window.location.href = `/${locale}/quiz`)}
            >
              {t("cta_primary")}
            </MagneticButton>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              href={`/${locale}/quiz`}
              className="text-sm text-warm-600 hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {t("cta_webinar")}
            </Link>
            <span className="hidden sm:block text-warm-300">·</span>
            <Link
              href={`/${locale}/program`}
              className="text-sm text-warm-600 hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {t("cta_minicourse")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
