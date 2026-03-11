"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  "Clinical Psychologist",
  "Certified Sexologist",
  "Body Therapist & Somatic Practitioner",
  "Published Author",
  "International Speaker",
  "Creator of 6 educational programs",
  "10,000+ students worldwide",
];

export default function ExpertBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expert" ref={ref} className="py-32 px-6 relative overflow-hidden bg-[#080810]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">The Expert</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
            Guided By Science.<br />Led By Experience.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f20] flex items-center justify-center overflow-hidden relative">
              {/* Decorative neural pattern inside photo */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[#C9A84C]/40"
                    style={{
                      width: `${(i + 1) * 20}%`,
                      height: `${(i + 1) * 20}%`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center p-8">
                <div className="w-32 h-32 rounded-full border-2 border-[#C9A84C]/40 mx-auto mb-4 bg-gradient-to-br from-[#C9A84C]/20 to-transparent flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
                <p className="text-[#C9A84C] font-serif text-2xl">Natalia Muzyka</p>
                <p className="text-[#f0ece4]/40 text-sm mt-2 tracking-wider">Photo placeholder</p>
              </div>
            </div>

            {/* Gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5" />
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-2">Natalia Muzyka</h3>
            <p className="text-[#C9A84C] tracking-wider mb-8 text-sm uppercase">Vitality Expert & Educator</p>

            <p className="text-[#f0ece4]/70 text-lg leading-relaxed mb-8">
              With over a decade of clinical practice at the intersection of neuroscience,
              somatic therapy and feminine psychology, she has developed a unique framework
              for restoring female vitality that has transformed thousands of lives worldwide.
            </p>

            <div className="space-y-3 mb-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#C9A84C] text-lg">◆</span>
                  <span className="text-[#f0ece4]/70">{c}</span>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-2 border-[#C9A84C] pl-6 italic text-[#f0ece4]/60 text-lg">
              &quot;Every woman deserves to live in a body that feels like home —
              alive, sensual, and fully her own.&quot;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
