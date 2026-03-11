import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950 mb-8">Политика конфиденциальности</h1>
          <div className="bg-white rounded-3xl p-8 border border-warm-200/40 shadow-sm space-y-6 text-warm-700 leading-relaxed">
            <p>Настоящая политика конфиденциальности распространяется на сайт muzikanataly.com и описывает, как мы собираем, используем и защищаем ваши данные.</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-950">Сбор данных</h2>
            <p>Мы собираем только те данные, которые вы предоставляете добровольно при регистрации, прохождении теста или оплате программы: имя, email, платёжная информация.</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-950">Использование данных</h2>
            <p>Данные используются исключительно для предоставления доступа к программе, отправки образовательных материалов и поддержки участников. Мы не передаём данные третьим лицам.</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-950">Ваши права</h2>
            <p>Вы можете в любой момент запросить удаление своих данных, написав на почту или в социальных сетях.</p>
            <p className="text-sm text-warm-500">© 2026 Наталья Музыка. Для саморазвития и образовательных целей.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
