


import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = (props) => {
  // if (!localStorage.getItem("token") || !localStorage.getItem("data")) {
  if (!localStorage.getItem("data")) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
