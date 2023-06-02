// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Radio
// ==========================================================================

import PropTypes from "prop-types"

export function Range({
  id,
  min,
  max,
  step,
  name,
  value,
  label,
  theme,
  className,
  labelClassName,
  inputClassName,
  setValue,
  onChange,
  disabled,
}) {
  return (
    <div
      className={`form-range form-range-${theme} ${className}`}
      role="presentation"
    >
      <input
        type="range"
        id={id}
        name={name}
        className={`form-range-input ${inputClassName}`}
        value={value}
        min={min}
        max={step ?? max}
        step={1}
        onChange={(e) =>
          setValue ? setValue(name, e.target.value) : onChange(e.target.value)
        }
        disabled={disabled}
        list="form-range-step-list"
      />
      {step && step > 0 ? (
        <datalist id="form-range-step-list">
          {[
            ...Array(step)
              .fill()
              .map((_, i) => <option key={`step-list-${i}`}>{i}</option>),
          ]}
        </datalist>
      ) : null}
      <div className="el-after" />
      <label className={`form-range-label ${labelClassName}`} htmlFor={id}>
        <span>{label}</span>
      </label>
    </div>
  )
}

Range.propTypes = {
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
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
}

Range.defaultProps = {
  className: "",
  labelClassName: "",
  inputClassName: "",
  theme: "primary",
  min: 0,
  max: 100,
}
