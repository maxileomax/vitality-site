import { useTranslations } from "next-intl";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { User, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("expert");
  const credentials = t.raw("credentials") as string[];
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-32 h-32 rounded-full bg-warm-200/60 flex items-center justify-center mx-auto mb-6">
              <User size={48} className="text-warm-400" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950 mb-2">{t("title")}</h1>
            <p className="text-accent font-medium">{t("subtitle")}</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-warm-200/40 shadow-sm mb-8">
            <p className="text-warm-700 text-lg leading-relaxed mb-6">{t("bio")}</p>
            <blockquote className="border-l-2 border-accent/40 pl-5 italic text-warm-600">
              &quot;{t("story")}&quot;
            </blockquote>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-warm-200/40 shadow-sm">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-950 mb-5">Квалификации</h2>
            <ul className="space-y-3">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span className="text-warm-700">{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
