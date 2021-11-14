import React from "react";
import "../../../scss/style.scss";
import Dashboard from "../../Dashboard/Dashboard";
import Sidebar from "../../Dashboard/Sidebar";
function AdminDB() {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default AdminDB;
