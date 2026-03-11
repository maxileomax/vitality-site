"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

interface Step {
  number: string;
  title: string;
  label: string;
  description: string;
}

export function Solution() {
  const t = useTranslations("solution");
  const steps = t.raw("steps") as Step[];
  const svgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(svgRef, { once: true });

  const circleColors = [
    "rgba(139,26,74,0.25)",
    "rgba(196,86,106,0.25)",
    "rgba(86,149,109,0.25)",
  ];

  return (
    <section className="py-20 lg:py-28 bg-warm-100" aria-labelledby="solution-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2
            id="solution-title"
            className="font-[family-name:var(--font-playfair)] font-bold text-warm-950 mb-3"
            style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-600 text-lg">{t("subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SVG Venn Diagram */}
          <div ref={svgRef} className="flex justify-center" aria-hidden="true">
            <svg viewBox="0 0 300 280" className="w-full max-w-[320px]">
              {steps.map((_, i) => {
                const cx = [120, 180, 150][i];
                const cy = [100, 100, 185][i];
                return (
                  <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={85}
                    fill={circleColors[i]}
                    stroke="white"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  />
                );
              })}
              {/* Pulse dots at intersections */}
              {[[150, 100], [135, 150], [165, 150]].map(([x, y], i) => (
                <motion.circle
                  key={`dot-${i}`}
                  cx={x}
                  cy={y}
                  r={5}
                  fill="#8B1A4A"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? {
                    opacity: [0, 1, 0.5, 1],
                    scale: [0, 1.2, 1],
                  } : {}}
                  transition={{ delay: 0.9 + i * 0.2, duration: 0.5 }}
                />
              ))}
              {/* Labels */}
              {steps.map((step, i) => {
                const lx = [80, 220, 150][i];
                const ly = [68, 68, 245][i];
                return (
                  <motion.text
                    key={`label-${i}`}
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    className="text-[11px] fill-warm-950 font-semibold"
                    style={{ fontSize: "11px", fill: "#1F1610", fontWeight: 600 }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.2 }}
                  >
                    {step.label}
                  </motion.text>
                );
              })}
            </svg>
          </div>

          {/* Steps list */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-[family-name:var(--font-playfair)] font-bold text-white text-lg"
                    style={{ background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
                      {step.label}
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-warm-950 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-warm-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
