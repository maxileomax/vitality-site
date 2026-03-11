"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FomoBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-[#100f1a] to-[#080810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,30,30,0.04)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Cost of Waiting</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-8 leading-tight">
            The body doesn&apos;t wait.<br />
            <span className="text-[#f0ece4]/40">Neither should you.</span>
          </h2>
          <p className="text-xl text-[#f0ece4]/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            Every year of depleted vitality creates deeper grooves in the nervous system.
            The longer these patterns run, the more effort restoration requires.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { year: "Year 1", state: "Low energy, low desire", color: "text-yellow-500/70" },
            { year: "Year 3", state: "Emotional numbness, body disconnection", color: "text-orange-500/70" },
            { year: "Year 5+", state: "Chronic depletion, loss of identity", color: "text-red-500/60" },
          ].map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="p-6 rounded-2xl border border-white/10 bg-[#0f0f20]/60"
            >
              <p className="text-[#f0ece4]/40 text-xs tracking-widest uppercase mb-2">{item.year}</p>
              <p className={`text-lg ${item.color} font-light`}>{item.state}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-8 rounded-2xl border border-[#C9A84C]/30 bg-gradient-to-br from-[#C9A84C]/10 to-transparent mb-8"
        >
          <p className="text-[#C9A84C] font-serif text-xl mb-4">⚡ Early Access Now Open</p>
          <p className="text-[#f0ece4]/70 mb-2">
            The next cohort of the Vitality Reset begins <strong className="text-[#f0ece4]">March 24th</strong>.
          </p>
          <p className="text-[#f0ece4]/50 text-sm">Limited to 50 women. 23 spots remaining.</p>

          {/* Urgency bar */}
          <div className="mt-6 h-2 bg-[#f0ece4]/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "54%" } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] rounded-full"
            />
          </div>
          <p className="text-[#f0ece4]/40 text-xs mt-2">54% filled</p>
        </motion.div>

        <motion.a
          href="#test"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080810] px-12 py-5 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300"
        >
          Reserve My Spot →
        </motion.a>
      </div>
    </section>
  );
}
