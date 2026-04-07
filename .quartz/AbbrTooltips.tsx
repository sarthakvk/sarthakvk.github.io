// @ts-ignore
import abbrScript from "./abbr.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./quartz/components/types"

const AbbrTooltips: QuartzComponent = () => null

AbbrTooltips.afterDOMLoaded = abbrScript

export default (() => AbbrTooltips) satisfies QuartzComponentConstructor
