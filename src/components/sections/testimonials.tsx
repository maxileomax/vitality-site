"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Quote, User } from "lucide-react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

interface TestimonialItem {
  quote: string;
  name: string;
  city: string;
}

export function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const items = t.raw("items") as TestimonialItem[];

  return (
    <section className="py-20 lg:py-28 bg-warm-100" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2
            id="testimonials-title"
            className="font-[family-name:var(--font-playfair)] font-bold text-warm-950 mb-3"
            style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-600 text-lg">{t("subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="bg-white rounded-3xl p-8 border border-warm-200/40 shadow-sm h-full flex flex-col">
                <Quote size={28} className="text-accent/40 mb-4 flex-shrink-0" />
                <p className="font-[family-name:var(--font-playfair)] text-warm-800 italic leading-relaxed flex-1 mb-6">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warm-200/60 flex items-center justify-center flex-shrink-0">
                    <User size={18} className="text-warm-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-warm-950 text-sm">{item.name}</div>
                    <div className="text-warm-500 text-xs">{item.city}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href={`/${locale}/results`}
            className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
          >
            {t("cta")}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
