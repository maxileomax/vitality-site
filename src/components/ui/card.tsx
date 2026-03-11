import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "bento" | "testimonial";
}

export function Card({ children, className, variant = "glass" }: CardProps) {
  const variants = {
    glass:
      "bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm",
    bento:
      "bg-white/80 backdrop-blur-xl border border-warm-200/60 rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md",
    testimonial:
      "bg-white rounded-3xl border border-warm-200/40 shadow-sm p-8",
  };

  return (
    <div className={cn(variants[variant], className)}>
      {children}
    </div>
  );
}
