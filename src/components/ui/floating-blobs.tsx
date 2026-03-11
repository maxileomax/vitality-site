"use client";

import { motion } from "framer-motion";

export function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,26,74,0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(196,86,106,0.10) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,26,74,0.07) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 15, -15, 0],
          y: [0, 20, -10, 0],
          scale: [1, 1.08, 0.97, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
