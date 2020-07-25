//Libraries
import React from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
//Schemas
import { AddQuestionSchema } from "../Schema/AddQuestionSchema";
//styles
import "./AddQuestion.css";

export const AddQuestion = () => {
  return (
    <div className="AddQuestion justify-content-center">
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
            <Field name="bad_answer_1" placeholder="bad_answer_1" />
            {errors.bad_answer_1 && touched.bad_answer_1 ? (
              <div style={{ color: "red" }}>{errors.bad_answer_1}</div>
            ) : null}
            <Field name="bad_answer_2" placeholder="bad_answer_2" />
            {errors.bad_answer_2 && touched.bad_answer_2 ? (
              <div style={{ color: "red" }}>{errors.bad_answer_2}</div>
            ) : null}
            <Field name="bad_answer_3" placeholder="bad_answer_3" />
            {errors.bad_answer_3 && touched.bad_answer_3 ? (
              <div style={{ color: "red" }}>{errors.bad_answer_3}</div>
            ) : null}
            <Field name="good_answer" placeholder="good_answer" />
            {errors.good_answer && touched.good_answer ? (
              <div style={{ color: "red" }}>{errors.good_answer}</div>
            ) : null}
            <Field name="question" placeholder="question"></Field>
            {errors.question && touched.question ? (
              <div style={{ color: "red" }}>{errors.question}</div>
            ) : null}
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
