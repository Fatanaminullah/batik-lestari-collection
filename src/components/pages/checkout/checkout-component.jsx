import { useFetchAPI, useScrollAnim } from "src/hooks/hooks"
import { useGeneralStore, useCheckoutStore } from "store"
import { Accordion } from "@components/base/Accordion"
import { Card } from "@components/base"
import { FormatCurrency } from "lib/utils"
import { Input, RadioGroup } from "@components/base/Forms"
import useStore from "store/useStore"
import { fetchAllShippingMethod } from "lib/woocommerce-api"
import CheckoutSummary from "./checkout-summary"
import CheckoutAddress from "./checkout-address"

function CheckoutComponent() {
  const [trigger, anim] = useScrollAnim()
  const { cartData, checkoutData, setCheckoutData } = useGeneralStore(
    (state) => state
  )
  const checkoutStore = useStore(useCheckoutStore, (state) => state)
  const shippingMethods = useFetchAPI(fetchAllShippingMethod, { enabled: true })
  return (
    <section className="sc-checkout-component" ref={trigger}>
      <div className="py-main">
        <div className="container">
          <h1 className={`title ${anim(1)}`}>Checkout</h1>
          <div className="row">
            <div className="col-lg-8 col-detail">
              <Accordion
                className="checkout-accordion"
                variant="line"
                title="Purchase Summary"
                titleClassName="checkout-item-title"
              >
                {cartData?.items?.map((item, i) => (
                  <Card
                    key={`checkout-item-summary-${i}`}
                    className="checkout-item__summary"
                    colLeft="col-2"
                    colRight="col-9 ml-3"
                    variant="boxless"
                    img={item?.featured_image}
                    imgRatio="r-3-4"
                    title={item.name}
                    label=""
                    text={`${item?.quantity?.value} x ${FormatCurrency(
                      item.totals.total / item.quantity.value
                    )}`}
                  />
                ))}
              </Accordion>
              <Accordion
                className="checkout-accordion"
                variant="line"
                title="Contact"
                titleClassName="checkout-item-title"
              >
                <Input
                  placeholder="Enter your Email Address"
                  label="Enter your Email Address"
                  floatingLabel
                  className="my-3"
                  value={checkoutStore?.contact}
                  onChange={(e) => {
                    checkoutStore?.setContact(e.target.value)
                  }}
                />
              </Accordion>
              <Accordion
                className="checkout-accordion"
                variant="line"
                title="Shipping Address"
                titleClassName="checkout-item-title"
              >
                <CheckoutAddress />
              </Accordion>
              <Accordion
                className="checkout-accordion"
                variant="line"
                title="Shipping Methods"
                titleClassName="checkout-item-title"
              >
                <div className="shipping-methods">
                  {shippingMethods?.loading ? (
                    <div className="loading-dots-wrapper">
                      <h3 className="loading-dots">Loading</h3>
                    </div>
                  ) : (
                    <RadioGroup
                      groupLabel="Gender"
                      className="mb-3"
                      name="shipping_methods"
                      options={shippingMethods?.data?.data?.map((item) => ({
                        id: item.method_title,
                        label: item.method_title,
                        value: item.method_title,
                      }))}
                    />
                  )}
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4 col-summary">
              <CheckoutSummary data={cartData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutComponent
