import { motion } from "framer-motion"
import PropTypes from "prop-types"

export function Toggle({
  id,
  theme,
  className,
  label,
  labelClassName,
  disabled,
  toggle,
  onClick,
}) {
  return (
    <motion.div
      id={id}
      className={`form-toggle-wrapper form-toggle-${theme} ${className} ${
        disabled ? "disabled" : ""
      }`}
    >
      <motion.div
        className={`form-toggle ${toggle ? "on" : "off"}`}
        onTap={!disabled ? onClick : null}
      >
        <motion.div
          className={`form-toggle__circle `}
          onTap={!disabled ? onClick : null}
          animate={{ x: toggle ? 20 : 0 }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
      </motion.div>
      <label className={`form-toggle-label ${labelClassName}`} htmlFor={id}>
        {label}
      </label>
    </motion.div>
  )
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  //   name: PropTypes.string,
  label: PropTypes.any,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
  ]),
  disabled: PropTypes.bool,
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
}

Toggle.defaultProps = {
  className: "",
  labelClassName: "",
  theme: "primary",
  disabled: false,
  toggle: false,
}
