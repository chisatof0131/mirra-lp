const stats = [
  { value: "120K+", label: "Daily Users", jp: "毎日の記録者" },
  { value: "3.2M", label: "Beauty Logs", jp: "累積ログ数" },
  { value: "98%", label: "Retention", jp: "継続率" },
  { value: "4.9★", label: "App Rating", jp: "平均評価" },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-cream-sub py-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:px-14">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2 text-center">
            <p className="font-display text-[48px] italic leading-none text-ink md:text-[56px]">{s.value}</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-ink/55">{s.label}</p>
            <p className="text-[12px] text-ink/55">{s.jp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
