import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/create" className="nav-link">
          New Post
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Sign Out
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link initial">
          HL
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
