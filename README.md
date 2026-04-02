# publish

This folder is a [Quartz 4](https://quartz.jzhao.xyz/) site that builds into a public GitHub Pages site at `sarthakvk.github.io/secondbrain-public`.

## Structure

```
publish/
├── index.md          # Home page content
├── resume/           # Resume files (PDF, source)
└── .quartz/          # Quartz build system (not served as content)
    ├── quartz.config.ts   # Site-wide config: title, theme, colors, plugins
    ├── quartz.layout.ts   # Page layout: which components appear where
    └── quartz/            # Quartz source (components, plugins, etc.)
```

Any `.md` file added at the root of `publish/` (outside `.quartz/`) becomes a page.

## How to customize

### Site title, fonts, colors
Edit `.quartz/quartz.config.ts`:
- `configuration.pageTitle` — name shown in the browser tab and sidebar
- `configuration.theme.typography` — `header`, `body`, and `code` fonts (Google Fonts names)
- `configuration.theme.colors.lightMode` / `darkMode` — full color palette

### Layout and components
Edit `.quartz/quartz.layout.ts`. Each page layout has three zones:

| Zone | Where |
|------|-------|
| `left` | Left sidebar |
| `right` | Right sidebar |
| `beforeBody` | Above page content |

Add or remove component calls to change what appears. For example:

- **Remove the graph** — delete `Component.Graph()` from the `right` array in `defaultContentPageLayout`
- **Remove backlinks** — delete `Component.Backlinks()`
- **Add a component** — import it from `Component.*` and add it to the desired zone

### Footer links
Edit the `links` object inside `Component.Footer({...})` in `quartz.layout.ts`.

### Home page
Edit `index.md`. The `title:` frontmatter sets the browser tab title; the body is plain Markdown.

## Deploying

Changes are built and deployed automatically via GitHub Actions on push to `main`.

Local preview (requires Node 20+):
```bash
cd .quartz
npx quartz build --serve
```
