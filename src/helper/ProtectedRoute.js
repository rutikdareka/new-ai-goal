import React from "react";
import { Navigate } from "react-router-dom";
import { checkauth } from "../utility/authSession";
function Protected({ children }) {
  console.log(children);
  if (checkauth()) {
    return <Navigate to="/access" />;
  }
  return children;
}
export default Protected;
