import { create } from "zustand"

export const useGeneralStore = create((set) => ({
  showCartMenu: true,
  cartData: {},
  setShowCartMenu: (payload) => set({ showCartMenu: payload }),
  setCartData: (payload) => set({ cartData: payload }),
}))
