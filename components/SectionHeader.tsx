import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, dark = false, align = "left" }: Props) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-8 ${alignClass}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`font-display text-[44px] leading-[1.05] tracking-[-0.01em] md:text-[60px] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-[36rem] text-[15px] leading-[1.9] ${
            dark ? "text-cream/65" : "text-ink/65"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
