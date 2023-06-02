import { Link } from "@components/base/Link"

function Footer() {
  const menuLinks = [
    { title: "FAQ", link: "/faq" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "Terms & Conditions", link: "/terms-conditions" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ]
  const paymentList = [
    "/img/common/ic_mastercard.svg",
    "/img/common/ic_gopay.svg",
    "/img/common/ic_visa.svg",
  ]
  const socialList = [
    {
      name: "Instagram",
      icon: "ic-instagram",
      link: "https://www.instagram.com/batiklestari38/",
    },
    {
      name: "Facebook",
      icon: "ic-facebook-f",
      link: "https://www.facebook.com/profile.php?id=100052518745989",
    },
  ]
  const date = new Date()
  return (
    <footer className="footer-2">
      <section className="footer-header">
        <div className="row-payment container">
          <div className="row">
            <div className="col-md-6 payment-content">
              <p className="title">Accepted Payment</p>
              <ul className="payment-list">
                {paymentList.map((item, i) => (
                  <li className="payment-item" key={`payment-${i}`}>
                    <img src={item} alt="payment" className="img-fluid" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 social-content">
              <p className="title">FOLLOW US</p>
              <div className="social-list">
                {socialList.map((item, i) => (
                  <Link href={item.link} className="social-item" key={i}>
                    <i className={`icb ${item.icon}`} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-copyright mt-3 mt-md-0">
              <div className="site">
                © {date.getFullYear()} Batik Lestari Collection. Site by{" "}
                <a
                  href="https://fatanaminullah.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fatan Aminullah
                </a>
              </div>
            </div>
            <div className="col-md-8 col-menu">
              <div className="row w-100 justify-content-end">
                {menuLinks.map((item, i) => (
                  <div className="col-12 col-md-auto mb-3 mb-md-0" key={i}>
                    <Link className="h5 menu-item" href={item.link}>
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
