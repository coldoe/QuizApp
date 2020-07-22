import React, { useState, useEffect } from "react";

export const Question = (props) => {
  // const [score, setscore] = useState(0);
  const [isAnswered, setisAnswered] = useState(false);
  const [goodAnswer, setgoodAnswer] = useState("");
  const [arrayAnswers, setarraAnswers] = useState([]);

  function handleUserAnswer(answer) {
    setisAnswered(true);
    if (goodAnswer === answer) {
      props.handleScore(1000);
    } else {
      props.handleScore(-500);
    }
  }

  function changeTheOrder() {
    let array = [];
    array.push(props.wholeQuestion.bad_answer_1);
    array.push(props.wholeQuestion.bad_answer_2);
    array.push(props.wholeQuestion.bad_answer_3);
    array.push(props.wholeQuestion.good_answer);
    //change the order
    array.sort(() => Math.random() - 0.5);
    setarraAnswers(array);
  }
  useEffect(() => {
    setgoodAnswer(props.wholeQuestion.good_answer);
    changeTheOrder();
  }, []);

  return (
    <div className="Question">
      {/* <h1> {props.id}</h1> */}
      <h1 dangerouslySetInnerHTML={{ __html: props.wholeQuestion.question }} />
      <button
        onClick={() => handleUserAnswer(arrayAnswers[0])}
        dangerouslySetInnerHTML={{ __html: arrayAnswers[0] }}
        disabled={isAnswered}
      ></button>

      <button
        onClick={() => handleUserAnswer(arrayAnswers[1])}
        dangerouslySetInnerHTML={{ __html: arrayAnswers[1] }}
        disabled={isAnswered}
      ></button>

      <button
        onClick={() => handleUserAnswer(arrayAnswers[2])}
        dangerouslySetInnerHTML={{ __html: arrayAnswers[2] }}
        disabled={isAnswered}
      ></button>

      <button
        onClick={() => handleUserAnswer(arrayAnswers[3])}
        dangerouslySetInnerHTML={{ __html: arrayAnswers[3] }}
        disabled={isAnswered}
      ></button>

      <h2 dangerouslySetInnerHTML={{ __html: props.wholeQuestion.section }} />

      <button disabled={!isAnswered} onClick={() => props.action()}>
        Next Question
      </button>
    </div>
  );
};
