// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Check
// ==========================================================================

import React from "react"
import PropTypes from "prop-types"

export function Check({
  formik,
  id,
  name,
  value,
  setValue,
  label,
  className,
  labelClassName,
  inputClassName,
  onClick,
  checked,
  onChange,
  theme,
  disabled,
}) {
  const handleChange = () => {
    if (setValue) {
      setValue(name, value)
    } else {
      onChange(value)
    }
  }
  return (
    <>
      <div
        className={`form-check form-check-${theme} ${className}`}
        onClick={handleChange}
        role="presentation"
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          className={`form-check-input ${inputClassName}`}
          checked={checked}
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />
        <div className="el-after" />
        <label className={`form-check-label ${labelClassName}`} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  )
}

Check.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.any,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
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
}

Check.defaultProps = {
  className: "",
  labelClassName: "",
  inputClassName: "",
  theme: "primary",
}
