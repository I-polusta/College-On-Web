import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { AdminSidebarData } from "./Admin__SidebarData";
import "./Admin__Navbar.css";
import { IconContext } from "react-icons";
import avatar from "../../../assets/logosb.png";
import "./Admin__Sidebar.css";
function Admin__Sidebar() {
  return (
    <>
      <div className="side__main__container">
        <div className="logo__container">
          <Link to="/">
            <img className="navbar__logo" src={avatar} alt="icon" />
          </Link>
        </div>
        <ul>
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
      </div>
    </>
  );
}

export default Admin__Sidebar;
