import { Link } from "@components/base/Link"
import { Modal } from "@components/base/Modal"
import { useGeneralStore } from "store"

function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useGeneralStore(
    (state) => state
  )
  return (
    <>
      <Modal
        id="mobile-menu"
        isShowing={showMobileMenu ? "mobile-menu" : null}
        hide={() => setShowMobileMenu(false)}
        size="sm"
        className="modal-mobile-menu"
      >
        <ul className="menu">
          <li className="menu__item">
            <Link href="/shop/men">
              Men <i className="icr ic-chevron-right" />{" "}
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/shop/women">
              Women <i className="icr ic-chevron-right" />{" "}
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/shop/couple">
              Couple <i className="icr ic-chevron-right" />{" "}
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/shop/accessories">
              Accessories <i className="icr ic-chevron-right" />{" "}
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/shop/kids">
              Kids <i className="icr ic-chevron-right" />{" "}
            </Link>
          </li>
        </ul>
      </Modal>
    </>
  )
}

export default MobileMenu
