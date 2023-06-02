// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// SlickSlider
// ========================================================================================================================================

import ReactSlick from "react-slick"
import PropTypes from "prop-types"

export function SliderSlick({
  forwardKey,
  forwardRef,
  asNavFor,
  infinite,
  fade,
  noGutter,
  visibleInitial,
  visibleXxlDown,
  visibleXlDown,
  visibleLgDown,
  visibleMdDown,
  visibleSmDown,
  dotsInitial,
  dotsXxlDown,
  dotsXlDown,
  dotsLgDown,
  dotsMdDown,
  dotsSmDown,
  arrowsInitial,
  arrowsXxlDown,
  arrowsXlDown,
  arrowsLgDown,
  arrowsMdDown,
  arrowsSmDown,
  showInitial,
  showXxlDown,
  showXlDown,
  showLgDown,
  showMdDown,
  showSmDown,
  scrollInitial,
  scrollXxlDown,
  scrollXlDown,
  scrollLgDown,
  scrollMdDown,
  scrollSmDown,
  rowsInitial,
  rowsXxlDown,
  rowsXlDown,
  rowsLgDown,
  rowsMdDown,
  rowsSmDown,
  className,
  children,
}) {
  const settings = {
    key: forwardKey,
    ref: forwardRef,
    className: `slider ${className} 
      ${noGutter && "slick-px-0"}
      ${visibleInitial ? "show-initial" : ""} 
      ${visibleXxlDown ? "show-xxl-down" : ""} 
      ${visibleXlDown ? "show-xl-down" : ""} 
      ${visibleLgDown ? "show-lg-down" : ""} 
      ${visibleMdDown ? "show-md-down" : ""} 
      ${visibleSmDown ? "show-sm-down" : ""}`,
    asNavFor,
    infinite,
    fade,
    dots: dotsInitial,
    arrows: arrowsInitial,
    slidesToShow: showInitial,
    slidesToScroll: scrollInitial,
    rows: rowsInitial,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          dots: dotsXxlDown,
          arrows: arrowsXxlDown,
          slidesToShow: showXxlDown,
          slidesToScroll: scrollXxlDown,
          rows: rowsXxlDown,
        },
      },
      {
        breakpoint: 1119,
        settings: {
          dots: dotsXlDown,
          arrows: arrowsXlDown,
          slidesToShow: showXlDown,
          slidesToScroll: scrollXlDown,
          rows: rowsXlDown,
        },
      },
      {
        breakpoint: 991,
        settings: {
          dots: dotsLgDown,
          arrows: arrowsLgDown,
          slidesToShow: showLgDown,
          slidesToScroll: scrollLgDown,
          rows: rowsLgDown,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: dotsMdDown,
          arrows: arrowsMdDown,
          slidesToShow: showMdDown,
          slidesToScroll: scrollMdDown,
          rows: rowsMdDown,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: dotsSmDown,
          arrows: arrowsSmDown,
          slidesToShow: showSmDown,
          slidesToScroll: scrollSmDown,
          rows: rowsSmDown,
        },
      },
    ],
  }
  return <ReactSlick {...settings}>{children}</ReactSlick>
}

SliderSlick.propTypes = {
  infinite: PropTypes.bool,
  fade: PropTypes.bool,
  noGutter: PropTypes.bool,
  visibleInitial: PropTypes.bool,
  visibleXxlDown: PropTypes.bool,
  visibleXlDown: PropTypes.bool,
  visibleLgDown: PropTypes.bool,
  visibleMdDown: PropTypes.bool,
  visibleSmDown: PropTypes.bool,
  dotsInitial: PropTypes.bool,
  dotsXxlDown: PropTypes.bool,
  dotsXlDown: PropTypes.bool,
  dotsLgDown: PropTypes.bool,
  dotsMdDown: PropTypes.bool,
  dotsSmDown: PropTypes.bool,
  arrowsInitial: PropTypes.bool,
  arrowsXxlDown: PropTypes.bool,
  arrowsXlDown: PropTypes.bool,
  arrowsLgDown: PropTypes.bool,
  arrowsMdDown: PropTypes.bool,
  arrowsSmDown: PropTypes.bool,
  showInitial: PropTypes.number,
  showXxlDown: PropTypes.number,
  showXlDown: PropTypes.number,
  showLgDown: PropTypes.number,
  showMdDown: PropTypes.number,
  showSmDown: PropTypes.number,
  scrollInitial: PropTypes.number,
  scrollXxlDown: PropTypes.number,
  scrollXlDown: PropTypes.number,
  scrollLgDown: PropTypes.number,
  scrollMdDown: PropTypes.number,
  scrollSmDown: PropTypes.number,
  rowsInitial: PropTypes.number,
  rowsXxlDown: PropTypes.number,
  rowsXlDown: PropTypes.number,
  rowsLgDown: PropTypes.number,
  rowsMdDown: PropTypes.number,
  rowsSmDown: PropTypes.number,
  className: PropTypes.string,
}

SliderSlick.defaultProps = {
  infinite: false,
  fade: false,
  noGutter: false,
  visibleInitial: true,
  visibleXxlDown: true,
  visibleXlDown: true,
  visibleLgDown: true,
  visibleMdDown: true,
  visibleSmDown: true,
  dotsInitial: false,
  dotsXxlDown: false,
  dotsXlDown: false,
  dotsLgDown: false,
  dotsMdDown: false,
  dotsSmDown: false,
  arrowsInitial: true,
  arrowsXxlDown: true,
  arrowsXlDown: true,
  arrowsLgDown: true,
  arrowsMdDown: false,
  arrowsSmDown: false,
  showInitial: 4,
  showXxlDown: 4,
  showXlDown: 4,
  showLgDown: 4,
  showMdDown: 2,
  showSmDown: 1.1,
  scrollInitial: 1,
  scrollXxlDown: 1,
  scrollXlDown: 1,
  scrollLgDown: 1,
  scrollMdDown: 1,
  scrollSmDown: 1,
  rowsInitial: 1,
  rowsXxlDown: 1,
  rowsXlDown: 1,
  rowsLgDown: 1,
  rowsMdDown: 1,
  rowsSmDown: 1,
  className: "",
}