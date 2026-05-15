import { Eyebrow } from "./Eyebrow";

export function DownloadCTA() {
  return (
    <section id="download" className="relative isolate overflow-hidden bg-ink py-28 text-cream md:py-40">
      <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-accent/12 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-cream/5 blur-3xl" aria-hidden />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-6 text-center md:px-14">
        <Eyebrow dark>── 07 / Download</Eyebrow>

        <h2 className="mt-10 font-display text-[60px] leading-[1.02] tracking-[-0.01em] text-cream md:text-[96px]">
          <span>Become </span>
          <span>your</span>
          <br />
          <span className="italic text-accent">most beautiful</span>
          <br />
          <span className="italic">self.</span>
        </h2>

        <p className="mt-10 max-w-[36rem] text-[15px] leading-[1.9] text-cream/65">
          今日から、あなたの美容習慣を変える。
          <br />
          Mirra Mirra は、iPhone でご利用いただけます。
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-[13px] tracking-[0.1em] text-ink transition hover:bg-cream/90"
          >
            <AppleGlyph />
            App Store
          </a>
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
