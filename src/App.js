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
      keys: [],
      questions: [],
      value: "Parent",
      score: null,
      curreInd: 0,
    };
    this.dataFromChild = this.hangleDataFromChild.bind(this);
  }

  componentDidMount() {
    //do i need a key from firebase?
    db.ref("question_8th").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let questionsItems = data;
      //maybe filter on this stage and keys to keys etc
      this.setState({
        questions: questionsItems,
      });
    });
  }

  addQuestion() {
    //add routing and other component to add questions
    db.ref("/question_8th").push({
      section: "pierwiastki",
      question: "&radic;37 &#8729 &radic;12 &#8729 &#8731 9",
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

  hangleDataFromChild = (dataFromChild) => {
    this.setState({ score: dataFromChild });
  };

  render() {
    let questionsKeys = Object.keys(this.state.questions);

    return (
      <div className="App">
        {/* should have array with only questions to iterate over them using button */}
        <button onClick={() => this.addQuestion()}>Add Quest</button>
        <button onClick={() => this.filterAnArray()}>Filter</button>
        {questionsKeys.length > 0 ? (
          questionsKeys.map((key) => (
            <Question
              key={key}
              id={key}
              wholeQuestion={this.state.questions[key]}
              action={this.hangleDataFromChild}
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
