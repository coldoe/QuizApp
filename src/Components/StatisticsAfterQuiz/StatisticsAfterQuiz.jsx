import React from "react";

//styles
import { Spring } from "react-spring/renderprops";

export const StatisticsAfterQuiz = (props) => {
  return (
    <div className="justify-content center">
      <Spring
        from={{ opacity: 0, marginTop: -600 }}
        to={{ opacity: 1, marginTop: 100 }}
        config={{ duration: 800 }}
      >
        {(style) => (
          <div style={style}>
            <h1 style={style}>Good Answers: {props.goodAnswers}</h1>
            <h2>Bad Answers: {props.badAnswers}</h2>
            <h1>
              Shooting score:{" "}
              {Math.round(
                (props.goodAnswers / (props.badAnswers + props.goodAnswers)) *
                  100
              )}
              %
            </h1>
          </div>
        )}
      </Spring>
    </div>
  );
};
