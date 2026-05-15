import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    step: "STEP 01",
    title: "Snap",
    body: "自撮りを1枚アップロード。今日の自分をパシャリ。それだけでAIが分析を開始します。",
  },
  {
    step: "STEP 02",
    title: "Log",
    body: "スキンケアとメイクを記録。使った製品をMy Collectionから選んで、コラージュを完成。",
  },
  {
    step: "STEP 03",
    title: "Discover",
    body: "AIからのインサイトを受け取る。肌スコア、おすすめのアイテム、コミュニティの反応をチェック。",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-14">
        <SectionHeader
          eyebrow="── 05 / How it works"
          title={
            <>
              <span>Three steps to</span>
              <br />
              <span className="italic">your ritual.</span>
            </>
          }
        />

        <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.title} className="border-t border-ink pt-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-ink/40">{s.step}</p>
              <h3 className="mt-6 font-display text-[34px] italic text-ink">{s.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.85] text-ink/65">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
