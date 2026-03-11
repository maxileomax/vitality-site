"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HiddenTruth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Hidden Truth</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-8 leading-tight">
            Vitality isn&apos;t lost.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">
              It&apos;s disconnected.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#f0ece4]/70 leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          Neuroscience reveals that female vitality depends on the precise
          synchronization of three internal systems. When they fall out of alignment —
          energy disappears, desire fades, and the body goes numb.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { num: "01", title: "Reward System", desc: "Regulates dopamine, motivation and pleasure. When disrupted — numbness, low desire, inability to feel joy." },
            { num: "02", title: "Safety System", desc: "Controls the nervous system's ability to relax into presence. Chronic stress permanently activates threat response." },
            { num: "03", title: "Body Sensitivity", desc: "The bridge between mind and physical sensation. Without it, the body becomes a stranger you inhabit." },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="relative p-8 rounded-2xl border border-[#C9A84C]/20 bg-[#0f0f20]/60"
            >
              <div className="text-[#C9A84C]/20 font-serif text-7xl absolute top-4 right-6 leading-none">{item.num}</div>
              <h3 className="font-serif text-2xl text-[#C9A84C] mb-4 relative z-10">{item.title}</h3>
              <p className="text-[#f0ece4]/60 leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent border-t border-b border-[#C9A84C]/20"
        >
          <p className="font-serif text-2xl md:text-3xl text-[#f0ece4] leading-relaxed">
            Modern life systematically disrupts all three systems simultaneously.<br />
            <span className="text-[#C9A84C]">This is not weakness. This is biology.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
