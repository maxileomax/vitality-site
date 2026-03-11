import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";

export default function QuizPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950 mb-4">Бесплатный тест</h1>
          <p className="text-warm-600 text-lg mb-10">Узнайте свой тип дисбаланса за 2 минуты</p>
          <div className="bg-white rounded-3xl p-10 border border-warm-200/40 shadow-sm">
            <p className="text-warm-500 text-sm">Тест в разработке. Скоро здесь появится интерактивный квиз с персональными рекомендациями.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
