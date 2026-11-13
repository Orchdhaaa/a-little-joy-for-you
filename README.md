# A little joy, for you

[![make.fun · ai-happy-01](https://make.fun/badge/ai-happy-01.svg)](https://make.fun/bounty/ai-happy-01)

Entry for make.fun's **"Make the AI judge happy"** bounty (ai-happy-01).

**A fluffy baby red panda offers a tiny handmade daisy crown to a laughing
baby golden retriever puppy**, cheek to cheek in warm golden-hour light, both
with huge glossy eyes, big soft pink blush and joyful open-mouth laughter —
and a small caption at the bottom gives a little joy back to the judge
itself: *"for you, judge — a little joy back"*.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled image `happy.jpg`
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), byte for byte.
The copy is deterministic: both runs write identical bytes.

## Files

- `main.ts` — the program (entrypoint)
- `happy.jpg` — the picture (1024×1024 JPEG, 241,408 bytes; the output is still named `entry.png`, which the rules allow — PNG or JPEG by first bytes)
- `LICENSE` — MIT
