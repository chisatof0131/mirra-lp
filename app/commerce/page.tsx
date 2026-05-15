import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { readLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "Mirra Mirra の特定商取引法に基づく表記。",
};

export default async function CommercePage() {
  const content = await readLegalDoc("specified-commercial-transactions.md");
  return <LegalLayout title="特定商取引法に基づく表記" content={content} />;
}
