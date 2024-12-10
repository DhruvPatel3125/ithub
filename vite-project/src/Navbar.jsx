import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Surat IT Hub</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            {/* About SIH Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About SIH
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><a className="dropdown-item" href="#">Mission & Objectives</a></li>
                <li><a className="dropdown-item" href="#">Management Team</a></li>
                <li><a className="dropdown-item" href="#">Advisor Team</a></li>
                <li><a className="dropdown-item" href="#">Code of Ethics</a></li>
                <li><a className="dropdown-item" href="#">Affiliate Organization</a></li>
                <li><a className="dropdown-item" href="#">FAQs</a></li>
              </ul>
            </li>

            {/* Membership Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="membershipDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Membership
              </a>
              <ul className="dropdown-menu" aria-labelledby="membershipDropdown">
                <li><a className="dropdown-item" href="#">Why You Join</a></li>
                <li><a className="dropdown-item" href="#">Become a Member</a></li>
                <li><a className="dropdown-item" href="#">Track Status</a></li>
                <li><a className="dropdown-item" href="#">Company List</a></li>
                <li><a className="dropdown-item" href="#">Member Offers</a></li>
                <li><a className="dropdown-item" href="#">Post Your Need</a></li>
              </ul>
            </li>

            {/* Focus Ecosystem Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="ecosystemDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Focus Ecosystem
              </a>
              <ul className="dropdown-menu" aria-labelledby="ecosystemDropdown">
                <li><a className="dropdown-item" href="#">Companies</a></li>
                <li><a className="dropdown-item" href="#">Working Professionals</a></li>
                <li><a className="dropdown-item" href="#">Students</a></li>
                <li><a className="dropdown-item" href="#">Colleges</a></li>
                <li><a className="dropdown-item" href="#">Mentors</a></li>
                <li><a className="dropdown-item" href="#">Vendors & Sellers</a></li>
              </ul>
            </li>

            {/* Knowledge Center Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="knowledgeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Knowledge Center
              </a>
              <ul className="dropdown-menu" aria-labelledby="knowledgeDropdown">
                <li><a className="dropdown-item" href="#">News & Updates</a></li>
                <li><a className="dropdown-item" href="#">Next Gen Tools</a></li>
                <li><a className="dropdown-item" href="#">Download Documents</a></li>
                <li><a className="dropdown-item" href="#">Startup Stories</a></li>
                <li><a className="dropdown-item" href="#">Entrepreneur Stories</a></li>
                <li><a className="dropdown-item" href="#">Submit Your Story</a></li>
              </ul>
            </li>

            {/* Job Board Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="jobBoardDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Job Board
              </a>
              <ul className="dropdown-menu" aria-labelledby="jobBoardDropdown">
                <li><a className="dropdown-item" href="#">Find Job Vacancy</a></li>
                <li><a className="dropdown-item" href="#">Post Job Vacancy</a></li>
                <li><a className="dropdown-item" href="#">Interview Preparation</a></li>
              </ul>
            </li>
          </ul>

          {/* Login and Signup Buttons */}
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2" type="button">Login</button>
            <button className="btn btn-primary" type="button">Signup</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
