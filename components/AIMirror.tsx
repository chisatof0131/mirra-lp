import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const items = [
  { en: "face type", jp: "顔タイプ診断" },
  { en: "personal color", jp: "パーソナルカラー診断" },
  { en: "hair sim", jp: "髪型・髪色を試す" },
];

export function AIMirror() {
  return (
    <section id="beauty-ai" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:px-14">
        <div className="order-2 md:order-1">
          <div className="mx-auto w-full max-w-[340px]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[36px] border-[6px] border-cream/10 bg-cream-sub shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src="/screens/beauty-ai.png"
                alt="Beauty AI 画面"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <SectionHeader
            dark
            eyebrow="── 03 / Beauty AI"
            title={
              <>
                <span className="italic">An AI mirror</span>
                <br />
                <span>that knows </span>
                <span className="italic">you.</span>
              </>
            }
            description={
              <>
                数百万のビューティーデータを学習した AI が、 あなたの顔タイプ・パーソナルカラー・似合う髪型を分析。
                <br />
                「なんとなく似合うかも」を、確かな根拠とともに。
              </>
            }
          />

          <ul className="mt-12 flex flex-col gap-3">
            {items.map((it, i) => (
              <li
                key={it.en}
                className="group flex items-center justify-between rounded-2xl border border-cream/10 bg-cream/5 px-6 py-5 transition hover:border-cream/30 hover:bg-cream/10"
              >
                <div>
                  <p className="font-display text-[20px] italic text-cream">{it.jp}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-cream/40">{it.en}</p>
                </div>
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-[12px] text-cream/65 transition group-hover:border-cream/40 group-hover:text-cream"
                >
                  →
                </span>
                <span className="sr-only">step {i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
