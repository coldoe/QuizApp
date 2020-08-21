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
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
//css
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // var instances =
      M.Sidenav.init(elems, {});
    });
  }

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
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
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
