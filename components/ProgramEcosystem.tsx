"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    step: "01",
    title: "Vitality Reset",
    subtitle: "Foundation Program",
    desc: "7-day immersion into your body's baseline. Reset your nervous system, map your energy leaks, establish daily vitality rituals.",
    duration: "7 Days",
    level: "Beginning",
    cta: "Start Here",
  },
  {
    step: "02",
    title: "Body Awakening",
    subtitle: "Somatic Immersion",
    desc: "Deep somatic journey to restore physical sensitivity. Reconnect with your body's intelligence through guided movement and awareness practices.",
    duration: "4 Weeks",
    level: "Foundation",
    cta: "Explore",
  },
  {
    step: "03",
    title: "Relationship Energy",
    subtitle: "Connection & Intimacy",
    desc: "Transform how you relate — to yourself and others. Restore healthy desire patterns, communication and emotional availability.",
    duration: "6 Weeks",
    level: "Intermediate",
    cta: "Learn More",
  },
  {
    step: "04",
    title: "Deep Sensuality",
    subtitle: "Mastery Program",
    desc: "Advanced integration of all three systems. Full embodiment of feminine vitality, sensuality and creative life force.",
    duration: "12 Weeks",
    level: "Advanced",
    cta: "Apply Now",
  },
];

export default function ProgramEcosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-[#080810]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">Learning Path</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">The Program Ecosystem</h2>
          <p className="text-[#f0ece4]/60 text-xl max-w-2xl mx-auto">
            A complete journey from depletion to full aliveness.
            Each stage builds on the last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-8 rounded-2xl border border-[#C9A84C]/15 bg-gradient-to-b from-[#0f0f20]/80 to-[#080810]/80 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-4 right-4 text-[#C9A84C]/15 font-serif text-5xl leading-none group-hover:text-[#C9A84C]/25 transition-colors">
                {p.step}
              </div>

              <div className="mb-6">
                <span className="text-xs tracking-widest text-[#C9A84C]/50 uppercase">{p.subtitle}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#f0ece4] mb-4">{p.title}</h3>
              <p className="text-[#f0ece4]/50 text-sm leading-relaxed mb-6">{p.desc}</p>

              <div className="flex flex-col gap-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-[#f0ece4]/40">Duration</span>
                  <span className="text-[#C9A84C]">{p.duration}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#f0ece4]/40">Level</span>
                  <span className="text-[#C9A84C]">{p.level}</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-full border border-[#C9A84C]/30 text-[#C9A84C] text-sm tracking-wider group-hover:bg-[#C9A84C] group-hover:text-[#080810] transition-all duration-300">
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
