import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  version: "wc/v3",
})

// fetch all products from WooCommerce //
export async function fetchAllProducts() {
  try {
    const response = await api.get("products")
    return response
  } catch (error) {
    throw new Error(error)
  }
}
// fetch all categories from WooCommerce //
export async function fetchAllCategories() {
  try {
    const response = await api.get("products/categories")
    return response
  } catch (error) {
    throw new Error(error)
  }
}
