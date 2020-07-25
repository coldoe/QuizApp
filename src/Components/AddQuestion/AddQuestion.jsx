//Libraries
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
//Schemas
import { AddQuestionSchema } from "../Schema/AddQuestionSchema";
//styles
import "./AddQuestion.css";

export const AddQuestion = () => {
  const [bad1, setbad1] = useState("");

  return (
    <div className="AddQuestion">
      <Formik
        initialValues={{
          bad_answer_1: "",
          bad_answer_2: "",
          bad_answer_3: "",
          good_answer: "",
          question: "",
          section: "",
        }}
        validationSchema={AddQuestionSchema}
        onSubmit={(values, { resetForm }) => {
          console.table(values);
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label style={{ color: "black", fontSize: "25px" }}>
              Bad answer nr 1
            </label>
            <Field name="bad_answer_1" placeholder="bad_answer_1" />
            {errors.bad_answer_1 && touched.bad_answer_1 ? (
              <div style={{ color: "red" }}>{errors.bad_answer_1}</div>
            ) : null}
            <label style={{ color: "black", fontSize: "25px" }}>
              Bad answer nr 2
            </label>
            <Field name="bad_answer_2" placeholder="bad_answer_2" />
            {errors.bad_answer_2 && touched.bad_answer_2 ? (
              <div style={{ color: "red" }}>{errors.bad_answer_2}</div>
            ) : null}
            <label style={{ color: "black", fontSize: "25px" }}>
              Bad answer nr 3
            </label>
            <Field name="bad_answer_3" placeholder="bad_answer_3" />
            {errors.bad_answer_3 && touched.bad_answer_3 ? (
              <div style={{ color: "red" }}>{errors.bad_answer_3}</div>
            ) : null}
            <label style={{ color: "black", fontSize: "25px" }}>
              Good answer
            </label>
            <Field name="good_answer" placeholder="good_answer" />
            {errors.good_answer && touched.good_answer ? (
              <div style={{ color: "red" }}>{errors.good_answer}</div>
            ) : null}
            <label style={{ color: "black", fontSize: "25px" }}>Question</label>
            <Field name="question" placeholder="question"></Field>
            {errors.question && touched.question ? (
              <div style={{ color: "red" }}>{errors.question}</div>
            ) : null}
            <label style={{ color: "black", fontSize: "25px" }}>Section</label>
            <Field name="section" placeholder="section"></Field>
            {errors.section && touched.section ? (
              <div style={{ color: "red" }}>{errors.section}</div>
            ) : null}
            <div className="row">
              <button
                className="col s6 offset-s3 btn-block waves-effect waves-light btn-large"
                type="submit"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
