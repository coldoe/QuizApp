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
              <div>{errors.bad_answer_1}</div>
            ) : null}
            <Field name="bad_answer_2" placeholder="bad_answer_2" />
            {errors.bad_answer_2 && touched.bad_answer_2 ? (
              <div>{errors.bad_answer_2}</div>
            ) : null}
            <Field name="bad_answer_3" placeholder="bad_answer_3" />
            {errors.bad_answer_3 && touched.bad_answer_3 ? (
              <div>{errors.bad_answer_3}</div>
            ) : null}
            <Field name="good_answer" placeholder="good_answer" />
            {errors.good_answer && touched.good_answer ? (
              <div>{errors.good_answer}</div>
            ) : null}
            <Field name="question" placeholder="question"></Field>
            {errors.question && touched.question ? (
              <div>{errors.question}</div>
            ) : null}
            <Field name="section" placeholder="section"></Field>
            {errors.section && touched.section ? (
              <div>{errors.section}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
