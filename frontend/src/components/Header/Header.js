import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "./responsive.css";
import Logo from "./../../assests/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setshowMenu] = useState(true);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  };
  const menuRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && !showMenu) {
        setshowMenu(true); // Close the menu when resizing to a large screen
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setshowMenu(true);
        document.body.style.overflow = "auto"; // Enable scrolling
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img
              src={Logo}
              style={{ width: "5rem", height: "5rem" }}
              alt="logo"
            />
          </Link>
        </div>
        {/* ---menu-icon-start--- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
        {/* ---menu-icon-end--- */}
        <div
          ref={menuRef}
          className={showMenu ? "show-nav-wrapper" : "nav-wrapper"}
        >
          <ul className="header-list">
            <li className="learningp" onClick={() => navigate("/partnership")}>
              Learning Partnership
            </li>
            <li className="sendMessage" onClick={() => navigate("/MessForm")}>
              Send Message
            </li>
            <div className="linee"></div>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
