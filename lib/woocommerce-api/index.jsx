import CoCartAPI from "@cocart/cocart-rest-api"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import { variablesMapper } from "lib/utils"

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  version: "wc/v3",
})

const CoCart = new CoCartAPI({
  url: process.env.WORDPRESS_URL,
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
// fetch all products variant from WooCommerce //
export async function fetchAllProductVariants(productId) {
  try {
    const response = await api.get(`products/${productId}/variations`)
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
// add to cart //
export async function addToCart(variables) {
  try {
    const response = await CoCart.post("cart/add-item", { ...variables })
    return response
  } catch (error) {
    throw new Error(error)
  }
}
