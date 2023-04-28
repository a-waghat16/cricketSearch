import React from "react";
import logo from "../../assets/images/cricket-search.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <ul className="navlinks">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="/playerpage">Explore</NavLink>
          </li>
          <li>
            <NavLink className="button" to="/">
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
