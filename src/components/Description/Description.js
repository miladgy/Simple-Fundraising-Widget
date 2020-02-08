import React from "react";
import "./Description.css";

const Description = ({ value }) => {
  return (
    <div className="description">
      <p>
        Only 3 days left to fund this project, <strong>${value}</strong> has
        been raised towards the goal to raise <strong>$1000</strong>.
      </p>
      <p>
        Pledge money by entering the sum in the field below and press pledge, we
        already know your credit card details.
      </p>
    </div>
  );
};

export default Description;
