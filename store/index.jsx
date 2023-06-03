import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useGeneralStore = create((set) => ({
  showCartMenu: false,
  showMobileMenu: false,
  shippingMethod: {},
  paymentMethod: {},
  setShowMobileMenu: (showMobileMenu) => set({ showMobileMenu }),
  setShowCartMenu: (showCartMenu) => set({ showCartMenu }),
  setShippingMethod: (shippingMethod) => set({ shippingMethod }),
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}))

// the store itself does not need any change
export const useGeneralPersistStore = create(
  persist(
    (set, get) => ({
      contact: "",
      address: {
        first_name: "",
        last_name: "",
        phone: "",
        address_1: "",
        city: "",
        state: "",
        postcode: "",
        country: "ID",
      },
      cartData: {},
      setContact: (contact) => set({ contact }),
      setAddress: (address) => set({ address }),
      setCartData: (payload) => set({ cartData: payload }),
    }),
    {
      name: "checkout-store",
    }
  )
)
