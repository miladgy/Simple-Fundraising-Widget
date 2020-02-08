import React from "react";
import "./Notification.css";

const Appreciation = ({ handleShow, sethandleShow }) => {
  const toggle = () => {
    sethandleShow(!handleShow);
  };
  return (
    <div className="notification-success notification ">
      Thank you for your pledge!
      <button type="button" onClick={toggle}>
        Close
      </button>
    </div>
  );
};

export default Appreciation;
