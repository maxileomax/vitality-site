"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { CountdownTimer } from "./countdown-timer";
import { SpotsCounter } from "./spots-counter";

export function FomoBlock() {
  const t = useTranslations("fomo");
  const locale = useLocale();

  return (
    <section className="py-16 lg:py-20 bg-warm-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            {t("urgency")}
          </p>
          <CountdownTimer />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-8">
          <SpotsCounter />
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-8">
          <Link
            href={`/${locale}/quiz`}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-semibold text-lg"
            style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
          >
            Занять место
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
