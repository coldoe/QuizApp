import React, { useState, useEffect } from "react";
//styles
import "./Question.css";

export const Question = (props) => {
  // const [score, setscore] = useState(0);
  const [isAnswered, setisAnswered] = useState(false);
  const [goodAnswer, setgoodAnswer] = useState("");
  const [arrayAnswers, setarraAnswers] = useState([]);

  //i should track of amount of good and bad answers
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
      <div className="justify-content center">
        <h1
          className="quest"
          dangerouslySetInnerHTML={{ __html: props.wholeQuestion.question }}
        />
      </div>

      <div className="justify-content center">
        <div className="row">
          <div className="col  s12 m12 l6 xl6">
            <button
              className="btn-block waves-effect waves-light btn-large"
              id="button"
              onClick={() => handleUserAnswer(arrayAnswers[0])}
              dangerouslySetInnerHTML={{ __html: arrayAnswers[0] }}
              disabled={isAnswered}
            ></button>
          </div>

          <div className="col s12 m12 l6 xl6">
            <button
              className="btn-block waves-effect waves-light btn-large"
              onClick={() => handleUserAnswer(arrayAnswers[1])}
              dangerouslySetInnerHTML={{ __html: arrayAnswers[1] }}
              disabled={isAnswered}
            ></button>
          </div>
        </div>

        <div className="row">
          <div className="col  s12 m12 l6 xl6">
            <button
              className="btn-block waves-effect waves-light btn-large"
              id="button"
              onClick={() => handleUserAnswer(arrayAnswers[2])}
              dangerouslySetInnerHTML={{ __html: arrayAnswers[2] }}
              disabled={isAnswered}
            ></button>
          </div>

          <div className="col s12 m12 l6 xl6">
            <button
              className="btn-block waves-effect waves-light btn-large"
              onClick={() => handleUserAnswer(arrayAnswers[3])}
              dangerouslySetInnerHTML={{ __html: arrayAnswers[3] }}
              disabled={isAnswered}
            ></button>
          </div>
        </div>
      </div>

      <h2
        className="justify-content center"
        dangerouslySetInnerHTML={{
          __html: "Section: " + props.wholeQuestion.section.toUpperCase(),
        }}
      />
      {isAnswered ? (
        <button
          className={
            "waves-effect waves-light btn-large light-blue accent-3 pulse right"
          }
          onClick={() => props.action()}
        >
          Next Question
        </button>
      ) : null}
    </div>
  );
};
