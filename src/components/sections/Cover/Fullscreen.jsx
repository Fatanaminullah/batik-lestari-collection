import PropTypes from "prop-types"
import imgCoverSection from "@public/img/dummy/sections/cover/img_cover-section.jpg"
import { Carousel } from "@components/base"

export function CoverFullscreen({
  id,
  data,
  variant,
  showArrow,
  arrowLeft,
  arrowRight,
  theme,
  ...props
}) {
  return (
    <>
      <div id={id} className="sc-cover">
        <Carousel
          data={data}
          variant={variant}
          showArrow={showArrow}
          arrowLeft={arrowLeft}
          arrowRight={arrowRight}
          theme={theme}
          {...props}
        />
      </div>
    </>
  )
}

CoverFullscreen.defaultProps = {
  data: [...Array(5)].map((_, i) => ({
    img: imgCoverSection,
    label: "",
    title: `Going above and beyond the norm.`,
  })),
  theme: "dark",
  showArrow: true,
  variant: "middle-left",
  arrowLeft: "icr ic-arrow-left",
  arrowRight: "icr ic-arrow-right",
}

CoverFullscreen.propTypes = {
  id: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.oneOf(["basic", "responsive", "fluid"]),
      breadcrumb: PropTypes.element,
      img: PropTypes.any,
      imgHeight: PropTypes.string, // Set .cover-bg height / ratio with sizing utilities classes (e.g. .h-auto, .h-sm-100px, h-md-vw-100, .h-ratio-1-1, etc.)
      imgOverlay: PropTypes.any, // Set cover overlay %
      title: PropTypes.string,
      titleLine1: PropTypes.string,
      titleLine2: PropTypes.string,
      titleClassName: PropTypes.string,
      text: PropTypes.string,
      textClassName: PropTypes.string,
      buttons: PropTypes.arrayOf(PropTypes.any),
      contentMaxWidth: PropTypes.string, // Set .cover-content max width (with sizing utilities classes (e.g. .mw-md-500px, .mw-100, etc.)
      containerClassName: PropTypes.string,
      children: PropTypes.any,
      scrollHint: PropTypes.bool,
      scrollHintLink: PropTypes.string,
      scrollHintText: PropTypes.string,
    })
  ),
  variant: PropTypes.oneOf([
    "middle-right",
    "middle-center",
    "middle-left",
    "bottom-right",
    "bottom-center",
    "bottom-right",
    "bottom-left",
  ]),
  theme: PropTypes.oneOf(["light", "dark"]),
  showArrow: PropTypes.bool,
  arrowLeft: PropTypes.string,
  arrowRight: PropTypes.string,
}
