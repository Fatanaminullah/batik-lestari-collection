import PropTypes from "prop-types"
import imgCoverSection from "@public/img/dummy/sections/cover/img_cover-section.jpg"
import { Carousel } from "@components/base"
import { CoverFullscreen } from "./Fullscreen"
import { CoverHalfAndHalf } from "./HalfAndHalf"
import { CoverPeekingBigImage } from "./PeekingBigImage"

export function SectionCover({ type, ...args }) {
  const render = () => {
    switch (type) {
      case "fullscreen":
        return <CoverFullscreen {...args} />

      case "half-and-half":
        return <CoverHalfAndHalf {...args} />

      case "peeking-big-image":
        return <CoverPeekingBigImage {...args} />

      default:
        return <>list</>
    }
  }

  return <div className="_sc-cover">{render()}</div>
}

SectionCover.defaultProps = {}

SectionCover.propTypes = {
  type: PropTypes.oneOf(["fullscreen", "half-and-half", "peeking-big-image"]),
}
