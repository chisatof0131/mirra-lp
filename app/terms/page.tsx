import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { readLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Mirra Mirra の利用規約。",
};

export default async function TermsPage() {
  const content = await readLegalDoc("terms-of-service.md");
  return <LegalLayout title="利用規約" content={content} />;
}
