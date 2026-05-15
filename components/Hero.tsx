import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div className="mx-auto grid min-h-[760px] max-w-[1400px] grid-cols-1 items-center gap-14 px-6 pt-32 pb-20 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:px-14 md:pt-40 md:pb-32">
        <div className="relative">
          <Eyebrow>Beauty Log · AI Diagnosis</Eyebrow>

          <h1 className="mt-10 font-display text-[64px] leading-[1.02] tracking-[-0.02em] text-ink md:text-[88px] lg:text-[104px]">
            <span className="italic">mirror,</span>
            <br />
            <span>on my </span>
            <span className="italic text-accent">skin.</span>
          </h1>

          <p className="mt-9 max-w-[34rem] text-[15px] leading-[1.9] text-ink/70 md:text-[16px]">
            毎日の肌・メイク・コスメを、AIが静かに見守る。
            <br />
            鏡に映るあなただけの美しさを、
            <br />
            ログ・分析・コミュニティで、もっと深く。
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#download"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-5 text-[14px] tracking-[0.12em] text-cream transition hover:bg-ink/85"
            >
              <AppleGlyph />
              App Storeでダウンロード
              <span aria-hidden className="text-[12px] transition group-hover:translate-x-0.5">→</span>
            </a>
            <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink/45">
              <span className="block h-1.5 w-1.5 rounded-full bg-accent" />
              now in open beta
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center">
          <div className="absolute -left-10 -top-6 h-40 w-40 rounded-full bg-cream-sub blur-2xl opacity-80" aria-hidden />
          <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-accent/15 blur-3xl" aria-hidden />

          <div className="relative z-10 w-full">
            <PhoneFrame>
              <Image
                src="/screens/home-screen.png"
                alt="Mirra Mirra のホーム画面"
                width={420}
                height={910}
                priority
                className="block h-full w-full object-cover"
              />
            </PhoneFrame>

            <div className="absolute -left-16 top-[42%] hidden w-44 -translate-y-1/2 rounded-2xl border border-line/80 bg-cream px-5 py-4 shadow-[0_20px_60px_-30px_rgba(10,10,10,0.25)] md:block">
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink/45">—— Skin Score</p>
              <p className="mt-1 font-display text-[34px] leading-none text-ink">85</p>
              <p className="mt-1 text-[11px] text-ink/55">↑ 5pt this week</p>
            </div>

            <div className="absolute -right-8 top-[18%] hidden w-52 rounded-2xl bg-ink px-5 py-4 text-cream shadow-[0_22px_60px_-25px_rgba(10,10,10,0.55)] md:block">
              <p className="text-[10px] uppercase tracking-[0.32em] text-cream/55">AI Analysis</p>
              <p className="mt-2 text-[13px] leading-relaxed text-cream/95">今日も一緒にケアしよ〜♡</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
      <path d="M16.365 1.43c0 1.14-.46 2.246-1.21 3.027-.81.85-2.14 1.51-3.24 1.42-.13-1.1.41-2.27 1.18-3.02.85-.85 2.27-1.5 3.27-1.43zM20.5 17.27c-.59 1.36-.87 1.97-1.63 3.17-1.06 1.66-2.56 3.74-4.42 3.76-1.65.02-2.07-1.08-4.31-1.07-2.24.01-2.71 1.09-4.36 1.07-1.86-.02-3.28-1.9-4.34-3.56C-.92 16.5-.4 10.92 2.74 8.6c1.34-.99 2.95-1.54 4.46-1.54 1.62 0 2.64 1.05 3.98 1.05 1.3 0 2.1-1.05 3.98-1.05 1.35 0 2.78.74 3.8 2-3.34 1.83-2.8 6.6.54 8.21z" />
    </svg>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[360px] overflow-hidden rounded-[44px] border-[6px] border-ink bg-ink shadow-[0_40px_80px_-30px_rgba(10,10,10,0.5)]">
      <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-cream">{children}</div>
    </div>
  );
}
