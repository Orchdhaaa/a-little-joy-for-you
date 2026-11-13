// "A little joy, for you" — entry for make.fun ai-happy-01.
// The picture does the work: a baby red panda hands a handmade daisy crown
// to a laughing golden retriever puppy, and a caption at the bottom hands a
// little joy back to the judge. This program only carries that picture to
// the output path, byte for byte, so what the judge sees is exactly the
// image that was picked and checked by hand.
// The copy is deterministic by construction: no randomness, no time, no
// network, just a read followed by a write, then a check that the written
// bytes match the source.
// The bundled image is a JPEG, kept under the 1 MiB cap, and the output is
// still called entry.png: the rules accept PNG or JPEG by first bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const source = join(dir, "happy.jpg");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(targetDir, "entry.png");

mkdirSync(targetDir, { recursive: true });
const bytes = readFileSync(source);
writeFileSync(target, bytes);
const back = readFileSync(target);
if (back.length !== bytes.length || !back.equals(bytes)) {
  throw new Error("output is not byte-identical to happy.jpg");
}
