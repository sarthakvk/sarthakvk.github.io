import Breadcrumbs from "./quartz/components/Breadcrumbs"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./quartz/components/types"

const BaseBreadcrumbs = Breadcrumbs()

const StickyBreadcrumbs: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <>
      <div class="sticky-breadcrumb-spacer" />
      <div class="sticky-breadcrumb-shell">
        <BaseBreadcrumbs {...props} />
      </div>
    </>
  )
}

StickyBreadcrumbs.css = `
.sticky-breadcrumb-spacer {
  height: 3rem;
}

.sticky-breadcrumb-shell {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(100vw - 2rem, 860px);
  z-index: 30;
  background-color: var(--light);
  border-bottom: 1px solid var(--lightgray);
}

.sticky-breadcrumb-shell .breadcrumb-container {
  margin: 0;
  padding: 0.75rem 0;
}

.popover .sticky-breadcrumb-spacer,
.popover .sticky-breadcrumb-shell,
.preview-inner .sticky-breadcrumb-spacer,
.preview-inner .sticky-breadcrumb-shell {
  display: none;
}

@media all and (max-width: 800px) {
  .sticky-breadcrumb-spacer {
    height: 2.75rem;
  }

  .sticky-breadcrumb-shell {
    width: calc(100vw - 2rem);
  }
}
`

export default (() => StickyBreadcrumbs) satisfies QuartzComponentConstructor
