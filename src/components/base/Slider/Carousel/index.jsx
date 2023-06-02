/* eslint-disable react/no-danger */
// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Carousel
// ========================================================================================================================================

import { Cover } from "@components/base/Cover"
import PropTypes from "prop-types"
import { useCustomNavSwiper } from "src/hooks/hooks"

import { Swiper, SwiperSlide } from "swiper/react"

import { useRef, useState } from "react"
import SwiperCore, {
  Autoplay,
  EffectFade,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper"

// ========================================================================================================================================
// Carousel
// ========================================================================================================================================

export function Carousel({
  data,
  className,
  variant,
  showArrow,
  arrowLeft,
  arrowRight,
  theme,
  ...props
}) {
  const [swiperRef, handlePrev, handleNext] = useCustomNavSwiper()
  const [currentSlide, setCurrentSlide] = useState(0)
  const coverVariant = () => {
    if (showArrow) {
      return `${variant}-arrow`
    }
    return variant
  }
  const ref = useRef()

  return (
    <div
      className={`carousel carousel-${coverVariant()} carousel-theme-${theme} ${className}`}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={null}
        // effect="fade"
        onSlideChange={(slide) => {
          setCurrentSlide(slide?.realIndex)
        }}
        loop={data?.length > 1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[
          Autoplay,
          EffectFade,
          FreeMode,
          Mousewheel,
          Navigation,
          Pagination,
        ]}
        {...props}
      >
        {data?.map((item, i) => (
          <SwiperSlide key={`carousel_item-${i}`} className="carousel__item">
            <Cover {...item} contentPosition={variant} theme={theme} />
          </SwiperSlide>
        ))}

        {data?.length > 1 ? (
          <div className="container container-pagination">
            <div className="carousel-pagination__wrapper">
              <div className="carousel-pagination">
                {data?.map((_, i) => (
                  <div
                    className={`carousel-pagination__item ${
                      i === currentSlide ? "active" : ""
                    }`}
                    key={`carousel-pagination__item-${i}`}
                    onClick={() => {
                      swiperRef.current.slideTo(i + 1)
                      // swiperRef.current.swiper.slideTo(i + 1)
                    }}
                    role="button"
                    aria-label="button"
                    tabIndex={0}
                  />
                ))}
              </div>
            </div>
            <div className="carousel-navigation">
              <div
                className="carousel-navigation__item left"
                role="button"
                aria-label="button"
                onClick={() => handlePrev()}
                tabIndex={0}
              >
                <i className={arrowLeft} />
              </div>
              <div
                className="carousel-navigation__item right"
                role="button"
                aria-label="button"
                onClick={() => handleNext()}
                tabIndex={0}
              >
                <i className={arrowRight} />
              </div>
            </div>
          </div>
        ) : null}
      </Swiper>
    </div>
  )
}

Carousel.propTypes = {
  className: PropTypes.string,
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

Carousel.defaultProps = {
  className: "",
  data: [],
  theme: "dark",
  showArrow: true,
  variant: "middle-left",
  arrowLeft: "icr ic-arrow-left",
  arrowRight: "icr ic-arrow-right",
}
