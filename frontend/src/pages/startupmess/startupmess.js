import React from "react";
import "./startupmess.css";
import "./responsive.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";

const startupmess = () => {
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
                Looking to collaborate on a startup? I’m totally up for it.
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
                  placeholder="Enter Your Name..."
                />
              </div>{" "}
              <div className="flexs">
                <label className="input-label" htmlFor="input-email">Email</label>
                <input
                  className="input-field"
                  id="input-email"
                  placeholder="Enter Your Email..."
                />
              </div>
            </div>
            <div className="input-col">
              <div className="flexs">
                <label className="input-label" htmlFor="input-project-category">Project category</label>
                <select className="input-field" id="input-project-category" defaultValue="">
                  <option disabled value="">
                    Select an option...
                  </option>
                  <option value="Responsive design">Responsive design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="App Design">App Design</option>
                </select>
              </div>
              <div className="flexs">
                <label className="input-label" htmlFor="input-your-focus">Your focus</label>
                <select className="input-field" id="input-your-focus" defaultValue="">
                  <option disabled value="">
                    Select an option...
                  </option>
                  <option value="collaborate">collaborate</option>
                  <option value="invest">invest</option>
                  <option value="founder">founder</option>
                </select>
              </div>
            </div>
            <label className="input-label" htmlFor="input-details">Details</label>
            <textarea
              className="textarea-field"
              id="input-details"
              placeholder="Send Details..."
            ></textarea>
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

export default startupmess;
