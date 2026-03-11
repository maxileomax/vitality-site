"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

interface ProductItem {
  name: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export function ProductLine() {
  const t = useTranslations("products");
  const locale = useLocale();
  const items = t.raw("items") as ProductItem[];

  return (
    <section className="py-20 lg:py-28 bg-warm-50" aria-labelledby="products-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2
            id="products-title"
            className="font-[family-name:var(--font-playfair)] font-bold text-warm-950"
            style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`relative h-full flex flex-col rounded-3xl border p-8 transition-all ${
                  item.popular
                    ? "border-primary shadow-xl scale-[1.02] bg-white"
                    : "border-warm-200/60 bg-white/80 shadow-sm"
                }`}
              >
                {item.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-semibold"
                    style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
                  >
                    <Star size={12} fill="white" />
                    Популярный
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-950 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-warm-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="font-[family-name:var(--font-playfair)] text-4xl font-bold"
                      style={{ color: "#8B1A4A" }}
                    >
                      {item.currency}{item.price === "0" ? "0" : item.price}
                    </span>
                    {item.price === "0" && (
                      <span className="text-warm-500 text-sm ml-1">бесплатно</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {item.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2.5">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span className="text-warm-700 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/quiz`}
                  className={`block text-center py-3.5 px-6 rounded-full font-semibold transition-all ${
                    item.popular
                      ? "text-white hover:opacity-90"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  style={item.popular ? { background: "linear-gradient(135deg, #8B1A4A, #C4566A)" } : {}}
                >
                  {item.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
