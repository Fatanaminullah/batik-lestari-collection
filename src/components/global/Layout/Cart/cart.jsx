import { Button } from "@components/base"
import { Modal } from "@components/base/Modal"
import { FormatCurrency } from "lib/utils"
import { useRouter } from "next/router"
import { useGeneralPersistStore, useGeneralStore } from "store"
import useStore from "store/useStore"
import CartItem from "./cart-item"

function Cart() {
  const { showCartMenu, setShowCartMenu } = useGeneralStore((state) => state)
  const persistStore = useStore(useGeneralPersistStore, (state) => state)
  const Router = useRouter()
  return (
    <>
      <Modal
        id="cart-menu"
        isShowing={showCartMenu ? "cart-menu" : null}
        title="Cart"
        hide={() => setShowCartMenu(false)}
        size="sm"
        className="modal-cart-menu"
      >
        <div className="cart-menu-items">
          {persistStore &&
            persistStore?.cartData?.items?.map((item, i) => (
              <CartItem item={item} index={i} key={`cart-menu-items-${i}`} />
            ))}
        </div>
        <div className="cart-menu-bottom">
          <div className="row mx-0 justify-content-between">
            <p>Subtotal</p>
            <h4>{FormatCurrency(persistStore?.cartData?.totals?.subtotal)}</h4>
          </div>
          <p className="info">
            Shipping, taxes, and discounts codes calculated at checkout.
          </p>
          <Button
            variant="dark"
            onClick={() => {
              setShowCartMenu(false)
              Router.push("/checkout")
            }}
          >
            Checkout
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default Cart
