import React from "react";
import { NavLink } from "react-router-dom";

export default function Foot() {
  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/" exact>
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/Activity">Activity</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Work">Work</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
