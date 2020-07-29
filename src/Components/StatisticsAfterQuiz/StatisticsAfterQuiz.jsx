import React from "react";

export const StatisticsAfterQuiz = (props) => {
  return (
    <div className="justify-content center">
      <h1>Good Answers: {props.goodAnswers}</h1>
      <h2>Bad Answers: {props.badAnswers}</h2>
      <h1>
        Shooting score:{" "}
        {Math.round(
          (props.goodAnswers / (props.badAnswers + props.goodAnswers)) * 100
        )}
        %
      </h1>
    </div>
  );
};
