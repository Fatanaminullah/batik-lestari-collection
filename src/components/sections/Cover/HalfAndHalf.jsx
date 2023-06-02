import { Button } from "@components/base"
import { RatioImage } from "@components/base/Image"
import imgHalfAndHalf from "@public/img/dummy/sections/cover/img_cover-half-and-half.jpg"
import { useState } from "react"
import { useCustomNavSwiper, useScrollAnim } from "src/hooks/hooks"
import { Autoplay, FreeMode, Mousewheel, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export function CoverHalfAndHalf({ data }) {
  const [swiperRef, handlePrev, handleNext] = useCustomNavSwiper()
  const [activeIndex, setActiveIndex] = useState(0)
  const [trigger, anim] = useScrollAnim()

  return (
    <>
      <div ref={trigger} className="sc-cover cover-half-and-half">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-left">
              <div className="cover-half-content">
                {data.map(
                  (item, i) =>
                    i === activeIndex && (
                      <div key={i}>
                        <small className={`card-label text-muted ${anim(1)}`}>
                          {item.label}
                        </small>
                        <h2 className={`card-title ${anim(2)}`}>
                          {item.title}
                        </h2>
                        <p className={`card-text ${anim(3)}`}>{item.text}</p>

                        {item.buttons?.length > 0 ? (
                          <div className={`card-buttons ${anim(4)}`}>
                            {item.buttons.map((button, j) => (
                              <Button
                                key={j}
                                link={button.url}
                                variant={button.variant}
                                className={`${button.className}`}
                              >
                                {button.text}
                              </Button>
                            ))}
                          </div>
                        ) : (
                          ``
                        )}
                      </div>
                    )
                )}
              </div>
              <div className="slider-actions">
                <div>
                  {`${activeIndex + 1}`.padStart(2, "0")} /{" "}
                  {`${data.length}`.padStart(2, "0")}
                </div>
                <div className="slider-actions-swiper">
                  {data?.length > 1 ? (
                    <div className="actions-swiper-pagination">
                      <div className="swiper-navigation">
                        <div
                          className={`swiper-navigation__item left ${
                            activeIndex === 0
                              ? `swiper-navigation__item--disabled`
                              : ``
                          }`}
                          role="button"
                          aria-label="button"
                          onClick={() => handlePrev()}
                          tabIndex={0}
                        >
                          <i className="icr ic-arrow-left" />
                        </div>
                        <div
                          className={`swiper-navigation__item right ${
                            activeIndex + 1 >= data.length
                              ? `swiper-navigation__item--disabled`
                              : ``
                          }`}
                          role="button"
                          aria-label="button"
                          onClick={() => handleNext()}
                          tabIndex={0}
                        >
                          <i className="icr ic-arrow-right" />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-right">
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                modules={[
                  Autoplay,
                  FreeMode,
                  Mousewheel,
                  Navigation,
                  Pagination,
                ]}
                onSlideChange={(e) => {
                  setActiveIndex(e.activeIndex)
                }}
              >
                {data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <RatioImage
                      src={item.img}
                      alt="img-half-and-half"
                      ratio="r-1-1"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
