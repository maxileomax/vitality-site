"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const TOTAL = 50;
const TAKEN = 38;
const LEFT = TOTAL - TAKEN;

export function SpotsCounter() {
  const t = useTranslations("fomo");
  const percent = (TAKEN / TOTAL) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="font-semibold text-warm-950">
          {t("spots_left", { count: LEFT })}
        </span>
        <span className="text-warm-500">{TOTAL}</span>
      </div>
      <div className="h-2.5 bg-warm-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #8B1A4A, #C4566A)" }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </div>
  );
}
