import { Route, Router, Switch } from "react-router";
import "./App.css";
import React, { component } from "react";
import Admin__loginForm from "./components/Admin__loginform";
import Admin__loginform from "./components/Admin__loginform";
import Admin__login from "./components/Admin__loginform";
import Email__verify from "./components/Email__verify";
import Otp__verify from "./components/Otp__verify";
import Password__form from "./components/Password__form";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
  <Route>
    <div className="App">
    <Switch>
      <Route path='/admin-login' component = {Admin__loginform}></Route> 
    </Switch>
    </div>

    </Route>
  );
}

export default App;
