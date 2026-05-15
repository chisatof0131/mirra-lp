export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] ${
        dark ? "text-cream/60" : "text-ink/55"
      }`}
    >
      <span aria-hidden className={`block h-px w-8 ${dark ? "bg-cream/30" : "bg-ink/30"}`} />
      {children}
    </div>
  );
}
