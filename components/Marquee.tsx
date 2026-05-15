const items = [
  "Skin Log",
  "Makeup Log",
  "Personal Color",
  "Face Type",
  "Hair Sim",
  "My Collection",
  "Community",
  "AI Analysis",
  "Memory Album",
  "Daily Score",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-cream py-7">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-12">
            <span className="font-display text-[30px] italic text-ink/85 md:text-[34px]">{label}</span>
            <span aria-hidden className="block h-1.5 w-1.5 rounded-full bg-accent/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
