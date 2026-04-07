import { computePosition, flip, offset, shift } from "@floating-ui/dom"

let activeAbbr: HTMLElement | null = null
let popoverElement: HTMLDivElement | null = null
let popoverInner: HTMLDivElement | null = null

function ensurePopover() {
  if (popoverElement && popoverInner) return

  popoverElement = document.createElement("div")
  popoverElement.className = "popover abbr-popover"

  popoverInner = document.createElement("div")
  popoverInner.className = "popover-inner"

  popoverElement.appendChild(popoverInner)
  document.body.appendChild(popoverElement)
}

async function showPopover(abbr: HTMLElement) {
  const description = abbr.dataset.abbr ?? ""
  if (!description) return

  ensurePopover()
  if (!popoverElement || !popoverInner) return

  activeAbbr = abbr
  popoverInner.textContent = description
  popoverElement.classList.add("active-popover")

  const { x, y } = await computePosition(abbr, popoverElement, {
    strategy: "fixed",
    middleware: [offset(10), shift({ padding: 12 }), flip()],
  })

  if (activeAbbr !== abbr) return

  Object.assign(popoverElement.style, {
    transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
  })
}

function clearPopover() {
  activeAbbr = null
  popoverElement?.classList.remove("active-popover")
}

document.addEventListener("nav", () => {
  const abbreviations = [
    ...document.querySelectorAll("abbr[title], abbr[data-abbr]"),
  ] as HTMLElement[]

  for (const abbr of abbreviations) {
    const title = abbr.getAttribute("title")
    if (title) {
      abbr.dataset.abbr = title
      abbr.removeAttribute("title")
    }

    if (!abbr.hasAttribute("tabindex")) {
      abbr.setAttribute("tabindex", "0")
    }

    const description = abbr.dataset.abbr
    if (description && !abbr.hasAttribute("aria-label")) {
      abbr.setAttribute("aria-label", `${abbr.textContent?.trim()}: ${description}`)
    }

    const onMouseEnter = () => void showPopover(abbr)
    const onFocus = () => void showPopover(abbr)

    abbr.addEventListener("mouseenter", onMouseEnter)
    abbr.addEventListener("mouseleave", clearPopover)
    abbr.addEventListener("focus", onFocus)
    abbr.addEventListener("blur", clearPopover)

    window.addCleanup(() => {
      abbr.removeEventListener("mouseenter", onMouseEnter)
      abbr.removeEventListener("mouseleave", clearPopover)
      abbr.removeEventListener("focus", onFocus)
      abbr.removeEventListener("blur", clearPopover)
    })
  }
})
