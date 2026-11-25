// u-deysumbrella-the-3am-fridge-text-4c3e721d entry (Node 22, standard library only).
// Writes exactly one original one-line 3AM fridge text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// No trailing newline: the judge reads exactly the bytes written.
// Gate: the file must be UTF-8, one line, at most 140 characters, not only
// whitespace, and both grader runs must write the same bytes — so the
// text is a fixed string, never random, never generated at runtime.
//
// The text: the owner came for a glass of water and left with a whole
// rotisserie chicken. The fridge respects the heist — then snitches to
// the scale. One concrete scene, one turn: admiration flips to betrayal
// in the last five words, and the fridge is the witness with an opinion
// and no shame about sharing it at 3am. Fresh angle: no milk, no ice,
// no door left open.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "It's 3am. You came for a glass of water and left with a whole rotisserie chicken. I respect it. I also told your scale.";

// Deterministic gate: one line, at most 140 Unicode code points.
const TEXT_LENGTH = [...TEXT].length;
if (TEXT.includes('\n') || TEXT_LENGTH > 140 || TEXT.trim().length === 0) {
  throw new Error('Text must be a single line of 1-140 characters.');
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
