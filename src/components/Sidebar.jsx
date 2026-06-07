import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

import logoSide from "../assets/images/icon-pink.png"; 
import logoModal from "../assets/images/logo-deitado-pink.png"; 

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

          <NavLink to="/" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-home"></i></div>
            <span className="link-text">Início</span>
            <div className="active-indicator"></div>
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-info-circle"></i></div>
            <span className="link-text">About</span>
            <div className="active-indicator"></div>
          </NavLink>

          <NavLink to="/games" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>
            <div className="icon-box"><i className="fas fa-gamepad"></i></div>
            <span className="link-text">Games</span>
            <div className="active-indicator"></div>
          </NavLink>


        </div>
      </aside>
    </>
  );
}