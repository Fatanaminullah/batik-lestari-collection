import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useGeneralStore = create((set) => ({
  showCartMenu: false,
  cartData: {},
  checkoutData: {
    contact: "",
    address: {},
  },
  setShowCartMenu: (payload) => set({ showCartMenu: payload }),
  setCartData: (payload) => set({ cartData: payload }),
  setCheckoutData: (payload) => set({ checkoutData: payload }),
}))

// the store itself does not need any change
export const useCheckoutStore = create(
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
      setContact: (contact) => set({ contact }),
      setAddress: (address) => set({ address }),
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
