import Link from "next/link";

const navItems = [
  { href: "#concept", label: "Concept" },
  { href: "#features", label: "Features" },
  { href: "#beauty-ai", label: "Beauty AI" },
  { href: "#voices", label: "Voices" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-14">
        <Link href="/" className="font-display text-[26px] italic leading-none tracking-tight text-ink">
          <span>Mirra</span>
          <span className="mx-2 inline-block h-1.5 w-1.5 translate-y-[-4px] rounded-full bg-ink/40 align-middle" />
          <span>Mirra</span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] tracking-[0.08em] uppercase text-ink/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/70 px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-ink backdrop-blur transition hover:bg-ink hover:text-cream"
        >
          Get App
          <span aria-hidden="true" className="text-[10px] transition group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
