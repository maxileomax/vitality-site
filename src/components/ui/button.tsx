import { cn } from "@/src/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "text-white focus-visible:ring-primary",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost:
      "text-primary hover:text-accent underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const primaryStyle =
    variant === "primary"
      ? { background: "linear-gradient(135deg, #8B1A4A, #C4566A)" }
      : {};

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      style={primaryStyle}
      {...props}
    >
      {children}
    </button>
  );
}
