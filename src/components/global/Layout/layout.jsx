/* eslint-disable react-hooks/exhaustive-deps */
import { getCart } from "lib/woocommerce-api"
import { useEffect } from "react"
import { useGeneralStore } from "store"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Cart from "./Cart/cart"

function Layout({ children }) {
  const { setCartData } = useGeneralStore((state) => state)
  const fetchCart = async () => {
    const { data } = await getCart()
    setCartData(data)
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
