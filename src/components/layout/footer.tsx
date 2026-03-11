"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Instagram, Youtube, Send } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer
      className="bg-warm-950 text-warm-300 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white mb-3">
              Наталья Музыка
            </p>
            <p className="text-sm text-warm-400 leading-relaxed">
              {t("tagline")}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/muzika_nataly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
              >
                <Instagram size={16} className="text-warm-300" />
              </a>
              <a
                href="https://t.me/muzika_nataly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
              >
                <Send size={16} className="text-warm-300" />
              </a>
              <a
                href="https://youtube.com/@muzika_nataly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
              >
                <Youtube size={16} className="text-warm-300" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("about_col")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm text-warm-400 hover:text-white transition-colors"
                >
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/program`}
                  className="text-sm text-warm-400 hover:text-white transition-colors"
                >
                  {nav("program")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-sm text-warm-400 hover:text-white transition-colors"
                >
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("nav_col")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: `/${locale}/quiz`, label: nav("quiz") },
                { href: `/${locale}/results`, label: nav("results") },
                { href: `/${locale}/faq`, label: nav("faq") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("support_col")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm text-warm-400 hover:text-white transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm text-warm-400 hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm text-warm-400 hover:text-white transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-600 text-center sm:text-left">
            {t("legal")}
          </p>
        </div>
      </div>
    </footer>
  );
}
