import PropTypes from "prop-types"

export function Toast({ title, text, variant, type }) {
  const colorAdjustment = () => {
    if (variant === "error") {
      return "danger"
    }

    return variant
  }

  return (
    <div className="toast-wrapper">
      <div className="toast-content">
        <div className="toast-title">
          <strong className={`text-${colorAdjustment()}`}>{title}</strong>
        </div>
        <div className="toast-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

Toast.propTypes = {
  type: PropTypes.oneOf(["outline", "filled"]),
  variant: PropTypes.oneOf(["default", "info", "error", "success", "warning"]),
  title: PropTypes.string,
  text: PropTypes.string,
}

Toast.defaultProps = {
  type: "outline",
  variant: "default",
  title: "Default Message",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
}
