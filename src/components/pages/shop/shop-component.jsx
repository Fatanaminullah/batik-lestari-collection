import { Toast } from "@components/base"
import CardProduct from "@components/global/CardProduct"
import { FormatCurrency } from "lib/utils"
import { fetchAllProducts } from "lib/woocommerce-api"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useScrollAnim } from "src/hooks/hooks"

function ShopComponent({ title, categoryId = null }) {
  const Router = useRouter()
  const [trigger, anim] = useScrollAnim()
  const [list, setList] = useState()
  const [isFetching, setIsFetching] = useState()
  const fetchData = async () => {
    setIsFetching(true)
    try {
      const data = await fetchAllProducts({
        category: categoryId,
        per_page: 10,
      })
      setList(data)
    } catch (error) {
      toast(<Toast text={error?.response?.data?.message || error?.message} />, {
        type: "error",
        className: `Toastify__toast-filled`,
      })
    } finally {
      setIsFetching(false)
    }
  }
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router.asPath])
  return (
    <>
      <section className="sc-shop-component" ref={trigger}>
        <div className="pt-4 pb-main">
          <div className="container">
            <h1 className={`title ${anim(1)}`}>{title}</h1>
            <div className="row pt-4">
              {isFetching ? (
                <div className="loading-dots-wrapper">
                  <h3 className="loading-dots">Loading</h3>
                </div>
              ) : (
                list?.data?.map((item, i) => (
                  <div className="col-6 col-md-4" key={`shop-item-${i}`}>
                    <CardProduct
                      title={item?.name}
                      text={FormatCurrency(item?.price)}
                      label={item?.categories[0]?.name}
                      img={item?.images[0]?.src}
                      variant="boxless"
                      imgRatio="r-3-4"
                      {...item}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopComponent
