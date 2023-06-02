import { Card } from "@components/base"
import { useScrollAnim } from "src/hooks/hooks"

function CardProduct({ ...props }) {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="card-product" ref={trigger}>
      <Card
        {...props}
        cardBgClassName={anim(1, "revealBlockInUp")}
        cardBodyClassName={anim(1, "fadeInUp")}
        link={`/product/${props.slug}`}
      />
    </div>
  )
}

export default CardProduct
