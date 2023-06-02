import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  version: "wc/v3",
})

export const variablesMapper = (obj) =>
  Object.keys(obj)
    ?.filter((item) => obj[item])
    ?.map((item) => `${item}=${obj[item]}`)
    ?.join("&")

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
