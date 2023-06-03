/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Toast } from "@components/base"
import { FormatCurrency } from "lib/utils"
import { deleteCartItem, updateCartItem } from "lib/woocommerce-api"
import { use, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useScrollAnim } from "src/hooks/hooks"
import { useGeneralPersistStore, useGeneralStore } from "store"
import useStore from "store/useStore"

function CartItem({ item, index }) {
  const persistStore = useStore(useGeneralPersistStore, (state) => state)
  const { showCartMenu } = useGeneralStore((state) => state)
  const [qty, setQty] = useState(item?.quantity?.value)
  const [isUpdating, setIsUpdating] = useState(false)
  const handleChange = async (type, value) => {
    setIsUpdating(true)
    switch (type) {
      case "add":
        return setQty(qty + 1)
      case "subtract":
        if (qty > 1) {
          return setQty(qty - 1)
        }
        return deleteCartItem(item.item_key, (data) =>
          persistStore.setCartData(data)
        ).catch((error) => {
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
        })
      case "type":
        return setQty(value)
      default:
        return null
    }
  }
  useEffect(() => {
    if (qty && showCartMenu && isUpdating) {
      updateCartItem(item.item_key, qty, (data) =>
        persistStore.setCartData(data)
      )
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
        .finally(() => setIsUpdating(false))
    }
  }, [qty])
  return (
    <Card
      colLeft="col-4"
      colRight="col-7 ml-3"
      variant="boxless"
      img={item?.featured_image}
      imgRatio="r-3-4"
      title={item.name}
      label=""
      text={FormatCurrency(item.totals.total / item.quantity.value)}
    >
      <div className="quantity-counter">
        <Button
          variant="outline-dark"
          className="left"
          onClick={() => handleChange("subtract")}
          preventDefault
        >
          <i className="icl ic-minus" />
        </Button>
        <input
          value={qty}
          onBlur={(e) => handleChange("type", e.target.value)}
        />
        <Button
          variant="outline-dark"
          className="right"
          onClick={() => handleChange("add")}
          preventDefault
        >
          <i className="icl ic-plus" />
        </Button>
      </div>
    </Card>
  )
}

export default CartItem
