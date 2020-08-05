//environment
// import { db } from "./Components/env";

//libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      // questions: [],
      // keys: [],
      // onlyQuestionsArray: [],
      // score: 0,
      // curreInd: 0,
      // firstLoading: true,
    };
    // this.dataFromChild = this.hangleDataFromChild.bind(this);
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // var instances =
      M.Sidenav.init(elems, {});
    });
  }

  // hangleDataFromChild = () => {
  //   // because i know that user has quest to do
  //   this.setState({ firstLoading: false });
  //   if (this.state.curreInd <= this.state.onlyQuestionsArray.length - 1) {
  //     this.setState({ curreInd: this.state.curreInd + 1 });
  //   }
  // };

  // handleScoreFromChild = (dataFromChild) => {
  //   console.log(dataFromChild);
  //   this.setState({ score: this.state.score + dataFromChild });
  // };

  render() {
    // let questionsKeys = Object.keys(this.state.questions);
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/sections" component={ChooseSections} />
            <Route exact path="/quizz/:section" component={QuestionManager} />
            <Route exact path="/addQuestion" component={AddQuestion} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
