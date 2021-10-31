import { Route, Router, Switch } from "react-router";
import "./App.css";
import React, { component } from "react";
import Admin__loginform from "./components/Admin/Admin__loginform";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Route>
      <div className="App">
        <Switch>
          <Route path="/admin-login" component={Admin__loginform}></Route>
        </Switch>
      </div>
    </Route>
  );
}

export default App;
