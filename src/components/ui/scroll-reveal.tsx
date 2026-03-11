"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/src/components/animations/variants";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
