import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The bug was in the code I wrote at 2 a.m. The code I wrote at 2 a.m. was approved by me at 2 a.m., so the review process worked perfectly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Gate: one line, 1-200 characters, not only whitespace.
const lines = entry.split("\n");
if (lines.length !== 1 || entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry fails the gate: ${entry.length} chars, ${lines.length} line(s)`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
