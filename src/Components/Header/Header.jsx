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
          {/* <a href="/quizz" class="brand-logo">
            Logo
          </a> */}
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="center-align" to="/quizz">
                Quizz
              </NavLink>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
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
          <NavLink className="center-align" to="/quizz">
            Quizz
          </NavLink>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </div>
  );
};
