import Link from "next/link";
import React from "react";
import * as halfmoon from "halfmoon";
function Navbar({ handleSidebar }) {
  React.useEffect(() => {
    halfmoon.onDOMContentLoaded();

    halfmoon.darkModeOn;
  }, []);

  return (
    <nav className="navbar">
      {/* <!-- Navbar content (with toggle sidebar button) --> */}
      <div className="navbar-content">
        <button
          className="btn btn-action"
          id="toggle-sidebar"
          type="button"
          onClick={() => halfmoon.toggleSidebar()}
        >
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

        <ul className="navbar-nav  d-md-flex ml-auto">
          <li className="nav-item active">
            <a href="/about" className="nav-link">
              About This!
            </a>
          </li>

          <button
            className="btn btn-action"
            id="toggle-darkmode"
            type="button"
            onClick={() => halfmoon.toggleDarkMode()}
          >
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
