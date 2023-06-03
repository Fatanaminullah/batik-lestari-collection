import { Button } from "@components/base"
import { FormatCurrency } from "lib/utils"
import { useScrollAnim } from "src/hooks/hooks"

function CheckoutSummary({ data, onPlaceOrder }) {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="checkout-summary-box" ref={trigger}>
      <h4 className={`title mb-4 ${anim(1)}`}>Order Summary</h4>
      <div className={`d-flex justify-content-between ${anim(2)}`}>
        <p className="">Subtotal</p>
        <p className="font-weight-bold">
          {FormatCurrency(data?.totals?.subtotal)}
        </p>
      </div>
      <div className={`d-flex justify-content-between ${anim(3)}`}>
        <p className="">Shipping</p>
        <p className="font-weight-bold">
          <>{FormatCurrency(0)}</>
        </p>
      </div>
      <div className={`d-flex justify-content-between mb-2 ${anim(4)}`}>
        <p className="font-weight-bold">Total to Pay</p>
        <p className="font-weight-bold">
          {FormatCurrency(data?.totals?.subtotal)}
        </p>
      </div>
      <Button variant="dark" className="w-100" onClick={() => onPlaceOrder()}>
        Place Order
      </Button>
    </div>
  )
}

export default CheckoutSummary
