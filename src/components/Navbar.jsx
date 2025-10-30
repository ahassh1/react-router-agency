import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-screen-2xl container mx-auto bg-white px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <details>
                  <summary>Categories</summary>
                  <ul className="p-2">
                    <li>
                      <Link>Web Desing</Link>
                    </li>
                    <li>
                      <Link>App Development</Link>
                    </li>
                    <li>
                      <Link>UI & UX design</Link>
                    </li>
                    <li>
                      <Link>Degital Marketing</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-bold flex justify-center gap-1.5"
          >
            <img src="/logo.png" alt="" />
            <span className="text-sky-500 hidden sm:block">DevZones</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/">Web Desing</Link>
                  </li>
                  <li>
                    <Link to="/">App Development</Link>
                  </li>
                  <li>
                    <Link to="/">UI & UX design</Link>
                  </li>
                  <li to="/">
                    <Link>Degital Marketing</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link className="btn btn-outline btn-primary hidden sm:flex">
            Log In
          </Link>
          <Link className="btn btn-primary bg-sky-600 text-white">
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
