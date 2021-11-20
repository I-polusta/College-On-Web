import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

import React from "react";
import service_name from "../API/AuthService";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (service_name.isAuthenticated()) {
          return <Component {...props} />;
        }
        if (!service_name.isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
