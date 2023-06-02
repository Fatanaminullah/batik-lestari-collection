import { Button, Card } from "@components/base"
import { fetchAllCategories, fetchAllProducts } from "lib/woocommerce-api"

export default function Home({ categories }) {
  return (
    <>
      <section className="sc-home-collection">
        <div className="container py-main">
          <div className="row">
            {categories
              ?.filter((item) => item.parent === 0)
              ?.map((item, i) => (
                <div
                  className="col-md-6 mb-3"
                  key={`home-collection-item-${i}`}
                >
                  <Card
                    variant="overlay"
                    img={item?.image?.src}
                    imgRatio="r-1-1"
                    title={item.name}
                    label=""
                    text=""
                  >
                    <Button className="w-100" variant="outline-white">
                      Shop Now
                    </Button>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const categories = await fetchAllCategories()

  if (!categories) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      categories: categories.data,
      page: "home",
      seo: {
        title: "Home",
        canonical: "/",
      },
    },
    revalidate: 60, // regenerate page with new data fetch after 60 seconds
  }
}
