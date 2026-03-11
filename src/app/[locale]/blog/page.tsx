import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950 mb-4">Блог</h1>
          <p className="text-warm-500 text-lg">Статьи в разработке. Скоро здесь появятся полезные материалы.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
