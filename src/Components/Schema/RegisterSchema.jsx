import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too short")
    .max(128, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email()
    .min(1, "Too short")
    .max(128, "Too long")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too short")
    .max(128, "Too long")
    .required("Required"),
});
