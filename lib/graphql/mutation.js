import { gql } from "@apollo/client"

export const M_SUBSCRIPTION = gql`
  mutation subscript($phoneNumber: String!) {
    submit2FormJoinUs(input: { phoneNumber: $phoneNumber }) {
      message
      status
    }
  }
`
