import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
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
