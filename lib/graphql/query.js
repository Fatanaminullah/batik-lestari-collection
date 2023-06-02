import { gql } from "@apollo/client"
import { F_ABOUT_PAGE } from "./fragment"

export const Q_ABOUT_US_PAGE = gql`
  query Q_ABOUT_US_PAGE {
    page(id: "about-us", idType: URI) {
      ${F_ABOUT_PAGE}
    }
  }
`
