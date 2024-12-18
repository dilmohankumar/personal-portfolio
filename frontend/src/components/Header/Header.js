import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "./responsive.css";
import Logo from "./../../assests/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        setshowMenu(true);
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
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    setUserRole(null);
    navigate("/login");
  };

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

            {userRole === "admin" && (
              <li className="dashboard" onClick={() => navigate("/Dashboard")}>
                Dashboard
              </li>
            )}
            {isLoggedIn ? (
              <li className="logoutt" onClick={handleLogout}>
                Logout
              </li>
            ) : (
              <li className="loginn" onClick={() => navigate("/login")}>
                Login
              </li>
            )}

            <div className="linee"></div>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
