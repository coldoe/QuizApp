import React from "react";
import { Formik, Form, Field } from "formik";
import { RegisterSchema } from "../Schema/RegisterSchema";

export const Register = () => {
  function dataToSend(object) {
    console.log(object);
    fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: object.name,
        email: object.email,
        password: object.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("bad request");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="Login">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { resetForm }) => {
          dataToSend(values);
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <div className="row" style={{ height: "85vh", marginTop: "10vh" }}>
            <div className="col offset-m2 offset-l2 offset-xl3 s12 m8 l8 xl6">
              <Form>
                <label style={{ color: "black", fontSize: "25px" }}>
                  Name + Nickname
                </label>
                <Field
                  name="name"
                  placeholder="Please enter your name without surname"
                />
                {errors.name && touched.name ? (
                  <div style={{ color: "red" }}>{errors.name}</div>
                ) : null}

                <label style={{ color: "black", fontSize: "25px" }}>
                  Email
                </label>
                <Field name="email" placeholder="YourEmail@somemail.com" />
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}

                <label style={{ color: "black", fontSize: "25px" }}>
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="YourP@ssw0rT"
                />
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}

                <label style={{ color: "black", fontSize: "25px" }}>
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="passwordConfirm"
                  placeholder="confirm password"
                />
                {errors.passwordConfirm && touched.passwordConfirm ? (
                  <div style={{ color: "red" }}>{errors.passwordConfirm}</div>
                ) : null}

                <div className="row">
                  <button
                    className="col s6 offset-s3 btn-block waves-light btn-large"
                    type="submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
