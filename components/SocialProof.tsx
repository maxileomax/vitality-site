"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "I spent three years wondering what was wrong with me. After this work, I finally understood — nothing was wrong. My vitality system just needed to come back online. It did.",
    name: "Sarah M.",
    location: "New York",
    result: "Rediscovered desire after 5 years",
  },
  {
    quote: "I was functioning but not alive. The approach here is different from everything I tried — it's precise, science-based, and it actually works on the level where the problem lives.",
    name: "Elena K.",
    location: "London",
    result: "Restored energy & emotional clarity",
  },
  {
    quote: "Six months ago I couldn't feel joy. Not numbness from depression — just a flatness. Now I wake up genuinely excited. My relationships transformed completely.",
    name: "Marta B.",
    location: "Berlin",
    result: "Reconnected to body & emotions",
  },
  {
    quote: "The neuroscience framework helped me understand what was happening in my body. Understanding made everything possible. I'm not the same person.",
    name: "Ana R.",
    location: "São Paulo",
    result: "Complete life energy restoration",
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-[#0a0a15] to-[#080810]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">Transformations</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Women Who Came Back Alive
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-8 rounded-2xl border border-[#C9A84C]/15 bg-gradient-to-br from-[#0f0f20]/80 to-transparent hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="text-[#C9A84C]/30 font-serif text-5xl leading-none mb-4">&quot;</div>
              <p className="text-[#f0ece4]/80 text-lg leading-relaxed italic mb-6">{t.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#f0ece4] font-semibold">{t.name}</p>
                  <p className="text-[#f0ece4]/40 text-sm">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs px-3 py-1 rounded-full">
                    {t.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
