import React, { useState } from "react";

export const Question = (props) => {
  const [score, setscore] = useState(0);
  // const [isAnswered, setisAnswered] = useState(false);

  function changeScore() {
    setscore(score + 100);
  }

  return (
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
      <h1
        dangerouslySetInnerHTML={{ __html: props.wholeQuestion.good_answer }}
      />
      <h2 dangerouslySetInnerHTML={{ __html: props.wholeQuestion.section }} />

      <button onClick={() => props.action(score)}> PasstoParent</button>
      <button onClick={changeScore}> AddScore</button>
    </div>
  );
};
