import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One line of software error copy: names the real failure (the database
// is down), tells the user what happened to their data and what to do
// next, and lands the joke in a single read. Kept well under 200 chars.
const LINE =
  "The database is down — your data isn't lost, it's just unreachable, like us at 3 a.m. Try again in a few minutes.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE + "\n", "utf8");
try {
  chmodSync(outPath, 0o644);
} catch {
  // Permissions are best-effort only; the file is already written.
}
