/* eslint-disable react-hooks/exhaustive-deps */
import { getCart } from "lib/woocommerce-api"
import { useEffect } from "react"
import { useGeneralPersistStore, useGeneralStore } from "store"
import useStore from "store/useStore"
import Cart from "./Cart/cart"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
  const checkoutStore = useStore(useGeneralPersistStore, (state) => state)
  const fetchCart = async () => {
    const { data } = await getCart()
    setTimeout(() => {
      if (checkoutStore) {
        checkoutStore.setCartData(data)
      }
    }, 1000)
  }
  useEffect(() => {
    fetchCart()
  }, [])
  return (
    <>
      <Navbar />
      <Cart />
      {children}
      <Footer />
    </>
  )
}

export default Layout
