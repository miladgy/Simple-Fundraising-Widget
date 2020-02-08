import React from "react";
import "./Tooltip.css";

const Tooltip = ({ progressPercentage }) => {
  return (
    <div className="tooltip">
      <strong>{progressPercentage}%</strong> of the goal funded.
    </div>
  );
};

export default Tooltip;
