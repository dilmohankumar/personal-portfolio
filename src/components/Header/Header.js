import React, { useState } from "react";
import "./Header.css";
import "./responsive.css";
import Logo from "./../../assests/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [showMenu, setshowMenu] = useState(true);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
  const hideMenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <img
            src={Logo}
            style={{ width: "5rem", height: "5rem" }}
            alt="logo"
          ></img>
        </div>
        {/* ---menu-icon-start--- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
        {/* ---menu-icon-end--- */}
        <div className={showMenu ? "show-nav-wrapper" : "nav-wrapper"}>
          <ul
            className="header-list"
            id={!showMenu ? "mobile-header-list" : "hide-mobile-header-list"}
          >
            <li onClick={hideMenu}>Learning Partnership</li>
            <li className="sendMessage" onClick={hideMenu}>
              Send Message
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
