## Structure

```
publish/
├── index.md              # Home page
├── Blogs/                # Blog posts
├── resume/resume.pdf     # Resume
└── .quartz/              # Quartz framework
    ├── quartz.config.ts  # Theme, colors, plugins        ← edit this
    ├── quartz.layout.ts  # Page layout, components       ← edit this
    ├── SocialFooter.tsx  # Custom footer (social icons)  ← user component
    ├── ProfilePhoto.tsx  # Circular profile photo (index only) ← user component
    ├── ProfileFavicon.tsx # Builds the tab icon from profile.png
    ├── profileImageConfig.ts # Shared crop/zoom for homepage photo + tab icon
    └── quartz/           # Quartz library source         ← do not modify
        ├── static/profile.png  # Profile photo asset
        └── styles/custom.scss  # Exception: user CSS (prefer ConditionalRender in layout.ts)
```

Any `.md` file added at the root of `publish/` (outside `.quartz/`) becomes a page.

## Rules

- Only modify `quartz.config.ts`, `quartz.layout.ts`, and custom files at the `.quartz/` root.
- Do not create or edit files inside `.quartz/quartz/` — they will conflict on `npx quartz update`.
- Custom components go at `.quartz/` root and are imported directly in `quartz.layout.ts`.
- Prefer `ConditionalRender` in `quartz.layout.ts` over CSS in `custom.scss`.
- `quartz/static/profile.png` is the source for both the homepage profile photo and the tab icon; tweak `profileImageConfig.ts` to change their shared crop/zoom.

## Local preview (requires Node 20+)

```bash
cd .quartz && npx quartz build --serve
```
