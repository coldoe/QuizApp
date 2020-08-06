import React from "react";
import { Spring } from "react-spring/renderprops";

//styles
import "../Home/Home.css";
// import work from "../Images/work.jpg";

export const Home = () => {
  return (
    <Spring
      from={{
        opacity: 0.7,
        background: "black",
      }}
      to={{
        opacity: 1,
        background: "green",
      }}
      config={{ duration: 1200 }}
    >
      {(styles) => (
        <div style={styles} className="Home">
          <div className="home-text">
            <h1 style={{ fontSize: "90px", textAlign: "left" }}>hello</h1>
            <h1 style={{ fontSize: "50px" }}>boiz & girlz</h1>
            <h1 style={{ fontSize: "40px", textAlign: "right" }}>
              on the website
            </h1>
          </div>
        </div>
      )}
    </Spring>
  );
};
