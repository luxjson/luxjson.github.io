import { Link, NavLink } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinktree } from '@fortawesome/free-brands-svg-icons';

import logoSide from "../assets/images/icon-pink.png"; 

export default function Sidebar() {
  useExternalStyle('sidebar.css');

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo-container">
            <Link to="/">
              <img src={logoSide} alt="S" className="sideBarLogo" />
            </Link>
          </div>
          
          <div className="divider"></div>

          {/* 1. HOME */}
          <NavLink to="/" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-home"></i></div>
            <span className="link-text">Início</span>
            <div className="active-indicator"></div>
          </NavLink>

          {/* 2. GAMES (Prioridade total para o produto) */}
          <NavLink to="/games" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-gamepad"></i></div>
            <span className="link-text">Games</span>
            <div className="active-indicator"></div>
          </NavLink>

          {/* 3. NEWS / DEVLOG (Mostra que o estúdio é ativo) */}
          <NavLink to="/news" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-newspaper"></i></div>
            <span className="link-text">News</span>
            <div className="active-indicator"></div>
          </NavLink>

          {/* 4. ABOUT */}
          <NavLink to="/about" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-info-circle"></i></div>
            <span className="link-text">About</span>
            <div className="active-indicator"></div>
          </NavLink>

          {/* 5. CONTACT */}
          <NavLink to="/contact" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-envelope"></i></div>
            <span className="link-text">Contact</span>
            <div className="active-indicator"></div>
          </NavLink>
        </div>

        <div className="sidebara">
           <a href="https://linktr.ee/somiari" target="_blank" className="side-link social-mini">
              <div className="icon-box"><FontAwesomeIcon icon={faLinktree} /></div>
           </a>
        </div>
      </aside>
    </>
  );
}