import ProductComponent from "@components/pages/product/product-components"
import { fetchAllProducts } from "lib/woocommerce-api"

function ProductPage({ product }) {
  return (
    <>
      <ProductComponent product={product} />
    </>
  )
}
export default ProductPage

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  )
  const { slug } = ctx.query
  const product = await fetchAllProducts({ slug })
  if (!product && !product?.data?.length) {
    return {
      notFound: true,
    }
  }
  const { data } = product
  return {
    props: {
      product: data[0],
      seo: {
        title: data[0]?.yoast_head_json?.title,
        description: data[0]?.yoast_head_json?.description || "",
        richlink: data[0]?.images[0]?.src,
        canonical: `${process.env.SITE_URL}/product/${slug}`,
        url: "",
      },
      page: `product-detail-page ${slug}`,
    },
  }
}
