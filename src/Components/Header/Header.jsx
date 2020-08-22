//libraries
import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <NavLink data-target="mobile-demo" className="brand-logo" to="/">
            {" "}
            Logo{" "}
          </NavLink>
          {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a> */}
          <NavLink to="" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="center-align" to="/addQuestion">
                Add Question
              </NavLink>
            </li>
            <li>
              <NavLink className="center-align" to="/sections">
                Sections
              </NavLink>
            </li>

            <li>
              <NavLink className="center-align" to="/login">
                Login
              </NavLink>
            </li>

            <li>
              <NavLink className="center-align" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink className="center-align" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="center-align" to="/addQuestion">
            Add Question
          </NavLink>
        </li>

        <li>
          <NavLink className="center-align" to="/sections">
            Sections
          </NavLink>
        </li>

        <li>
          <NavLink className="center-align" to="/login">
            Login
          </NavLink>
        </li>

        <li>
          <NavLink className="center-align" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
