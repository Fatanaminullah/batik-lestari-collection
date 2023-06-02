import nookies from "nookies"
import Cookies from "js-cookie"
import axios from "axios"
import HTMLReactParser from "html-react-parser"
import currencyFormatter from "currency-formatter"

/**
 * Token Validation - Check if login or not
 * @param {*} ctx
 * @returns //{ userStatus: bool, token: String }
 */
export const TokenValidation = async (ctx) => {
  let accessToken
  if (ctx) accessToken = nookies.get(ctx)[`${process.env.ACCESS_TOKEN}`]
  else accessToken = Cookies.get(process.env.ACCESS_TOKEN)
  if (accessToken) return { userStatus: true, token: accessToken }
  return { userStatus: false, token: null }
}

/**
 * will return {data, errors}
 * @param {*} opt type: object
   sample: {
      method: "POST",
      variables: {...}, -> optional
      url: "/login" -> required
      auth: true => if need headers with Authorization Token -> optional
      ctx: Context from SSR -> optional
   }
 */
export const AsyncRestAPI = async (opt) => {
  // validate arguments
  if (typeof opt !== "object")
    return { errors: { message: "Options parameter must be an object type" } }

  const { method, variables, url, auth, ctx } = opt

  // Check if login / not
  let authToken
  if (auth) {
    // eslint-disable-next-line camelcase
    const { userStatus, token } = TokenValidation(ctx)
    if (!userStatus) return { errors: "Your not login" }
    authToken = token
  }

  // validate if no method
  if (!method) return { errors: { message: "Method is REQUIRED etc POST/GET" } }

  if (!url) return { errors: { message: "URL is required" } }

  // validate POST / GET
  try {
    //  const baseUrl = process.env.BASE_API_URL
    const baseUrl = "https://jsonplaceholder.typicode.com"
    if (method?.toLowerCase() === "post") {
      const { data } = await axios.post(
        `${baseUrl}${url}`,
        variables ? { ...variables } : null,
        auth
          ? {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          : null
      )
      return { data }
    }
    if (method.toLowerCase() === "get") {
      const { data } = await axios.get(
        `${baseUrl}${url}`,
        auth
          ? {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          : null
      )
      return { data }
    }

    return { errors: "Methos must be POST / GET" }
  } catch (error) {
    return { errors: error }
  }
}

export const convertHtmlToReact = (data) => {
  if (data && typeof data === "string") return HTMLReactParser(data)
  return data
}

export const variablesMapper = (obj) =>
  Object.keys(obj)
    ?.filter((item) => obj[item])
    ?.map((item) => `${item}=${obj[item]}`)
    ?.join("&")

export const FormatCurrency = (num) =>
  currencyFormatter.format(num, { code: "IDR", locale: "id-ID" })
