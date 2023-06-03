import { useFetchAPI, useScrollAnim } from "src/hooks/hooks"
import { useGeneralStore, useCheckoutStore } from "store"
import { Accordion } from "@components/base/Accordion"
import { Card } from "@components/base"
import { FormatCurrency } from "lib/utils"
import { Input, RadioGroup } from "@components/base/Forms"
import useStore from "store/useStore"
import {
  createOrder,
  fetchAllPaymentMethod,
  fetchAllShippingMethod,
} from "lib/woocommerce-api"
import { useState } from "react"
import CheckoutSummary from "./checkout-summary"
import CheckoutAddress from "./checkout-address"

function CheckoutComponent() {
  const [trigger, anim] = useScrollAnim()
  const { cartData } = useGeneralStore((state) => state)
  const checkoutStore = useStore(useCheckoutStore, (state) => state)
  const shippingMethods = useFetchAPI(fetchAllShippingMethod, { enabled: true })
  const paymentMethods = useFetchAPI(fetchAllPaymentMethod, { enabled: true })
  const onPlaceOrder = async () => {
    const data = {
      payment_method: checkoutStore?.paymentMethod?.id,
      payment_method_title: checkoutStore?.paymentMethod?.method_title,
      set_paid: true,
      billing: {
        ...checkoutStore.address,
      },
      shipping: {
        ...checkoutStore.address,
      },
      line_items: cartData?.items?.map((item) => ({
        variation_id: item.id,
        quantity: item.quantity.value,
      })),
      shipping_lines: [
        {
          method_id: checkoutStore?.shippingMethod?.method_id,
          method_title: checkoutStore?.shippingMethod?.method_title,
          total: "0",
        },
      ],
    }
    createOrder(data)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error))
  }
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
                  {shippingMethods?.loading || !shippingMethods?.data ? (
                    <div className="loading-dots-wrapper">
                      <h3 className="loading-dots">Loading</h3>
                    </div>
                  ) : (
                    <RadioGroup
                      groupLabel=""
                      className="mb-3"
                      name="shipping_methods"
                      value={checkoutStore?.shippingMethod?.method_id}
                      options={shippingMethods?.data?.data?.map((item) => ({
                        id: item.method_id,
                        label: item.method_title,
                        value: item.method_id,
                        className: "mb-3",
                        onChange: () => checkoutStore.setShippingMethod(item),
                      }))}
                    />
                  )}
                </div>
              </Accordion>
              <Accordion
                className="checkout-accordion"
                variant="line"
                title="Payment Methods"
                titleClassName="checkout-item-title"
              >
                <div className="payment-methods">
                  {paymentMethods?.loading || !paymentMethods?.data ? (
                    <div className="loading-dots-wrapper">
                      <h3 className="loading-dots">Loading</h3>
                    </div>
                  ) : (
                    <RadioGroup
                      groupLabel=""
                      className="mb-3"
                      name="payment_methods"
                      value={checkoutStore?.paymentMethod?.id}
                      options={paymentMethods?.data?.data
                        ?.filter((item) => item.enabled)
                        .map((item) => ({
                          id: item.id,
                          label: item.method_title,
                          value: item.id,
                          className: "mb-3",
                          onChange: () => checkoutStore.setPaymentMethod(item),
                        }))}
                    />
                  )}
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4 col-summary">
              <CheckoutSummary data={cartData} onPlaceOrder={onPlaceOrder} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutComponent
