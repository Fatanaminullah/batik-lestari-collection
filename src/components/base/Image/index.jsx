/* eslint-disable @next/next/no-img-element */
// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Image
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"
import NextImage from "next/image"

export function Image({
  className,
  id,
  src,
  alt,
  onClick,
  priority,
  quality,
  fill,
  sizes,
  ...props
}) {
  return (
    <>
      <NextImage
        id={id}
        src={src}
        alt={alt}
        className={`${className}`}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onClick={onClick}
        fill={fill}
        {...props}
      />
    </>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  src: PropTypes.any,
  alt: PropTypes.string,
  onClick: PropTypes.any,
  priority: PropTypes.bool,
  quality: PropTypes.number,
  fill: PropTypes.bool,
  sizes: PropTypes.string,
}

Image.defaultProps = {
  className: "img-fluid",
  alt: "Image",
  priority: false,
  quality: 75,
  fill: false,
  sizes: "(max-width: 768px) 55vw, (max-width: 1200px) 50vw, 65vw",
}

export function RatioImage({
  className,
  id,
  ratio,
  src,
  ratioClassName,
  alt,
  onClick,
  priority,
  quality,
  fill,
  sizes,
  ...props
}) {
  return (
    <div
      className={`image ratio ${ratio} ${ratioClassName}`}
      id={id}
      onClick={onClick}
      role="presentation"
    >
      <div className="outer-content">
        <div className="inner-content">
          <NextImage
            src={src}
            alt={alt}
            className={`${className}`}
            priority={priority}
            quality={quality}
            fill={fill}
            sizes={sizes}
            {...props}
          />
        </div>
      </div>
    </div>
  )
}

RatioImage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  ratio: PropTypes.string, // e.g. .r-16-9, .r-sm-3-2, .r-md-4-3, .r-lg-5-4, .r-xl-1-1
  src: PropTypes.any,
  alt: PropTypes.string,
  ratioClassName: PropTypes.string,
  onClick: PropTypes.any,
  priority: PropTypes.bool,
  quality: PropTypes.number,
  fill: PropTypes.bool,
  sizes: PropTypes.string,
}

RatioImage.defaultProps = {
  className: "",
  ratioClassName: "",
  ratio: "r-16-9",
  alt: "Image",
  priority: false,
  quality: 75,
  fill: false,
  sizes: "(max-width: 768px) 55vw, (max-width: 1200px) 50vw, 65vw",
}
