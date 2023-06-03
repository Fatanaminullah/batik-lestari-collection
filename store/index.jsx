import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useGeneralStore = create((set) => ({
  showCartMenu: false,
  cartData: {},
  checkoutData: {
    contact: "",
    address: {},
  },
  shippingMethod: {},
  paymentMethod: {},
  setShowCartMenu: (payload) => set({ showCartMenu: payload }),
  setCartData: (payload) => set({ cartData: payload }),
  setCheckoutData: (payload) => set({ checkoutData: payload }),
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
      shippingMethod: {},
      paymentMethod: {},
      cartData: {},
      setContact: (contact) => set({ contact }),
      setAddress: (address) => set({ address }),
      setShippingMethod: (shippingMethod) => set({ shippingMethod }),
      setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
      setCartData: (payload) => set({ cartData: payload }),
    }),
    {
      name: "checkout-store",
    }
  )
)

// export const useGeneralStore = createStore(
//   persist(
//     {
//       key: "general",
//       denylist: ["showCartMenu"],
//     },
//     (set) => ({
//       showCartMenu: false,
//       cartData: {},
//       setShowCartMenu: (payload) =>
//         set((state) => ({
//           showCartMenu: payload,
//         })),
//       setCartData: (payload) =>
//         set((state) => ({
//           cartData: payload,
//         })),
//     })
//   )
// )
