import React from "react";
import { NavLink } from "react-router-dom";
import "../scripts/burger.js"
import "../styles/modal.scss"

export default function Modal() {
  return (
    <div className="modal" onClick={(()=>{
      let m = document.querySelector(".modal")
      if (m != null && m.classList.contains("is-active")) {
        document.querySelector(".modal").classList.toggle("is-active")
        document.querySelector(".navbar-burger").classList.toggle("is-active")
      }
    })()}>
      <div className="modal-background"></div>
      <div className="modal-content">
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
    </div>
  );
}
