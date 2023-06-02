import CoCartAPI from "@cocart/cocart-rest-api"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import Cookies from "js-cookie"
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
export async function fetchAllCategories(variables) {
  try {
    const response = await api.get(
      `products/categories?${variablesMapper(variables)}`
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}
// add to cart //
export async function addToCart(variables) {
  try {
    const cartKey = Cookies.get("cart_key")
    const request = { ...variables }
    const response = await CoCart.post(
      `cart/add-item?${variablesMapper({ cart_key: cartKey })}`,
      {
        ...request,
      }
    )
    if (!cartKey) Cookies.set("cart_key", response?.data?.cart_key)
    return response
  } catch (error) {
    throw new Error(error.response.data.message || error.message)
  }
}
// get carts //
export async function getCart() {
  try {
    const cartKey = Cookies.get("cart_key")
    const response = await CoCart.get(`cart?cart_key=${cartKey}`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message || error.message)
  }
}
// delete cart //
export async function deleteCartItem(itemKey, callback) {
  try {
    const cartKey = Cookies.get("cart_key")
    const response = await CoCart.delete(
      `cart/item/${itemKey}?cart_key=${cartKey}`
    )
    if (callback) callback(response.data)
    return response
  } catch (error) {
    throw new Error(error.response.data.message || error.message)
  }
}
// update cart //
export async function updateCartItem(itemKey, quantity, callback) {
  try {
    const cartKey = Cookies.get("cart_key")
    const response = await CoCart.post(
      `cart/item/${itemKey}?cart_key=${cartKey}`,
      { quantity }
    )
    if (callback) callback(response.data)
    return response
  } catch (error) {
    throw new Error(error.response.data.message || error.message)
  }
}
