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
import { PrivateRoute } from "./Components/PrivateRoutes/PrivateRoute";
import { OnlyAdminRoute } from "./Components/PrivateRoutes/OnlyAdminRoute";
import { UserListStudents } from "./Components/UserDashboard/UserListStudents";
//css
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userAuthToken: "",
    };
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // var instances =
      M.Sidenav.init(elems, {});
    });
  }
  passingUser = (user) => {
    this.setState({ userAuthToken: user });
  };

  render() {
    // let questionsKeys = Object.keys(this.state.questions);
    return (
      <div className="App">
        <Router>
          {/* if render in header based on roles */}
          <Header user={this.state.userAuthToken} />
          <Switch>
            {/* admin */}
            <OnlyAdminRoute
              exact
              path="/addQuestion"
              component={AddQuestion}
              user={this.state.userAuthToken}
            />
            <OnlyAdminRoute
              exact
              path="/register"
              component={Register}
              user={this.state.userAuthToken}
            />
            <OnlyAdminRoute
              exact
              path="/adminPanel"
              render={(props) => <UserListStudents {...props} />}
              component={UserListStudents}
              user={this.state.userAuthToken}
            />
            {/* private */}
            <PrivateRoute
              exact
              path="/sections"
              component={ChooseSections}
              user={this.state.userAuthToken}
            />
            <PrivateRoute
              exact
              path="/quizz/:section"
              component={QuestionManager}
              user={this.state.userAuthToken}
            />
            {/* public */}
            <Route
              exact
              path="/login"
              // component={Login}
              render={(props) => (
                <Login {...props} passToken={this.passingUser} />
              )}
            />
            <Route
              exact
              path="/"
              // component={Home}
              render={(props) => (
                <Home {...props} passToken={this.passingUser} />
              )}
            />
            <Route path="*" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
