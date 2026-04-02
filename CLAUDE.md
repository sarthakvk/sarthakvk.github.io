Last updated at: 2026-04-03
Related notes: —

PARA-based Obsidian vault.

## Active Context

Update this section during weekly reviews.

- Project: Interview Preparation 2026 — NeetCode 150, system design mocks, STAR stories
- Deadline: Meta contract ends 2026-04-07
- Priority: Job applications (5/day target)
- Latest review: [[2026-03-29 Weekly Review]]

## Vault Tree

    01 Inbox
    02 Projects
      └── Interview Preparation 2026
    03 Areas
      ├── Finance and Economy
      ├── Ideas
      ├── Mathematics
      ├── Personal stuff
      └── Software engineering
    04 Resources
      ├── Investing
      ├── News
      └── Software engineering
    05 Logs
      ├── Decisions
      ├── Goals
      ├── Lessons
      └── Weekly reviews
    99 Archive
    publish (submodule)

| Section          | Purpose                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| 01 Inbox         | Unsorted captures. Triage into correct sections during weekly review.         |
| 02 Projects      | Active work with a finish line. Archive when done or abandoned.               |
| 03 Areas         | Ongoing domains (no finish line). Context and status, not knowledge.          |
| 04 Resources     | Reusable knowledge: concepts, frameworks, references. Link to relevant areas. |
| 05 Logs          | Dated entries: decisions, lessons, weekly reviews, goals.                     |
| 99 Archive       | Inactive material from any section.                                           |
| publish          | Public-facing content: blogs, essays, shared resources (GitHub Pages).        |

<important if="you are searching for a note, navigating the vault, or need to find relevant content">

Every directory has a **folder note** (same name as directory, e.g. `Lessons/Lessons.md`) with a summary table of its contents. Use this instead of reading all files.

Optimal path: Vault Tree → folder note → sub-folder note → target note.

Do not speculatively read files. Use the vault tree to identify relevant sections, then folder notes to assess contents, and only read a specific file when you have a concrete reason tied to the current task.

Use recursive `ls` for high-level structure exploration.
</important>

<important if="you are asked about current priorities, progress, status, or what to work on">

Always read the latest weekly review linked in Active Context before answering. Do not answer from Active Context alone.
</important>

<important if="you are creating a new note or editing note content">

Note format:

    Last updated at: YYYY-MM-DD
    Related notes: [[link]] [[link]]

- Filename is the title. No top-level heading.
- `Last updated at:` is always the first line.
- `Related notes:` is always the second line. Cross-cutting links only — do not link to parent folder notes. Use `—` if none.
- Keep notes concise. Rephrase into proper format but do not add beyond what the user provided.
</important>

<important if="you are adding a new note">

Update the folder note of the **same directory the note lives in** with the note's name and a 1-line summary.
</important>

<important if="you are adding a new resource">

Link it to the most relevant area or project via `Related notes:`.
</important>

<important if="you are adding or removing a directory">

Update the Vault Tree in this file.
</important>

<important if="you have made any change to vault files or this file">

Commit and push after every change. Format: `[Claude] <2–3 word description>`.
</important>

<important if="you have made changes to files inside the publish/ submodule">

Two-step commit required — submodule must commit before parent updates pointer:
1. `cd publish && git add <files> && git commit -m "[Claude] <description>" && git push`
2. `cd .. && git add publish && git commit -m "[Claude] update publish" && git push`
</important>
