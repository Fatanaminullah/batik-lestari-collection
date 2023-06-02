import ShopComponent from "@components/pages/shop/shop-component"
import { fetchAllCategories } from "lib/woocommerce-api"
import React from "react"

function ShopPage({ category }) {
  return (
    <>
      <ShopComponent categoryId={category?.id} title={category?.name} />
    </>
  )
}
export default ShopPage

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  )
  const { slug } = ctx.query
  const category = await fetchAllCategories({ slug })
  if (!category?.data?.length) {
    return {
      notFound: true,
    }
  }
  const { data } = category
  return {
    props: {
      category: data[0],
      seo: {
        title: data[0]?.yoast_head_json?.title,
        description: data[0]?.yoast_head_json?.description,
      },
      page: `shop-${slug}-page`,
    },
  }
}
