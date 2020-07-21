import React from "react";

export const Question = (props) => (
  <div className="Question">
    <h1> {props.id}</h1>
    <h1 dangerouslySetInnerHTML={{ __html: props.wholeQuestion.question }} />
    <h1
      dangerouslySetInnerHTML={{ __html: props.wholeQuestion.bad_answer_1 }}
    />
    <h1
      dangerouslySetInnerHTML={{ __html: props.wholeQuestion.bad_answer_2 }}
    />
    <h1
      dangerouslySetInnerHTML={{ __html: props.wholeQuestion.bad_answer_3 }}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.wholeQuestion.good_answer }} />
    <h2 dangerouslySetInnerHTML={{ __html: props.wholeQuestion.section }} />
  </div>
);
