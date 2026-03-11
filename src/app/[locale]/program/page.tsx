import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import Link from "next/link";

export default function ProgramPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950 mb-4">Программа</h1>
          <p className="text-warm-600 text-lg mb-10">8-недельная трансформационная программа «Женщина, которая чувствует»</p>
          <div className="bg-white rounded-3xl p-10 border border-warm-200/40 shadow-sm text-left mb-8">
            <div className="text-4xl font-bold mb-2" style={{color:"#8B1A4A"}}>$497</div>
            <p className="text-warm-600 mb-6">Полный доступ на 8 недель</p>
            <ul className="space-y-3 mb-8">
              {["Видео-уроки","Практики","Поддержка куратора","Закрытое сообщество","Гарантия результата"].map((f,i) => (
                <li key={i} className="flex items-center gap-2 text-warm-700">
                  <span className="text-accent">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="." className="block text-center py-4 rounded-full text-white font-semibold" style={{background:"linear-gradient(135deg,#8B1A4A,#C4566A)"}}>
              Присоединиться
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
