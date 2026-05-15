import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const screens = [
  { src: "/screens/home-screen.png", label: "Home", alt: "Home" },
  { src: "/screens/memory.png", label: "Memory", alt: "Memory" },
  { src: "/screens/community.png", label: "Community", alt: "Community" },
];

export function PeekInside() {
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-14">
        <SectionHeader
          eyebrow="── 04 / Glimpse"
          title={
            <>
              <span>A peek inside</span>
              <br />
              <span className="italic">Mirra Mirra.</span>
            </>
          }
        />
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {screens.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-5">
              <div
                className="relative aspect-[9/19.5] w-full max-w-[280px] overflow-hidden rounded-[40px] border-[6px] border-ink bg-ink shadow-[0_30px_70px_-30px_rgba(10,10,10,0.45)]"
                style={{ transform: i === 1 ? "translateY(24px)" : undefined }}
              >
                <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
                <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-cream">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" />
                </div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-ink/55">— {s.label} —</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
