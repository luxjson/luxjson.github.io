import { Link, NavLink } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinktree } from '@fortawesome/free-brands-svg-icons';

import logoSide from "../assets/images/icon-pink.png"; 

export default function Sidebar() {
  useExternalStyle('sidebar.css');

  return (
    <>
      <header className="sidebar"> {/* Troquei aside por header para semântica */}
        <div className="sidebar-top">
          <div className="logo-container">
            <Link to="/">
              <img src={logoSide} alt="S" className="sideBarLogo" />
            </Link>
          </div>
          
          <div className="divider"></div>

          <nav className="nav-items">
            <NavLink to="/" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                <div className="icon-box"><i className="fas fa-home"></i></div>
                <span className="link-text">Início</span>
                <div className="active-indicator"></div>
            </NavLink>

            <NavLink to="/games" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                <div className="icon-box"><i className="fas fa-gamepad"></i></div>
                <span className="link-text">Games</span>
                <div className="active-indicator"></div>
            </NavLink>

            <NavLink to="/news" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                <div className="icon-box"><i className="fas fa-newspaper"></i></div>
                <span className="link-text">News</span>
                <div className="active-indicator"></div>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                <div className="icon-box"><i className="fas fa-info-circle"></i></div>
                <span className="link-text">About</span>
                <div className="active-indicator"></div>
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
                <div className="icon-box"><i className="fas fa-envelope"></i></div>
                <span className="link-text">Contact</span>
                <div className="active-indicator"></div>
            </NavLink>
          </nav>
        </div>

        <div className="sidebar-bottom">
           <a href="https://linktr.ee/somiari" target="_blank" className="side-link social-mini" rel="noreferrer">
              <div className="icon-box"><FontAwesomeIcon icon={faLinktree} /></div>
           </a>
        </div>
      </header>
    </>
  );
}