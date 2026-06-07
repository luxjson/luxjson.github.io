import { NavLink } from "react-router-dom";
import "../assets/styles/header.css";

export default function Header() {
  const checkActive = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");
  
  return (
    <header className="main-header">
      <div className="header-pill">
        <nav className="header-nav">
          <NavLink to="/" className={checkActive}>
            <i className="fas fa-home"></i>
            <span>HOME</span>
          </NavLink>
          
          <NavLink to="/games" className={checkActive}>
            <i className="fas fa-gamepad"></i>
            <span>GAMES</span>
          </NavLink>
          
          <NavLink to="/about" className={checkActive}>
            <i class="fa-solid fa-circle-info"></i>
            <span>ABOUT US</span>
          </NavLink>
          
          <NavLink to="/contact" className={checkActive}>
            <i className="fas fa-envelope"></i>
            <span>CONTACT</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}