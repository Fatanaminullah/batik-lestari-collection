import { useMemo } from "react"

// Utils
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
// import { WebSocketLink } from "@apollo/client/link/ws"
import { setContext } from "@apollo/client/link/context"
import merge from "deepmerge"
import isEqual from "lodash/isEqual"

let apolloClient

/**
 *
 * @param {*} token
 * @returns
 */
const authLink = (token) =>
  setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }))

export const createApolloClient = (token) =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink(token).concat(
      createUploadLink({ uri: process.env.BASE_API_URL })
    ),
    cache: new InMemoryCache(),
    defaultOptions: {
      // watchQuery: {
      //    fetchPolicy: 'cache-and-network',
      //    errorPolicy: 'ignore',
      // },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
  })

/**
 *
 * @param {*} token
 * @param {*} initialState
 * @returns
 */
export function initializeApollo(token = null, initialState = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient(token)
  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })
    _apolloClient.cache.restore(data)
  }
  if (typeof window === "undefined") return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState, token) {
  const store = useMemo(
    () => initializeApollo(token, initialState),
    [initialState]
  )
  return store
}
