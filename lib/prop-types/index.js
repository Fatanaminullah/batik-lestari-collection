// coverPropTypes.js
import PropTypes from "prop-types"

import imgSample from "../../public/img/dummy/img_dummy.jpg"

export const coverContentPosition = [
  "middle-right",
  "middle-center",
  "middle-left",
  "bottom-right",
  "bottom-center",
  "bottom-right",
  "bottom-left",
]

export const coverScrollHintPosition = [
  "bottom-left",
  "bottom-center",
  "bottom-right",
]

export const coverPropTypes = {
  variant: PropTypes.oneOf(["basic", "responsive", "fluid"]),
  theme: PropTypes.oneOf(["light", "dark"]),
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
  contentPosition: PropTypes.oneOf([
    "middle-right",
    "middle-center",
    "middle-left",
    "bottom-right",
    "bottom-center",
    "bottom-right",
    "bottom-left",
  ]),
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  scrollHint: PropTypes.bool,
  scrollHintLink: PropTypes.string,
  scrollHintText: PropTypes.string,
}

export const coverDefaultProps = {
  img: imgSample,
  variant: "basic",
  theme: "dark",
  breadcrumb: null,
  contentMaxWidth: "mw-md-500px",
  contentPosition: "middle-left",
  imgHeight: "h-400px h-xs-500px h-md-600px",
  imgOverlay: 0,
  title: "Label",
  titleClassName: "",
  text: "Lorem Ipsum Dolor Siamet",
  textClassName: "",
  containerClassName: "",
  className: "",
  scrollHint: false,
  scrollHintLink: "#nextSection",
  scrollHintText: "Scroll down",
}
