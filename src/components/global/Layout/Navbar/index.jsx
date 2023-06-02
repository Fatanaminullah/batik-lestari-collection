import { Image } from "@components/base/Image"
import { Link } from "@components/base/Link"
import { useScrollAnim } from "src/hooks/hooks"
import { useGeneralStore } from "store"

function Navbar() {
  const { showCartMenu, setShowCartMenu } = useGeneralStore((state) => state)
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-left">
          <ul className="navbar-menu">
            <li className="navbar-menu__item">
              <Link href="/shop/men">Men</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/women">Women</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/couple">Couple</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/accessories">Accessories</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/kids">Kids</Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand" href="/">
          <Image
            src="/img/common/ic_main.jpeg"
            width={50}
            height={50}
            className="img-icon"
            alt="img-icon"
          />
        </Link>
        <div className="navbar-right">
          <div
            className="btn-cart"
            role="presentation"
            onClick={() => setShowCartMenu(!showCartMenu)}
          >
            <i className="icr ic-shopping-cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
