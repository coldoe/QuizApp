//environment
import { db } from "../env";

//libraries
import React from "react";
import { Link } from "react-router-dom";

//components
import { Question } from "../Question/Question";
import { Loading } from "../Loading/Loading";
import { StatisticsAfterQuiz } from "../StatisticsAfterQuiz/StatisticsAfterQuiz";

//css
// import "../QuestionManager/QuestionManager.css";

class QuestionManager extends React.Component {
  constructor() {
    super();
    this.state = {
      keys: [],
      questions: [],
      questionsArrayForQuizz: [],
      score: 0,
      curreInd: 0,
      firstLoading: true,
      goodUserAnswers: 0,
      badUserAnswers: 0,
    };
  }

  checkSection(param) {
    switch (param) {
      case "ulamki":
        return "ulamki";
      case "pierwiastki":
        return "pierwiastki";
      case "liczby":
        return "liczby";
      default:
        return "null";
    }
  }

  hangleDataFromChild = () => {
    this.setState({ firstLoading: false });
    if (this.state.curreInd <= this.state.questionsArrayForQuizz.length - 1) {
      this.setState({ curreInd: this.state.curreInd + 1 });
    }
  };

  handleScoreFromChild = (dataFromChild) => {
    if (dataFromChild === 1000) {
      this.setState({ goodUserAnswers: this.state.goodUserAnswers + 1 });
    } else {
      this.setState({ badUserAnswers: this.state.badUserAnswers + 1 });
    }
    this.setState({ score: this.state.score + dataFromChild });
  };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.setState({ section: params.section });

    let section = this.checkSection(params.section);

    if (section === "null") {
      window.location.href = "/";
    }

    const cloudFireRef = db.collection("question_8th");
    const querySnapShot = await cloudFireRef
      .where("section", "==", section)
      .get();

    let data = [];
    let keys = [];

    if (querySnapShot.empty) {
      console.log("No matching documents.");
      return;
    }

    querySnapShot.forEach((doc) => {
      keys.push(doc.id);
      data.push(doc.data());
    });

    console.log("len:" + data.length);
    let array = [];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * data.length);
      array.push(data[index]);
      data.splice(index, 1);
    }

    this.setState({
      questions: data,
      keys: keys,
      questionsArrayForQuizz: array,
    });
  }

  render() {
    // let questionsKeys = Object.keys(this.state.questions);
    let div;
    if (
      this.state.questionsArrayForQuizz.length > 0 &&
      this.state.curreInd <= this.state.questionsArrayForQuizz.length - 1
    ) {
      div = (
        <div className="col s4 ">
          <h1 className="justify-content center">Score: {this.state.score}</h1>
          <Question
            key={this.state.keys[this.state.curreInd]}
            id={this.state.keys[this.state.curreInd]}
            wholeQuestion={
              this.state.questionsArrayForQuizz[this.state.curreInd]
            }
            action={this.hangleDataFromChild}
            handleScore={this.handleScoreFromChild}
          ></Question>
        </div>
      );
    } else if (this.state.firstLoading === false) {
      div = (
        <div className="justify-content center">
          <h1>End of Questions</h1>
          <Link to="/sections" className="waves-effect waves-light btn-large">
            Go and Choose Section, once more
          </Link>
          <StatisticsAfterQuiz
            key={this.state.goodUserAnswers}
            goodAnswers={this.state.goodUserAnswers}
            badAnswers={this.state.badUserAnswers}
          />
        </div>
      );
    } else if (this.state.firstLoading === true) {
      div = (
        <div>
          <Loading id="loadingCircle" />
        </div>
      );
    }

    return (
      <div className="QuestionManager">
        <div className="container">
          <div clasname="row">
            <div className="col s12">
              <div className="App">{div}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionManager;
