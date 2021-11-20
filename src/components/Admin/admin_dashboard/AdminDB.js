import React from "react";
import Admin__Navbar from "../../navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../navbar/admin/Admin__Sidebar";
import { IconContext } from "react-icons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../../../Routes/Routes";
import "./Admindash.css";
import Add__faculty from "../../../pages/admin/Add__faculty";
import Announcements from "../../../pages/admin/Announcements";
import Faculty from "../../../pages/admin/Faculty";
import Create_announcement from "../../../pages/admin/Create_announcement";
import ProtectedRoute from "../../../Routes/ProtectedRoutes";

function AdminDB() {
  return (
    <BrowserRouter>
      <div className="dash__admin">
        <IconContext.Provider value={{ color: "#fff" }}>
          <Admin__Navbar />
          <Admin__Sidebar />
        </IconContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default AdminDB;
