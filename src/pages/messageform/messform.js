import React from "react";
import "./messform.css";
import "./responsive.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";

const Messform = () => {
  return (
    <>
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
      <div className="form-container">
        <div className="logo-section">
          <img
            src={Developer}
            style={{ width: "10rem", height: "10rem" }}
            className="form-logo"
            alt="logo"
          />
          <div className="formw">
            <h1 className="form-title">
              I appreciate you reaching out. How may I assist you today?
            </h1>
          </div>
        </div>
        <div className="input-section">
          <div className="input-col">
            <div className="flexs">
              <label className="input-label">Name</label>
              <input className="input-field" placeholder="Enter Your Name..." />
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
          <label className="input-label">Message</label>
          <textarea
            className="textarea-field"
            placeholder="Send Message..."
          ></textarea>
        </div>
        <div className="button-section">
          <button className="send-button">Send</button>
        </div>
      </div>
      </div>
      {/*  ----form-end----- */}
    </>
  );
};

export default Messform;
