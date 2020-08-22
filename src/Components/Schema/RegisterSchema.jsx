import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too short")
    .max(128, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email()
    .min(6, "Too short")
    .max(128, "Too long")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too short")
    .max(128, "Too long")
    .required("Required"),
  passwordConfirm: Yup.string()
    .required("Confirm passwords")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    })
    .required("Passwords confirm is required"),
});
