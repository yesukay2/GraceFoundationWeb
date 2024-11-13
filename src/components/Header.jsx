import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link or close button is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div
        className="logo"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img src="src/assets/logo.JPG" alt="Logo" />
        <div style={{ fontSize: "1rem" }}>Grace Medical Foundation</div>
      </div>

      {/* Navbar */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        {/* Close button for mobile nav */}
        {isOpen && (
          <button className="close-button" onClick={closeMenu}>
            <span style={{ fontSize: "2rem" }}>&times;</span>
          </button>
        )}
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
