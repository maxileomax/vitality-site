"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function DiagnosticTest() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="test" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-[#0d0d1f] to-[#080810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_65%)]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A84C] tracking-[0.3em] text-sm uppercase font-sans">Free Diagnostic</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6 leading-tight">
            Where Is Your Vitality<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">
              Leaking Right Now?
            </span>
          </h2>
          <p className="text-xl text-[#f0ece4]/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            The Female Vitality Assessment maps your three core systems and reveals
            exactly where your energy is being lost — and the precise steps to restore it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: "🧠", label: "Neuroscience-based", desc: "27 questions mapped to your brain's reward circuits" },
            { icon: "🌀", label: "Body & Mind", desc: "Assesses somatic, emotional and energetic patterns" },
            { icon: "📊", label: "Personal Report", desc: "Immediate detailed results with action steps" },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border border-[#C9A84C]/15 bg-[#0f0f20]/60">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-[#C9A84C] font-sans text-sm tracking-wider uppercase mb-2">{item.label}</h4>
              <p className="text-[#f0ece4]/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-10 rounded-3xl border border-[#C9A84C]/30 bg-gradient-to-br from-[#C9A84C]/10 to-transparent"
        >
          {!submitted ? (
            <>
              <h3 className="font-serif text-3xl mb-3 text-[#f0ece4]">Take the Vitality Test</h3>
              <p className="text-[#f0ece4]/50 mb-8">Free · 5 minutes · Instant results</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-[#080810] border border-[#C9A84C]/30 rounded-full px-6 py-4 text-[#f0ece4] placeholder-[#f0ece4]/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080810] px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 whitespace-nowrap"
                >
                  Start Now →
                </button>
              </form>
              <p className="text-[#f0ece4]/30 text-xs mt-4">No spam. Unsubscribe anytime. Your data is protected.</p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-3xl text-[#C9A84C] mb-3">You&apos;re in.</h3>
              <p className="text-[#f0ece4]/70 text-lg">Check your inbox — your Vitality Assessment is on its way.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
