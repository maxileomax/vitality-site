"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const qualities = [
  "Wakes up feeling alive",
  "Desires intimacy naturally",
  "Feels deeply connected to her body",
  "Radiates quiet confidence",
  "Has emotional clarity and resilience",
  "Creates from a place of overflow, not depletion",
  "Says yes to pleasure without guilt",
  "Trusts her own inner guidance",
];

export default function Transformation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-[#0d0d1a] to-[#080810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Destination</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 leading-tight">
              What She Becomes<br />
              <span className="text-[#C9A84C]">on the other side</span>
            </h2>
            <p className="text-[#f0ece4]/60 text-xl leading-relaxed mb-8">
              Restoring vitality isn&apos;t about becoming a different person.
              It&apos;s about returning to the most alive, magnetic, and powerful version of yourself.
            </p>
            <a href="#test" className="inline-block bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080810] px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all duration-300">
              Begin Your Restoration →
            </a>
          </motion.div>

          <div className="space-y-4">
            {qualities.map((q, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full border border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all">
                  <span className="text-[#C9A84C] text-xs">✓</span>
                </div>
                <span className="text-[#f0ece4]/80 group-hover:text-[#f0ece4] transition-colors">{q}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
