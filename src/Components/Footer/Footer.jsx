import React from "react";
//styles
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <footer className="page-footer blue-grey">
        <div className="container">
          <div className="row justify-content center">
            <div className="col l6 s12 offset-l3 ">
              <h5 className="white-text">Kamil 2K20</h5>
            </div>
          </div>
          <div className="row">
            <div className="col l6 offset-l3 s12 justify-content center">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.e-korepetycje.net/hawx1920/matematyka"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://github.com/coldoe"
                  >
                    Korepetycje
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright justify-content center">
          <div className="container">
            © 2020 Copyright KD
            {/* <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};
