import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import { variablesMapper } from "lib/utils"

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  version: "wc/v3",
})

// fetch all products from WooCommerce //
export async function fetchAllProducts(variables) {
  try {
    const response = await api.get(`products?${variablesMapper(variables)}`)
    return response
  } catch (error) {
    throw new Error(error)
  }
}
// fetch all categories from WooCommerce //
export async function fetchAllCategories({ slug = null }) {
  try {
    const response = await api.get(
      `products/categories${slug ? `?slug=${slug}` : ""}`
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}
