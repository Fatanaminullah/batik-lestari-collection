import { Button, Card } from "@components/base"
import PropTypes from "prop-types"
import { useScrollAnim } from "src/hooks/hooks"

export function FullscreenList({ data }) {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="sc-news-fullscreen-list" ref={trigger}>
      <div className="py-main">
        <div className="news-fullscreen-list__head container">
          <h2 className={anim(1)}>{data?.sectionTitle}</h2>
          <div className={anim(2)}>
            <Button
              variant="link"
              className="hover-underline"
              link={data?.buttonLink}
            >
              {data?.buttonLabel}
            </Button>
          </div>
        </div>
        <div className="news-fullscreen-list__content">
          {data?.list?.map((item, i) => (
            <div
              className={`news-fullscreen-list__content-item ${anim(
                i * 2 + 3,
                "fadeInDown"
              )}`}
              key={`news-fullscreen-list__content-item-${i}`}
            >
              <div className="container">
                <Card
                  imgRatio="r-16-9"
                  colLeft="col-md-3"
                  colRight="col-md-9 pl-md-3"
                  className="news-fullscreen-list__content-item-card"
                  title={item.title}
                  text={item.text}
                  label={item.label}
                  variant="boxless"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

FullscreenList.defaultProps = {
  data: {
    sectionTitle: "Latest Updates",
    buttonLabel: "Discover All",
    buttonLink: "/",
    list: [],
  },
}

FullscreenList.propTypes = {
  data: PropTypes.shape({
    sectionTitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    list: PropTypes.array,
  }),
}
