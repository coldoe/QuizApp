import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { LoginSchema } from "../Schema/LoginSchema";

export const Login = (props) => {
  const [succ, setsucc] = useState("");
  const [err, seterr] = useState("");

  function dataToSend(object) {
    //call api and return to app token
    fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: object.email,
        password: object.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setsucc("You are logged in, go and choose section now");
          seterr("");
          return res.json();
        } else {
          setsucc("");
          seterr("Something went wrong check credentials");
          throw new Error("bad request");
        }
      })
      .then((token) => {
        console.log(token);
        props.passToken(token);
      })
      .catch((error) => console.log(error));
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

                {err ? (
                  <div
                    className="justify-content center"
                    style={{ color: "red" }}
                  >
                    {err}
                  </div>
                ) : null}

                {succ ? (
                  <div
                    className="justify-content center"
                    style={{ color: "green" }}
                  >
                    {succ}
                  </div>
                ) : null}
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
