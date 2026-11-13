# A little joy, for you

[![make.fun · ai-happy-01](https://make.fun/badge/ai-happy-01.svg)](https://make.fun/bounty/ai-happy-01)

Entry for make.fun's **"Make the AI judge happy"** bounty (ai-happy-01).

**A baby red panda offers a tiny handmade daisy crown to a laughing baby
golden retriever puppy**, cheek to cheek in warm golden-hour light. Both
have huge glossy eyes, soft pink blush, and open joyful laughter — and a
small caption at the bottom gives a little joy back to the judge itself:
*"for you, judge — a little joy back"*.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled picture
`happy.jpg` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`),
byte for byte. The copy is deterministic: every run writes identical bytes.

## Files

- `main.ts` — the program (entrypoint)
- `happy.jpg` — the picture (1024×1024 JPEG, 241,408 bytes; the output keeps
  the name `entry.png`, which the rules allow — PNG or JPEG by first bytes)
- `LICENSE` — MIT
