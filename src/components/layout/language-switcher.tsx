"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LOCALES = [
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "uk", label: "Укр", flag: "🇺🇦" },
  { code: "en", label: "Eng", flag: "🇬🇧" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const switchLocale = (code: string) => {
    // Replace locale segment in pathname
    const segments = pathname.split("/");
    segments[1] = code;
    const newPath = segments.join("/");
    document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000`;
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm-200/60 hover:border-primary/30 transition-colors text-sm font-medium text-warm-950"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl border border-warm-200/60 shadow-lg overflow-hidden min-w-[100px]">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-warm-50 transition-colors ${
                  l.code === locale
                    ? "text-primary font-semibold"
                    : "text-warm-950"
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
