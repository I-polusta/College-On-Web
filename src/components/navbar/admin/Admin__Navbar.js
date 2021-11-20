import React, { useState } from "react";
import "./Admin__Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import admin__profile from "../../../assets/logosb.png";
import { AdminSidebarData } from "./Admin__SidebarData";
function Admin__Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <div className="logo__container">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className="nav__left">
          <div>
            <img className="navbar__avatar" src={admin__profile} alt="icon" />
          </div>
          <div>
            <h3>Name</h3>
          </div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {AdminSidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Admin__Navbar;
