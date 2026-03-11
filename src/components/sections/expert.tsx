"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { User, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

export function Expert() {
  const t = useTranslations("expert");
  const locale = useLocale();
  const credentials = t.raw("credentials") as string[];

  return (
    <section className="py-20 lg:py-28 bg-warm-50" aria-labelledby="expert-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo placeholder */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] max-w-[420px] mx-auto bg-warm-200/60 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-warm-300/60 flex items-center justify-center mx-auto mb-4">
                    <User size={40} className="text-warm-500" />
                  </div>
                  <p className="text-warm-500 text-sm font-medium">Фото Натальи</p>
                </div>
              </div>
              {/* Decorative badge */}
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-warm-200/40"
              >
                <div className="text-center">
                  <div
                    className="font-[family-name:var(--font-playfair)] text-2xl font-bold"
                    style={{ color: "#8B1A4A" }}
                  >
                    1M+
                  </div>
                  <div className="text-xs text-warm-600">подписчиков</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                {t("subtitle")}
              </div>
              <h2
                id="expert-title"
                className="font-[family-name:var(--font-playfair)] font-bold text-warm-950 mb-5"
                style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 2.75rem)", letterSpacing: "-0.02em" }}
              >
                {t("title")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-warm-600 text-lg leading-relaxed mb-5">{t("bio")}</p>
              <p className="text-warm-600 leading-relaxed mb-7 italic border-l-2 border-accent/40 pl-5">
                &quot;{t("story")}&quot;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ul className="space-y-2.5 mb-8">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0" />
                    <span className="text-warm-700 text-sm">{cred}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                {t("cta")}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
