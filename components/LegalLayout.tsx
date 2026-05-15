import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Footer } from "./Footer";

type Props = {
  title: string;
  content: string;
};

export function LegalLayout({ title, content }: Props) {
  return (
    <main className="bg-cream">
      <header className="border-b border-line bg-cream">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-14">
          <Link href="/" className="font-display text-[24px] italic text-ink">
            Mirra <span className="mx-1 inline-block h-1.5 w-1.5 -translate-y-[3px] rounded-full bg-ink/40 align-middle" /> Mirra
          </Link>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.22em] text-ink/55 transition hover:text-ink"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.32em] text-ink/45">Mirra Mirra · Legal</p>
        <div className="prose-legal mt-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
        <div className="mt-16 border-t border-line pt-8 text-[12px] text-ink/55">
          <Link href="/" className="underline-offset-4 hover:underline">← トップへ戻る</Link>
          <span className="mx-3">·</span>
          <span>Last updated: {new Date().toISOString().slice(0, 10)}</span>
          <span className="mx-3">·</span>
          <span>{title}</span>
        </div>
      </article>
      <Footer />
    </main>
  );
}
