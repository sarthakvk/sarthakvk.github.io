## Structure

```
publish/
├── index.md              # Home page
├── Blogs/                # Blog posts
├── resume/resume.pdf     # Resume
└── .quartz/              # Quartz framework
    ├── quartz.config.ts  # Theme, colors, plugins        ← edit this
    ├── quartz.layout.ts  # Page layout, components       ← edit this
    ├── LinksHeader.tsx   # Custom nav (Blogs, Resume)    ← user component
    ├── SocialFooter.tsx  # Custom footer (social icons)  ← user component
    └── quartz/           # Quartz library source         ← do not modify
        └── styles/custom.scss  # Exception: user CSS (prefer ConditionalRender in layout.ts)
```

Any `.md` file added at the root of `publish/` (outside `.quartz/`) becomes a page.

## Rules

- Only modify `quartz.config.ts`, `quartz.layout.ts`, and custom files at the `.quartz/` root.
- Do not create or edit files inside `.quartz/quartz/` — they will conflict on `npx quartz update`.
- Custom components go at `.quartz/` root and are imported directly in `quartz.layout.ts`.
- Prefer `ConditionalRender` in `quartz.layout.ts` over CSS in `custom.scss`.

## Local preview (requires Node 20+)

```bash
cd .quartz && npx quartz build --serve
```
