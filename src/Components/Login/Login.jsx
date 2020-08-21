import React from "react";
import { Formik, Form, Field } from "formik";

import { LoginSchema } from "../Schema/LoginSchema";

export const Login = () => {
  function dataToSend(object) {
    console.log(object);
  }
  return (
    <div className="Login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          dataToSend(values);
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <div className="row" style={{ height: "85vh", marginTop: "15vh" }}>
            <div className="col offset-m2 offset-l2 offset-xl3 s12 m8 l8 xl6">
              <Form>
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
                <Field name="password" placeholder="YourP@ssw0rT" />
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
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
