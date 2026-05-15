import { SectionHeader } from "./SectionHeader";

const voices = [
  {
    body: "毎朝の肌スコアを見るのが習慣に。3ヶ月で確実に肌質が変わってきました。",
    initial: "M",
    handle: "@miyu_cos",
    meta: "22 / 大学生",
    variant: "dark" as const,
  },
  {
    body: "パーソナルカラー診断で、無駄なコスメ買いが減った。コレクション機能も最高。",
    initial: "S",
    handle: "@shiori.b",
    meta: "27 / OL",
    variant: "light" as const,
  },
  {
    body: "メイクログがアルバムみたいで楽しい。コミュニティで反応もらえるのが嬉しい。",
    initial: "N",
    handle: "@nana_makeup",
    meta: "30 / メイク好き",
    variant: "light" as const,
  },
];

export function Voices() {
  return (
    <section id="voices" className="bg-cream pb-28 pt-16 md:pb-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-14">
        <SectionHeader
          eyebrow="── 06 / Voices"
          title={
            <>
              <span>Loved by the</span>
              <br />
              <span className="italic">curious.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {voices.map((v) => (
            <article
              key={v.handle}
              className={`flex h-full flex-col justify-between gap-8 rounded-[20px] p-8 ${
                v.variant === "dark"
                  ? "bg-ink text-cream"
                  : "bg-cream border border-line text-ink"
              }`}
            >
              <p
                className={`text-[15px] leading-[1.85] ${
                  v.variant === "dark" ? "text-cream/85" : "text-ink/75"
                }`}
              >
                “{v.body}”
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display italic ${
                    v.variant === "dark"
                      ? "bg-cream/10 text-cream"
                      : "bg-ink/5 text-ink"
                  }`}
                >
                  {v.initial}
                </div>
                <div>
                  <p
                    className={`text-[13px] ${
                      v.variant === "dark" ? "text-cream/85" : "text-ink"
                    }`}
                  >
                    {v.handle}
                  </p>
                  <p
                    className={`text-[11px] ${
                      v.variant === "dark" ? "text-cream/45" : "text-ink/45"
                    }`}
                  >
                    {v.meta}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
