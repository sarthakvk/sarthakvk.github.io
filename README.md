## Structure

```
publish/
├── index.md          # Home page content
└── .quartz/          # Quartz build system
```

Any `.md` file added at the root of `publish/` (outside `.quartz/`) becomes a page.

Local preview (requires Node 20+):
```bash
cd .quartz
npx quartz build --serve
```
