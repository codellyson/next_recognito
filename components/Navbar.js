import Link from "next/link";
import React from "react";
import * as halfmoon from "halfmoon";
function Navbar() {
  React.useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  const toggleDarkMode = () => {
    halfmoon.toggleDarkMode();
  };
  return (
    <nav className="navbar">
      {/* <!-- Navbar content (with toggle sidebar button) --> */}
      <div className="navbar-content">
        <button className="btn btn-action" id="toggle-sidebar" type="button">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <span className="sr-only">Toggle sidebar</span>
          {/* <!-- sr-only = show only on screen readers --> */}
        </button>
      </div>
      <div className="container">
        {/* <!-- Navbar brand --> */}
        <Link href="/">
          <a className="navbar-brand">RECOGNITO</a>
        </Link>
        {/* <!-- Navbar text --> */}
        <span className="navbar-text text-monospace">v 0.1</span>
        {/* <!-- text-monospace = font-family shifted to monospace --> */}
        {/* <!-- Navbar nav --> */}
        <ul className="navbar-nav d-none d-md-flex ml-auto">
          <li className="nav-item active">
            <a href="/about" className="nav-link">
              About This!
            </a>
          </li>
          <li className="nav-item">
            <Link href="https://github.com/Dellysn/recognito.git">
              <a className="nav-link" target="_blank">
                GitHub
              </a>
            </Link>
          </li>
        </ul>
        <div className="navbar-content d-md-none ml-auto">
          {/* <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto --> */}
          <div className="dropdown with-arrow">
            <button
              className="btn"
              data-toggle="dropdown"
              type="button"
              id="navbar-dropdown-toggle-btn-1"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right w-200"
              aria-labelledby="navbar-dropdown-toggle-btn-1"
            >
              <a href="/about" className="dropdown-item">
                About This!
              </a>

              <div className="dropdown-divider"></div>
              <Link href="https://github.com/Dellysn/recognito.git">
                <a className="nav-link" target="_blank">
                  GitHub
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
