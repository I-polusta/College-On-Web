import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Routes from "../../../Routes";
import { BrowserRouter, Route } from "react-router-dom";

const Admin__layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <Sidebar {...props} />
            <div className="layout__container">
              <div className="layout__container-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Admin__layout;
