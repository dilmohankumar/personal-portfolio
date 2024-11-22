import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import "./footer.css";
import "./responsive.css";
import logo from "../../assests/logo.png"; // Update the path to your logo image

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="logo" className="logo-imagee" />
      <p className="footer-text">
        Growing, gaining wisdom, and striving for progress with each new day
      </p>
      <div className="footer-social">
        <a href="/" aria-label="Facebook" className="social-link">
          <i className="fab fa-facebook">
            <FacebookIcon />
          </i>
        </a>
        <a href="/" aria-label="Twitter" className="social-link">
          <i className="fab fa-twitter">
            <TwitterIcon />
          </i>
        </a>
        <a href="/" aria-label="Instagram" className="social-link">
          <i className="fab fa-instagram">
            <InstagramIcon />
          </i>
        </a>
        <a href="/" aria-label="LinkedIn" className="social-link">
          <i className="fab fa-linkedin">
            <LinkedInIcon />
          </i>
        </a>
        <a href="/" aria-label="Github" className="social-link">
          <i className="fab fa-Github">
            <GitHubIcon />
          </i>
        </a>
      </div>
      <p className="footer-copyright">
        &copy; 2024 OnestCoder. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
