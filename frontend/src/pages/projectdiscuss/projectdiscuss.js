import React from "react";
import "./responsive.css";
import "./projectdiscuss.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
const projectdiscuss = () => {
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
        <div className="form-container" style={{ backgroundColor: '#d1ba5438' }}>
          <div className="logo-section">
            <img
              src={Developer}
              style={{ width: "10rem", height: "10rem" }}
              className="form-logo"
              alt="logo"
            />
            <div className="formw">
              <h1 className="form-title">
                I’m thrilled to hear about your project! Let’s dive in and get
                started
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
                <label className="input-label" htmlFor="input-project-category">Project category</label>
                <select className="input-field" id="input-project-category" name="project-category" defaultValue="" autoComplete="off">
                  <option value="" disabled>
                    Select an option...
                  </option>
                  <option value="responsive_design">Responsive design</option>
                  <option value="web_design">Web Design</option>
                  <option value="app_design">App Design</option>
                </select>
              </div>
              <div className="flexs">
                <label className="input-label" htmlFor="input-project-budget">Project budget</label>
                <select className="input-field" id="input-project-budget" name="project-budget" defaultValue="" autoComplete="off">
                  <option value="" disabled>
                    Select an option...
                  </option>
                  <option value="2000_5000">$2,000 - $5,000</option>
                  <option value="5000_10000">$5,000 - $10,000</option>
                  <option value="10000_plus">$10,000 +</option>
                </select>
              </div>
            </div>
            <label className="input-label" htmlFor="input-details">Details</label>
            <textarea
              className="textarea-field"
              id="input-details"
              name="details"
              placeholder="Send Details..."
              autoComplete="off"
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

export default projectdiscuss;
