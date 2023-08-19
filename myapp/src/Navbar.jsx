import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white brand">The Devs</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="courses"
                  className="nav-link active"
                  aria-current="page"
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About us
                </Link>
              </li>
            </ul>
            <div className="d-flex join-btn" role="search">
              <button className="btn btn-outline-success" type="submit">
                Join us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
