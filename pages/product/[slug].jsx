import ProductComponent from "@components/pages/product/product-components"
import { fetchAllProductVariants, fetchAllProducts } from "lib/woocommerce-api"
import { ToastContainer } from "react-toastify"

function ProductPage({ product, variants }) {
  return (
    <>
      <ProductComponent product={product} variants={variants} />
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
  const variants = await fetchAllProductVariants(product?.data[0].id)
  if (
    !product &&
    !product?.data?.length &&
    !variants &&
    !variants?.data?.length
  ) {
    return {
      notFound: true,
    }
  }
  const { data } = product
  return {
    props: {
      product: data[0],
      variants: variants?.data,
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
