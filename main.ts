// u-deysumbrella-the-3am-fridge-text-4c3e721d entry (Node 22, standard library only).
// Writes exactly one original one-line 3AM fridge text to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt outside the grader).
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

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_LENGTH = 140;
const OUTPUT_FILENAME = 'entry.txt';

/**
 * The fixed entry text. One string constant — never random, never
 * generated at runtime — so both grader runs write identical bytes.
 */
function entryText(): string {
  return "It's 3am. You came for a glass of water and left with a whole rotisserie chicken. I respect it. I also told your scale.";
}

/**
 * Validate the competition gate in code before writing anything:
 * 1–140 Unicode code points, a single line, UTF-8, not only whitespace.
 * Throws on any violation so a bad entry can never reach the file.
 */
function validateGate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_LENGTH) {
    throw new Error(`Text must be 1-${MAX_LENGTH} characters, got ${length}.`);
  }
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error('Text must be a single line.');
  }
  if (text.trim().length === 0) {
    throw new Error('Text must not be only whitespace.');
  }
  // UTF-8 round-trip: the bytes written must decode back to this string,
  // and the string must contain no lone surrogates or control characters.
  const encoded = Buffer.from(text, 'utf8');
  if (encoded.toString('utf8') !== text) {
    throw new Error('Text must be valid UTF-8.');
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 && ch !== '\t') {
      throw new Error('Text must not contain control characters.');
    }
  }
}

/**
 * Resolve the output directory: $MAKEFUN_OUTPUT_DIR when set to a
 * non-empty value, /output otherwise. A blank env value is treated
 * as unset rather than as a broken relative path.
 */
function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return dir ? dir : '/output';
}

/**
 * Write the validated entry text to <dir>/entry.txt with no trailing
 * newline, creating the directory if needed, then read the file back
 * and verify the bytes on disk are exactly the entry text.
 */
function writeEntryFile(dir: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  const target = join(dir, OUTPUT_FILENAME);
  writeFileSync(target, text, 'utf8');
  const written = readFileSync(target, 'utf8');
  if (written !== text) {
    throw new Error('Written entry.txt does not match the entry text.');
  }
}

const text = entryText();
validateGate(text);
writeEntryFile(outputDir(), text);
