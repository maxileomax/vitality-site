import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { FaqSection } from "@/src/components/sections/faq-section";

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
