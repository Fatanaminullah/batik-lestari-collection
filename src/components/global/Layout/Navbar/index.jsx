import { Image } from "@components/base/Image"
import { Link } from "@components/base/Link"
import { useScrollAnim } from "src/hooks/hooks"

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-left">
          <ul className="navbar-menu">
            <li className="navbar-menu__item">
              <Link href="/shop/men">Men</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/men">Women</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/men">Couple</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/men">Accessories</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/shop/men">Kids</Link>
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
          <div className="btn-cart" role="presentation">
            <i className="icr ic-shopping-cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
