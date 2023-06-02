import { Button } from "@components/base"
import { RatioImage } from "@components/base/Image"
import imgCoverPeekingBigImage from "@public/img/dummy/sections/cover/img_cover-peeking-big-image.jpg"

export function CoverPeekingBigImage({ title, text, buttons }) {
  return (
    <>
      <div className="sc-cover cover-peeking-big-image py-main">
        <div className="container">
          <div className="row row-2">
            <div className="col-12 col-left">
              <div className="cover-title">
                <h1>{title}</h1>
              </div>
              <div className="cover-content">
                <p className="cover-text">{text}</p>
                {buttons?.length > 0 ? (
                  <div className="cover-buttons">
                    {buttons.map((item, i) => (
                      <Button key={i} variant={item.variant} link={item.link}>
                        {item.text}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-12 col-right">
              <RatioImage
                src={imgCoverPeekingBigImage}
                alt="img-peeking-big-image"
                ratio="r-16-9"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
