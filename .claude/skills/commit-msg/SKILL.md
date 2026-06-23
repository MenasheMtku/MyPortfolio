---
name: commit-msg
description: Analyzes repository changes, generates a clean Conventional Commits message, and commits them.
disable-model-invocation: true
---

# /commit-msg

When the user runs `/commit-msg`, analyze the repository's changes, write a
Conventional Commits message, and create the commit. Follow these steps exactly.

## 1. Inspect the working tree

Run `git status` to see what has changed and what is staged.

## 2. Decide what to commit

Based on the status:

- **Repo is clean** (nothing modified, nothing staged): tell the user there is
  nothing to commit and stop. Do not create an empty commit.
- **Files are modified but nothing is staged**: ask the user whether you should
  run `git add .` first. Only run it after they confirm. If they decline, stop.
- **Changes are already staged**: continue to the next step.

## 3. Understand the changes

Read the actual modifications before writing a message:

- Use `git diff --staged` to review staged changes.
- Use `git diff` to review unstaged changes when relevant.

Base the message on what the diff actually does — do not guess from filenames.

## 4. Draft the commit message

Write a message in the [Conventional Commits](https://www.conventionalcommits.org)
format:

```
<type>(<optional scope>): <description>
```

- Choose an accurate `type`: `feat`, `fix`, `chore`, `refactor`, `docs`,
  `style`, `test`, `perf`, `build`, or `ci`.
- Write the description in the **present tense** (e.g. "add", not "added").
- Keep the **header under 72 characters**.
- Add a body (after a blank line) only when the change needs more explanation.

## 5. Commit and report

Run the commit with `git commit -m` (use multiple `-m` flags for header and
body). After it succeeds, print a short success message that shows the **exact**
commit message you used.
