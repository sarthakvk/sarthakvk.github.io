import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import SocialFooter from "./SocialFooter"
import ProfilePhoto from "./ProfilePhoto"
import StickyBreadcrumbs from "./StickyBreadcrumbs"
import AbbrTooltips from "./AbbrTooltips"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [AbbrTooltips()],
  footer: SocialFooter(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: StickyBreadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
    Component.ConditionalRender({
      component: ProfilePhoto(),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) => node.slugSegment !== "tags" && node.slugSegment !== "assets",
    }),
  ],
  right: [
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: ProfilePhoto(),
        condition: (page) => page.fileData.slug === "index",
      }),
    ),
    // Removing Graph component for now due to too few pages in the vault
    // Component.Graph()
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) => node.slugSegment !== "tags" && node.slugSegment !== "assets",
    }),
  ],
  right: [],
}
