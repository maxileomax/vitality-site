"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-[#0d0d1f] to-[#080810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1)_0%,transparent_60%)]" />

      {/* Decorative rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C9A84C]/05" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C9A84C]/08" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-[#C9A84C]/12" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans mb-8 block">Your Moment</span>

          <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
            Your vitality is not gone.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">
              It is waiting to be awakened.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#f0ece4]/60 leading-relaxed mb-16 max-w-2xl mx-auto">
            The aliveness you remember — the desire, the energy, the feeling of being
            fully inhabiting your body — it&apos;s not a memory. It&apos;s your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#test"
              className="group relative bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080810] px-12 py-5 rounded-full font-semibold text-lg tracking-wide hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] transition-all duration-300"
            >
              Start the Test
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </a>
            <a
              href="#method"
              className="border border-[#C9A84C]/40 text-[#C9A84C] px-12 py-5 rounded-full font-light text-lg tracking-wide hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
            >
              Discover the Method
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-[#C9A84C]/15 pt-12"
        >
          <div className="flex justify-center gap-12 text-center flex-wrap gap-y-6">
            {[
              ["✓", "Science-backed method"],
              ["✓", "10,000+ women transformed"],
              ["✓", "Start free with the test"],
              ["✓", "No spam, ever"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-2">
                <span className="text-[#C9A84C]">{icon}</span>
                <span className="text-[#f0ece4]/50 text-sm">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-[#f0ece4]/20 text-sm mt-8">
            © 2024 Female Vitality Institute. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
