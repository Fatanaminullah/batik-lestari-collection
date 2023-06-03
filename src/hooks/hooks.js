/* eslint-disable react-hooks/exhaustive-deps */
// ========================================================================================================================================
// Hooks
// ========================================================================================================================================

import {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react"
import { useInView } from "react-intersection-observer"

// ==========================================================================
// Scroll Anim
// ==========================================================================

/**
 *
 * @param {*} animation
 * @returns
 *
 * e.g .fadeInUp, .fadeInDown, etc.
 * Please check base/animations.scss for complete list of animations
 */

export const useScrollAnim = (animation = "fadeInUp") => {
  const [ref, inView] = useInView({
    threshold: [0.125, 0.5, 0.75],
    triggerOnce: true,
  })

  const [animate, setAnimate] = useState(() => ({
    text: `scroll-${animation}`,
    hasSet: false,
  }))

  const anim = useCallback(
    (delay, replaceAnim = null) => {
      if (replaceAnim) {
        return animate.hasSet
          ? `scroll-${replaceAnim} ${replaceAnim} d${delay}`
          : `scroll-${replaceAnim}`
      }
      return animate.hasSet
        ? `${animate.text} ${animation} d${delay}`
        : animate.text
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [animate]
  )

  useEffect(() => {
    if (inView) {
      setAnimate((prevState) => ({
        ...prevState,
        hasSet: true,
      }))
    }
  }, [inView])

  return [ref, anim]
}

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

// ==========================================================================
// Custom Navigation Hooks for Swiper
// ==========================================================================

/**
 *
 * @param {*}
 * @returns
 *
 */
export const useCustomNavSwiper = () => {
  const swiperRef = useRef(null)
  const [index, setIndex] = useState(swiperRef?.current?.swiper?.realIndex)
  const handlePrev = useCallback(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
      setIndex(swiperRef?.current?.swiper?.realIndex)
    } else if (swiperRef?.current) {
      swiperRef?.current?.slidePrev()
      setIndex(swiperRef?.current?.realIndex)
    }
    return null
  }, [])

  const handleNext = useCallback(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext()
      setIndex(swiperRef?.current?.swiper?.realIndex)
    } else if (swiperRef?.current) {
      swiperRef?.current?.slideNext()
      setIndex(swiperRef?.current?.realIndex)
    }
    return null
  }, [])
  return [swiperRef, handlePrev, handleNext, index || 0]
}

const nullDimensions = {
  innerHeight: null,
  innerWidth: null,
  outerHeight: null,
  outerWidth: null,
}

function getDimensions() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

/**
 * useWindowSize hook
 * A hook that provides information of the dimensions of the window
 *
 * @returns Dimensions of the window
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window === "undefined") {
      return nullDimensions
    }
    return getDimensions()
  })

  function onResize() {
    setWindowSize(getDimensions())
  }

  // set resize handler once on mount and clean before unmount
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") {
      return () => {}
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return windowSize
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener("mousemove", handlePosition)
    return () => window.removeEventListener("mousemove", handlePosition)
  }, [])

  return mousePosition
}

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("down")
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const { scrollY } = window

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollOffset(scrollY)
      setScrollDir(scrollY > lastScrollY ? "down" : "up")
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollDir])

  return [scrollDir, scrollOffset]
}

export function useFetchAPI(func, variables) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fetched, setFetched] = useState(false)

  const fetchData = async () => {
    try {
      const result = await func(variables)
      setData(result)
      setLoading(false)
      setFetched(true)
    } catch (err) {
      setError(err)
      setLoading(false)
      setFetched(true)
    }
  }

  const refetch = async () => {
    setFetched(false)
    setLoading(true)
  }

  useEffect(() => {
    if (!fetched) {
      fetchData()
    }
  }, [func, variables, fetched])

  return { data, loading, error, refetch }
}
