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
      keys: [],
      onlyQuestionsArray: [],
      score: 0,
      curreInd: 0,
      firstLoading: true,
    };
    this.dataFromChild = this.hangleDataFromChild.bind(this);
  }

  componentDidMount() {
    //do i need a key from firebase?
    db.ref("question_8th").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let questionsItems = data;
      //maybe filter on this stage and keys to keys etc
      let keysArray = Object.keys(questionsItems);

      let arrayWithQuestionsOnly = [];
      keysArray.forEach((key) =>
        arrayWithQuestionsOnly.push(questionsItems[key])
      );

      this.setState({
        questions: questionsItems,
        keys: keysArray,
        onlyQuestionsArray: arrayWithQuestionsOnly,
      });
    });
  }

  addQuestion() {
    //add routing and other component to add questions
    //only for testing
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
    // because i know that user has quest to do
    this.setState({ firstLoading: false });
    if (this.state.curreInd <= this.state.onlyQuestionsArray.length - 1) {
      this.setState({ curreInd: this.state.curreInd + 1 });
      this.setState({ score: this.state.score + dataFromChild });
    }
  };

  render() {
    // let questionsKeys = Object.keys(this.state.questions);

    return (
      <div className="App">
        {this.state.keys.length > 0 &&
        this.state.curreInd <= this.state.onlyQuestionsArray.length - 1 ? (
          <Question
            key={this.state.keys[this.state.curreInd]}
            id={this.state.keys[this.state.curreInd]}
            wholeQuestion={
              // this.state.questions[this.state.keys[this.state.curreInd]]
              this.state.onlyQuestionsArray[this.state.curreInd]
            }
            action={this.hangleDataFromChild}
          ></Question>
        ) : this.state.firstLoading === false ? (
          <h1>koniec pytan</h1>
        ) : (
          <h1>loading...</h1>
        )}

        {/* should have array with only questions to iterate over them using button */}
        {/* everything at once */}
        {/* <button onClick={() => this.addQuestion()}>Add Quest</button>
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
          <h1> nothing here loading data ...</h1>
        )} */}
      </div>
    );
  }
}

export default App;
