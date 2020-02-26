import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "../utilities/Modal.js"
import Logo from "../images/logo.png";
import "../scripts/burger.js";

export default function Menu() {
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item">
              <img src={Logo} alt="Logo" />
            </NavLink>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbar-menu" className="navbar-menu">
            <div className="navbar-end">
              <NavLink to="/" exact className="navbar-item">
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-item">
                About
              </NavLink>
              <NavLink to="/contact" className="navbar-item">
                Contact
              </NavLink>
            </div>
          </div>
          <Modal/>
        </div>
      </header>
    </div>
  );
}
