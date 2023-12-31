import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navBarItems = (
    <React.Fragment className="flex">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/appointment">Appointment</Link>
      </li>

      <li>
        <Link to="/reviews">Reviews</Link>
      </li>

      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarItems}
          </ul>
        </div>
        <a className="text-primary font-bold text normal-case text-xl">
          Doctors Portal
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
