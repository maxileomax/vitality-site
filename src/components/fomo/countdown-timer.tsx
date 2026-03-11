"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTargetDate(): Date {
  const now = new Date();
  const target = new Date(now);
  target.setDate(now.getDate() + 5);
  target.setHours(23, 59, 59, 0);
  return target;
}

function FlipCard({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="bg-warm-950 text-white rounded-xl px-4 py-3 min-w-[64px] text-center">
        <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold tabular-nums">
          {formatted}
        </span>
      </div>
      <span className="text-warm-500 text-xs">{label}</span>
    </div>
  );
}

export function CountdownTimer() {
  const t = useTranslations("fomo");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = getTargetDate();
    const update = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p className="text-sm font-semibold text-warm-600 uppercase tracking-widest text-center mb-4">
        {t("countdown_title")}
      </p>
      <div className="flex items-center justify-center gap-3">
        <FlipCard value={timeLeft.days} label={t("days")} />
        <span className="text-warm-400 text-2xl font-bold mb-4">:</span>
        <FlipCard value={timeLeft.hours} label={t("hours")} />
        <span className="text-warm-400 text-2xl font-bold mb-4">:</span>
        <FlipCard value={timeLeft.minutes} label={t("minutes")} />
        <span className="text-warm-400 text-2xl font-bold mb-4">:</span>
        <FlipCard value={timeLeft.seconds} label={t("seconds")} />
      </div>
    </div>
  );
}
