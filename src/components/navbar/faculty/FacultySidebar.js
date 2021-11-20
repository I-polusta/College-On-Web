import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/logosb.png";
import "../admin/Admin__Sidebar.css";
import { FacultySidebarData } from "./FacultySidebarData";
function FacultySidebar() {
  return (
    <>
      <div className="side__main__container">
        <div className="logo__container">
          <Link to="/">
            <img className="navbar__logo" src={avatar} alt="icon" />
          </Link>
        </div>
        <ul>
          {FacultySidebarData.map((item, index) => {
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

export default FacultySidebar;
