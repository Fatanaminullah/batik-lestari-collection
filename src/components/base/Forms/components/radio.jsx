// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Radio
// ==========================================================================

import PropTypes from "prop-types"

export function Radio({
  id,
  name,
  value,
  label,
  theme,
  className,
  labelClassName,
  inputClassName,
  setValue,
  onChange,
  isChecked,
  disabled,
}) {
  const handleChange = (e) => {
    if (setValue) {
      setValue(name, value)
    } else {
      onChange(value)
    }
  }
  return (
    <div
      className={`form-check form-check-${theme} ${className}`}
      onClick={handleChange}
      role="presentation"
    >
      <input
        type="radio"
        id={id}
        name={name}
        className={`form-check-input ${inputClassName}`}
        checked={isChecked}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <div className="el-after" />
      <label className={`form-check-label ${labelClassName}`} htmlFor={id}>
        <span>{label}</span>
      </label>
    </div>
  )
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.string,
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
  isChecked: PropTypes.bool,
}

Radio.defaultProps = {
  className: "",
  labelClassName: "",
  inputClassName: "",
  theme: "primary",
}

export function RadioGroup({ options, name, groupLabel, className, ...props }) {
  return (
    <div className={`form-radio-group ${className}`}>
      <p className="label">{groupLabel}</p>
      {options?.map((item, i) => (
        <Radio
          {...item}
          {...props}
          id={item.id}
          name={name}
          label={item.label}
          value={item.value}
          isChecked={props.value === item.value}
          key={`radio-group-item-${i}`}
        />
      ))}
    </div>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      label: PropTypes.any,
      value: PropTypes.string,
      className: PropTypes.string,
      labelClassName: PropTypes.string,
      inputClassName: PropTypes.string,
      isChecked: PropTypes.bool,
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
    })
  ),
  name: PropTypes.string,
  groupLabel: PropTypes.string,
  className: PropTypes.string,
}

RadioGroup.defaultProps = {
  options: [],
}
