import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components"
import { ProfileFavicon } from "./ProfileFavicon"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sarthak Kumar",
    pageTitleSuffix: " | Sarthak Kumar",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "sarthakvk.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", ".quartz/**", ".github", "README.md", "publish.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
    title: "Newsreader",
    header: "Newsreader",
    body: "Source Serif 4",
    code: "JetBrains Mono",
  }
,
      colors: {
        lightMode: {
          light: "#fbf1c7",
          lightgray: "#ebdbb2",
          gray: "#a89984",
          darkgray: "#504945",
          dark: "#282828",
          secondary: "#b57614",
          tertiary: "#689d6a",
          highlight: "rgba(181, 118, 20, 0.12)",
          textHighlight: "#fabd2f88",
        },
        darkMode: {
          light: "#282828",
          lightgray: "#3c3836",
          gray: "#665c54",
          darkgray: "#d5c4a1",
          dark: "#ebdbb2",
          secondary: "#d79921",
          tertiary: "#8ec07c",
          highlight: "rgba(215, 153, 33, 0.15)",
          textHighlight: "#b8bb2688",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      ProfileFavicon(),
      Plugin.FolderPage({ pageBody: Component.Content() }),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
