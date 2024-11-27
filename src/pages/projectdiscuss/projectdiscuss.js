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
                <label className="input-label">Name</label>
                <input
                  className="input-field"
                  id="inputf"
                  placeholder="Enter Your Name..."
                />
              </div>{" "}
              <div className="flexs">
                <label className="input-label">Email</label>
                <input
                  className="input-field"
                  id="inputf"
                  placeholder="Enter Your Email..."
                />
              </div>
            </div>
            <div className="input-col">
              <div className="flexs">
                <label className="input-label">Project category</label>
                <select className="input-field" id="inputff">
                  <option disabled selected>
                    Select an option...
                  </option>
                  <option>Responsive design</option>
                  <option>Web Design</option>
                  <option>App Design</option>
                </select>
              </div>
              <div className="flexs" onclick="showOptions()">
                <label className="input-label">Project budget</label>
                <select className="input-field" id="inputff">
                  {" "}
                  <option disabled selected>
                    Select an option...
                  </option>
                  <option>$2,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 +</option>
                </select>
              </div>
            </div>
            <label className="input-label">Details</label>
            <textarea
              className="textarea-field"
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

export default projectdiscuss;
