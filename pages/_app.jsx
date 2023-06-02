import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "react-spring-bottom-sheet/dist/style.css"
import "react-toastify/dist/ReactToastify.min.css"

import "../src/assets/scss/dart-sass/base.css"
import "../src/assets/scss/dart-sass/main.scss"
import SEO from "@components/global/SEO"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { ToastContainer } from "react-toastify"
import Layout from "@components/global/Layout/layout"

//! Loading at top screen
import nProgress from "nprogress"
import { Router } from "next/router"

nProgress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", (url) => nProgress.start())
Router.events.on("routeChangeComplete", () => nProgress.done())
Router.events.on("routeChangeError", () => nProgress.done())

function MyApp({
  Component,
  pageProps = {
    page: "default",
    seo: {},
  },
}) {
  return (
    <HelmetProvider>
      <SEO {...pageProps?.seo} />

      <Helmet async>
        <body className={`bd-${pageProps?.page || ""}`} />
      </Helmet>

      <ToastContainer position="top-right" hideProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HelmetProvider>
  )
}

export default MyApp
