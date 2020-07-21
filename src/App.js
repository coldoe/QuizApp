//environment
import { db } from "./env";

//libraries
import React from "react";

//components
import { Question } from "./Components/Question/Question";
//css
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    //do i need a key from firebase?
    db.ref("question_8th").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let questionsItems = data;

      this.setState({
        questions: questionsItems,
      });
    });
  }

  addQuestion() {
    db.ref("/question_8th").push({
      section: "pierwiastki",
      question: "question",
      bad_answer_1: "b1",
      bad_answer_2: "b2",
      bad_answer_3: "b3",
      good_answer: "good",
    });
  }
  filterAnArray() {
    //got keys
    let questionsKeys = Object.keys(this.state.questions);
    let array = [];
    //filtering by section
    questionsKeys.forEach((key) => array.push(this.state.questions[key]));
    array = array.filter((quest) => quest.section === "pierwiastki");
    this.setState({ questions: array });
  }

  render() {
    let questionsKeys = Object.keys(this.state.questions);

    return (
      <div className="App">
        <button onClick={() => this.addQuestion()}>Add Quest</button>
        <button onClick={() => this.filterAnArray()}>Filter</button>
        {questionsKeys.length > 0 ? (
          questionsKeys.map((key) => (
            <Question
              key={key}
              id={key}
              wholeQuestion={this.state.questions[key]}
            />
          ))
        ) : (
          <h1> nothing here</h1>
        )}
      </div>
    );
  }
}

export default App;
