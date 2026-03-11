"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-warm-100" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2
            id="faq-title"
            className="font-[family-name:var(--font-playfair)] font-bold text-warm-950"
            style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="bg-white rounded-2xl border border-warm-200/40 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-warm-50 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-warm-950 text-sm md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-warm-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 text-warm-600 text-sm leading-relaxed border-t border-warm-100">
                        <div className="pt-4">{item.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
