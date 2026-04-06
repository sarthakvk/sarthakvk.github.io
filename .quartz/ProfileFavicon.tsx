import sharp from "sharp"
import { QUARTZ, FullSlug, joinSegments } from "./quartz/util/path"
import { QuartzEmitterPlugin } from "./quartz/plugins/types"
import { write } from "./quartz/plugins/emitters/helpers"
import {
  PROFILE_FOCAL_X,
  PROFILE_FOCAL_Y,
  PROFILE_ZOOM,
} from "./profileImageConfig"

const FAVICON_SIZE = 96
const SOURCE_IMAGE_PATH = joinSegments(QUARTZ, "static", "profile.png")

function getSquareCropBounds(width: number, height: number) {
  const fitScale = Math.max(1 / width, 1 / height)
  const cropSize = Math.max(1, Math.round(1 / (fitScale * PROFILE_ZOOM)))
  const cropLeft = Math.round(width * PROFILE_FOCAL_X - cropSize / 2)
  const cropTop = Math.round(height * PROFILE_FOCAL_Y - cropSize / 2)

  return {
    left: Math.max(0, Math.min(width - cropSize, cropLeft)),
    top: Math.max(0, Math.min(height - cropSize, cropTop)),
    size: Math.min(cropSize, width, height),
  }
}

async function renderProfileIcon() {
  const image = sharp(SOURCE_IMAGE_PATH)
  const metadata = await image.metadata()

  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not determine image dimensions for ${SOURCE_IMAGE_PATH}`)
  }

  const { left, top, size } = getSquareCropBounds(metadata.width, metadata.height)
  const circularMask = Buffer.from(
    `<svg width="${FAVICON_SIZE}" height="${FAVICON_SIZE}" viewBox="0 0 ${FAVICON_SIZE} ${FAVICON_SIZE}" xmlns="http://www.w3.org/2000/svg"><circle cx="${FAVICON_SIZE / 2}" cy="${FAVICON_SIZE / 2}" r="${FAVICON_SIZE / 2}" fill="white"/></svg>`,
  )

  return image
    .extract({ left, top, width: size, height: size })
    .resize(FAVICON_SIZE, FAVICON_SIZE)
    .composite([{ input: circularMask, blend: "dest-in" }])
    .png()
    .toBuffer()
}

export const ProfileFavicon: QuartzEmitterPlugin = () => ({
  name: "ProfileFavicon",
  async *emit(ctx) {
    const iconBuffer = await renderProfileIcon()

    yield write({
      ctx,
      slug: "static/icon" as FullSlug,
      ext: ".png",
      content: iconBuffer,
    })

    yield write({
      ctx,
      slug: "favicon" as FullSlug,
      ext: ".ico",
      content: iconBuffer,
    })
  },
  async *partialEmit() {},
})
