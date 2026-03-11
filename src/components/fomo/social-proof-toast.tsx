"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";

const NOTIFICATIONS = [
  { name: "Мария", city: "Киев" },
  { name: "Анна", city: "Берлин" },
  { name: "Светлана", city: "Торонто" },
  { name: "Ольга", city: "Дубай" },
  { name: "Наталья", city: "Варшава" },
  { name: "Елена", city: "Тель-Авив" },
  { name: "Ирина", city: "Алматы" },
  { name: "Татьяна", city: "Амстердам" },
  { name: "Юлия", city: "Лондон" },
  { name: "Виктория", city: "Прага" },
];

export function SocialProofToast() {
  const t = useTranslations("fomo");
  const [current, setCurrent] = useState<{ name: string; city: string } | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const show = () => {
      const notif = NOTIFICATIONS[index % NOTIFICATIONS.length];
      setCurrent(notif);
      setIndex((i) => i + 1);
      setTimeout(() => setCurrent(null), 4000);
    };

    const id = setTimeout(() => {
      show();
      const interval = setInterval(show, 20000);
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-20 left-4 z-40 lg:bottom-8"
          role="status"
          aria-live="polite"
        >
          <div className="bg-white rounded-2xl border border-warm-200/60 shadow-lg p-4 flex items-center gap-3 max-w-[260px]">
            <div className="w-9 h-9 rounded-full bg-warm-100 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-warm-400" />
            </div>
            <p className="text-xs text-warm-700 leading-snug">
              {t("social_proof", { name: current.name, city: current.city })}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
