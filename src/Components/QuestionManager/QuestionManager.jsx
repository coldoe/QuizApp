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
      // section: "",
      //good bad answers
      goodUserAnswers: 0,
      badUserAnswers: 0,
    };
    this.dataFromChild = this.hangleDataFromChild.bind(this);
  }

  checkSection(param) {
    switch (param) {
      case "ulamki":
        return "ulamki";
      case "pierwiastki":
        return "pierwiastki";
      default:
        return "null";
    }
  }

  hangleDataFromChild = () => {
    // because i know that user has quest to do
    this.setState({ firstLoading: false });
    if (this.state.curreInd <= this.state.questionsArrayForQuizz.length - 1) {
      this.setState({ curreInd: this.state.curreInd + 1 });
    }
  };

  handleScoreFromChild = (dataFromChild) => {
    // console.log(dataFromChild);
    if (dataFromChild === 1000) {
      this.setState({ goodUserAnswers: this.state.goodUserAnswers + 1 });
    } else {
      this.setState({ badUserAnswers: this.state.badUserAnswers + 1 });
    }
    this.setState({ score: this.state.score + dataFromChild });
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.setState({ section: params.section });

    let section = this.checkSection(params.section);

    if (section === "null") {
      window.location.href = "/";
    }

    db.ref("question_8th")
      .orderByChild("section")
      .equalTo(section)
      .on("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let questionsItems = data;
        let keysArray = Object.keys(questionsItems);
        let arrayWithQuestionsOnly = [];

        keysArray.forEach((key) =>
          arrayWithQuestionsOnly.push(questionsItems[key])
        );

        let array = [];
        for (let i = 0; i < 10; i++) {
          let index = Math.floor(Math.random() * arrayWithQuestionsOnly.length);
          array.push(arrayWithQuestionsOnly[index]);
          arrayWithQuestionsOnly.splice(index, 1);
        }

        this.setState({
          questions: questionsItems,
          keys: keysArray,
          questionsArrayForQuizz: array,
        });
      });
  }

  render() {
    // let questionsKeys = Object.keys(this.state.questions);
    return (
      <div className="QuestionManager">
        <div className="container">
          <div clasname="row">
            <div className="col s12">
              <div className="App">
                {this.state.questionsArrayForQuizz.length > 0 &&
                this.state.curreInd <=
                  this.state.questionsArrayForQuizz.length - 1 ? (
                  <div className="col s4 ">
                    <h1 className="justify-content center">
                      Score: {this.state.score}
                    </h1>
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
                ) : this.state.firstLoading === false ? (
                  //there should be new component
                  //button to home
                  //scores and stats
                  <div className="justify-content center">
                    <h1>End of Questions</h1>
                    <Link
                      to="/sections"
                      className="waves-effect waves-light btn-large"
                    >
                      Go and Choose Section, once more
                    </Link>
                    <StatisticsAfterQuiz
                      key={this.state.goodUserAnswers}
                      goodAnswers={this.state.goodUserAnswers}
                      badAnswers={this.state.badUserAnswers}
                    />
                  </div>
                ) : (
                  <div>
                    <Loading id="loadingCircle" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionManager;
