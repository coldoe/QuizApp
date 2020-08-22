//libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles

//import sections
import {
  ListOfSections,
  highScholSections,
  maturaExamSections,
} from "../ChooseSections/ListOfSections";

export const ChooseSections = () => {
  const [sections, setsections] = useState([]);
  const [highSchool, sethighSchool] = useState([]);
  const [maturaExam, setmaturaExam] = useState([]);

  useEffect(() => {
    setsections(ListOfSections);
    sethighSchool(highScholSections);
    setmaturaExam(maturaExamSections);
  }, []);

  return (
    // todo its doesnt work just frontend because i dont have this
    // todo types of questions in database yet

    <div className="Sections">
      <div className="container justify-content center">
        <div className="row">
          <div className="col s12 m12 l4">
            <h2>8TH CLASS</h2>
            {sections.map((section) => (
              <div className="section" key={section.name}>
                <Link
                  key={section.name}
                  to={`/quizz/${section.name}`}
                  style={{ fontSize: "30px", color: "#f48fb1   " }}
                >
                  {section.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="col s12 m12 l4">
            <h2>High School</h2>
            {highSchool.map((section) => (
              <div className="section" key={section.name}>
                <Link
                  key={section.name}
                  to={`/quizz/${section.name}`}
                  style={{ fontSize: "30px", color: "#e91e63  " }}
                >
                  {section.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="col s12 m12 l4">
            <h2>Matura Exam</h2>
            {maturaExam.map((section) => (
              <div className="section" key={section.name}>
                <Link
                  to={`/quizz/${section.name}`}
                  style={{ fontSize: "30px", color: "#880e4f  " }}
                >
                  {section.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
