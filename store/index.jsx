import { create } from "zustand"

export const useGeneralStore = create((set) => ({
  showCartMenu: false,
  cartData: {},
  setShowCartMenu: (payload) => set({ showCartMenu: payload }),
  setCartData: (payload) => set({ cartData: payload }),
}))
