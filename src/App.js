//environment
import { db } from "./Components/env";

//libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

//components
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import QuestionManager from "./Components/QuestionManager/QuestionManager";
import { AddQuestion } from "./Components/AddQuestion/AddQuestion";
import { Footer } from "./Components/Footer/Footer";
import { ChooseSections } from "./Components/ChooseSections/ChooseSections";
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
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });

    //do i need a key from firebase?
    // db.ref("question_8th").on("value", (querySnapShot) => {
    //   let data = querySnapShot.val() ? querySnapShot.val() : {};
    //   let questionsItems = data;
    //   //maybe filter on this stage and keys to keys etc
    //   let keysArray = Object.keys(questionsItems);
    //   let arrayWithQuestionsOnly = [];
    //   keysArray.forEach((key) =>
    //     arrayWithQuestionsOnly.push(questionsItems[key])
    //   );
    //   this.setState({
    //     questions: questionsItems,
    //     keys: keysArray,
    //     onlyQuestionsArray: arrayWithQuestionsOnly,
    //   });
    // });
  }

  // addQuestion() {
  //   //add routing and other component to add questions
  //   //only for testing
  //   db.ref("/question_8th").push({
  //     section: "pierwiastki",
  //     question: "&radic;37 &#8729 &radic;12 &#8729 &#8731 9",
  //     bad_answer_1: "b1",
  //     bad_answer_2: "b2",
  //     bad_answer_3: "b3",
  //     good_answer: "good",
  //   });
  // }

  // filterAnArray() {
  //   //got keys
  //   let questionsKeys = Object.keys(this.state.questions);
  //   let array = [];
  //   //filtering by section
  //   questionsKeys.forEach((key) => array.push(this.state.questions[key]));
  //   array = array.filter((quest) => quest.section === "pierwiastki");
  //   this.setState({ questions: array });
  // }

  hangleDataFromChild = () => {
    // because i know that user has quest to do
    this.setState({ firstLoading: false });
    if (this.state.curreInd <= this.state.onlyQuestionsArray.length - 1) {
      this.setState({ curreInd: this.state.curreInd + 1 });
    }
  };

  handleScoreFromChild = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({ score: this.state.score + dataFromChild });
  };
  render() {
    // let questionsKeys = Object.keys(this.state.questions);

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/sections" component={ChooseSections} />
            <Route path="/quizz/:section" component={QuestionManager} />
            <Route path="/addQuestion" component={AddQuestion} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
