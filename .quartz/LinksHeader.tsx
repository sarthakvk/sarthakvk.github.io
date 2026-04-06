import { QuartzComponent, QuartzComponentConstructor } from "./quartz/components/types"

const LinksHeader: QuartzComponent = () => {
  return (
    <nav class="links-header">
      <a href="/Blogs">Blogs</a>
      <a href="/resume/resume.pdf" target="_blank" rel="noopener">Resume</a>
    </nav>
  )
}

LinksHeader.css = `
.links-header {
  display: flex;
  gap: 1.5rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--lightgray);
  justify-content: flex-end;
}

.links-header a {
  font-family: var(--bodyFont);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--dark);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.links-header a:hover {
  opacity: 1;
  color: var(--secondary);
}
`

export default (() => LinksHeader) satisfies QuartzComponentConstructor
