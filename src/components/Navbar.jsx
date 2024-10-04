import React from "react";
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const Navbar = () => {
  const { user, setUser } = useLoginContext();
  return (
    <div className="nav m-5 ">
      <NavLink className="navlink" to="/">
        HOME
      </NavLink>
      <NavLink className="navlink" to="/about">
        ABOUT
      </NavLink>
      <NavLink
        className="navlink"
        target="_blank"
        to="https://github.com/Smyyecskn"
      >
        GİTHUB
      </NavLink>
      {user.username && user.password ? (
        <NavLink
          className="navlink"
          to="/login"
          onClick={() => setUser({ username: "", password: "" })}
        >
          LOGOUT
        </NavLink>
      ) : (
        <NavLink className="navlink" to="/login">
          LOGIN
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
