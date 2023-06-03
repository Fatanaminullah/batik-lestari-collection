import CheckoutComponent from "@components/pages/checkout/checkout-component"
import React from "react"

function CheckoutPage() {
  return (
    <>
      <CheckoutComponent />
    </>
  )
}
export default CheckoutPage

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  )
  return {
    props: {
      seo: {
        title: "Checkout",
      },
      page: "checkout",
    },
  }
}
