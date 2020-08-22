import React from "react";

export const UserStudent = (props) => {
  let year = new Date(props.date).getFullYear();
  let mon = new Date(props.date).getMonth();
  let day = new Date(props.date).getDay();

  return (
    <div className="UserStudent">
      <div className="container">
        <div
          key={props._id}
          className="col s12 m12 l6 xl4"
          style={{
            border: "solid 2px black",
            marginRight: "20px",
            marginTop: "20px",
          }}
        >
          <h5>{`D: ${day} M: ${mon} Y: ${year}`}</h5>
          <h5>{`name: ${props.name}`}</h5>
          <h5>{`email: ${props.email}`}</h5>
          <div className="justify-content center">
            <button
              className="waves-effect waves-light btn justify-content center"
              style={{ marginTop: "10px" }}
            >
              Update subscription +1 month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
