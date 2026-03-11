import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { Instagram, Send, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-warm-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-warm-950 mb-4">Связаться</h1>
          <p className="text-warm-600 mb-10">Пишите в личные сообщения в социальных сетях</p>
          <div className="space-y-4">
            {[
              { icon: Instagram, label: "Instagram", href: "https://instagram.com/muzika_nataly", handle: "@muzika_nataly" },
              { icon: Send, label: "Telegram", href: "https://t.me/muzika_nataly", handle: "@muzika_nataly" },
              { icon: Youtube, label: "YouTube", href: "https://youtube.com/@muzika_nataly", handle: "Наталья Музыка" },
            ].map(({ icon: Icon, label, href, handle }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-warm-200/40 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background:"linear-gradient(135deg,rgba(139,26,74,0.12),rgba(196,86,106,0.12))"}}>
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-warm-950">{label}</div>
                  <div className="text-warm-500 text-sm">{handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
