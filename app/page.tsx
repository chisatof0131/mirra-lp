import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { BeautyArchived } from "@/components/BeautyArchived";
import { SixPillars } from "@/components/SixPillars";
import { AIMirror } from "@/components/AIMirror";
import { PeekInside } from "@/components/PeekInside";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Voices } from "@/components/Voices";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Marquee />
      <BeautyArchived />
      <SixPillars />
      <AIMirror />
      <PeekInside />
      <Stats />
      <HowItWorks />
      <Voices />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
