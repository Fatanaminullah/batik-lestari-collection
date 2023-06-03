import { Button } from "@components/base"
import { Field, Forms, Input } from "@components/base/Forms"
import { useCheckoutStore } from "store"
import useStore from "store/useStore"
import { object, string } from "yup"

function CheckoutAddress() {
  const checkoutStore = useStore(useCheckoutStore, (state) => state)
  const validation = object({
    first_name: string().required("Field is Required"),
    last_name: string().required("Field is Required"),
    phone: string()
      .required("Field is Required")
      .matches(/^[\d ()+-]+$/, "Invalid Mobile Number"),
    address_1: string().required("Field is Required"),
    city: string().required("Field is Required"),
    state: string().required("Field is Required"),
    postcode: string().required("Field is Required"),
  })
  const defaultValues = checkoutStore?.address
    ? { ...checkoutStore.address }
    : {}
  const onSubmit = (values) => {
    if (checkoutStore.setAddress) checkoutStore.setAddress(values)
  }
  return (
    <div className="checkout-address py-4">
      <Forms
        defaultValues={defaultValues}
        validation={validation}
        onSubmit={onSubmit}
      >
        {(props) => (
          <>
            <div className="row">
              <div className="col-6">
                <Field fieldName="first_name" {...props}>
                  <Input
                    type="text"
                    label="Type your first name"
                    floatingLabel
                    className="mb-3"
                  />
                </Field>
              </div>
              <div className="col-6">
                <Field fieldName="last_name" {...props}>
                  <Input
                    type="text"
                    label="Type your last name"
                    floatingLabel
                    className="mb-3"
                  />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Field fieldName="phone" {...props}>
                  <Input
                    type="number"
                    placeholder="Type your phone number"
                    floatingLabel
                    label="Phone Number"
                    className="mb-3"
                  />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Field fieldName="address_1" {...props}>
                  <Input
                    as="textarea"
                    type="textarea"
                    floatingLabel
                    label="Address"
                    className="mb-3"
                  />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Field fieldName="city" {...props}>
                  <Input
                    type="text"
                    floatingLabel
                    label="City"
                    className="mb-3"
                  />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Field fieldName="state" {...props}>
                  <Input
                    type="text"
                    label="Province"
                    floatingLabel
                    className="mb-3"
                  />
                </Field>
              </div>
              <div className="col-6">
                <Field fieldName="postcode" {...props}>
                  <Input
                    type="text"
                    label="Postal Code"
                    floatingLabel
                    className="mb-3"
                  />
                </Field>
              </div>
            </div>
            <Button type="submit" className="w-100" variant="dark">
              Save
            </Button>
          </>
        )}
      </Forms>
    </div>
  )
}

export default CheckoutAddress
