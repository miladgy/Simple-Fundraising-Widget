import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="progressBar_container">
      <div
        className="progressBar_bar"
        style={
          +progressPercentage < 100
            ? { width: progressPercentage + "%", backgroundColor: "#ef5f3c" }
            : { width: "100%", backgroundColor: "#1CBC2C" }
        }
      />
    </div>
  );
};
export default ProgressBar;
