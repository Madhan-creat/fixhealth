import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.city) {
    errors.city = "city is required";
  }
  if (!values.age) {
    errors.age = "age is required";
  }
  if (!values.company) {
    errors.company = "company is required";
  }
  if (!values.phone) {
    errors.phone = "phone is required";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = "phone is invalid";
  }
  return errors;
}
