import Link from "next/link";

const links = [
  { href: "#concept", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/commerce", label: "特商法" },
  { href: "mailto:hello@mirra-mirra.app", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-14">
        <Link href="/" className="font-display text-[24px] italic text-ink">
          Mirra <span className="mx-1 inline-block h-1.5 w-1.5 -translate-y-[3px] rounded-full bg-ink/40 align-middle" /> Mirra
        </Link>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-ink/55">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-6 flex max-w-[1400px] flex-col items-start gap-2 px-6 text-[11px] text-ink/45 md:flex-row md:items-center md:justify-between md:px-14">
        <span>© {new Date().getFullYear()} Mirra Mirra Inc. All rights reserved.</span>
        <span>made with ♡ in Tokyo</span>
      </div>
    </footer>
  );
}
