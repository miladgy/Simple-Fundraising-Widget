import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = donation => {
  const maxDonation = 1000;
  const step = ((donation.donation.amount / maxDonation) * 100).toFixed(1);
  console.log("in progressbar", step);

  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    setProgressPercentage(+progressPercentage + step);
  }, []);

  return (
    <>
      <div
        className="track"
        //   onClick={step => setProgressPercentage(step)}
      >
        <div
          style={
            step < 100
              ? { width: progressPercentage + "%" }
              : { width: "100%", backgroundColor: "#1CBC2C" }
          }
          className="trail"
        />
      </div>
      <p className="goalFunded">
        <strong>{+progressPercentage}%</strong> of the goal funded.
        <br />
        <p className={step < 100 ? "progressPercentage" : "hideText"}>
          Only 3 days left to fund this project,{" "}
          <strong>${donation.donation.amount}</strong> has been raised towards
          the goal to raise <strong>$1000</strong>.
        </p>
      </p>
    </>
  );
};
export default ProgressBar;
