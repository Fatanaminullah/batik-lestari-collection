import { Button, Card } from "@components/base"
import PropTypes from "prop-types"
import { useState } from "react"
import { useCustomNavSwiper, useWindowSize } from "src/hooks/hooks"
import { Swiper, SwiperSlide } from "swiper/react"
import imgCardSection from "@public/img/dummy/sections/card/img_card-section.jpg"
import { EffectCoverflow, Pagination } from "swiper"

export const dummyCard = {
  title: "Lorem Ipsum",
  text: "Lorem ipsum dolor sit amet",
  imgRatio: "r-1-1",
  variant: "boxless",
  img: imgCardSection,
  label: "",
}

export function SectionCardList({
  id,
  type,
  title,
  text,
  buttons,
  children,
  cardPerView,
  data,
  colLeft,
  colRight,
  showArrow,
}) {
  const [swiperRef, handlePrev, handleNext] = useCustomNavSwiper()
  const [currentSlide, setCurrentSlide] = useState(0)
  const { innerWidth } = useWindowSize()

  const swiperPropExtend = () => {
    if (type === "type-3") {
      return {
        modules: [EffectCoverflow, Pagination],
        effect: "coverflow",
        coverflowEffect: {
          depth: 100,
          modifier: 1,
          rotate: 0,
          scale: 0.9,
          slideShadows: false,
          stretch: 0,
        },
        loop: true,
        pagination: {
          clickable: true,
        },
        centeredSlides: true,
      }
    }

    return {}
  }

  const containerValidation = () => {
    if (type === "type-3") {
      return "container-fluid"
    }

    return "container"
  }

  return (
    <div id={id} className={`sc-cardlist sc-cardlist-${type} py-main`}>
      <div className={`${containerValidation()}`}>
        <div className="row">
          <div className={`${colLeft} cardlist-head`}>
            <div>
              <h2 className="cardlist-title">{title}</h2>
              {text && <p className="cardlist-text">{text}</p>}

              {buttons && (
                <Button
                  link={buttons.link}
                  variant={buttons.variant}
                  iconRight={buttons.iconRight}
                  iconLeft={buttons.iconLeft}
                  className={`mb-3 ${buttons.className}`}
                >
                  {buttons.text}
                </Button>
              )}
            </div>

            <div>
              {!(data.length < Math.floor(cardPerView)) &&
                innerWidth >= 768 &&
                showArrow && (
                  <div className="custom-swiper-navigation">
                    <div
                      className={`custom-swiper-navigation__item left ${
                        currentSlide === 0
                          ? `custom-swiper-navigation__item--disabled`
                          : ``
                      }`}
                      role="button"
                      aria-label="button"
                      onClick={() => handlePrev()}
                      tabIndex={0}
                    >
                      <i className="icl ic-arrow-left" />
                    </div>
                    <div
                      className={`custom-swiper-navigation__item right ${
                        currentSlide === data.length - Math.floor(cardPerView)
                          ? `custom-swiper-navigation__item--disabled`
                          : ``
                      }`}
                      role="button"
                      aria-label="button"
                      onClick={() => handleNext()}
                      tabIndex={0}
                    >
                      <i className="icl ic-arrow-right" />
                    </div>
                  </div>
                )}
            </div>

            {children}
          </div>
          <div className={`${colRight} cardlist-body`}>
            <Swiper
              ref={swiperRef}
              slidesPerView="auto"
              breakpoints={{
                0: {
                  slidesPerView: 1.25,
                },

                768: {
                  slidesPerView: cardPerView,
                },
              }}
              spaceBetween={15}
              onSlideChange={(slide) => {
                setCurrentSlide(slide?.realIndex)
              }}
              {...swiperPropExtend()}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionCardList.defaultProps = {
  title: "Lorem ipsum dolor",
  text: "",
  cardPerView: 4,
  colLeft: "col-md-12",
  colRight: "col-md-12",
  showArrow: true,
  buttons: {
    text: "Learn More",
    link: "#",
    variant: "link",
    className: "hover-underline",
    iconRight: "icr ic-chevron-right",
  },
  data: [...Array(5)],
}

SectionCardList.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["type-1", "type-2", "type-3"]),
  title: PropTypes.string,
  text: PropTypes.string,
  cardPerView: PropTypes.number,
  colLeft: PropTypes.string,
  colRight: PropTypes.string,
  showArrow: false,
  buttons: PropTypes.shape({
    variant: PropTypes.string,
    text: PropTypes.string,
    iconRight: PropTypes.string,
    iconLeft: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
  }),
  data: PropTypes.any,
}
