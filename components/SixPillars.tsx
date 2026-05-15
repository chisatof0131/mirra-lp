import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    no: "01",
    title: "Skin Condition Score",
    body: "毎日のスコアで、肌の変化が手に取るように。\n自撮りをアップするだけ。AIが肌の状態を100点満点で分析し、12日連続で続けるとあなたの肌の傾向が見えてきます。",
    variant: "dark" as const,
    icon: "/icons/icon-skin.png",
    badge: "Skin Condition",
  },
  {
    no: "02",
    title: "Makeup Log",
    body: "今日のメイクを、コラージュで残す。\n使ったコスメと仕上がりを記録。4ステップで完成。",
    variant: "media" as const,
    icon: "/icons/icon-makeup.png",
    media: "/screens/memory.png",
  },
  {
    no: "03",
    title: "Morning Routine",
    body: "朝のスキンケアもワンタップで。\n毎朝のお手入れを習慣化する、優しい記録機能。",
    variant: "light" as const,
    icon: "/icons/icon-morning.png",
  },
  {
    no: "04",
    title: "Beauty AI",
    body: "顔タイプ・パーソナルカラー診断。\nあなたに似合う色と形を、AIが見つけます。",
    variant: "light" as const,
    icon: "/icons/icon-ai.png",
  },
  {
    no: "05",
    title: "My Collection",
    body: "お気に入りコスメを、美術館のように。\n持っているコスメを登録して整理整頓。",
    variant: "light" as const,
    icon: "/icons/icon-collection.png",
  },
  {
    no: "06",
    title: "Community",
    body: "同じ美意識を持つ仲間とつながる。\nトレンドの投稿をフィードでチェック。",
    variant: "accent" as const,
    icon: "/icons/icon-community.png",
  },
];

export function SixPillars() {
  return (
    <section id="features" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-14">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.9fr_0.4fr] md:items-end">
          <SectionHeader
            eyebrow="── 02 / Features"
            title={
              <>
                <span>Six pillars of</span>
                <br />
                <span className="italic">your beauty.</span>
              </>
            }
          />
          <p className="text-[14px] leading-[1.85] text-ink/55">
            記録・分析・診断・収集・記憶・共有。
            <br />
            あなたの美容ライフを支える 6 つの機能で、
            <br />
            毎日が静かに変わっていく。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {pillars.map((p) => (
            <PillarCard key={p.no} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

type PillarCardProps = (typeof pillars)[number];

function PillarCard(p: PillarCardProps) {
  const base = "relative flex h-full flex-col gap-4 overflow-hidden rounded-[20px] p-7 transition";
  if (p.variant === "dark") {
    return (
      <article className={`${base} bg-ink text-cream md:col-span-1 md:row-span-1 md:p-9 min-h-[360px]`}>
        <Header no={p.no} dark />
        <h3 className="font-display text-[34px] italic leading-tight text-cream">Skin Condition</h3>
        <p className="text-[13px] leading-[1.85] text-cream/65">{p.body}</p>
        <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-cream/45">
          <span>Daily Score</span>
          <span aria-hidden>→</span>
        </div>
      </article>
    );
  }
  if (p.variant === "media") {
    return (
      <article className={`${base} bg-cream-sub min-h-[360px]`}>
        <Header no={p.no} />
        <div className="relative -mx-3 -mt-3 mb-2 aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
          {p.media && (
            <Image src={p.media} alt={p.title} fill className="object-cover" />
          )}
        </div>
        <h3 className="font-display text-[22px] italic text-ink">{p.title}</h3>
        <p className="text-[13px] leading-[1.85] text-ink/65 whitespace-pre-line">{p.body}</p>
      </article>
    );
  }
  if (p.variant === "accent") {
    return (
      <article className={`${base} bg-[#f3e8e8] min-h-[260px]`}>
        <Header no={p.no} />
        <h3 className="font-display text-[22px] italic text-ink mt-auto">{p.title}</h3>
        <p className="text-[13px] leading-[1.85] text-ink/65 whitespace-pre-line">{p.body}</p>
      </article>
    );
  }
  return (
    <article className={`${base} bg-cream border border-line min-h-[260px]`}>
      <Header no={p.no} />
      <h3 className="font-display text-[22px] italic text-ink mt-auto">{p.title}</h3>
      <p className="text-[13px] leading-[1.85] text-ink/65 whitespace-pre-line">{p.body}</p>
    </article>
  );
}

function Header({ no, dark = false }: { no: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between text-[11px] uppercase tracking-[0.22em] ${
        dark ? "text-cream/45" : "text-ink/40"
      }`}
    >
      <span>{no}</span>
      <span aria-hidden>→</span>
    </div>
  );
}
