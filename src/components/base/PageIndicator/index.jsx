import { useScrollAnim } from "src/hooks/hooks"
import PropTypes from "prop-types"

function PageIndicator({
  theme,
  length,
  variant,
  className,
  activePage,
  setActivePage,
  onClick,
}) {
  if (variant === "bar") {
    return (
      <div
        className={`page-indicator-bar page-indicator-${theme} ${className}`}
      >
        {[...Array(length)]?.map((_, i) => (
          <div
            className={`page-indicator__item ${
              i === activePage ? "active" : ""
            }`}
            key={`page-indicator__item-${i}`}
            onClick={() => {
              onClick(i)
              setActivePage(i)
            }}
            role="button"
            aria-label="button"
            tabIndex={i}
          />
        ))}
      </div>
    )
  }
  if (variant.includes("number")) {
    return (
      <div className={`page-indicator-${variant} page-indicator-${theme}`}>
        <span className="current-page">
          {(activePage + 1).toString().padStart(2, "0")}
        </span>
        {variant === "number-slash" ? " / " : ""}
        <span className="end-page">{length.toString().padStart(2, "0")}</span>
      </div>
    )
  }
}

export default PageIndicator

PageIndicator.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  variant: PropTypes.oneOf(["bar", "number-slash", "number-line"]),
  length: PropTypes.number,
  activePage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setActivePage: PropTypes.func,
  onClick: PropTypes.func,
}

PageIndicator.defaultProps = {
  theme: "light",
  variant: "bar",
}
