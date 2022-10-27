import React, { useContext, useState } from "react";
import {
  FaBars,
  FaLaptop,
  FaMoon,
  FaSun,
  FaTimes,
  FaUser
} from "react-icons/fa";
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
            <>
              <>
                {user?.uid ? (
                  <>
                    <button onClick={handleLogOut} className="btn-logout">
                      Log out
                    </button>
                  </>
                ) : (
                  <div className="loginRegister">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link className="btn-register" to="/register">
                        Register
                      </Link>
                    </li>
                  </div>
                )}
              </>
            </>
            <div className="user-info">
              {user?.uid || user?.photoURL ? (
                <>
                <span className="user-name">{user?.displayName}</span>
                <img className="user-url" src={user.photoURL} alt="" />
                </>
              ) : (
                <FaUser className="user-url" />
              )}
            </div>
            <li className="dark border-none no-bg">
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
