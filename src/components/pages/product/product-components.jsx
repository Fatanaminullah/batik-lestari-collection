import { Button, Carousel, Toast } from "@components/base"
import { FormatCurrency, convertHtmlToReact } from "lib/utils"
import { addToCart } from "lib/woocommerce-api"
import { useState } from "react"
import { toast } from "react-toastify"
import { useScrollAnim } from "src/hooks/hooks"
import { useGeneralStore } from "store"

function ProductComponent({ product, variants }) {
  const { setShowCartMenu, setCartData } = useGeneralStore((state) => state)
  const [trigger, anim] = useScrollAnim()
  const [loading, setLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(variants[0])
  const onAddToCart = async () => {
    setLoading(true)
    addToCart({
      id: `${selectedVariant.id}`,
      quantity: "1",
      variation: {
        attribute_size: selectedVariant?.attributes[0]?.option,
      },
    })
      .then(async (res) => {
        toast(
          <Toast
            variant="success"
            title={`${product?.name} successfully added to your cart!`}
            text=""
          />
        )
        await setCartData(res.data)
        setShowCartMenu(true)
      })
      .catch((error) =>
        toast(
          <Toast
            variant="error"
            text={error?.response?.data?.message || error?.message}
          />
        )
      )
      .finally(() => setLoading(false))
  }
  const onSelectVariant = (name, option) => {
    const selected = variants.find(
      (item) =>
        item?.attributes[0]?.name === name &&
        item?.attributes[0]?.option === option
    )
    setSelectedVariant(selected)
  }
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
                  selectedVariant?.sale_price ? "is-on-sale" : ""
                } ${anim(2)}`}
              >
                <span>
                  {FormatCurrency(
                    selectedVariant?.sale_price
                      ? selectedVariant?.regular_price
                      : selectedVariant?.price
                  )}
                </span>
                {selectedVariant?.sale_price ? (
                  <span className="sale-price">
                    {FormatCurrency(selectedVariant?.sale_price)}
                  </span>
                ) : null}
              </p>
              <div className="product-attributes">
                {product?.attributes?.map((item) => (
                  <>
                    <p className="product-attributes__title">{item.name}</p>
                    <div className="product-attributes-variant">
                      {item?.options?.map((opt, i) => (
                        <div
                          className={`product-attributes-variant__item ${
                            selectedVariant?.attributes[0]?.option === opt
                              ? "selected"
                              : ""
                          }`}
                          key={`attribute-item-${i}`}
                          onClick={() => onSelectVariant(item.name, opt)}
                          role="presentation"
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </>
                ))}
              </div>
              <Button
                className={`w-100 my-4 ${loading ? "loading" : ""}`}
                variant="dark"
                onClick={() => onAddToCart()}
              >
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
