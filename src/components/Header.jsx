import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {appStates: { islogin }} = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          RBAC-Dashboard
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
           
           
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
           
            {islogin && (
              <li className="nav-item">
                <Link className="nav-link" to="/manage-users">
                  Manage Users
                </Link>
              </li>
            )}
            
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li> */}
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
