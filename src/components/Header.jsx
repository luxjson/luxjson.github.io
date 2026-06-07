import { NavLink } from "react-router-dom";
import "../assets/styles/header.css";

export default function Header() {
  const checkActive = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");

  return (
    <header className="main-header">
      <div className="header-pill">
        <nav className="header-nav">
          <NavLink to="/" className={checkActive}>
            HOME
          </NavLink>
          <NavLink to="/games" className={checkActive}>
            GAMES
          </NavLink>
          <NavLink to="/about" className={checkActive}>
            ABOUT US
          </NavLink>
          <NavLink to="/contact" className={checkActive}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}