import React from "react";
import "./messform.css";
import "./responsive.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";

const Messform = () => {
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
        <div className="form-container" style={{ backgroundColor: '#00ffff17' }}>
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
                <label className="input-label" htmlFor="name-input">Name</label>
                <input
                  className="input-field"
                  id="name-input"
                  name="name"
                  placeholder="Enter Your Name..."
                  autoComplete="name"
                />
              </div>{" "}
              <div className="flexs">
                <label className="input-label" htmlFor="inputf">Email</label>
                <input
                  className="input-field"
                  id="inputf"
                  name="email"
                  placeholder="Enter Your Email..."
                  autoComplete="email"
                />
              </div>
            </div>
            <label className="input-label" htmlFor="message-input">Message</label>
            <textarea
              className="textarea-field"
              id="message-input"
              name="message"
              placeholder="Send Message..."
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

export default Messform;
