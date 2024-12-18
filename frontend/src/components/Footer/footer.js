import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import "./footer.css";
import "./responsive.css";
import logo from "../../assests/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="/">
        <img src={logo} alt="logo" className="logo-imagee" />
      </a>
      <p className="footer-text">
        Growing, gaining wisdom, and striving for progress with each new day
      </p>
      <div className="footer-social">
        <a
          href="https://www.instagram.com/onestcoder?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          aria-label="Instagram"
          className="social-link"
        >
          <i className="fab fa-instagram">
            <InstagramIcon />
          </i>
        </a>
        <a
          href="https://x.com/DilmohanKumar01"
          aria-label="Twitter"
          className="social-link"
        >
          <i className="fab fa-twitter">
            <TwitterIcon />
          </i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61557068194927"
          aria-label="Facebook"
          className="social-link"
        >
          <i className="fab fa-facebook">
            <FacebookIcon />
          </i>
        </a>

        <a
          href="https://www.linkedin.com/in/dilmohan-kumar-b230b921b/"
          aria-label="LinkedIn"
          className="social-link"
        >
          <i className="fab fa-linkedin">
            <LinkedInIcon />
          </i>
        </a>
        <a
          href="https://github.com/dilmohankumar"
          aria-label="Github"
          className="social-link"
        >
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
