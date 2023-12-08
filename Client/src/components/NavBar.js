import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <li className="link">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="link">
        <NavLink to={"/trainers"}>Trainer</NavLink>
      </li>
    </div>
  );
};

export default NavBar;
