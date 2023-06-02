import React from "react"
import PropTypes from "prop-types"

export function Alert({ variant, type, title, description, showIcon }) {
  return (
    <div className={`alert alert-${variant} alert-${type}`}>
      {showIcon ? (
        <div className="alert-icon">
          <i className="ics ic-check-circle" />
        </div>
      ) : null}
      <div>
        <div className="alert-title">{title}</div>
        <div className="alert-text">{description}</div>
      </div>
    </div>
  )
}

Alert.defaultProps = {
  variant: "info",
  type: "outline",
  showIcon: true,
  title: "Title Message",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
}

Alert.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "danger",
    "success",
    "link",
    "dark",
    "light",
  ]),
  type: PropTypes.oneOf(["outline", "filled", "boxless"]),
  title: PropTypes.string,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
}
