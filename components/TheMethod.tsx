"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Restore Safety in the Body",
    desc: "Before vitality can return, the nervous system must feel safe. Through somatic practices, breathwork and neural repatterning, we teach the body to release chronic threat responses and return to a state of open receptivity.",
    tags: ["Somatic Release", "Breathwork", "Neural Repatterning"],
  },
  {
    num: "02",
    title: "Restore Sensitivity",
    desc: "Sensitivity is the ability to feel — pleasure, emotions, intuition, connection. Through body awareness practices, we reawaken the sensory landscape that has gone numb, restoring the bridge between mind and physical experience.",
    tags: ["Body Mapping", "Sensory Restoration", "Emotional Fluency"],
  },
  {
    num: "03",
    title: "Reactivate Vitality",
    desc: "With safety and sensitivity restored, vitality naturally reactivates. The reward system comes back online. Desire, creativity, and life force return — not as something added, but as something remembered.",
    tags: ["Desire Restoration", "Life Force Activation", "Embodied Confidence"],
  },
];

export default function TheMethod() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="method" ref={ref} className="py-32 px-6 relative overflow-hidden bg-[#080810]">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent ml-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Restoration Process</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 leading-tight">
            The Method
          </h2>
          <p className="text-[#f0ece4]/60 text-xl mt-4 max-w-2xl mx-auto">
            Three precise steps. One coherent system. A complete restoration of female vitality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/40 via-[#C9A84C]/20 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative flex gap-12 mb-16 md:pl-24"
            >
              {/* Step number indicator */}
              <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full border border-[#C9A84C]/40 bg-[#080810] items-center justify-center flex-shrink-0">
                <span className="text-[#C9A84C] font-serif text-sm">{step.num}</span>
              </div>

              <div className="flex-1 p-8 rounded-2xl border border-[#C9A84C]/15 bg-gradient-to-br from-[#0f0f20]/80 to-transparent hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="md:hidden text-[#C9A84C]/30 font-serif text-6xl mb-2 leading-none">{step.num}</div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#f0ece4] mb-4">{step.title}</h3>
                <p className="text-[#f0ece4]/60 leading-relaxed text-lg mb-6">{step.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1 rounded-full border border-[#C9A84C]/25 text-[#C9A84C]/70 text-xs tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
