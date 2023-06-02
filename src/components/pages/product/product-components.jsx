import { Button, Carousel } from "@components/base"
import { FormatCurrency, convertHtmlToReact } from "lib/utils"
import { useScrollAnim } from "src/hooks/hooks"

function ProductComponent({ product }) {
  const [trigger, anim] = useScrollAnim()
  return (
    <section className="sc-product-component" ref={trigger}>
      <div className="py-main">
        <div className="container-fluid container-md">
          <div className="row">
            <div className="col-lg-6 col-img">
              <Carousel
                data={product?.images?.map((item) => ({
                  img: item.src,
                  title: "",
                  text: "",
                  label: "",
                  imgOverlay: 10,
                }))}
                theme="light"
              />
            </div>
            <div className="col-lg-6 col-text">
              <h1 className={anim(1)}>{product?.name}</h1>
              <p
                className={`price ${
                  product?.sale_price ? "is-on-sale" : ""
                } ${anim(2)}`}
              >
                <span>
                  {FormatCurrency(
                    product?.sale_price
                      ? product?.regular_price
                      : product?.price
                  )}
                </span>
                {product?.sale_price ? (
                  <span className="sale-price">
                    {FormatCurrency(product?.sale_price)}
                  </span>
                ) : null}
              </p>
              <Button className="w-100 my-4" variant="dark">
                Add to Cart
              </Button>
              <h4 className={anim(3)}>About</h4>
              <div className={anim(4)}>
                {convertHtmlToReact(product?.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductComponent
