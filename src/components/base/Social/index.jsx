// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Social
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

export function Social({ data, className, size, shape, variant, stacked }) {
  const socialType = (item) => {
    if (item === "instagram") {
      return "icb ic-instagram"
    }
    if (item === "twitter") {
      return "icb ic-twitter"
    }
    if (item === "facebook") {
      return "icb ic-facebook-f"
    }
    if (item === "linkedin") {
      return "icb ic-linkedin-in"
    }
    if (item === "youtube") {
      return "icb ic-youtube"
    }
    if (item === "pinterest") {
      return "icb ic-pinterest-p"
    }
    if (item === "whatsapp") {
      return "icb ic-whatsapp"
    }
    if (item === "tiktok") {
      return "icb ic-tiktok"
    }
    if (item === "discord") {
      return "icb ic-discord"
    }
    if (item === "email") {
      return "icr ic-envelope"
    }
    if (item === "medium") {
      return "icb ic-medium-m"
    }
    if (item === "opensea") {
      return "icb ic-opensea"
    }
    return ""
  }

  const socialSize = () => `social-${size}`

  const socialShape = () => `social-${shape}`

  const socialVariant = () => {
    if (variant === "primary") {
      return "social-primary"
    }
    if (variant === "primary-inverse") {
      return "social-primary inverse"
    }
    if (variant === "white") {
      return "social-white"
    }
    if (variant === "outline-white") {
      return "social-outline-white"
    }
    return ""
  }

  return (
    <ul
      className={`social ${
        size && socialSize()
      } ${socialShape()} ${socialVariant()} ${className} ${
        stacked && "stacked"
      }`}
    >
      {data.map((item, i) => (
        <>
          {(stacked && (
            <li key={i} className="social-item">
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className={`social-link social-${item.type}`}>
                  <i className={item.icon || socialType(item.type)} />
                </div>
                {item.title}
              </a>
            </li>
          )) || (
            <li key={i} className="social-item">
              <a
                href={item.url}
                target="_blank"
                className={`social-link social-${item.type}`}
                rel="noreferrer"
              >
                <i className={item.icon || socialType(item.type)} />
              </a>
            </li>
          )}
        </>
      ))}
    </ul>
  )
}

Social.propTypes = {
  size: PropTypes.oneOf(["sm", "lg", ""]),
  shape: PropTypes.oneOf(["circle", "square"]),
  variant: PropTypes.oneOf([
    "primary",
    "primary-inverse",
    "white",
    "outline-white",
  ]),
  data: PropTypes.any,
  className: PropTypes.string,
}

Social.defaultProps = {
  size: "sm",
  shape: "circle",
  variant: "primary",
  data: [
    { type: "facebook", title: "", url: "#" },
    { type: "twitter", title: "", url: "#" },
    { type: "youtube", title: "", url: "#" },
    { type: "linkedin", title: "", url: "#" },
  ],
  className: "",
}
