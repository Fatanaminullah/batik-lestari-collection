// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Date Picker
// ==========================================================================

import PropTypes from "prop-types"
import ReactDatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export function DatePicker({
  className,
  disabled,
  errors,
  name,
  label,
  labelClassName,
  onChange,
  placeholder,
  selected,
  wrapperClassName,
  fieldWrapperClassName,
}) {
  return (
    <div className={`field-date-picker ${fieldWrapperClassName}`}>
      {label && (
        <label className={labelClassName} htmlFor={name}>
          {label}
        </label>
      )}
      <ReactDatePicker
        name={name}
        className={`form-control ${className}`}
        placeholderText={placeholder}
        wrapperClassName={wrapperClassName}
        selected={selected}
        onChange={onChange}
        disabled={disabled}
        showMonthDropdown
        showYearDropdown
        autoComplete="off"
      />
      {errors && errors[name] && (
        <div className="invalid-feedback">{errors[name].message}</div>
      )}
    </div>
  )
}

DatePicker.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  fieldWrapperClassName: PropTypes.string,
}

DatePicker.defaultProps = {
  name: "",
  placeholder: "",
  wrapperClassName: "",
  className: "",
  disabled: false,
  label: "",
  labelClassName: "",
}
