import React from "react";
import { Home } from "react-feather";
import './Header.css'

function Header() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> {<Home className="home" />} Estatery</a>
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
                
                <a className="nav-link active rent" aria-current="page" href="/">
                  Rent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sell
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage Property
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href = "/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href = "/">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href = "/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href = "/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href = "/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href = "/">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href = "/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-primary">SignUp</button>
          </div>
        </div>
      </nav>
      {/* <SearchTitle/> */}
    </>
  );
}

export default Header;
