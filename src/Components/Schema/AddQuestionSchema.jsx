import * as Yup from "yup";

export const AddQuestionSchema = Yup.object().shape({
  bad_answer_1: Yup.string()
    .min(1, "Too short")
    .max(32, "Too long")
    .required("Required"),
  bad_answer_2: Yup.string()
    .min(1, "Too short")
    .max(32, "Too long")
    .required("Required"),
  bad_answer_3: Yup.string()
    .min(1, "Too short")
    .max(32, "Too long")
    .required("Required"),
  good_answer: Yup.string()
    .min(1, "Too short")
    .max(32, "Too long")
    .required("Required"),
  question: Yup.string()
    .min(1, "Too short for Question")
    .max(64, "Too long for Question")
    .required("Required"),
  section: Yup.string().oneOf(["ulamki", "pierwiastki"]).required("Required"),
});
