import React, { useEffect, useState } from "react"

import PropTypes from "prop-types"
import { useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export function Forms({
  id,
  name,
  children,
  onSubmit,
  className,
  defaultValues,
  validation,
  mode,
}) {
  const [values, setValues] = useState({})
  const {
    watch,
    control,
    trigger,
    setValue,
    register,
    setError,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode, defaultValues, resolver: yupResolver(validation) })

  useEffect(() => {
    const subscription = watch((value) => {
      setValues((prev) => ({ ...prev, ...value }))
    })
    if (defaultValues) setValues(defaultValues)
    return () => subscription.unsubscribe()
  }, [getValues, watch, defaultValues])

  return (
    <form
      id={id}
      className={className}
      name={name}
      onSubmit={handleSubmit((v) => onSubmit(v, reset))}
    >
      {typeof children === "function"
        ? children({
            watch,
            values,
            errors,
            isValid,
            control,
            trigger,
            setValue,
            setError,
            register,
            getValues,
            defaultValues,
          })
        : React.Children.map(children, (child) =>
            React.cloneElement(child, {
              watch,
              values,
              errors,
              isValid,
              control,
              trigger,
              setValue,
              setError,
              register,
              getValues,
              defaultValues,
            })
          )}
    </form>
  )
}

Forms.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  defaultValues: PropTypes.object,
  mode: PropTypes.string,
  validation: PropTypes.func,
}

Forms.defaultProps = {
  defaultValues: {},
  mode: "onChange",
  validation: yup.object({}),
}
