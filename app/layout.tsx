import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirra-mirra.app"),
  title: {
    default: "Mirra Mirra — AIで叶える、わたしだけの美容ログ",
    template: "%s | Mirra Mirra",
  },
  description:
    "毎日の肌・メイク・コスメを、AIが静かに見守る。鏡に映るあなただけの美しさを、ログ・分析・コミュニティでもっと深く。",
  openGraph: {
    title: "Mirra Mirra — AIで叶える、わたしだけの美容ログ",
    description:
      "毎日の肌・メイク・コスメを、AIが静かに見守る。鏡に映るあなただけの美しさを、ログ・分析・コミュニティでもっと深く。",
    type: "website",
    locale: "ja_JP",
    siteName: "Mirra Mirra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirra Mirra",
    description: "AIで叶える、わたしだけの美容ログ。",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable} ${notoJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
