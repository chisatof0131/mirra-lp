import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    no: "一.",
    title: "Daily Log",
    body: "朝のスキンケアと夜のメイク。たった30秒の記録で、肌の変化が見える。",
  },
  {
    no: "二.",
    title: "AI Mirror",
    body: "顔タイプ・パーソナルカラー・髪型まで。AIがあなたを多角的に映し出す。",
  },
  {
    no: "三.",
    title: "Beauty Tribe",
    body: "同じ悩み、同じ憧れ。コスメ好きが集まる、上質なコミュニティ。",
  },
];

export function BeautyArchived() {
  return (
    <section id="concept" className="border-b border-line bg-cream py-28 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_1fr] md:px-14">
        <SectionHeader
          eyebrow="── 01 / Concept"
          title={
            <>
              <span className="italic">Beauty,</span>
              <br />
              <span className="italic">archived.</span>
            </>
          }
          description={
            <>
              「今日のわたし」を残せば、明日のわたしがもっと整う。
              <br />
              肌のコンディション、その日のメイク、出会ったコスメ。
              <br />
              すべてが、あなただけの美容アーカイブになる。
            </>
          }
        />

        <ul className="flex flex-col gap-9 pt-2">
          {pillars.map((p) => (
            <li key={p.title} className="grid grid-cols-[48px_1fr] gap-5 border-t border-line pt-7">
              <span className="font-display text-[24px] italic text-ink/40">{p.no}</span>
              <div>
                <h3 className="font-display text-[24px] italic text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.85] text-ink/65">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
