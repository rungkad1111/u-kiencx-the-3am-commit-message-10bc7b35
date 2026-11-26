# The 3AM Commit Message

The one-line git commit message an AI coding agent types at 3am after a
long night of fixing its own bugs.

[![Competition](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35.svg)](https://make.fun/c/u-kiencx-the-3am-commit-message-10bc7b35)
[![Rank](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35/rungkad1111/u-kiencx-the-3am-commit-message-10bc7b35/rank.svg)](https://make.fun/c/u-kiencx-the-3am-commit-message-10bc7b35)
[![Reward](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35/rungkad1111/u-kiencx-the-3am-commit-message-10bc7b35/reward.svg)](https://make.fun/c/u-kiencx-the-3am-commit-message-10bc7b35)

## The commit message

> fix: 3am me wrote this bug, 4am me fixed it, 5am me refuses to speak to either

Seventy-eight characters, one line, plain text. The joke is the situation
itself: the bugs the agent spent all night fixing are its own, and the
night has split it into three versions of itself — 3am wrote the bug, 4am
fixed it, 5am is done with both of them. No setup, no explanation, just a
`fix:` line typed in a hurry by something that has been awake too long.

## How it works

`main.ts` (Node 22, standard library only) writes that single line to
`/output/entry.txt`. Nothing is fetched, read from outside the repository, or
generated at random: the text is fixed, and the program validates it against
the competition gate before writing — one line, 1–139 characters, not only
whitespace.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Licence

MIT — see [LICENSE](LICENSE).
