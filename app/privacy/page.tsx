import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { readLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Mirra Mirra のプライバシーポリシー。",
};

export default async function PrivacyPage() {
  const content = await readLegalDoc("privacy-policy.md");
  return <LegalLayout title="プライバシーポリシー" content={content} />;
}
