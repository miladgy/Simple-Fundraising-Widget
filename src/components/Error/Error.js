import React from "react";
import "./Error.css";

const Error = ({ errors, handleShow }) => {
  return (
    <div className={!handleShow ? "error-container" : "hideInput"}>
      {errors.message}
    </div>
  );
};

export default Error;
