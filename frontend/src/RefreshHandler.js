import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setIsAuth(true);
      if (["/", "/login", "/signup"].includes(location.pathname)) {
        navigate("/", { replace: true });
      }
    }
  }, [location, navigate]);

  useEffect(() => {
    setIsAuthenticated(isAuthenticated);
  }, [isAuthenticated, setIsAuthenticated]);

  return null;
}
export default RefreshHandler;
