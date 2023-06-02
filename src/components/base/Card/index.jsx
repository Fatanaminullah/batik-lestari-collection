// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Card
// ========================================================================================================================================

import PropTypes from "prop-types"
import imgDummy from "@public/img/dummy/img_dummy.jpg"
import { RatioImage, Image } from "../Image"
import { Link } from "../Link"

export function Card({
  id,
  forwardRef,
  variant,
  colLeft,
  colRight,
  label,
  labelClassName,
  title,
  titleClassName,
  text,
  textClassName,
  icon,
  cardIconClassName,
  iconWidth,
  img,
  imgHeight,
  imgRatio,
  imgAlt,
  imgOverlay,
  link,
  target,
  cardBgClassName,
  cardBodyClassName,
  className,
  children,
  onClick,
}) {
  const cardVariant = () => `card-${variant}`

  return (
    <Link
      href={link}
      className={`card ${cardVariant()} ${className}`}
      target={target}
      id={id}
      ref={forwardRef}
      onClick={onClick}
    >
      <div className="row row-0">
        {icon ||
          (img && (
            <div className={`col-bg ${colLeft}`}>
              {icon && (
                <div className={`card-icon ${cardIconClassName}`}>
                  <Image
                    src={icon}
                    className={`img-fluid card-icon-img ${iconWidth}`}
                    alt={title || "Icon"}
                  />
                </div>
              )}
              {img && (
                <div className={`card-bg ${cardBgClassName}`}>
                  <div className={`card-bg-img ${imgHeight}`}>
                    <div className={`bg-overlay bg-overlay-${imgOverlay}`} />
                    <RatioImage src={img} ratio={imgRatio} alt={imgAlt} fill />
                  </div>
                </div>
              )}
            </div>
          ))}
        <div className={`col-body ${colRight}`}>
          {(title || text || children) && (
            <div className={`card-body ${cardBodyClassName}`}>
              {label && (
                <span className={`card-label ${labelClassName}`}>{label}</span>
              )}
              {title && (
                <h4 className={`card-title ${titleClassName}`}>{title}</h4>
              )}
              {text && <p className={`card-text ${textClassName}`}>{text}</p>}
              {children}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  variant: PropTypes.oneOf(["outline", "elevated", "boxless", "overlay"]), // Set card variant
  colLeft: PropTypes.string, // Set col left utilities classes (e.g. .col-md-6, .col-lg-4, etc.)
  colRight: PropTypes.string, // Set col right utilities classes (e.g. .col-md-6, .col-lg-8, etc.)
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  text: PropTypes.string,
  textClassName: PropTypes.string,
  img: PropTypes.any,
  imgHeight: PropTypes.string,
  imgRatio: PropTypes.string,
  imgAlt: PropTypes.string,
  imgOverlay: PropTypes.string, // Set cover overlay %
  link: PropTypes.string,
  target: PropTypes.string,
  cardBgClassName: PropTypes.string,
  cardBodyClassName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.any,
  children: PropTypes.any,
}

Card.defaultProps = {
  variant: "basic",
  colLeft: "col-12",
  colRight: "col-12",
  label: "Label",
  labelClassName: "",
  title: "Title",
  titleClassName: "",
  text: "Text",
  textClassName: "",
  cardBgClassName: "",
  cardBodyClassName: "",
  className: "",
  imgHeight: "",
  imgRatio: "r-16-9",
  imgOverlay: "bottom-content-wrapper",
  link: "",
  target: null,
  img: imgDummy,
}
