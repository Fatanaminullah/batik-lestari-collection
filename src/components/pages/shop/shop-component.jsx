import { Toast } from "@components/base"
import CardProduct from "@components/global/CardProduct"
import { fetchAllProducts } from "lib/woocommerce-api"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useScrollAnim } from "src/hooks/hooks"

function ShopComponent({ title, categoryId = null }) {
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
      toast(<Toast />, {
        type: "error",
        className: `Toastify__toast-filled`,
      })
    } finally {
      setIsFetching(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <ToastContainer position="top-right" hideProgressBar />

      <section className="sc-shop-component" ref={trigger}>
        <div className="pt-4 pb-main">
          <div className="container">
            <h1 className={`title ${anim(1)}`}>{title}</h1>
            <div className="row pt-4">
              {list?.data?.map((item, i) => (
                <div className="col-6 col-md-4" key={`shop-item-${i}`}>
                  <CardProduct
                    title={item?.name}
                    text={item?.price}
                    label={item?.categories[0]?.name}
                    img={item?.images[0]?.src}
                    variant="boxless"
                    imgRatio="r-3-4"
                    {...item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopComponent
