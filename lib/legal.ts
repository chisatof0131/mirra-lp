import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readLegalDoc(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "legal", filename);
  return readFile(filePath, "utf8");
}
