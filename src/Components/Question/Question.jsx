import React from "react";

export const Question = (props) => (
  <div className="Question">
    <h1> {props.id}</h1>
    <h1> Pytanie: {props.wholeQuestion.question}</h1>
    <h1>{props.wholeQuestion.bad_answer_1}</h1>
    <h1>{props.wholeQuestion.bad_answer_2}</h1>
    <h1>{props.wholeQuestion.bad_answer_3}</h1>
    <h1>{props.wholeQuestion.good_answer}</h1>
    <h2>{props.wholeQuestion.section}</h2>
  </div>
);
