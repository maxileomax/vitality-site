"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BatteryLow, Heart, Hand, Sparkles, Activity, Flame,
} from "lucide-react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { Card } from "@/src/components/ui/card";

const ICONS = {
  "battery-low": BatteryLow,
  heart: Heart,
  hand: Hand,
  sparkles: Sparkles,
  activity: Activity,
  flame: Flame,
} as const;

type IconKey = keyof typeof ICONS;

interface EntryItem {
  icon: string;
  title: string;
  description: string;
}

export function EntryPoints() {
  const t = useTranslations("entry_points");
  const items = t.raw("items") as EntryItem[];

  return (
    <section className="py-20 lg:py-28 bg-warm-50" aria-labelledby="entry-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2
            id="entry-title"
            className="font-[family-name:var(--font-playfair)] font-bold text-warm-950 mb-3"
            style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-600 text-lg">{t("subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon as IconKey] ?? Heart;
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <Card variant="bento" className="p-7 h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, rgba(139,26,74,0.12), rgba(196,86,106,0.12))" }}
                  >
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-warm-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-warm-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
