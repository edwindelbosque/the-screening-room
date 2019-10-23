import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <header className="Nav">
      <ul className="Nav__ul">
        <Link to="/">
          <li className="Nav__li">Home</li>
        </Link>
        <Link to="/favorites">
          <li className="Nav__li">Favorites</li>
        </Link>
        <Link to="/login">
          <li className="Nav__li">Login</li>
        </Link>
      </ul>
    </header>
  );
};

export default Nav;
