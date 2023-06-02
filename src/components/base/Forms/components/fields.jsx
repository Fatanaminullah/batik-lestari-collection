import React, { useEffect } from "react"

import { Controller } from "react-hook-form"
import { isEmpty } from "lodash"
import PropTypes from "prop-types"

export function Field({
  fieldName,
  setError,
  errors,
  control,
  children,
  setValue,
  validation,
  defaultValues,
}) {
  useEffect(() => {
    if (!isEmpty(defaultValues)) {
      setValue(fieldName, defaultValues[fieldName])
    }
  }, [defaultValues, fieldName, setValue])
  return (
    <Controller
      control={control}
      name={fieldName}
      rules={validation}
      defaultValue={defaultValues[fieldName]}
      render={({ field }) => {
        const { name, value, onChange, onBlur } = field
        const errorHooks = !isEmpty(errors) && errors[name]
        const defaultValue = defaultValues[name]
        return (
          <>
            {typeof children === "function"
              ? children({
                  name,
                  value,
                  selected: value, // For Datepicker value
                  onChange,
                  onBlur,
                  setError,
                  errors,
                  errorHooks,
                  defaultValue,
                  setValue,
                })
              : React.cloneElement(children, {
                  name,
                  value,
                  selected: value, // For Datepicker value
                  onChange,
                  onBlur,
                  setError,
                  errors,
                  errorHooks,
                  defaultValue,
                  setValue,
                })}
          </>
        )
      }}
    />
  )
}

Field.propTypes = {
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.any,
}
