import { HeroHome } from "@/src/components/hero/hero-home";
import { EntryPoints } from "@/src/components/sections/entry-points";
import { Solution } from "@/src/components/sections/solution";
import { Expert } from "@/src/components/sections/expert";
import { Testimonials } from "@/src/components/sections/testimonials";
import { ProductLine } from "@/src/components/sections/product-line";
import { FaqSection } from "@/src/components/sections/faq-section";
import { FomoBlock } from "@/src/components/fomo/fomo-block";
import { FinalCta } from "@/src/components/sections/final-cta";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { MobileBottomBar } from "@/src/components/layout/mobile-bottom-bar";
import { SocialProofToast } from "@/src/components/fomo/social-proof-toast";
import { ExitPopup } from "@/src/components/fomo/exit-popup";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroHome />
        <EntryPoints />
        <Solution />
        <Expert />
        <Testimonials />
        <ProductLine />
        <FaqSection />
        <FomoBlock />
        <FinalCta />
      </main>
      <Footer />
      <MobileBottomBar />
      <SocialProofToast />
      <ExitPopup />
    </>
  );
}
