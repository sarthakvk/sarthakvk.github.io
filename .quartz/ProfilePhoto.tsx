import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./quartz/components/types"
import { joinSegments, pathToRoot } from "./quartz/util/path"

const ProfilePhoto: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const photoPath = joinSegments(baseDir, "static/profile.png")
  return (
    <div class="profile-photo-container">
      <div class="profile-photo-circle">
        <img src={photoPath} alt="Sarthak Kumar" class="profile-photo" />
      </div>
    </div>
  )
}

ProfilePhoto.css = `
.profile-photo-container {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.profile-photo-circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 53% 38%;
  transform: scale(4);
  transform-origin: 53% 38%;
}
`

export default (() => ProfilePhoto) satisfies QuartzComponentConstructor
