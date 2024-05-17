import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav>
      <Link to="/" className="name">
        <span className="name-part"> &lt; </span>
        NeuralArt
        <span className="name-part"> /&gt; </span>
      </Link>
      <div className="links-desktop">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="nav-link">
              Quiz
            </Link>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleMobileMenu}
        className="links-mobile"
        id="menuButton"
      >
        <span className="material-icons" id="menu-icon">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>
      <div
        className={`mobile-menu-list ${isMobileMenuOpen ? "open" : ""}`}
        id="mobileMenu"
      >
        <ul id="mobile-link-list">
          <li>
            <Link onClick={closeMobileMenu} to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMobileMenu} to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link onClick={closeMobileMenu} to="/quiz" className="nav-link">
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
