import React from "react";
import { Link } from "react-router-dom";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import "./learning-intro.css";
import "./responsive.css";

const learningintro = () => {
  return (
    <div className="bodyy">
      <div className="header-logo" id="headerp">
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "5rem", height: "5rem" }}
            alt="logo"
          />
        </Link>
      </div>
      {/*  ----form-start----- */}
      <div className="form-containerpp">
        <div
          className="form-container"
          style={{ backgroundColor: "#d1acf614" }}
        >
          <div className="logo-section">
            <img
              src={Developer}
              style={{ width: "10rem", height: "10rem" }}
              className="form-logo"
              alt="logo"
            />
            <div className="formw">
              <h1 className="form-title">
                I'm excited about the opportunity to learn from you! Could you
                share a little about yourself?
              </h1>
            </div>
          </div>
          <div className="input-section">
            <div className="input-col">
              <div className="flexs">
                <label className="input-label" htmlFor="input-name">Name</label>
                <input
                  className="input-field"
                  id="input-name"
                  name="name"
                  placeholder="Enter Your Name..."
                  autoComplete="name"
                />
              </div>{" "}
              <div className="flexs">
                <label className="input-label" htmlFor="input-email">Email</label>
                <input
                  className="input-field"
                  id="input-email"
                  name="email"
                  placeholder="Enter Your Email..."
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="input-col">
              <div className="flexs">
                <label className="input-label" htmlFor="input-mentorship">Types of Mentorship</label>
                <select className="input-field" id="input-mentorship" name="mentorship" defaultValue="">
                  <option disabled value="">
                    Select an option...
                  </option>
                  <option value="Responsive design">Responsive design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="App Design">App Design</option>
                </select>
              </div>
              <div className="flexs">
                <label className="input-label" htmlFor="input-result">Expected result</label>
                <select className="input-field" id="input-result" name="result" defaultValue="">
                  <option disabled value="">
                    Select an option...
                  </option>
                  <option value="Address a knowledge gap">Address a knowledge gap</option>
                  <option value="Master design principles">Master design principles</option>
                  <option value="Explore a new career path">Explore a new career path</option>
                </select>
              </div>
            </div>
            <div className="flexs">
              <label className="input-label" htmlFor="input-journey">Your journey</label>
              <textarea
                className="textarea-field"
                id="input-journey"
                name="journey"
                placeholder="Send Your journey..."
                autoComplete="off"
              ></textarea>
            </div>
          </div>
          <div className="button-section">
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>
      {/*  ----form-end----- */}
    </div>
  );
};

export default learningintro;
