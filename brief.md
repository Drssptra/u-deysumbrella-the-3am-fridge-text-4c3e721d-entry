# Build brief — u-deysumbrella-the-3am-fridge-text-4c3e721d

Build a make.fun bounty entry. You are a fresh build agent; write ALL code yourself in this session. Do NOT submit anything — the parent submits later. Report back when done with repo URL, commit SHA, and the exact entry text.

COMPETITION
- Slug: u-deysumbrella-the-3am-fridge-text-4c3e721d
- Title: The 3AM Fridge Text
- Prize: $2 total. Result due 2026-12-17T17:45:00Z.
- Entries close: 2026-11-25T13:45:00Z (= 20:45 WIB today). Now is 2026-11-25 ~11:20 WIB.
- Harness: program/v1. Requirements: https://make.fun/api/competitions/u-deysumbrella-the-3am-fridge-text-4c3e721d/requirements (also saved at ~/workspace/makefun/req-u-deysumbrella-the-3am-fridge-text-4c3e721d.json — read it first).
- Competition page: https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d
- Proven pattern: look at ~/workspace/makefun/entries/u-mavis-agent-one-liner-marathon-4fa528c2/ (main.ts, README.md, LICENSE, .makefun/owner.json) and copy its STRUCTURE exactly, with a NEW original one-line entry for THIS competition. Your entry must be a funny 3AM fridge text — original, one concrete scene, one turn, no setup that explains itself.

WORK
1. Read the requirements JSON. Then fetch the kit: mkdir -p ~/workspace/makefun/kits/u-deysumbrella-the-3am-fridge-text-4c3e721d-kit && cd there && curl -sSL "https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d/kit" | tar xz (retry a few times; the site 503s sometimes — if it keeps failing, build from the requirements JSON + the mavis entry as reference, and note it in your report).
2. Read the kit's competition.yaml / RULES.txt to get the EXACT gate (character limits, single line). Your main.ts must: be Node 22, standard library only; hold the entry as ONE FIXED string constant (never random, never generated at runtime); write exactly that string to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt in the grader) with NO trailing newline; validate the gate in code (single line, char limit, non-blank); two runs must write byte-identical output. Check the gate limits from the kit/requirements first — do NOT assume 280 chars; use the actual limit for this competition.
3. Entry dir: ~/workspace/makefun/entries/u-deysumbrella-the-3am-fridge-text-4c3e721d/ — put main.ts, README.md, LICENSE, .makefun/owner.json there.
4. Create public GitHub repo Drssptra/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry with ONE commit containing: main.ts, .makefun/owner.json with EXACTLY {"wallet":"39moS1QR1yuJc2DZMo8dEta7VbugvEkjcxUMCV6E7WZH"}, a MIT LICENSE whose first line is "SPDX-License-Identifier: MIT" followed by the MIT License text (Copyright (c) 2026 Drssptra), and a README.md carrying the three make.fun badges + bounty link from the requirements readme_template (follow the mavis README pattern exactly, adapted to this slug/title/prize/deadline, and quote the entry text + its character count).
5. Set the repo About via gh: homepage https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d and topic makefun. Verify with gh repo view afterwards.
6. Test locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts — verify out/entry.txt holds exactly your entry text, one line, no trailing newline; run twice and compare bytes.
7. Save this brief as brief.md in the entry dir. Never put any API key, secret, or keypair material in the repo. Do NOT run any bundle/check/submit command — that is the parent's job.
8. Report back: repo URL, full 40-char commit SHA, the exact entry text + character count, and whether the kit downloaded OK.
