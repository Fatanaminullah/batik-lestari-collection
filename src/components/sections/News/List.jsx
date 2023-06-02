import { Image, RatioImage } from "@components/base/Image"
import PropTypes from "prop-types"
import imgCardSection2 from "@public/img/dummy/sections/card/img_card-section-2.jpg"
import imgDummy from "@public/img/dummy/img_dummy.jpg"
import { Button } from "@components/base"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { dummyCard } from "../CardList"
import icArrowUpRight from "./assets/ic_arrow-up-right.svg"

export function List({ data }) {
  const [index, setIndex] = useState(0)
  const handleMouseDown = (i) => {
    setIndex(i)
  }

  return (
    <div className="sc-news-list py-main">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-left">
            <AnimatePresence mode="wait">
              {data?.list?.map(
                (item, i) =>
                  i === index && (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: [0.5, 1],
                      }}
                      exit={{
                        opacity: [1, 0.5],
                      }}
                    >
                      <RatioImage src={item.img} ratio="r-4-5" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
          <div className="col-md-8 col-right">
            <div className="news-list-head">
              <h2>{data?.sectionTitle}</h2>
              <div>
                <Button
                  variant="link"
                  className="hover-underline"
                  link={data?.buttonLink}
                >
                  {data?.buttonLabel}
                </Button>
              </div>
            </div>

            <div className="news-list-content">
              {data?.list?.map((item, i) => (
                <div
                  key={i}
                  className="news-list-content__item"
                  onMouseEnter={() => {
                    handleMouseDown(i)
                  }}
                  // onMouseOver={() => handleMouseDown(i)}
                  // onFocus={() => {}}
                  tabIndex={0}
                  role="button"
                >
                  <h3>{item.title}</h3>
                  <div className="news-list-content__icon">
                    <Image
                      src={icArrowUpRight}
                      alt="ic-arrow-up-right"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

List.defaultProps = {
  data: {
    sectionTitle: "Latest Updates",
    buttonLabel: "Discover All",
    buttonLink: "/",
    list: [],
  },
}

List.propTypes = {
  data: PropTypes.shape({
    sectionTitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    list: PropTypes.array,
  }),
}
