import React, { useEffect } from "react";
import { useHistory } from "react-router";

function Logout() {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("user2");
    localStorage.removeItem("isAuthenticatedLogin");
    history.push("/");
  }, []);
  return <div></div>;
}

export default Logout;
