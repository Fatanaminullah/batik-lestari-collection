import { Cover } from "@components/base"
import { fetchOrderById } from "lib/woocommerce-api"

function SuccessPage({ order }) {
  return (
    <>
      <section className="sc-success-payment">
        <Cover
          img="/img/common/bg_success.jpeg"
          label={`Order #${order.id}`}
          title="Order Successfully Placed!"
          text="Your Batik order will be processed and delivered to you. Please check your email to see your order detail"
          contentPosition="bottom-right"
        />
      </section>
    </>
  )
}
export default SuccessPage

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  )
  const { id } = ctx.query
  const order = await fetchOrderById(id)
  return {
    props: {
      order: order.data,
      seo: {
        title: "Order Success",
      },
      page: `order-success`,
    },
  }
}
