// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Buttons
// ========================================================================================================================================

import { useMemo } from "react"
import PropTypes from "prop-types"
import { Link } from "../Link"

// ==========================================================================
// Button
// ==========================================================================

export function Button({
  id,
  variant,
  iconLeft,
  iconRight,
  link,
  target,
  size,
  className,
  onClick,
  children,
  disabled,
  type,
}) {
  const btnSize = useMemo(() => {
    if (!(size === "")) {
      return ` btn-${size}`
    }

    return ""
  }, [size])

  const btnVariant = () => ` btn-${variant}`

  // prettier-ignore
  if (link) {
    return (
      <Link
        href={link}
        target={target}
        className={`btn${btnVariant()}${btnSize}${iconLeft ? " btn-ic-left" : ""}${iconRight ? " btn-ic-right" : ""} ${className}`}
        id={id}
        onClick={onClick}
        disabled={disabled}
      >
        <span>
          {typeof iconLeft === "string" && <i className={`${iconLeft} el-ic-before`} />}
          {children}
          {typeof iconRight === "string" && <i className={`${iconRight} el-ic-after`} />}
        </span>
        <div className="el-block" />
        <div className="el-loader" />
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={`btn${btnVariant()}${btnSize}${
        iconLeft ? " btn-ic-left" : ""
      }${iconRight ? " btn-ic-right" : ""} ${className}`}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      <span>
        {typeof iconLeft === "string" && (
          <i className={`${iconLeft} el-ic-before`} />
        )}
        {children}
        {typeof iconRight === "string" && (
          <i className={`${iconRight} el-ic-after`} />
        )}
      </span>
      <div className="el-block" />
      <div className="el-loader" />
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline-primary",
    "outline-secondary",
    "info",
    "outline-info",
    "danger",
    "outline-danger",
    "success",
    "outline-success",
    "link",
    "dark",
    "light",
    "outline-white",
  ]), // Set variant (based on Bootstrap classes)
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  link: PropTypes.string, // Set button link / href
  target: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "md"]), // Set button size
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  variant: "primary",
  target: null,
  size: "md",
  className: "",
  type: "button",
  disabled: false,
}
