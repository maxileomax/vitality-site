"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const symptoms = [
  { icon: "⚡", title: "Constant Exhaustion", desc: "You wake up tired. Rest doesn't restore you. Coffee barely helps anymore." },
  { icon: "🌊", title: "Disconnected Body", desc: "You live from the neck up. Your body feels foreign — something to manage, not inhabit." },
  { icon: "🔥", title: "Lost Desire", desc: "Intimacy feels distant. The spark that once lived in you has gone quiet." },
  { icon: "🌑", title: "Emotional Burnout", desc: "Giving to everyone else. Feeling hollow inside. Emotions feel numb or overwhelming." },
  { icon: "⏳", title: "Invisible Drain", desc: "You can't explain it — but something vital is leaking out of you every single day." },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-[#0a0a15] to-[#080810]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Hidden Epidemic</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6 leading-tight">
            She has everything.<br />
            <span className="text-[#f0ece4]/40">Yet feels nothing.</span>
          </h2>
          <p className="text-xl text-[#f0ece4]/60 max-w-2xl mx-auto leading-relaxed">
            Millions of women are living with an invisible energy deficit.
            Successful on the outside. Depleted on the inside.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-[#C9A84C]/10 bg-gradient-to-br from-[#0f0f20]/80 to-[#0a0a15]/80 hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-serif text-xl text-[#C9A84C] mb-3">{s.title}</h3>
              <p className="text-[#f0ece4]/60 leading-relaxed text-sm">{s.desc}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-[#C9A84C]/15 to-[#8B6914]/10 border border-[#C9A84C]/30 flex flex-col justify-center"
          >
            <p className="font-serif text-2xl text-[#E8C96A] leading-relaxed italic">
              "You are not broken. Your vitality system has simply gone offline."
            </p>
            <p className="text-[#f0ece4]/50 mt-4 text-sm tracking-wide">— The Vitality Framework</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
