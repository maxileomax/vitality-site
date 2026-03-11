"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const systems = [
  {
    id: "reward",
    icon: "✦",
    color: "#C9A84C",
    title: "Reward System",
    subtitle: "Dopamine & Desire",
    short: "The fuel of aliveness",
    full: "Your brain's reward circuitry drives motivation, pleasure, and the desire to engage with life. When chronically stressed or overstimulated by screens and sugar, this system dysregulates — leaving you unable to feel genuine pleasure or excitement.",
    signs: ["No excitement about things you used to love", "Relying on external stimulation", "Flat emotional baseline"],
  },
  {
    id: "safety",
    icon: "◈",
    color: "#B8956A",
    title: "Safety System",
    subtitle: "Nervous System Regulation",
    short: "The root of all pleasure",
    full: "The nervous system must feel safe before it allows pleasure and connection. Chronic activation of survival responses (fight/flight/freeze) prevents the body from opening to intimacy, rest, or sensory experience.",
    signs: ["Difficulty fully relaxing", "Hypervigilance and overthinking", "Physical tension in pelvis and chest"],
  },
  {
    id: "somatic",
    icon: "⬡",
    color: "#9E7B5A",
    title: "Somatic Awareness",
    subtitle: "Body Intelligence",
    short: "The bridge to feeling",
    full: "Somatic awareness is the capacity to receive and interpret signals from the body. Without it, emotions get trapped as physical symptoms, pleasure can't be felt, and the body becomes a source of anxiety rather than wisdom.",
    signs: ["Living predominantly in your head", "Difficulty identifying your own needs", "Numbness or disconnection during intimacy"],
  },
];

export default function ThreeSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("reward");

  const current = systems.find((s) => s.id === active)!;

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-[#080810]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Three System Model</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 leading-tight">
            The Architecture<br />of Female Vitality
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {systems.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-8 py-3 rounded-full text-sm tracking-wider transition-all duration-300 font-sans ${
                active === s.id
                  ? "bg-[#C9A84C] text-[#080810] font-semibold"
                  : "border border-[#C9A84C]/30 text-[#C9A84C]/70 hover:border-[#C9A84C]/60"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="text-5xl mb-6" style={{ color: current.color }}>{current.icon}</div>
            <h3 className="font-serif text-4xl text-[#f0ece4] mb-2">{current.title}</h3>
            <p className="text-[#C9A84C] tracking-wider text-sm mb-6 uppercase">{current.subtitle}</p>
            <p className="text-[#f0ece4]/70 text-lg leading-relaxed mb-8">{current.full}</p>

            <div>
              <p className="text-[#C9A84C]/60 text-xs tracking-[0.2em] uppercase mb-4">Signs of disruption</p>
              {current.signs.map((sign) => (
                <div key={sign} className="flex items-start gap-3 mb-3">
                  <span className="text-[#C9A84C] mt-1">—</span>
                  <span className="text-[#f0ece4]/60">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full border border-[#C9A84C]/20 flex items-center justify-center relative">
              <div className="absolute inset-4 rounded-full border border-[#C9A84C]/10 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-8 rounded-full border border-[#C9A84C]/05" />
              <div className="text-center z-10">
                <div className="text-8xl mb-4" style={{ color: current.color }}>{current.icon}</div>
                <p className="font-serif text-xl text-[#f0ece4]/80">{current.short}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
