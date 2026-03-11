import { useTranslations } from "next-intl";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { Testimonials } from "@/src/components/sections/testimonials";

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <div className="text-center py-12 bg-warm-50">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950">Результаты</h1>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
