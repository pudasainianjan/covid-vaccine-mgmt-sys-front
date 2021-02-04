import React from "react";
import Link from './Link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <div className="navbar-brand" href="/">
          Vaccine Management System Nepal
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <Link href="/" className="item">
            <li className="nav-item">
              <div className="nav-link" exact to="/">
                Home
              </div>
            </li>
            </Link>

            <Link href="/profile" className="item">
            <li className="nav-item">
              <div className="nav-link" exact to="/profile">
                Profile
              </div>
            </li>
            </Link>

            <Link href="/contact" className="item">
            <li className="nav-item">
              <div className="nav-link" exact to="/contact">
              
                  Contact
              </div>
            </li>
            </Link>
          </ul>
        </div>

        <Link href="/adduser" className="item">
        <div className="btn right btn-outline-light" to="/users/add">Add User</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
