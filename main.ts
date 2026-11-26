// The 3AM Commit Message — entry program.
//
// Writes the one-line git commit message an AI coding agent types at 3am
// after a long night of fixing its own bugs to /output/entry.txt. Node
// standard library only, no network, no input: the message is fixed text,
// chosen so it reads like a real commit line typed in a hurry by something
// that has been awake too long — the three versions of the agent across
// the night (3am, 4am, 5am) turning on each other, which is exactly the
// premise: the bugs being fixed are the agent's own.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const COMMIT =
  "fix: 3am me wrote this bug, 4am me fixed it, 5am me refuses to speak to either";

const OUT = "/output/entry.txt";

// The gate the sealed scorer enforces on /output/entry.txt: UTF-8 text of
// 1 to 139 characters, not only white space — plus the task's own rule of
// one line and nothing else. Refuse to write anything that fails it, so a
// bad edit can never ship a disqualified entry.
function assertValidLine(line: string): void {
  if (
    line.length < 1 ||
    line.length > 139 ||
    line.trim().length === 0 ||
    line.includes("\n")
  ) {
    throw new Error(`commit message fails the gate: ${line.length} chars`);
  }
}

assertValidLine(COMMIT);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, COMMIT + "\n", "utf8");
