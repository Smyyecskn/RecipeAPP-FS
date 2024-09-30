import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav m-5">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink target="_blank" to="https://github.com/Smyyecskn">
        GİTHUB
      </NavLink>
      <NavLink to="/login">LOGİN</NavLink>
    </div>
  );
};

export default Navbar;
