import { Route, Router, Switch } from "react-router";
import "./App.css";
import React, { component } from "react";
import Admin__loginform from "./components/Admin/Admin__loginform";
import { BrowserRouter } from "react-router-dom";
import UserSelection from "./components/user-selection/UserSelection";

function App() {
  return (
    <Route>
      <div className="App">
        <Switch>
          <Route path="/admin-login" component={Admin__loginform}></Route>
          <Route path="/" component={UserSelection}></Route>
        </Switch>
      </div>
    </Route>
  );
}

export default App;
