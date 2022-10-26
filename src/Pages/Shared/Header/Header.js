import React, { useContext, useState } from "react";
import { FaBars, FaLaptop, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const [dark, setDark] = useState(false);
  let [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  if (open === true) {
    <FaBars />;
  } else {
    <FaTimes />;
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav className="nav">
      <div className="mainNav">
        <div className="logo">
          <Link to="/">
            <FaLaptop /> eSchool
          </Link>
        </div>
        <div className="navBar">
          <ul className={`${open ? "top" : "top-2"}`}>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className="btn-logout">
                      Log out
                    </button>
                  </>
                ) : (
                  <div className="loginRegister">
                    <Link to="/login">Login</Link>
                    <Link className="btn-register" to="/register">
                      Register
                    </Link>
                  </div>
                )}
              </>
            </li>
            <li className="dark">
          {dark ? (
            <FaSun onClick={() => setDark(!dark)} />
          ) : (
            <FaMoon onClick={() => setDark(!dark)} />
          )}
        </li>
          </ul>
        </div>
        
        <div className="mobileMenu">
          {open ? (
            <FaTimes onClick={() => setOpen(!open)} />
          ) : (
            <FaBars onClick={() => setOpen(!open)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
