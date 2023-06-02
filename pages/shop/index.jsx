import ShopComponent from "@components/pages/shop/shop-component"

function ShopPage() {
  return (
    <>
      <ShopComponent title="Shop All Collection" />
    </>
  )
}
export default ShopPage

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  )
  return {
    props: {
      seo: {
        title: "Shop All Collection",
      },
      page: "shop-page",
    },
  }
}
