//libraries
import React, { useState, useEffect } from "react";
//styles

//import sections
import { ListOfSections } from "../ChooseSections/ListOfSections";

export const ChooseSections = () => {
  const [sections, setsections] = useState([]);

  useEffect(() => {
    setsections(ListOfSections);
  }, []);

  return (
    <div className="Sections">
      <div className="container justify-content center">
        {sections.map((section) => (
          <h1 style={{ fontSize: "30px" }}>{section.name}</h1>
        ))}
      </div>
    </div>
  );
};
