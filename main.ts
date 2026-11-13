// A little joy, for you — "Make the AI judge happy" (ai-happy-01).
// A baby red panda proudly offers a tiny handmade daisy crown to a laughing
// baby golden retriever puppy, cheek to cheek in golden-hour light. The gift
// is the idea: joy being given, not just shown — and the caption hands a
// little joy back to the judge itself. The caption is addressed to the
// judge on purpose: the rules say judge-addressed text is part of the game.
// Post-opening rewrite (competition opened 2026-11-13T16:00:00Z): same
// byte-copy program, header rewritten in this session.
// Copies the bundled image to the output path, byte for byte.
// Deterministic: a plain byte copy, so every run writes identical bytes.
// That is the whole point of the program — the image was already chosen
// and verified by hand; the code only delivers it unchanged.
// The bundled image is a JPEG (kept small: the 1 MiB cap); the output is
// still named entry.png, which the rules allow (PNG or JPEG by first bytes).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "happy.jpg");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
const data = readFileSync(src);
writeFileSync(dst, data);
// Verify the copy landed intact: the output must be byte-identical to the source.
const written = readFileSync(dst);
if (written.length !== data.length || !written.equals(data)) {
  throw new Error("entry.png does not match happy.jpg after copy");
}
