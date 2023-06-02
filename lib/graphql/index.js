import { initializeApollo } from "lib/apollo"
import Cookies from "js-cookie"

const ValidateCookies = () => {
  const accessToken = Cookies.get(`${process.env.ACCESS_TOKEN}`)
  if (accessToken) return { token: accessToken }
  return { token: accessToken }
}
/**
 *
 * @param {*} opt
   Sample Opt: {
      mutation: M_CATALOGS, //or query key if query
      variables: { id: "1" },
      fetchPolicy: "no-cache"
   }
 * @param {*} token
 * @returns
 */
export const AsyncApollo = async (opt, token) => {
  try {
    let client
    const { query, mutation } = opt
    if (token) client = initializeApollo(token)
    else client = initializeApollo(ValidateCookies().token)
    let fetch
    if (query) fetch = client.query({ ...opt, errorPolicy: "all" })
    else if (mutation) fetch = client.mutate({ ...opt, errorPolicy: "all" })
    else
      return { errors: { message: "Need query, example: query / mutation " } }
    const { data, errors } = await fetch
    if (data) return { data }
    return { errors }
  } catch (error) {
    return { errors: error }
  }
}

export * from "./mutation"
export * from "./query"
