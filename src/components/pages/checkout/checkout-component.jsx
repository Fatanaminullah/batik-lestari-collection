import { Card, Toast } from "@components/base"
import { Accordion } from "@components/base/Accordion"
import { Input, RadioGroup } from "@components/base/Forms"
import { FormatCurrency } from "lib/utils"
import {
  createOrder,
  deleteCart,
  fetchAllPaymentMethod,
  fetchAllShippingMethod,
} from "lib/woocommerce-api"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"
import { useFetchAPI, useScrollAnim } from "src/hooks/hooks"
import { useGeneralPersistStore, useGeneralStore } from "store"
import useStore from "store/useStore"
import CheckoutAddress from "./checkout-address"
import CheckoutSummary from "./checkout-summary"

function CheckoutComponent() {
  const Router = useRouter()
  const [trigger, anim] = useScrollAnim()
  const [loading, setLoading] = useState(false)
  const { shippingMethod, paymentMethod, setShippingMethod, setPaymentMethod } =
    useGeneralStore((state) => state)
  const checkoutStore = useStore(useGeneralPersistStore, (state) => state)
  const shippingMethods = useFetchAPI(fetchAllShippingMethod, { enabled: true })
  const paymentMethods = useFetchAPI(fetchAllPaymentMethod, { enabled: true })
  const onPlaceOrder = async () => {
    setLoading(true)
    const data = {
      payment_method: paymentMethod?.id,
      payment_method_title: paymentMethod?.method_title,
      set_paid: true,
      billing: {
        email: checkoutStore?.contact,
        ...checkoutStore.address,
      },
      shipping: {
        ...checkoutStore.address,
      },
      line_items: checkoutStore?.cartData?.items?.map((item) => ({
        variation_id: item.id,
        quantity: item.quantity.value,
      })),
      shipping_lines: [
        {
          method_id: shippingMethod?.method_id,
          method_title: shippingMethod?.method_title,
          total: "0",
        },
      ],
    }
    createOrder(data)
      .then(async (res) => {
        Router.push(`/checkout/success/${res?.data?.id}`)
        await deleteCart(() => checkoutStore.setCartData({}))
        toast(
          <Toast
            title="Order Successfully Placed"
            text=""
            variant="success"
            type="filled"
          />,
          {
            type: "success",
            className: `Toastify__toast-filled`,
          }
        )
      })
      .catch((error) =>
        toast(
          <Toast
            title={error?.message}
            text=""
            variant="error"
            type="filled"
          />,
          {
            type: "error",
            className: `Toastify__toast-filled`,
          }
        )
      )
      .finally(() => setLoading(false))
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
                {checkoutStore?.cartData?.items?.map((item, i) => (
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
                      value={shippingMethod?.method_id}
                      options={shippingMethods?.data?.data?.map((item) => ({
                        id: item.method_id,
                        label: item.method_title,
                        value: item.method_id,
                        className: "mb-3",
                        onChange: () => setShippingMethod(item),
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
                      value={paymentMethod?.id}
                      options={paymentMethods?.data?.data
                        ?.filter((item) => item.enabled)
                        .map((item) => ({
                          id: item.id,
                          label: item.method_title,
                          value: item.id,
                          className: "mb-3",
                          onChange: () => setPaymentMethod(item),
                        }))}
                    />
                  )}
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4 col-summary">
              <CheckoutSummary
                data={checkoutStore?.cartData}
                onPlaceOrder={onPlaceOrder}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutComponent
