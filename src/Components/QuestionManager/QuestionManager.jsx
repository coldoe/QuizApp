//environment
import { db } from "../env";

//libraries
import React from "react";
import { Link } from "react-router-dom";

//components
import { Question } from "../Question/Question";
import { Loading } from "../Loading/Loading";

//css
// import "../QuestionManager/QuestionManager.css";

class QuestionManager extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      keys: [],
      onlyQuestionsArray: [],
      score: 0,
      curreInd: 0,
      firstLoading: true,
      section: "",
      questionsArrayForQuizz: [],
      //good bad answers
    };
    this.dataFromChild = this.hangleDataFromChild.bind(this);
  }

  componentDidMount() {
    //do i need a key from firebase?
    //here i have my param from route
    //now i know that i should validate params
    const {
      match: { params },
    } = this.props;
    this.setState({ section: params.section });

    db.ref("question_8th").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let questionsItems = data;
      //maybe filter on this stage and keys to keys etc
      let keysArray = Object.keys(questionsItems);

      let arrayWithQuestionsOnly = [];
      keysArray.forEach((key) =>
        arrayWithQuestionsOnly.push(questionsItems[key])
      );

      let quizz = arrayWithQuestionsOnly.filter(
        (quest) => quest.section === this.state.section
      );

      this.setState({
        questions: questionsItems,
        keys: keysArray,
        onlyQuestionsArray: arrayWithQuestionsOnly,
        questionsArrayForQuizz: quizz,
      });
    });
  }

  hangleDataFromChild = () => {
    // because i know that user has quest to do
    this.setState({ firstLoading: false });
    if (this.state.curreInd <= this.state.onlyQuestionsArray.length - 1) {
      this.setState({ curreInd: this.state.curreInd + 1 });
    }
  };

  handleScoreFromChild = (dataFromChild) => {
    // console.log(dataFromChild);
    this.setState({ score: this.state.score + dataFromChild });
  };
  render() {
    // let questionsKeys = Object.keys(this.state.questions);

    return (
      <div className="QuestionManager">
        <div className="container">
          <div clasname="row">
            <div className="col s12">
              <div className="App">
                {this.state.keys.length > 0 &&
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
                    <Link to="/sections">
                      <a className="waves-effect waves-light btn-large">
                        Go and Choose Section, once more
                      </a>
                    </Link>
                  </div>
                ) : (
                  <Loading id="loadingCircle" />
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
